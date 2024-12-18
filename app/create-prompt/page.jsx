'use client'

import { Component, useState } from "react"
import { useSession } from "next-auth/react"
import { useRouters } from "@node_modules/next/navigation"

import Form from "@components/form"

const CreatePrompt = () => {
    const [submitting, setSubmitting] = useState(false)
    const [post, usePost] = useState({
        prompt: "",
        tag: ""
    })

    const createPrompt = async (e) => {
        e.preventDefault()
        setSubmitting(true)

        try {
            const response = await fetch('/api/prompt/new', {
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
            type="Create"
            post={post}
            setPost={post}
            submitting={submitting}
            handleSubmit={createPrompt}
        />
    )
}

export default CreatePrompt