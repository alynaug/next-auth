import NextAuth from "next-auth";
// import Github from "next-auth/providers/github";
import { PrismaAdapter } from "@auth/prisma-adapter";
import authConfig from "@/auth.config";
import { db } from "./lib/db";

export const { handlers, signIn, signOut, auth } = NextAuth({
  //   providers: [Github],
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  ...authConfig,
});
