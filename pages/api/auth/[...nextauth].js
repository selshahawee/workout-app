import NextAuth from "next-auth/next";
import Providers from "next-auth/providers"


export default (req, res) => NextAuth({
    providers: [
        Providers.Gmail({
            clientId: "",
            clientSecret:"",
        })
    ],
 });