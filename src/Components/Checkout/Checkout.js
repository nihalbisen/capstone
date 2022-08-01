import React, { useState } from "react";
import { useSelector} from "react-redux/es/exports";
import CartDetails from "./CartDetails";
import PaymentForm from "./PaymentForm";
import PaymentInfo from "./PaymentInfo";
import PaymentTitle from "./PaymentTitle";
import ShipMethodForm from "./ShipMethodForm";
import ShippingMethodInfo from "./ShipMethodInfo";
import ShipMethodTitle from "./ShipMethodTitle";
import ShippingInfo from "./ShippingInfo";
import ShippingInfoForm from "./ShppingInfoForm";
export default function Checkout(){
    const cart = useSelector((state) => state.cart);
    const [displayComp, setDisplayComp] = useState({
        ShippingForm: true,
        ShipMethodForm:false,
        shipDetails:false,
        Payment:false,
        PaymentDetails:false
      });
    
      
    return(
          <section className="checkout aem-Grid aem-Grid--12">
            <div className="check-head">
                <h2>Checkout</h2>
                <hr />
            </div>
            <div className="aem-GridColumn aem-GridColumn--default--9 aem-GridColumn--phone--12 aem-GridColumn--tablet--12">
                <div className="check-form">
                    <h3>Guest Checkout</h3>
                    {/* <ShippingInfoForm/>
                    <ShippingInfo/>
                    <ShipMethodTitle/>
                    <ShipMethodForm/>
                    <ShippingMethodInfo/>
                    <PaymentTitle/>
                    <PaymentForm/>
                    <PaymentInfo/>
                    <CartDetails/> */}
                    
                {/*----------------shipping form---------- */}
                    {displayComp.ShippingForm ? (
                        <>
                            <ShippingInfoForm setDisplayComp={setDisplayComp} />
                            <ShipMethodTitle/>
                            <PaymentTitle />
                        </>
                    ) : (
                        <ShippingInfo setDisplayComp={setDisplayComp}/>
                    )}

                 {/*----------------shipping Method---------- */}
                    {displayComp.ShipMethodForm ? (
                        <>
                            <ShipMethodForm setDisplayComp={setDisplayComp} />
                            <PaymentTitle />
                        </>
                    ) : displayComp.shipDetails ? (
                        <>
                        <ShippingMethodInfo setDisplayComp={setDisplayComp} />
                        
                        </>
                    ):(
                        console.log("order-Success takes time")
                    )}
                
                 {/*----------------Payment---------- */}
                    {displayComp.Payment ? (
                        <>
                            <PaymentForm setDisplayComp={setDisplayComp} />
                        </>
                    ) : displayComp.PaymentDetails ?(
                        <>
                        <ShippingMethodInfo setDisplayComp={setDisplayComp} />
                        <PaymentInfo setDisplayComp={setDisplayComp} />
                        <CartDetails/>
                        </>
                    ):(console.log("order-Success takes time"))}
                </div>
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