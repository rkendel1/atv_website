import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import "./globals.css";

const navLinks = [
  ["Home", "/#hero"],
  ["Product", "/#product"],
  ["Platform", "/#platform"],
  ["Solutions", "/#solutions"],
  ["Pricing", "/#pricing"],
  ["Developers", "/#developers"],
  ["Security", "/#security"],
  ["Docs", "/#documentation"],
  ["Install", "/#install"],
  ["Open Source", "/#open-source"],
  ["Contact", "/#contact"],
];

export const metadata = {
  title: "Agent Trust Vault",
  description: "Trust Every Agent. Expose No Secrets.",
};

export default async function RootLayout({ children }) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en" className="h-full antialiased scroll-smooth">
      <body className="min-h-full bg-slate-50 text-slate-950">
        <div className="flex min-h-full flex-col">
          <header className="border-b border-slate-200 bg-black text-white sticky top-0 z-50">
            <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-3 px-6 py-4">
              <Link href="/" className="text-lg font-semibold tracking-tight">
                ATV · Agent Trust Vault
              </Link>
              <nav className="flex flex-wrap gap-3 text-xs text-slate-200">
                {navLinks.map(([label, href]) => (
                  <Link key={href} href={href} className="hover:text-emerald-300">
                    {label}
                  </Link>
                ))}
                {session?.user && (
                  <Link href="/portal" className="hover:text-emerald-300 font-medium">
                    Portal
                  </Link>
                )}
              </nav>
            </div>
          </header>
          {children}
          <footer className="border-t border-slate-200 bg-white">
            <div className="mx-auto w-full max-w-6xl px-6 py-6 text-sm text-slate-600">
              Agent Trust Vault · Commercial AI trust infrastructure.
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
