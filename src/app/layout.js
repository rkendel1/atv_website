import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import SessionProvider from "@/components/SessionProvider";
import "./globals.css";

export const metadata = {
  title: "Agent Trust Vault",
  description: "Trust Every Agent. Expose No Secrets.",
};

export default async function RootLayout({ children }) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en" className="h-full antialiased scroll-smooth">
      <body className="min-h-full">
        <SessionProvider session={session}>
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
