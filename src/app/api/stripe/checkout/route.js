import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { getBaseUrl, getOrCreateCustomer, getStripeClient } from "@/lib/stripe";

const planToEnvMap = {
  starter: "STRIPE_PRICE_STARTER",
  professional: "STRIPE_PRICE_PROFESSIONAL",
  business: "STRIPE_PRICE_BUSINESS",
};

export async function POST(request) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) {
    return NextResponse.redirect(new URL("/api/auth/signin?callbackUrl=/portal", request.url));
  }

  const stripe = getStripeClient();
  if (!stripe) {
    return NextResponse.json({ error: "Missing STRIPE_SECRET_KEY." }, { status: 500 });
  }

  const formData = await request.formData();
  const selectedPlan = (formData.get("plan") || "professional").toString().toLowerCase();
  const envName = planToEnvMap[selectedPlan];
  const priceId = envName ? process.env[envName] : null;

  if (!priceId) {
    return NextResponse.json(
      { error: `Plan '${selectedPlan}' is unavailable. Set ${envName || "a valid plan env var"}.` },
      { status: 400 }
    );
  }

  const baseUrl = getBaseUrl(request);
  const customerId = await getOrCreateCustomer({
    stripe,
    email: session.user.email,
    name: session.user.name,
  });

  const checkoutSession = await stripe.checkout.sessions.create({
    mode: "subscription",
    customer: customerId,
    line_items: [{ price: priceId, quantity: 1 }],
    allow_promotion_codes: true,
    success_url: `${baseUrl}/portal?checkout=success`,
    cancel_url: `${baseUrl}/portal?checkout=cancelled`,
    metadata: {
      plan: selectedPlan,
      product: "agent-trust-vault",
    },
  });

  return NextResponse.redirect(checkoutSession.url, { status: 303 });
}
