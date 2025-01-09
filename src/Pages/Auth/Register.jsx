// menangani dan mengelola state dalam komponen React
// State adalah data yang dapat berubah seiring waktu, seperti input pengguna, status aplikasi, dll.
import {useState} from "react";

export default function Register() {

    // menambahkan hooks
    // const [formData, setFormData] = useState({
    //     name: "",
    //     email: "",
    //     password: "",
    //     password_confirmation: ""
    // })

    // const [errors, setErrors] = useState({})

    // async function handleRegister(e) {
    //     e.preventDefault()
    //     const res = await fetch('/api/register', {
    //      method: 'post',
    //      body: JSON.stringify(formData)
    //     })
    //     const data = await res.json()
    //     console.log(formData)
    // }

    // return (
    //     <>
    //         <h1 className="title">Register a new account</h1>
    //
    //         <form onSubmit={handleRegister} className="w-1/2 mx-auto space-y">
    //             <div>
    //                 <input
    //                 type="text"
    //                 placeholder="Name"
    //                 value={formData.name}
    //                 onChange={
    //                  (e) => setFormData({ ...formData, name: e.target.value })
    //                 }
    //                 />
    //              {errors.name && <p className="error">{errors.name[0]}</p>}
    //             </div>
    //
    //             <div>
    //                 <input
    //                 type="text"
    //                 placeholder="Email"
    //                 value={formData.email}
    //                 onChange={
    //                      (e) => setFormData({...formData, email: e.target.value})
    //                 }
    //                 />
    //              {errors.email && <p className="error">{errors.email[0]}</p>}
    //             </div>
    //
    //             <div>
    //                 <input
    //                 type="password"
    //                 placeholder="Password"
    //                 value={formData.password}
    //                 onChange={
    //                      (e) => setFormData({...formData, password: e.target.value})
    //                 }
    //                 />
    //              {errors.password && <p className="error">{errors.password[0]}</p>}
    //             </div>
    //
    //             <div>
    //                 <input
    //                 type="password"
    //                 placeholder="Password confirmation"
    //                 value={formData.password_confirmation}
    //                 onChange={
    //                      (e) => setFormData({...formData, password_confirmation: e.target.value})
    //                 }
    //                 />
    //              {errors.password_confirmation && <p className="error">{errors.password_confirmation[0]}</p>}
    //             </div>
    //         </form>
    //
    //         <button className="primary-btn">Register</button>
    //     </>
    // )

// ------------------------------------------------------------------------------------------------

    const [
        // Variabel state yang menyimpan data form.
        // contohnya adalah name: "", email: "", password: "", password_confirmation: ""
        // dimulai dengan nilai string kosong ("")
        formData,

        // Fungsi untuk memperbarui nilai formData
        // mengubah isi state dalam formData berdasarkan input pengguna atau aksi lainnya
        setFormData
    ]
        // menambahkan state lokal pada komponen
        = useState({

        // ini adalah variabel state formData
        name: "",
        email: "",
        password: "",
        password_confirmation: ""
    })

    // mendeklarasikan dan mengelola state dalam komponen fungsional
    const [errors, setErrors] = useState({})

    // menangani event saat pengguna mengirimkan formulir (form submission).
    // "async" digunakan untuk menandai fungsi ini sebagai asynchronous untuk menangani pemanggilan API
    async function handleRegister(

        // objek yang merepresentasikan peristiwa (event) yang terjadi, dalam hal ini pengiriman formulir.
        e

    ) {
        // mencegah halaman memuat ulang saat mengirim formulir, dikelola sepenuhnya oleh JavaScript tanpa refresh halaman.
        // memungkinkan kita untuk menangani data secara manual
        e.preventDefault()

        const res =

            // Menunggu respons dari server sebelum melanjutkan ke baris berikutnya
            await

                // melakukan permintaan HTTP ke server.
                fetch(

            // Rute endpoint API di mana data akan dikirim
            '/api/register', {

                // Metode HTTP untuk mengirim data
                method: 'post',

                // Mengonversi objek formData menjadi string dalam format JSON
                body: JSON.stringify(formData)
            }
        )

        const data =

            // Menunggu proses parsing JSON selesai sebelum melanjutkan.
            await

            // mengonversi respons server menjadi objek javascript yang bisa digunakan dalam kode
            res.json()

        // Menyimpan daftar kesalahan dari server untuk menampilkan pesan error validasi di formulir.
        // mengecek variabel data dan state error
        if (data.errors){

            // Mengupdate state errors dengan nilai baru yang diambil dari data.errors.
            setErrors(data.errors)

        }else{

        // melihat data yang dicetak di console
        console.log(data)
        }

    }

    return (
        <>
            <h1 className="title">Register a new account</h1>

            <form onSubmit={handleRegister} className="w-1/2 mx-auto space-y">
                <div>
                    <input type="text" placeholder="Name"

                        /* menentukan data mana yang akan ditambah */
                           value={formData.name}

                        // event handler yang dipanggil setiap kali pengguna mengetik atau mengubah nilai input.
                           onChange=

                               // memperbarui state formData sesuai input pengguna
                               {
                                   (e) =>

                                       // fungsi untuk memperbarui state formData
                                       setFormData(
                                           // menyalin semua properti lama di dalam objek formData.
                                           // tanpa spread operator, semua properti akan hilang ketika state diperbarui
                                           {
                                               ...formData,

                                               // Properti name di dalam state diperbarui dengan nilai baru
                                               // diambil dari input e.target.value
                                               name: e.target.value
                                           }
                                       )
                               }
                    />
                    {/*memeriksa apakah ada pesan error untuk input bernama name di state errors*/}
                    {
                        // Merujuk pada properti name dalam objek errors
                        // Jika errors.name ada, ekspresi setelah && (elemen <p>) akan dievaluasi dan ditampilkan.
                        errors.name &&

                        // Menampilkan pesan error pertama dalam array errors.name
                        // [0] digunakan untuk mengakses elemen pertama dari array pesan error.
                        <p className="error">{errors.name[0]}</p>
                    }
                </div>

                <div>
                    <input
                        type="text"
                        placeholder="Email"
                        value={formData.email}
                        onChange={
                            (e) => setFormData({...formData, email: e.target.value})
                        }
                    />
                    {errors.email && <p className="error">{errors.email[0]}</p>}
                </div>

                <div>
                    <input
                        type="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={
                            (e) => setFormData({...formData, password: e.target.value})
                        }
                    />
                    {errors.password && <p className="error">{errors.password[0]}</p>}
                </div>

                <div>
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        value={formData.password_confirmation}
                        onChange={
                            (e) => setFormData({...formData, password_confirmation: e.target.value})
                        }
                    />
                    {errors.password_confirmation && <p className="error">{errors.password_confirmation[0]}</p>}
                </div>
            <button className="primary-btn">Register</button>
            </form>
        </>
    )
}