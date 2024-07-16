import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { counterActions, priceActions, productsActions, selectedProductsActions } from "../store";

function Details() {
  const { title } = useParams();
  const products = useSelector((state) => state.products.products);
  const dispatch=useDispatch()
  const selectedProduct = products.find((product) => product.title === title);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
        .then(response => response.json())
        .then(data => {
            dispatch(productsActions.setProducts(data.products));
        })
        .catch(error => console.error('Error fetching products:', error));
}, [dispatch]);

function handleAddClick(event,price, product) {
  dispatch(counterActions.increment());
  dispatch(priceActions.increase(price));
  dispatch(selectedProductsActions.addProduct(product));
}
  if (!selectedProduct) {
    // Handle case where the product is not found
    return <p>Product not found</p>;
  }

  return (
    
    
      <div id="details-page">
        <br />
        <br />
      <h1>{selectedProduct.title}</h1>
      <img style={{width:'15rem'}} src={selectedProduct.thumbnail} alt={selectedProduct.title} />
      <h4>Brand: {selectedProduct.brand}</h4>
      <p>{selectedProduct.description}</p>
      <h3>Price: {selectedProduct.price} EGP</h3>
      <br />
      <Link onClick={(event)=>handleAddClick(event,selectedProduct.price,selectedProduct)} className="btn btn-success">Add to cart</Link>
      <br />
      <br />
      {/* <p>Rating: {selectedProduct.rating}</p> */}
      </div>
    
  );
}

export default Details;
