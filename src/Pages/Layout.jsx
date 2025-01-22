import { useContext } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { appContext } from "../context/appContext";

export default function Layout() {
  // const { user,token } = useContext(appContext);
  // const navigate = useNavigate()
  // async function handleLogout(e) {
  //   e.preventDefault()
  //   const res = await fetch('/api/logout', {
  //       method: 'post',
  //       headers: {
  //           Authorization: `Bearer ${token}`
  //       }
  //   })
  //   const data= await res.json()
  //   console.log(data);
  //   if (res.ok) {
  //      setUser(null)
  //      setToken(null)
  //      localStorage.removeItem("token")
  //      navigate("/")
  //   }
  // }

  // ------------------------------------------------------------------------------------------------

  // return (
  //   <>
  //     <header>
  //       <nav className="flex items-center justify-between p-4 bg-gray-800">
  //         <Link to="/" className="text-xl font-bold text-white">
  //           Home
  //         </Link>
  //         {user ? 

  //           (<div className="space-x-4">
  //               <div>Welcome {user.name}!</div>
  //               <Link to="/create" className="nav-link">
  //                   New post
  //               </Link>
  //               <form onSubmit={handleLogout}>
  //                   <button className="nav-link">Logout</button>
  //               </form>
  //           </div>)

  //          : 
  
  //           (<div className="space-x-4">
  //             <Link to="/register" className="text-gray-300 hover:text-white">
  //               Register
  //             </Link>
  //             <Link to="/login" className="text-gray-300 hover:text-white">
  //               Login
  //             </Link>
  //           </div>)}
  //       </nav>
  //     </header>
  //     <main>
  //       <Outlet />
  //     </main>
  //   </>
  // );

  // ------------------------------------------------------------------------------------------------
  // ------------------------------------------------------------------------------------------------

  // memakai context dari fungsi appContext yang ada di file appContext
  // yang dipakai dalam kasus ini adalah user dan token
  const { user, token, setUser, setToken } = useContext(appContext);

  // navigasi ke rute lain dalam aplikasi.
  const navigate = useNavigate();

  // membuat fungsi untuk logout
  async function handleLogout(e) {

    // mencegah halaman memuat ulang saat mengirim formulir
    e.preventDefault();

    // meminta data pengguna dari endpoint api/logout
    const res = await fetch("/api/logout", {

      method: 'post',

      headers: {
        // token yang dikirim adalah token yang berbasis bearer
        Authorization: `Bearer ${token}`,
        // ${token} adalah nilai token yang diperoleh sebelumnya, misal dari localStorage
      },
    });

    // membuat varibel yang berisi data pengguna yang dikembalikan oleh server
    // setelah itu, variabel tersebut mengonversi respon api menjadi objek JavaScript
    const data = await res.json();

    // menampilkan response yang dihasilkan oleh variabel data
    console.log(data);

    // membuat kondisi
    // jika variabel res (data pengguna dari endpoint api/logout) benar, maka kondisi ini akan berjalan
    if (res.ok) {
      setUser(null)
      setToken(null)
      localStorage.removeItem("token")
      navigate("/")
    }
  }

  // ------------------------------------------------------------------------------------------------

  return (
    <>
      <header>
        <nav className="flex items-center justify-between p-4 bg-gray-800">
          <Link to="/" className="text-xl font-bold text-white">
            Home
          </Link>

          {/* operator ternary yang mirip dengan if else */}
          {user ? (
            <div className="space-x-4">
              {/* kondisi jika user memiliki nilai */}
              <div>Welcome {user.name}!</div>

              {/* membuat bagian untuk mengarahkan ke file create */}
              <Link to="/create" className="nav-link">
                New post
              </Link>
              
              {/* membuat button logout untuk mengaktifkan fungsi handleLogout */}
              <form onSubmit={handleLogout}>
                <button className="nav-link">Logout</button>
              </form>
            </div>
          ) : (
            // kondisi jika user tidak ada (null)
            <div className="space-x-4">
              <Link to="/register" className="text-gray-300 hover:text-white">
                Register
              </Link>
              <Link to="/login" className="text-gray-300 hover:text-white">
                Login
              </Link>
            </div>
          )}
        </nav>
      </header>

      <main>
        {/* menampilkan rute anak di dalam tata letak induks. */}
        {/* maksudnya gini, kita nambah import diatas. */}
        {/* jika route yang dituju adalah "/", maka komponen layout beserta isinya akan dirender */}
        {/* karena home itu tidak punya route spesifik, maka akan ikut dirender */}
        <Outlet />
      </main>
    </>
  );
}
