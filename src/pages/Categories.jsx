import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { counterActions, filteredProductsActions, priceActions, productsActions, selectedProductsActions } from "../store";
import Error from "./Error";
import { useEffect } from "react";

function Categories() {
  const products = useSelector(state => state.products.products);
  
  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    fetch('https://dummyjson.com/products')
        .then(response => response.json())
        .then(data => {
            dispatch(productsActions.setProducts(data.products));
        })
        .catch(error => console.error('Error fetching products:', error));
}, [dispatch]);

  function handleAddClick(price, product) {
    dispatch(counterActions.increment());
    dispatch(priceActions.increase(price));
    dispatch(selectedProductsActions.addProduct(product));
  }

  const filteredProducts = products.filter(product => product.category === params.id);
  
  if (filteredProducts.length === 0) {
    return <Error />;
  }

  return (
    <div className='products-page'>
      <h1 className='products-title'>Products</h1>
      <div className="container">
        {filteredProducts.map(product => (
          <div className='product' style={{ position: 'relative' }} key={product.id}>
            <img src={product.thumbnail} alt={product.brand} style={{ height: '25vh' }} />
            <hr />
            <h1>{product.title}</h1>
            <h4>{product.brand}</h4>
            <p>{product.description}</p>
            <h5>rating : {product.rating > 4.5 ? '⭐⭐⭐⭐⭐' : product.rating > 3.5 ? '⭐⭐⭐⭐' : '⭐⭐⭐'} {product.rating} </h5>
            <h4 style={{ marginBottom: '3rem' }}>Price : {(product.price).toFixed(2)} EGP</h4>
            <Link className='btn'></Link>
            <button onClick={() => handleAddClick(product.price, product)} className='btn btn-warning' style={{ width: '10rem', margin: 'auto', position: 'absolute', bottom: '0', left: '27%' }}>Add to cart 🛒</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;
