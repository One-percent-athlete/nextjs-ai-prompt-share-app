'use client'

import { useEffect, useState } from "react"
import { useSession } from "next-auth/react"
import { useRouter, useSearchParams } from "@node_modules/next/navigation"

import Form from "@components/form"

const EditPrompt = () => {
    const router = useRouter()
    const { data: session } = useSession()
    const searchParams = useSearchParams()
    const promptId = searchParams.get('id')

    const [submitting, setSubmitting] = useState(false)
    const [post, usePost] = useState({
        prompt: "",
        tag: ""
    })

    useEffect(() => {
        const getPromptDetails = async () => {
            const response = await fetch(`api/prompt/${promptId}`)
            const data = await response.json()

            setPost({
                prompt: data.prompt,
                tag: data.tag
            })
        }

        if (promptId) getPromptDetails()
    }, [promptId])

    const updatePrompt = async (e) => {
        e.preventDefault()
        setSubmitting(true)

        if (!promptId) return alert('Prompt ID not found')

        try {
            const response = await fetch('/api/prompt/${promptId}', {
                method: 'POST',
                body: JSON.stringify({
                    prompt: post.prompt,
                    userId: session?.user.id,
                    tag: post.tag
                })
            })
            if (response.ok) {
                router.push('/')
            }
        } catch (error) {
            console.log(error);
        } finally {
            setSubmitting(false)
        }
    }
    return (
        <Form
            type="Edit"
            post={post}
            setPost={post}
            submitting={submitting}
            handleSubmit={updatePrompt}
        />
    )
}

export default EditPrompt