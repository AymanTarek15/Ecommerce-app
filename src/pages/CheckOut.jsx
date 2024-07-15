import { useDispatch, useSelector } from "react-redux";
import { counterActions, priceActions, selectedProductsActions } from "../store";
import { Link } from "react-router-dom";

function CheckOut() {
  const selectedProducts = useSelector((state) => state.selectedProducts.selectedProducts);
  const dispatch = useDispatch();
  const totalPrice = useSelector((state) => state.price.price);

  function handleRemoveClick(event, product) {
    event.preventDefault();
    dispatch(counterActions.decrease(product.quantity));
    dispatch(priceActions.decrease(product.price * product.quantity));
    dispatch(selectedProductsActions.removeProduct(product));
  }

  function handleAddClick(event, product) {
    event.preventDefault();
    dispatch(counterActions.increment());
    dispatch(priceActions.increase(product.price));
    dispatch(selectedProductsActions.addProduct(product));
  }

  function handleDecrementClick(event,product){
    event.preventDefault();
    dispatch(counterActions.decrement());
    dispatch(priceActions.decrease(product.price));
    dispatch(selectedProductsActions.decrementProductQuantity(product))
  }

  return (
    <section id="checkout-page">
      <div>
        <h1>Checkout Page</h1>
        <hr />
        <br />

        <h2>These are your selected items</h2>
        {selectedProducts.map((product) => (
          <div key={product.id}>
            <div id="checkout-products" className="" style={{ height: 'fit-content' }}>
              <img src={product.thumbnail} alt={product.brand} style={{ height: '6rem' }} />
              <h5>{product.title}</h5>
              <h6>Price: {((product.price)*product.quantity).toFixed(2)} EGP</h6>
              <button
                onClick={(e) => handleRemoveClick(e, product)}
                className="btn text-danger close-button"
                style={{ width: '0.4rem', textAlign: 'center' }}
              >
                x
              </button>
              <div style={{ display: 'flex', placeContent: 'center' }}>
                <button
                  onClick={(e) => handleAddClick(e, product)}
                  style={{ marginRight: '1rem', width: 'fit-content' }}
                  className="btn btn-success"
                >
                  +
                </button>
                <p style={{ margin: '0' }} className="btn">{product.quantity}</p>
                <button
                  onClick={(e) => handleDecrementClick(e, product)}
                  style={{ width: '2.3rem' }}
                  className="btn btn-danger"
                >
                  -
                </button>
              </div>
              <br />
            </div>
            <br />
          </div>
        ))}
        <br />
        <br />
        <p>Your total price value is {totalPrice.toFixed(2)}</p>
        <Link to="personal-info" style={{ marginRight: '1rem' }} className="btn btn-success">Proceed to checkout</Link>
        <Link to="/" className="btn btn-primary">Continue shopping</Link>
        <br />
        <br />
      </div>
    </section>
  );
}

export default CheckOut;
