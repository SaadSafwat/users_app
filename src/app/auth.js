import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

export const { handlers:{GET,POST}, signIn, signOut, auth } = NextAuth({
    providers: [Google({
        clientId: process.env.AUTH_CLIENTID,
        clientSecret: process.env.AUTH_CLIENTSECRET,
    })],
});
