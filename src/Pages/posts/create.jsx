import { useContext, useState } from "react"
import { appContext } from "../../context/appContext"
import { useNavigate } from "react-router-dom"

export default function Create(){
    // const {token} = useContext(appContext)
    // const [formData, setFormData] = useState({
    //     title: "",
    //     body: ""
    // })
    // const [errors, setErrors] = useState({})
    // const navigate = useNavigate()
    
    // async function handleCreate(e){
    //     e.preventDefault()    
    //     const res = await fetch('/api/posts', {
    //     method: "post",
    //     headers: {
    //         Authorization: `Bearer ${token}`
    //     },
    //     body: JSON.stringify(formData)
    // })
    //  const data = await res.json()
    //  console.log(data);
    // }

// ------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------

    // return(
    //     <>
    //         <h1>Create a new post</h1>
    //         <form onSubmit={handleCreate} className="w-1/2 mx-auto space-y-6">
    //             <div>
    //                 <input type="text" name="" id="" placeholder="Post title" value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})}/>
    //                 {errors.title && <p className="error">{errors.title[0]}</p>}
    //             </div>
    //             <div>
    //                 <textarea rows="6" 
    //                   placeholder="Post content"
    //                   value={formData.body} 
    //                   onChange={e => setFormData({...formData, body: e.target.value})}
    //                 ></textarea>
    //                 {errors.body && <p className="error">{errors.body[0]}</p>}
    //             </div>
    //             <div>
    //                 <button className="primary-btn">create</button>
    //             </div>
    //         </form>
    //     </>
    // )

// ------------------------------------------------------------------------------------------------
    // mengambil token dari context
    const {token} = useContext(appContext)

    // membuat state baru untuk mengupdate data title dan body
    const [formData, setFormData] = useState({
        title: "",
        body: ""
    })

    // membuat state baru untuk membuat kondisi jika ada kesalahan input
    // isi parameter useState dibuat kosong / initial karena tidak ada kesalahan ketika pertama kali komponen dirender
    const [errors, setErrors] = useState({})

    // membuat fitur navigate untuk mengarahkan halaman ini ke halaman lain
    const navigate = useNavigate()

    // membuat fungsi untuk membuat post baru
    async function handleCreate(e){
        // mencegah halaman memuat ulang ketika function berjalan
        e.preventDefault()

        // Menunggu respons dari server sebelum melanjutkan ke baris berikutnya
        const res = await fetch('/api/posts', {

            // Metode HTTP untuk mengirim data
            method: "post",

            headers: {
                // token yang dikirim adalah token yang berbasis bearer
                Authorization: `Bearer ${token}`
            },

            // Mengonversi objek formData menjadi string dalam format JSON
            body: JSON.stringify(formData)
        })

        // Menyimpan respons JSON ke variabel `data`
        // respon yang dimaksud berasal dari api laravelnya
        const data = await res.json()

        // Mengecek apakah respons dari server memiliki properti errors
        if (data.errors) {
            // Jika ada errors, fungsi ini memanggil setErrors untuk memperbarui state errors di komponen.
            setErrors(data.errors)
        }else{
            navigate('/')
        }

        // menampilkan data
        console.log(data);
    }

    return(
        <>
            <h1>Create a new post</h1>
            <form onSubmit={handleCreate} className="w-1/2 mx-auto space-y-6">
                <div>
                    <input type="text"
                     placeholder="Post title" 
                     /* menentukan data mana yang akan ditambah */
                     value={formData.title} 
                     // memperbarui state formData sesuai input pengguna
                     // penjelasan lebih lengkapnya ada di register.jsx
                     onChange={e => setFormData({...formData, title: e.target.value})}/>
                     {errors.title && <p className="error">{errors.title[0]}</p>}
                </div>
                <div>
                    <textarea rows="6" 
                    placeholder="Post content"
                    /* menentukan data mana yang akan ditambah */
                    value={formData.body} 
                    // memperbarui state formData sesuai input pengguna
                    // penjelasan lebih lengkapnya ada di register.jsx
                    onChange={e => setFormData({...formData, body: e.target.value})}
                    ></textarea>
                    {errors.body && <p className="error">{errors.body[0]}</p>}
                </div>
                <div>
                    <button className="primary-btn">create</button>
                </div>
            </form>
        </>
    )
}