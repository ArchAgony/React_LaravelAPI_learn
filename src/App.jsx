// kita akan memulai dari nol
// jadi, seluruh import bawaan akan dihapus
import './App.css'

// kita akan mengimpor
import {BrowserRouter, Routes, Route} from "react-router-dom";

// file yang akan dirender
import Layout from "./Pages/Layout.jsx"
import Home from "./Pages/Home.jsx"

// file terpisah yang akan dirender (berdasarkan kondisi)
import Register from "./Pages/Auth/Register.jsx"
import Login from "./Pages/Auth/Login.jsx"

// ------------------------------------------------------------------------------------------------

// fungsi dasar pada react
// function App(){
//     return (
//      <BrowserRouter>
//       <Routes>
//         <Route path='/' element={<Layout />}>
//           <Route index element={<Home />} />
//           <Route path="/register" element={<Register />}/>
//           <Route path="/login" element={<Login />}/>
//         </Route>
//       </Routes>
//     </BrowserRouter>
//     )
// }

// mendefinisikan function
// export default App

// ------------------------------------------------------------------------------------------------

// di bagian inilah kita membuat tampilan
// ibaratkan seperti tag pembuka html. function ini sama seperti tag body
// function App() {

// mengembalikan elemen JSX yang akan dirender ke layar.
//   return (

// membungkus beberapa elemen tanpa menambahkan elemen tambahan ke dalam HTML.
// React hanya membolehkan kita mengembalikan satu elemen
// ibarat klo di html itu div. tapi, yang ini bener bener kosong
//     <>
//     </>

//   )
// }

// jika function lebih dari 1, bisa langsung didefinisikan, seperti ini
// "App" berasal dari nama function
// export default App

// ------------------------------------------------------------------------------------------------

// karena pada bagian ini kita hanya punya 1 function, maka langsung saja mendefinisikan
// dengan mengetik export default
// tujuannya agar tidak perlu mendefinisikan ulang
export default function App() {
    return (

        // wrapper (pembungkus) utama yang digunakan untuk mengaktifkan fitur routing di aplikasi React.
        <BrowserRouter>

            {/*mendefinisikan semua jalur (path) yang ada di aplikasi.*/}
            <Routes>

                {/*Mendefinisikan jalur spesifik yang cocok dengan URL.*/}
                <Route

                    /*Mengatur jalur utama (root) aplikasi.*/
                    path='/'

                    /*Jika URL cocok dengan "/", maka komponen <Layout /> akan dirender.*/
                    /*komponen ini biasanya berisi tata letak utama, seperti header dan footer*/
                    element={<Layout/>}>

                    {/* komponen ini adalah isi dari komponen Layout */}
                    {/* jadi, jika si layout itu header ama footer, kalo ini adalah body / isinya */}
                    {/* karena komponen ini tidak memiliki path tersendiri, dan merupakan komponen index */}
                    {/* maka akan dirender mengikuti path route parent */}
                    <Route index element={<Home/>}/>

                    {/* komponen ini adalah isi dari komponen layout */}
                    {/* yang membedakan dengan komponen home adalah, komponen ini memiliki path tersendiri*/}
                    {/* jika komponen ini dirender, maka komponen home tidak akan dirender */}
                    <Route path="/register" element={<Register />}/>
                    <Route path="/login" element={<Login />}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}