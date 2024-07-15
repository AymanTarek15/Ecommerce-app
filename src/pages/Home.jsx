import { useEffect } from "react";
import HomePageProducts from "../Components/HomePageProducts"
import { useDispatch, useSelector } from "react-redux";
import { productsActions } from "../store";


function Home() {
  const products=useSelector(state=>state.products.products)
  const dispatch = useDispatch();
  useEffect(() => {
    fetch('https://dummyjson.com/products')
        .then(response => response.json())
        .then(data => {
            dispatch(productsActions.setProducts(data.products));
        })
        .catch(error => console.error('Error fetching products:', error));
}, [dispatch]);
  
console.log(products);
  return <div id="home-page">
    <h1>Welcome to our EShop</h1>
    <h4>You will find all you need in one place</h4>
    <br />
    <br />
    <hr />
    <HomePageProducts />
  </div>
}
export default Home