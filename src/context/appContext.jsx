// ini adalah context, fungsinya mengelola dan berbagi data secara global
// tanpa harus melewatkan data melalui setiap komponen secara manual

// kesimpulannya, context itu menyediakan dan membagi informasi.
import { createContext } from "react";

// export const appContext = createContext()

// export default function AppProvider({ children }) {
//     return (
//     <appContext.Provider value={{ name: "john" }}>
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
  return (

  // alat untuk membagikan data
  // semua komponen didalam <AppProvider> bisa mengambil data yang ada di value
  <appContext.Provider 
  
  // data yang dibagikan
  // name: "john" adalah data yang tersedia untuk digunakan
  value={ { name: "john" }}>

    {/* Semua komponen yang ditulis di dalam <AppProvider> akan dirender disini */}
    {children}
  </appContext.Provider>
  );
}
