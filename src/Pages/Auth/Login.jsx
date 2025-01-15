// menangani dan mengelola state dalam komponen React js
// State adalah data yang dapat berubah seiring waktu, seperti input pengguna, status aplikasi, dll.
import { useContext, useState } from "react";

// memindahkan pengguna ke rute lain secara programatis.
import { useNavigate } from "react-router-dom";
import { appContext } from "../../context/appContext";

export default function Login() {
//   const {token, setToken} = useContext(appContext)

//   const [formData, setFormData] =
//     useState({
//       email: "",
//       password: "" 
//     });

//   const [errors, setErrors] = useState({});

//   const navigate = useNavigate();

//   async function handleLogin(e) {
//     e.preventDefault();

//     const res = await fetch("/api/login", {
//           method: "post",
//           body: JSON.stringify(formData),
//         }
//       );

//     const data = await res.json();
//     if (data.errors) {
//       setErrors(data.errors);
//     } else {
//       localStorage.setItem(
//         "token", 
//         data.token
//     );

//     setToken(data.token)
//     }
//   }

// ------------------------------------------------------------------------------------------------

//   return (
//     <>
//       <h1 className="title">Login to your account</h1>
//       {/* menampilkan token yang sebelumnya sudah di update berdasarkan input user */}
//       {token}

//       <form onSubmit={handleLogin} className="w-1/2 mx-auto space-y">
//         <div>
//           <input
//             type="text"
//             placeholder="Email"
//             value={formData.email}
//             onChange={(e) =>
//               setFormData({ ...formData, email: e.target.value })
//             }
//           />
//           {errors.email && <p className="error">{errors.email[0]}</p>}
//         </div>

//         <div>
//           <input
//             type="password"
//             placeholder="Password"
//             value={formData.password}
//             onChange={(e) =>
//               setFormData({ ...formData, password: e.target.value })
//             }
//           />
//           {errors.password && <p className="error">{errors.password[0]}</p>}
//         </div>
//         <button className="primary-btn">Login</button>
//       </form>
//     </>
//   );
// }

  // ------------------------------------------------------------------------------------------------
  // ------------------------------------------------------------------------------------------------

  // mengambil data dari context yang disediakan oleh provider (AppProvider)
  const 
  
  // mengambil setToken di dalam context (ga harus setToken sih, pokoknya yang ada di value dalam appContext)
  {token, setToken} = 
  
  // mengakses data dari context appContext
  // asalnya dari context yang dibuat menggunakan createContext
  useContext(appContext)

  // Variabel state yang menyimpan data form.
  const [
    // contohnya adalah name: "", email: "", password: "", password_confirmation: ""
    // dimulai dengan nilai string kosong ("")
    formData,

    // Fungsi untuk memperbarui nilai formData
    // mengubah isi state dalam formData berdasarkan input pengguna atau aksi lainnya
    setFormData,
  ] =
    // menambahkan state lokal pada komponen
    useState({
      // ini adalah variabel state formData
      email: "",
      password: "" 
    });

  // mendeklarasikan dan mengelola state dalam komponen fungsional
  const [errors, setErrors] = useState({});

  // Mendapatkan fungsi navigate dari hook useNavigate
  // Fungsi ini digunakan untuk navigasi ke rute lain dalam aplikasi.
  const navigate = useNavigate();

  // menangani event saat pengguna mengirimkan formulir (form submission).
  // "async" digunakan untuk menandai fungsi ini sebagai asynchronous untuk menangani pemanggilan API
  async function handleLogin(
    // objek yang merepresentasikan peristiwa (event) yang terjadi, dalam hal ini pengiriman formulir.
    e
  ) {
    // mencegah halaman memuat ulang saat mengirim formulir, dikelola sepenuhnya oleh JavaScript tanpa refresh halaman.
    // memungkinkan kita untuk menangani data secara manual
    e.preventDefault();

    const res =
      // Menunggu respons dari server sebelum melanjutkan ke baris berikutnya
      await 
      
      // melakukan permintaan HTTP ke server.
      fetch(
        
        // Rute endpoint API di mana data akan dikirim
        "/api/login",
        {
          
          // Metode HTTP untuk mengirim data
          method: "post",

          // Mengonversi objek formData menjadi string dalam format JSON
          body: JSON.stringify(formData),
        }
      );

    const data =
      
      // Menunggu proses parsing JSON selesai sebelum melanjutkan.
      await 
      
      // mengonversi respons server menjadi objek javascript yang bisa digunakan dalam kode
      res.json();

    // console.log(data);

    // Menyimpan daftar kesalahan dari server untuk menampilkan pesan error validasi di formulir.
    // mengecek variabel data dan state error
    if (data.errors) {
      // Mengupdate state errors dengan nilai baru yang diambil dari data.errors.
      setErrors(data.errors);
    } else {
      
      // fitur browser untuk menyimpan data secara lokal di sisi klien
      localStorage.
      
      // perintah untuk menyimpan data
      setItem(

        // Nama kunci untuk menyimpan data.
        // 'token' adalah nama kunci yang digunakan untuk menyimpan data di localStorage
        "token", 

        // Data yang ingin disimpan
        // data.token merujuk pada nilai token yang diperoleh dari objek data
        data.token
    );

    // mengubah token berdasarkan localStorage
    setToken(data.token)

    // mengarahkan pengguna ke rute yang ditentukan ('/')
    // navigate("/");
    }
  }

  // ------------------------------------------------------------------------------------------------

  return (
    <>
      <h1 className="title">Login to your account</h1>
      {/* menampilkan token yang sebelumnya sudah di update berdasarkan input user */}
      {token}

      <form onSubmit={handleLogin} className="w-1/2 mx-auto space-y">
        <div>
          <input
            type="text"
            placeholder="Email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
          {errors.email && <p className="error">{errors.email[0]}</p>}
        </div>

        <div>
          <input
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />
          {errors.password && <p className="error">{errors.password[0]}</p>}
        </div>
        <button className="primary-btn">Login</button>
      </form>
    </>
  );
}
