import { createRoot } from "react-dom/client";
import './App.css'

// didapatkan dari file app.jsx yang tadi kita edit untuk membuat tampilan js
import App from "./App.jsx";
import AppProvider from "./context/appContext.jsx";

// ------------------------------------------------------------------------------------------------

// createRoot(document.getElementById("root")).render(
//   <AppProvider>
//     <App />
//   </AppProvider>
// );

// ------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------

// mencari elemen HTML dengan ID root di file index.html
// bisa dilihat, di file tersebut kan ada div yang id nya root, tapi kosong
// nah, elemen ini adalah tempat seluruh file react di-render
// karena file ini kosong, nanti bakal diisi oleh elemen yang dibuat oleh kode, seperti App.jsx diatas
createRoot(document.getElementById("root")).render(
  
  // memastikan bahwa data / state global dari context bisa diakses oleh semua komponen di dalam <App />
  <AppProvider>
    
    {/* // merender komponen App ke dalam elemen root
    // tadi kan diatas kita mengimport app.jsx, yang functionnya bernama App
    // nah, disinilah kita merender seluruh isi dari function App. */}
    <App />
  </AppProvider>
);
