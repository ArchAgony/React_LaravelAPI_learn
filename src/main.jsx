import { createRoot } from 'react-dom/client'

// didapatkan dari file app.jsx yang tadi kita edit untuk membuat tampilan js
import App from './App.jsx'

// mencari elemen HTML dengan ID root di file index.html
// bisa dilihat, di file tersebut kan ada div yang id nya root, tapi kosong
// nah, elemen ini adalah tempat seluruh file react di-render
// karena file ini kosong, nanti bakal diisi oleh elemen yang dibuat oleh kode, seperti App.jsx diatas
createRoot(document.getElementById('root')).render(

  // merender komponen App ke dalam elemen root
  // tadi kan diatas kita mengimport app.jsx, nah kebetulan namanya App
  // nah, disinilah kita merender seluruh isi dari file app.jsx. namanya mengikuti dengan nama import
    <App />
)
