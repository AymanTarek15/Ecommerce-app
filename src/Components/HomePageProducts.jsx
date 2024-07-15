import { useSelector } from "react-redux"
import beauty from '../Assets/images/beauty.jpeg'
import fragrances from '../Assets/images/Fragrances.jpg'
import furniture from '../Assets/images/furniture.jpeg'
import groceries from '../Assets/images/groceries.jpg'
import technology from '../Assets/images/technology.jpg'
import watches from '../Assets/images/watches.jpg'
import { Link } from "react-router-dom"

function HomePageProducts() {
  const products = useSelector(state => state.products.products)

  return (
    <div id="category-products">
      <h3>Shop by category</h3>
      <br />
      <br />
      <div className="category-products-container container-fluid text-center" >
        <div className="row row-gap-5 ">
          <div className="category-item col-12 col-md-6 col-lg-6 col-xxl-4">
            <Link to={'beauty'}><img src={beauty} alt="beauty category image" className="category-image" /></Link>

            <h4>Beauty items</h4>
          </div>
          <div className="category-item col-12 col-md-6 col-lg-6 col-xxl-4">
            <Link to={'fragrances'}><img src={fragrances} alt="fragrances category image" className="category-image" /></Link>
            <h4>Fragrances</h4>
          </div>
          <div className="category-item col-12 col-md-6 col-lg-6 col-xxl-4">
            <Link to={'furniture'}><img src={furniture} alt="furniture category image" className="category-image" /></Link>
            <h4>Furniture</h4>
          </div>
          <div className="category-item col-12 col-md-6 col-lg-6 col-xxl-4">
            <Link to={'groceries'}><img src={groceries} alt="groceries category image" className="category-image" /></Link>
            <h4>Groceries</h4>
          </div>
          <div className="category-item col-12 col-md-6 col-lg-6 col-xxl-4">
            <Link to={'Technology'}><img src={technology} alt="technology category image" className="category-image" /></Link>
            <h4>Technology</h4>
          </div>
          <div className="category-item col-12 col-md-6 col-lg-6 col-xxl-4">
            <Link to={'watches'}><img src={watches} alt="Watches category image" className="category-image" /></Link>
            <h4>Watches</h4>
          </div>
        </div>
      </div>

    </div>
  )
}



export default HomePageProducts