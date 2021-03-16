import React from 'react'
import './Post.css'
const Post=(props)=>{
    return(
        <article className="post" onClick={props.click}>
            <h1>{props.title}</h1>
            <p>{props.author}</p>
        </article>
    )
}

export default Post