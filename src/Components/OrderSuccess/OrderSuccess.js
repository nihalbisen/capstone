import { useSelector} from "react-redux/es/exports";
import facebbok from "../../Images/facebook.svg";
import instagram from "../../Images/instagram.svg";
import twitter from "../../Images/twitter.svg";
export default function OrderSuccess(){
    const cart = useSelector((state) => state.cart);
    
    const {email,phone,firstName,lastName,address1,address2,city,state,country,zip,orderno} = JSON.parse(localStorage.getItem('shippingInfo'));
    const {method} = JSON.parse(localStorage.getItem('ShippingMethod'));
    const {paymentType, creditCardNum} = JSON.parse(localStorage.getItem('PaymentInfo'));
    return(
        <section className="success aem-Grid aem-Grid--12">
            <div className="success-head">
                <h2>Order Successful!</h2>
                <hr />
            </div>
            <div className="aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--phone--12 aem-GridColumn--tablet--12">
                <div className="success-container">
                    <h3>Order Number #{orderno}</h3>
                    <div className="success-grid">
                        <div className="success-items">
                            <h4>Shipping Information</h4>
                            <span>{email} <br/> {phone}</span>
                            <p>{firstName} {lastName} {address1} {address2} {city}, {state} {zip} {country}</p>
                        </div>
                        <div className="success-items">
                            <h4>Shipping Method</h4>
                            <span>{method}</span>
                            <h4>Payment Information</h4>
                            <span>{paymentType}<br/> Visa ending in {creditCardNum}</span>
                        </div>
                    </div>
                    <div className="cart-details">
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
                    <div className="success-details">
                        <p>You will also receive an email with the details and we will let you know when your order has shipped.</p>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. For assistance call Support at 1-800-867-5309, M - F, 9am - 8pm EST.</p>
                    </div>
                </div>
            </div>
            <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12 aem-GridColumn--tablet--12">
                <div className="social-offer">
                    <div className="offer-text">
                        <span>Give us a follow to SAVE 20% on your next order.</span>
                    </div>
                    <div className="social-icons">
                        <a href="/" aria-label="instagram"><img src={instagram} alt="instagram"/></a>
                        <a href="/" aria-label="facebook"><img src={facebbok} alt="facebook"/></a>
                        <a href="/" aria-label="twitter"><img src={twitter} alt="twitter"/></a>
                    </div>
                </div>
            </div>
        </section>
    );
}