import { useContext } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { appContext } from "../context/appContext";

export default function Layout() {
  const { user,token } = useContext(appContext);
  const navigate = useNavigate()
  async function handleLogout(e) {
    e.preventDefault()
    const res = await fetch('/api/logout', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    const data= await res.json()
    console.log(data);
    if (res.ok) {
        
    }
  }

  return (
    <>
      {/* <header>
        <nav className="flex items-center justify-between p-4 bg-gray-800">
          <Link to="/" className="text-xl font-bold text-white">
            Home
          </Link>

          {user ? (
            <div>{user.name}</div>
          ) : (
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
      </header> */}

      {/* <main>
            <Outlet />
          </main> */}
{/* ------------------------------------------------------------------------------------------------ */}

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
