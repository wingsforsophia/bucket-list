import React from 'react'
import Forum from "../../../components/DiscussionForum/DiscussionPostComponents/DiscussionPostComponent"
import './DiscussionPost.css'

function DiscussionPosts() {
    return (
        <div>
            <h1 className='discussion'>Post to discussion</h1>
            <Forum/>
        </div>
    )
}

export default DiscussionPosts
