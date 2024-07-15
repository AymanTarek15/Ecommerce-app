import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { counterActions, priceActions, selectedProductsActions } from '../store';

function NavBar() {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.counter.counter);
  const cartPrice = useSelector(state => state.price.price);
  const selectedProducts = useSelector(state => state.selectedProducts.selectedProducts);

  function handleRemoveClick(event, price, product) {
    event.preventDefault();
    dispatch(counterActions.decrease(product.quantity));
    dispatch(priceActions.decrease(price*product.quantity));
    dispatch(selectedProductsActions.removeProduct(product));
  }

  return (
    <nav className="navbar navbar-expand-lg bg-body-dark bg-dark">
      <div className="container-fluid nav-pills bg-dark nav-size">
        <div>
          <Link id="brand" className="navbar-brand" to="/">E-Shop</Link>
        </div>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 bg-dark">
            <li className="nav-item bg-dark">
              <NavLink className="nav-link bg-dark" aria-current="page" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link bg-dark" aria-current="page" to="products">Products</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link bg-dark" to="about">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link bg-dark" to="contact">Contact</NavLink>
            </li>
          </ul>
          <form className="d-flex search-hide" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-primary" type="submit">Search</button>
          </form>
        </div>
        <div className="cart-div">
          <p className="cart-number">{cart}</p>
          <li className="nav-item dropdown">
            <Link id="cart" style={{ margin: 'auto 0rem auto 1rem', fontSize: '2rem', position: 'relative', bottom: '2rem', padding: '0rem' }}
              className="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              🛒
            </Link>
            <ul className="dropdown-menu bg-dark my-scroll" style={{ marginRight: '100rem', position: 'absolute', left: '-16rem' }}>
              {selectedProducts.map(product => (
                <div className="product" style={{ position: 'relative', width: '20rem', height: 'fit-content', color: 'white' }} key={product.id}>
                  <img src={product.thumbnail} alt={product.brand} style={{ height: '6rem' }} />
                  <h5>{product.title}</h5>
                  <h6>Price: {Math.abs(((product.price)*product.quantity).toFixed(2))} EGP</h6>
                  <h6>Quantity: {product.quantity}</h6>
                  <button onClick={(e) => handleRemoveClick(e, product.price, product)} className="btn text-danger close-button" style={{ width: '0.4rem', textAlign: 'center' }}>x</button>
                </div>
              ))}
              <div style={{ textAlign: 'center' }}>
                <h6 style={{ color: 'white', textAlign: 'center', marginTop: '1rem' }}>Total price: {cartPrice.toFixed(2)} EGP</h6>
                <Link to="checkout" className="btn btn-success" style={{ textDecoration: 'none', textAlign: 'center' }}>Go to checkout Page</Link>
              </div>
            </ul>
          </li>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
