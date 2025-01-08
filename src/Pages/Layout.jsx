import {Link, Outlet} from "react-router-dom";

export default function Layout() {
    return (
        <>
            <header>
                <nav className="bg-gray-800 p-4 flex justify-between items-center">
                    <Link to="/" className="text-white font-bold text-xl">Home</Link>
                    <div className="space-x-4">
                        <Link to="/register" className="text-gray-300 hover:text-white">Register</Link>
                        <Link to="/login" className="text-gray-300 hover:text-white">Login</Link>
                    </div>
                </nav>
            </header>

            <main>
                {/* menampilkan rute anak di dalam tata letak induk. */}
                {/* maksudnya gini, kita nambah import diatas. */}
                {/* jika route yang dituju adalah "/", maka komponen layout beserta isinya akan dirender */}
                {/* karena home itu tidak punya route spesifik, maka akan ikut dirender */}
                <Outlet/>
            </main>
        </>
    )
}