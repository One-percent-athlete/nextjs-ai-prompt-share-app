import { connectToDB } from "@utils/database"
import Prompt from "@models/prompt"

export const GET = async (request, { params }) => {
    try {
        await connectToDB()
        const prompt = await Prompt.findById(params.id).populate('creator')
        if (!prompt) return new Response('Prompt not found', { status: 400 })

        return new Response(JSON.stringify(prompt), {status: 201})
    } catch (error) {
        return new Response("Failed to fetch prompt", {status: 500})
    }
}