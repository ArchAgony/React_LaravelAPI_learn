// ini adalah context, fungsinya mengelola dan berbagi data secara global
// tanpa harus melewatkan data melalui setiap komponen secara manual

// kesimpulannya, context itu menyediakan dan membagi informasi.
import { createContext, useEffect, useState } from "react";

// export const appContext = createContext()

// export default function AppProvider({ children }) {
//     const [token, setToken] = useState(localStorage.getItem('token'))

//     const [user, setUser] = useState({})
//     async function getUser(){
//       const res = await fetch('api/user', {
//         headers:{
//           Authorization: `Bearer ${token}`
//         }
//       })
//       const data = await res.json()
//       if (res.ok) {
//         setUser(data)
//       }
//       console.log(data)
//     }

//     useEffect(()=>{
//       if(token){
//        getUser()
//      }
//     }, [token])

// ------------------------------------------------------------------------------------------------

//     return (
//     <appContext.Provider value={{ token, setToken, user }}>
//       {children}
//     </appContext.Provider>
//     );
//   }

// ------------------------------------------------------------------------------------------------

// context ini nantinya digunakan untuk mengakses data di komponen lain

// memungkinkan context ini untuk digunakan di file lain
export const 

  // nama variabel untuk menyimpan context object
  appContext =
  
    // membuat context kosong
    createContext();

// kode ini berfungsi membagikan data ke semua komponen yang ada di dalamnya
export default function 

// membungkus komponen lain dan menyediakan data yang bisa diakses oleh komponen didalamnya
AppProvider(

    // semua elemen atau komponen yang ditempatkan di dalam <AppProvider>
    { children }

) {

  // menyimpan nilai awal token
  // nilai awal diambil dari localStorage denan kunci 'token'
  const [token, setToken] = 
  
  // jika token tersimpan di localStorage, maka state token akan menyimpannya
  // jika tidak, maka nilai tokennya adalah null
  useState(localStorage.getItem('token'))

  // buat state (objek yang menyimpan data)
  const [user, setUser] = useState(null)

  // membuat function yang digunakan untuk mengambil data pengguna dari server API
  async function getUser(){

    // meminta data pengguna dari endpoint api/user
    const res = await fetch("/api/user", {
      headers: {

        // token yang dikirim adalah token yang berbasis Bearer
        Authorization: `Bearer ${token}`
        // ${token} adalah nilai token yang diperoleh sebelumnya, misal dari localStorage
        // gbs di enter woilah, case sensitive bngt leee
      }
    })

    // berisi data pengguna yang dikembalikan oleh server
    const data = 
    
    // mengonversi respon api menjadi objek JavaScript
    await res.json()

    // membuat kondisi ketika variabel res benar
    if (res.ok) {
      setUser(data)
    }

    // mengupdate state user dengan data yang diberikan
    // setUser sendiri asalnya dari React Hook
    setUser(data)

    // menampilkan data pengguna di konsol
    console.log(data)
  }

  // menjalankan efek samping (menggunakan token untuk authentikasi)
  // mengambil data dari API, memperbarui DOM, dan mendengarkan event
  useEffect(
    
    // fungsi yang akan dijalankan setiap kali useEffect dipicu
    ()=>{

    // memeriksa apakah variabel token memiliki nilai
    if(token){

      // memanggil fungsi getUser untuk mengambil data pengguna dari API
      // tadi kan endpointnya ke /api/user, nah nanti fungsi tersebut bakal ngambil data pengguna sesuai dengan token
      getUser()
    }
  },
  
  // menjalankan ulang useEffect setiap kali nilai token berubah
  // klo nggak berubah, ya nggak akan menjalankan ulang 😹
  [token])

  return (

  // alat untuk membagikan data
  // semua komponen didalam <AppProvider> bisa mengambil data yang ada di value
  <appContext.Provider 
  
  // data yang dibagikan
  // name: "john" adalah data yang tersedia untuk digunakan
  value={
  
    { 
      // memberikan akses ke nilai token saat ini 
      token, 
      
      // memungkinkan komponen untuk mengubah token
      setToken,
    
      // menyimpan informasi pengguna
      user
    }
  }>

    {/* Semua komponen yang ditulis di dalam <AppProvider> akan dirender disini */}
    {children}
  </appContext.Provider>
  );
}
