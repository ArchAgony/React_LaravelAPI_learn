import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  // konfigurasi permintaan dari frontend ke server backend yang berada di lokasi berbeda
  // server: {
  //   proxy: {
  //     '/api' : {
  //       target: 'http://127.0.0.1:8000',
  //       changeOrigin: true,
  //       headers:{
  //         Accept: 'application/json',
  //         "Content-Type" : 'application/json',
  //       }
  //     }
  //   }
  // }

  // ------------------------------------------------------------------------------------------------

  // konfigurasi permintaan dari frontend ke server backend yang berada di lokasi berbeda
  // tujuannya menghindari masalah CORS (biasanya ada error CORS gitu kan ya)
  // lalu, nanti kita tidak perlu menulis url backend lengkap, cukup "/api/"

  server: {
    proxy: {

      // permintaan yang URL-nya diawali dengan /api akan diteruskan ke server di dalam target
      '/api' : {

        // alamat server backend tujuan yang akan diteruskan dari permintaan /api
        target: 'http://127.0.0.1:8000',

        // menghilangkan batasan permintaan berdasarkan domain asal (origin)
        changeOrigin: true,

        // disamakan seperti headers milik postman
        headers:{

          // memberitahu server backend bahwa frontend ingin menerima data dalam format JSON
          Accept: 'application/json',

          // memberitahu server backend bahwa data yang dikirim adalah dalam format JSON
          "Content-Type" : 'application/json',
        }
      }
    }
  }

})
