import Link from "next/link";
import "./globals.css";

const navLinks = [
  ["Product", "/product"],
  ["Platform", "/platform"],
  ["Solutions", "/solutions"],
  ["Pricing", "/pricing"],
  ["Developers", "/developers"],
  ["Docs", "/docs"],
  ["Blog", "/blog"],
  ["Customers", "/customers"],
  ["Security", "/security"],
  ["Open Source", "/open-source"],
  ["Install", "/install"],
  ["Portal", "/portal"],
  ["About", "/about"],
  ["Contact", "/contact"],
];

export const metadata = {
  title: "Agent Trust Vault",
  description: "Trust Every Agent. Expose No Secrets.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full bg-slate-50 text-slate-950">
        <div className="flex min-h-full flex-col">
          <header className="border-b border-slate-200 bg-black text-white">
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
