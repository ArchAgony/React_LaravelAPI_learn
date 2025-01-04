// kita akan memulai dari nol
// jadi, seluruh import bawaan akan dihapus

import './App.css'

// fungsi dasar pada react
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

// jika function lebih dari 1, bisa menggunakan seperti ini
// export default App

// karena pada bagian ini kita hanya punya 1 function, maka langsung saja mendefinisikan
// dengan mengetik export default
// tujuannya agar tidak perlu mendefinisikan ulang
export default function App() {
  return (
    <>
      
    </>
  )
}