"use client"

import { useState } from 'react'
import Image from "@node_modules/next/image"
import { useSession } from "@node_modules/next-auth/react"

const PromptCard = ({ post, handleTagClick, handleEdit, handleDelete }) => {
    return (
        <div className="prompt_card">
            <div className="flex justify-between items-start gap-5">
                <div className="felx-1 flex justify-start items-start gap-3 cursor-pointer">
                    <Image src={post.creator.image}
                        alt="user_image"
                        width={40}
                        height={40}
                        className="rounded-full object-contain"
                    />
                    <div className="flex flex-col">
                        <h3 className="font-satoshi font-semibold text-gray-900">
                            {post.creator.username}
                        </h3>
                        <p className="font-inter text-sm text-gray-500">
                            {post.creator.email}
                        </p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default PromptCard