// import { useContext } from "react"
// import { appContext } from "../context/appContext"

import { useState } from "react";
import { useEffect } from "react";

export default function Home() {
  // const {name} = useContext(appContext)

  // ------------------------------------------------------------------------------------------------

  // return (
  //     <>
  //         <h1 className="title">Latest Post {name}</h1>
  //     </>
  // )

  // ------------------------------------------------------------------------------------------------

  //         const [posts, setPosts] = useState([])

  //         async function getPosts(){
  //         const res = await fetch('api/posts')
  //         const data = await res.json()

  //         if (res.ok) {
  //             setPosts(data)
  //         }
  //         console.log(data);
  //     }

  //     useEffect(()=>{
  //         getPosts()
  //     }, [])

  //     return (
  //         <>
  //             <h1 className="title">Latest Post</h1>
  //             {posts.length > 0 ? posts.map(post => (
  //                 <div key={post.id} className="p-4 mb-4 border border-dashed rounded-md border-slate-400">
  //                     <div className="flex items-start justify-between mb-2">
  //                         <div>
  //                             <h2>{post.title}</h2>
  //                             <small>Created by {post.user.name} on {new Date(post.created_at).toLocaleTimeString()}</small>
  //                         </div>
  //                     </div>
  //                     {post.body}
  //                 </div>
  //             )) : <p>there are no posts</p>}
  //         </>
  //     )
  // }

  // ------------------------------------------------------------------------------------------------
  // ------------------------------------------------------------------------------------------------
  
  // membuat state baru menggunakan array kosong
  // tujuannya adalah nanti posts akan menyimpan kumpulan data (array) 
  const [posts, setPosts] = useState([]);

  // membuat fungsi untuk mengambil / menampilkan post
  async function getPosts() {
    
    // meminta data pengguna dari endpoint api/posts
    const res = await fetch("api/posts");

    // membuat varibel yang berisi data pengguna yang dikembalikan oleh server
    // setelah itu, variabel tersebut mengonversi respon api menjadi objek JavaScript
    const data = await res.json();

    // membuat kondisi
    // jika variabel res (data pengguna dari endpoint api/logout) benar, maka kondisi ini akan berjalan
    if (res.ok) {
      // mengganti / menambah posts menjadi data
      setPosts(data);
    }
    
    // menampilkan data
    console.log(data);
  }

  // memanggil fungsi getPosts ketika komponen pertama kali dirender.
  useEffect(() => {

    // mengambil data (fetching) dari API dan menyimpannya ke dalam state
    getPosts();
  }, []);

  return (
    <>
      <h1 className="title">Latest Post</h1>
      {posts.length > 0 ? (
        posts.map((post) => (
          <div
            key={post.id}
            className="p-4 mb-4 border border-dashed rounded-md border-slate-400"
          >
            <div className="flex items-start justify-between mb-2">
              <div>
                <h2>{post.title}</h2>
                <small>
                  Created by {post.user.name} on{" "}
                  {new Date(post.created_at).toLocaleTimeString()}
                </small>
              </div>
            </div>
            {post.body}
          </div>
        ))
      ) : (
        <p>there are no posts</p>
      )}
    </>
  );
}
