import { useSelector} from "react-redux/es/exports";
import edit from "../../Images/edit-2.svg";
import help from "../../Images/help-circle.svg";
export default function Checkout(){
    const cart = useSelector((state) => state.cart);
    return(
          <section className="checkout aem-Grid aem-Grid--12">
            <div className="check-head">
                <h2>Checkout</h2>
                <hr />
            </div>
            <div className="aem-GridColumn aem-GridColumn--default--9 aem-GridColumn--phone--12 aem-GridColumn--tablet--12">
                <form className="check-form">
                    <h3>Guest Checkout</h3>
                    <span>Contact information</span>
                    <p>We'll use these details to keep you informed on your delivery.</p>
                    <div className="check-container">
                        <div className="check-items">
                            <label htmlFor="email">Email</label>
                            <input type="text" id="email" name="email" placeholder="abc@xyz.com"/>
                        </div>
                        <div className="check-items">
                            <label htmlFor="phone">Phone Number</label>
                            <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" placeholder="(222) 222-2222"/>
                        </div>
                    </div>
                    <span>1. Shipping Information</span>
                    <div className="check-container">
                        <div className="check-items">
                            <label htmlFor="country">Country</label>
                            <select id="country" name="country">
                                <option value="United States">United States</option>
                                <option value="India">India</option>
                            </select>
                        </div>
                    </div>
                    <div className="check-container">
                        <div className="check-items">
                            <label htmlFor="first-name">First Name</label>
                            <input type="text" id="first-name" name="first-name" placeholder="" />
                        </div>
                        <div className="check-items">
                            <label htmlFor="last-name">Last Name</label>
                            <input type="text" id="last-name" name="last-name" placeholder="" />
                        </div>
                    </div>
                    <div className="check-container">
                        <div className="check-items">
                            <label htmlFor="addres1">Street Address</label>
                            <input type="text" id="addres1" name="addres1" placeholder="" />
                        </div>
                        <div className="check-items">
                            <label htmlFor="addres2">Street Address 2</label>
                            <input type="text" id="addres2" name="addres2" placeholder="" />
                        </div>
                    </div>
                    <div className="check-container">
                        <div className="check-items">
                            <label htmlFor="city">City</label>
                            <input type="text" id="city" name="city" placeholder="" />
                        </div>
                        <div className="check-items state-zip" >
                            <div id="state">
                                <label htmlFor="state">State</label>
                                <select id="state" name="state">
                                    <option value="California">California</option>
                                    <option value="New York">New York</option>
                                </select>
                            </div>
                            <div id="zip">
                                <label htmlFor="zip">Zip</label>
                                <input type="text" id="zip" name="zip" placeholder="" />
                            </div>
                        </div>
                    </div>
                    <button>CONTINUE TO SHIPPING METHOD</button>
    
                    <div className="ship-info">
                        <div className="ship-info-head">
                            <span>Shipping Information</span>
                            <button aria-label="edit item"><img src={edit} alt="edit" />Edit item</button>
                        </div>
                        <div className="ship-info-details">
                            <p>q_farhan@gmail.com +1 (555) 229-3367</p>
                            <p>Qadim Farhan 1098 Wapello Street Altadena, California 91001 United States</p>
                        </div>
                    </div>

                    <span>2. Shipping Method</span>
                    <div className="ship-method">
                        <div className="ship-method-list">
                            <input type="radio" name="ship-method" value="Standard Shipping (4-8 business days via USPS) FREE" id="free"/>
                            <label htmlFor="free">Standard Shipping (4-8 business days via USPS) FREE</label>
                        </div>
                        <div className="ship-method-list">
                            <input type="radio" name="ship-method" value="Express Delivery (2-5 business days via USPS) $17.95" id="express"/>
                            <label htmlFor="express">Express Delivery (2-5 business days via USPS) $17.95</label>
                        </div>
                        <div className="ship-method-list">
                            <input type="radio" name="ship-method" value="Next Day Delivery (Next business days via FedEx) $53.61" id="next-day"/>
                            <label htmlFor="next-day">Next Day Delivery (Next business days via FedEx) $53.61</label>
                        </div>
                    </div>
                    <button>CONTINUE TO PAYMENT</button>

                    <div className="ship-info">
                        <div className="ship-info-head">
                            <span>Shipping Method</span>
                            <button aria-label="edit item"><img src={edit} alt="edit" />Edit item</button>
                        </div>
                        <div className="ship-info-details">
                            <p>Standard Shipping Est. delivery in 4 - 8 business days FREE</p>
                        </div>
                    </div>

                    <span>3. Payment Information</span>
                    <div className="payment-info">
                        <div className="ship-method-list">
                            <input type="radio" name="payment-type" value="credit card" id="credit-card" />
                            <label htmlFor="credit-card">Credit Card</label>
                        </div>
                        <div className="check-container">
                            <div className="check-items">
                                <label htmlFor="name-on-card">Name on Card</label>
                                <input type="text" id="name-on-card" name="name-on-card" placeholder="" />
                            </div>
                        </div>
                        <div className="check-container">
                            <div className="check-items">
                                <label htmlFor="credit-card-no">Credit Card Number</label>
                                <input type="text" id="credit-card-no" name="credit-card-no" placeholder="" />
                            </div>
                        </div>
                        <div className="check-container">
                            <div className="state-zip" >
                                <div id="state">
                                    <label htmlFor="expiration-date">Expiration Date</label>
                                    <input type="text" id="expiration-date" name="expiration-date" placeholder="" />
                                </div>
                                <div id="zip">
                                    <label htmlFor="cvv">CVV</label>
                                    <input type="text" id="cvv" name="cvv" placeholder="" /><img src={help} alt="help"/>
                                </div>
                            </div>
                        </div>
                        <div className="ship-method-list">
                            <input type="checkbox" name="Billing address same as shipping address" id="add-check" />
                            <label htmlFor="add-check">Billing address same as shipping address</label>
                        </div>
                        <div className="ship-method-list paypal">
                            <input type="radio" name="payment-type" value="paypal" id="paypal" />
                            <label htmlFor="paypal">PayPal</label>
                        </div>
                    </div>
                    <button>CONTINUE TO REVIEW ORDER</button>

                    <div className="ship-info">
                        <div className="ship-info-head">
                            <span>Payment Information</span>
                            <button aria-label="edit item"><img src={edit} alt="edit" />Edit item</button>
                        </div>
                        <div className="ship-info-details">
                            <p>Credit Card Visa ending in 4567</p>
                        </div>
                    </div>

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
                    <button id="place-order">PLACE ORDER</button>
                    <p id="terms">By clicking confirm order you agree to our <a href="/" aria-label="Terms and Conditions">Terms and Conditions</a></p>

                </form>
            </div>
            <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12 aem-GridColumn--tablet--12">
                <div className="exp-check">
                    <span>Sign in for Express Checkout</span>
                    <button>SIGN IN</button>
                </div>
                <div className="pricing-summary">
                    <h4>Pricing Summary</h4>
                    <span>Subtotal: ${cart.cartTotalAmount}</span>
                    <span>Coupon: $0</span>
                    <span>Gift Card: $0</span>
                    <span>Estimated Tax: $0</span>
                    <span>Estimated Shipping: FREE</span>
                    <span>Estimated Total: ${cart.cartTotalAmount}</span>
                </div>
            </div>
          </section>  
    );
}