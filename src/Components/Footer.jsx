import { Link } from "react-router-dom"

function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div>
        <div className="footer-container">
          <div>
            <h5>About Us</h5>
            <Link to={'about'}>About EShop</Link>
            <br />
            <Link>Careers</Link>
          </div>
          <div>
            <h5>Shop With Us</h5>
            <Link to={'products'}>Products</Link>
            <br />
            <Link to={'checkout'}>Your orders</Link>
          </div>
          <div>
            <h5>Contact Us</h5>
            <Link to={'contact'}>Contact</Link>
          </div>
        </div>


      </div>
      <div>
        <p>© 2024 Ayman's EShop</p>
      </div>
    </footer>
  )
}
export default Footer