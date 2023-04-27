import NextAuth from "next-auth/next";
import type {SessionStrategy} from "next-auth/core/types";
import Auth0Provider from "next-auth/providers/auth0"

export const authOptions = { 
    // Configure one or more authentication providers
    providers: [
        Auth0Provider({
            clientId: process.env.AUTH0_CLIENT_ID as string,
            clientSecret: process.env.AUTH0_CLIENT_SECRET  as string,
            issuer: process.env.AUTH0_ISSUER as string
        })
    ],
    session : {
        strategy: "jwt" as SessionStrategy,
        maxAge: 60 * 60 * 3,
        updateAge: 60 * 60 * 2,
    }
}

export default NextAuth(authOptions);