import NextAuth from "@node_modules/next-auth";
import GoogleProvider from 'next-auth/providers/google'

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: "82699750314-efnnucerqd49kg7ae9u6kmmjl098la9a.apps.googleusercontent.com",
            clientSecret: "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",
        })
    ],
    async session({session}) {

    },
    async signIn({profile}) {
        try {
            
        } catch (error) {
            
        }
    }
})

export {handler as GET, handler as POST}
