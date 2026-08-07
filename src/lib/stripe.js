import Stripe from "stripe";

function getStripeClient() {
  const stripeSecretKey = process.env.STRIPE_SECRET_KEY;

  if (!stripeSecretKey) {
    return null;
  }

  return new Stripe(stripeSecretKey, {
    apiVersion: "2025-07-30.basil",
  });
}

function getBaseUrl(request) {
  const origin = request.headers.get("origin");

  if (origin) {
    return origin;
  }

  return process.env.NEXTAUTH_URL || "http://localhost:3000";
}

async function getOrCreateCustomer({ stripe, email, name }) {
  if (!email) {
    throw new Error("Signed-in user email is required for Stripe customer mapping.");
  }

  const existing = await stripe.customers.list({ email, limit: 1 });
  if (existing.data.length > 0) {
    return existing.data[0].id;
  }

  const customer = await stripe.customers.create({
    email,
    name: name || undefined,
    metadata: {
      source: "agent-trust-vault-website",
    },
  });

  return customer.id;
}

export { getBaseUrl, getOrCreateCustomer, getStripeClient };
