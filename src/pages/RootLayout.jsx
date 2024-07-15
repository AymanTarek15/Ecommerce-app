import { Outlet } from "react-router-dom"
import NavBar from "../Components/NavBar"
import Footer from "../Components/Footer"

function RootLayout(){
  return <div className='App'>
  <NavBar />
  <Outlet />
  <Footer />
  </div>
}
export default RootLayout