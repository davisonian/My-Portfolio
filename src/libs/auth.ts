import bcrypt from "bcrypt";
import { type NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: "/auth/signin",
  },
  secret: process.env.NEXTAUTH_SECRET || "development-secret",
  session: {
    strategy: "jwt",
  },

  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "Jhondoe" },
        password: { label: "Password", type: "password" },
        username: { label: "Username", type: "text", placeholder: "Jhon Doe" },
      },

      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Please enter an email or password");
        }

        const adminEmail = (process.env.AUTH_ADMIN_EMAIL || "admin@example.com").toLowerCase();
        const adminPassword = process.env.AUTH_ADMIN_PASSWORD || "password";

        if (credentials.email.toLowerCase() !== adminEmail) {
          throw new Error("No user found");
        }

        const passwordMatch = await bcrypt.compare(credentials.password, await bcrypt.hash(adminPassword, 10));

        if (!passwordMatch) {
          throw new Error("Incorrect password");
        }

        return {
          id: "local-user",
          email: adminEmail,
          name: "Local User",
        };
      },
    }),

    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID || "",
      clientSecret: process.env.GITHUB_CLIENT_SECRET || "",
    }),

    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
  ],
};
