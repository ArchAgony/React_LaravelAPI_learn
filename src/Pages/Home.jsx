// import { useContext } from "react"
// import { appContext } from "../context/appContext"

import { useState } from "react";
import { useEffect } from "react";

export default function Home() {
    // const {name} = useContext(appContext)

    // return (
    //     <>
    //         <h1 className="title">Latest Post {name}</h1>
    //     </>
    // )
// ------------------------------------------------------------------------------------------------

    // const {name} = useContext(appContext)

    // return (
    //     <>
    //         <h1 className="title">Latest Post {name}</h1>
    //     </>
    // )
    
// ------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------
        const [posts, setPosts] = useState([])

        async function getPosts(){
        const res = await fetch('api/posts')
        const data = await res.json()

        if (res.ok) {
            setPosts(data)
        }
        console.log(data);
    }

    useEffect(()=>{
        getPosts()
    }, [])

    return (
        <>
            <h1 className="title">Latest Post</h1>
            {posts.length > 0 ? posts.map(post => (
                <div key={post.id} className="mb-4 p-4 border rounded-md border-dashed border-slate-400">
                    <div className="mb-2 flex items-start justify-between">
                        <div>
                            <h2>{post.title}</h2>
                            <small>Created by {post.user.name} on {new Date(post.created_at).toLocaleTimeString()}</small>
                        </div>
                    </div>
                    {post.body}
                </div>
            )) : <p>there are no posts</p>}
        </>
    )
}