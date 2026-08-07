import NextAuth from "next-auth";
import AzureADProvider from "next-auth/providers/azure-ad";
import CredentialsProvider from "next-auth/providers/credentials";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

const configuredAuthProviders = [];

if (process.env.AUTH_GITHUB_ID && process.env.AUTH_GITHUB_SECRET) {
  configuredAuthProviders.push("github");
}

if (process.env.AUTH_GOOGLE_ID && process.env.AUTH_GOOGLE_SECRET) {
  configuredAuthProviders.push("google");
}

if (
  process.env.AUTH_MICROSOFT_ENTRA_ID &&
  process.env.AUTH_MICROSOFT_ENTRA_SECRET &&
  process.env.AUTH_MICROSOFT_ENTRA_TENANT_ID
) {
  configuredAuthProviders.push("microsoft-entra-id");
}

const providers = [
  ...(configuredAuthProviders.includes("github")
    ? [
        GitHubProvider({
          clientId: process.env.AUTH_GITHUB_ID,
          clientSecret: process.env.AUTH_GITHUB_SECRET,
        }),
      ]
    : []),
  ...(configuredAuthProviders.includes("google")
    ? [
        GoogleProvider({
          clientId: process.env.AUTH_GOOGLE_ID,
          clientSecret: process.env.AUTH_GOOGLE_SECRET,
        }),
      ]
    : []),
  ...(configuredAuthProviders.includes("microsoft-entra-id")
    ? [
        AzureADProvider({
          clientId: process.env.AUTH_MICROSOFT_ENTRA_ID,
          clientSecret: process.env.AUTH_MICROSOFT_ENTRA_SECRET,
          tenantId: process.env.AUTH_MICROSOFT_ENTRA_TENANT_ID,
        }),
      ]
    : []),
  CredentialsProvider({
    id: "credentials",
    name: "Development Credentials",
    credentials: {
      email: { label: "Email", type: "email" },
      password: { label: "Password", type: "password" },
    },
    async authorize(credentials) {
      const email = credentials?.email?.trim().toLowerCase();
      const password = credentials?.password;
      const expectedEmail = process.env.DEV_AUTH_EMAIL?.trim().toLowerCase();
      const expectedPassword = process.env.DEV_AUTH_PASSWORD;

      if (!expectedEmail || !expectedPassword) {
        return null;
      }

      if (email !== expectedEmail || password !== expectedPassword) {
        return null;
      }

      return {
        id: email,
        name: "ATV Developer",
        email,
      };
    },
  }),
];

const authOptions = {
  secret: process.env.NEXTAUTH_SECRET || "development-only-secret-change-me",
  trustHost: true,
  providers,
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user?.id) {
        token.sub = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user && token?.sub) {
        session.user.id = token.sub;
      }
      return session;
    },
  },
};

const authHandler = NextAuth(authOptions);

export { authHandler, authOptions, configuredAuthProviders };
