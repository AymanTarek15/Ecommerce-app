import { useDispatch, useSelector } from 'react-redux';
import { counterActions, priceActions, productsActions, selectedProductsActions } from '../store';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

function Products() {
    const dispatch = useDispatch();
    const products = useSelector(state => state.products.products);
    
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
    return (
        <div className='products-page'>
            <h1 className='products-title'>Products</h1>
            <div className="container">
                {products.map(product => (
                   <div className='product' style={{ position: 'relative' }} key={product.id}>
                        <img src={product.thumbnail} alt={product.brand} style={{ height: '25vh' }} />
                        <hr />
                        <h1>{product.title}</h1>
                        <h4>{product.brand}</h4>
                        <p>{product.description}</p>
                        <h5>rating : {product.rating > 4.5 ? '⭐⭐⭐⭐⭐' : product.rating > 3.5 ? '⭐⭐⭐⭐' : '⭐⭐⭐'} {product.rating} </h5>
                        <h4 style={{ marginBottom: '3rem' }}>Price : {(product.price).toFixed(2)} EGP</h4>
                        <Link style={{ width: '10rem', margin: 'auto', position: 'absolute', bottom: '3rem', left: '27%' }} to={product.title} className='btn btn-success'>Check details</Link>
                        <br />
                        <br />
                        <button onClick={() => handleAddClick(product.price, product)} className='btn btn-warning' style={{ width: '10rem', margin: 'auto', position: 'absolute', bottom: '0', left: '27%' }}>Add to cart 🛒</button>
                    </div>
                  
                ))}
            </div>
        </div>
    );
}

export default Products;
