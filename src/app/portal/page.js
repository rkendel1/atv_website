import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions, configuredAuthProviders } from "@/lib/auth";

const providerLabels = {
  github: "GitHub",
  google: "Google",
  "microsoft-entra-id": "Microsoft",
  email: "Email",
};

export default async function PortalPage() {
  const session = await getServerSession(authOptions);

  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-6 py-16">
      <h1 className="text-4xl font-bold tracking-tight">Customer Portal</h1>
      <p className="mt-4 max-w-3xl text-slate-700">
        Runtime account access, subscription checkout, and billing portal management powered by Auth.js
        and Stripe.
      </p>

      {!session?.user ? (
        <section className="mt-10 rounded-xl border border-slate-200 bg-white p-6">
          <h2 className="text-xl font-semibold">Sign in</h2>
          <p className="mt-2 text-sm text-slate-700">
            Configure one or more auth providers, then sign in to manage subscriptions and billing.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            {configuredAuthProviders.map((providerId) => (
              <Link
                key={providerId}
                href={`/api/auth/signin/${providerId}?callbackUrl=/portal`}
                className="rounded-md border border-slate-300 px-3 py-2 text-sm hover:bg-slate-100"
              >
                Continue with {providerLabels[providerId]}
              </Link>
            ))}
            <Link
              href="/api/auth/signin?callbackUrl=/portal"
              className="rounded-md bg-black px-3 py-2 text-sm text-white hover:bg-slate-800"
            >
              Open sign-in page
            </Link>
          </div>
          <p className="mt-4 text-xs text-slate-600">
            Dev credentials provider is enabled when DEV_AUTH_EMAIL and DEV_AUTH_PASSWORD are set.
          </p>
        </section>
      ) : (
        <section className="mt-10 grid gap-6 md:grid-cols-2">
          <article className="rounded-xl border border-slate-200 bg-white p-6">
            <h2 className="text-xl font-semibold">Account</h2>
            <p className="mt-2 text-sm text-slate-700">
              Signed in as <span className="font-medium">{session.user.email}</span>
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link
                href="/api/auth/signout?callbackUrl=/portal"
                className="rounded-md border border-slate-300 px-3 py-2 text-sm hover:bg-slate-100"
              >
                Sign out
              </Link>
            </div>
          </article>

          <article className="rounded-xl border border-slate-200 bg-white p-6">
            <h2 className="text-xl font-semibold">Start Subscription</h2>
            <p className="mt-2 text-sm text-slate-700">Launch Stripe Checkout for a selected plan.</p>
            <form action="/api/stripe/checkout" method="post" className="mt-4 space-y-3">
              <label className="block text-sm">
                <span className="mb-1 block text-slate-700">Plan</span>
                <select
                  name="plan"
                  defaultValue="professional"
                  className="w-full rounded-md border border-slate-300 px-3 py-2"
                >
                  <option value="starter">Starter</option>
                  <option value="professional">Professional</option>
                  <option value="business">Business</option>
                </select>
              </label>
              <button
                type="submit"
                className="rounded-md bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700"
              >
                Continue to Checkout
              </button>
            </form>
          </article>

          <article className="rounded-xl border border-slate-200 bg-white p-6 md:col-span-2">
            <h2 className="text-xl font-semibold">Billing Management</h2>
            <p className="mt-2 text-sm text-slate-700">
              Open Stripe Billing Portal to manage payment methods, invoices, and seat-backed
              subscriptions.
            </p>
            <form action="/api/stripe/portal" method="post" className="mt-4">
              <button
                type="submit"
                className="rounded-md bg-black px-4 py-2 text-sm font-medium text-white hover:bg-slate-800"
              >
                Open Billing Portal
              </button>
            </form>
          </article>
        </section>
      )}
    </main>
  );
}
