import { useSelector} from "react-redux/es/exports";
import { useNavigate } from "react-router-dom";
export default function CartDetails(){
    const cart = useSelector((state) => state.cart);
    let navigate = useNavigate();
    return(
        <>
            <div className="ship-info">
                <div className="ship-info-head">
                    <span>{cart.cartItems.length} items in your order</span>
                </div>
                <div className="ship-info-details">
                    {cart.cartItems?.map(cartItem => (
                        <div key={cartItem.id} className="check-cart-products">

                            <img src={cartItem.image} alt={cartItem.title} />

                            <div className="check-cart-details">
                                <span>{cartItem.title}</span>
                                <span>Size : Medium</span>
                                <span>Color : Storm</span>
                                <span>Quantity: {cartItem.cartQuantity}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <button id="place-order" onClick={() => { navigate("order-success/") }}>PLACE ORDER</button>
            <p id="terms">By clicking confirm order you agree to our <a href="/" aria-label="Terms and Conditions">Terms and Conditions</a></p>
        </>
    );
}