import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { getBaseUrl, getOrCreateCustomer, getStripeClient } from "@/lib/stripe";

export async function POST(request) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) {
    return NextResponse.redirect(new URL("/api/auth/signin?callbackUrl=/portal", request.url));
  }

  const stripe = getStripeClient();
  if (!stripe) {
    return NextResponse.json({ error: "Missing STRIPE_SECRET_KEY." }, { status: 500 });
  }

  const baseUrl = getBaseUrl(request);
  const customerId = await getOrCreateCustomer({
    stripe,
    email: session.user.email,
    name: session.user.name,
  });

  const portalSession = await stripe.billingPortal.sessions.create({
    customer: customerId,
    return_url: `${baseUrl}/portal`,
  });

  return NextResponse.redirect(portalSession.url, { status: 303 });
}
