import NextAuth from "next-auth/next";
import type {SessionStrategy} from "next-auth/core/types";

export const authOptions = { 
    // Configure one or more authentication providers
    providers: [

    ],
    session : {
        strategy: "database" as SessionStrategy,
        maxAge: 60 * 60 * 3,
        updateAge: 60 * 60 * 2,
    }
}

export default NextAuth(authOptions);