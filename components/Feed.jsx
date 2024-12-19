import React, { useState } from 'react'
import PromptCard from "./PromptCard"

const PromptCardList = ({ data, handleTagClick }) => {
    return (
        <div className="mt-16 prompt_layout">
            {data.map}
        </div>
    )
}

const Feed = () => {

    const [searchText, setSearchText] = useState('')
    const handleSearchChange = (e) => { }

    return (
        <section className="feed">
            <form className="relative w-full flex-center">
                <input
                    type="text"
                    placeholder="Search for a tag or a username"
                    value={searchText}
                    onChange={handleSearchChange}
                    required
                    className="search_input peer"
                />
            </form>

            <PromptCardList
                data={[]}

            />
        </section>
    )
}

export default Feed