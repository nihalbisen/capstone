import React, { useState} from "react";
import help from "../../Images/help-circle.svg";
export default function PaymentForm({setDisplayComp}){
    const [state, setState] = useState({
        paymentType: '',
        name:'',
        creditCardNum:'',
        expireDate:'',
        cvv:'',
        billingAddressSameAsShippingAddress:''
    });

    const onSubmit = (e) => {
        const shipInfoText = document.querySelector('#shipInfoHelp');
        
        if(Object.values(state.paymentType && state.name && state.creditCardNum && state.expireDate && state.cvv && state.billingAddressSameAsShippingAddress).length>0)
        {   
            shipInfoText.innerHTML = "";
            console.log("form sucessfully submitted");
            localStorage.setItem('PaymentInfo', JSON.stringify(state));
            setDisplayComp({Payment: false, PaymentDetails: true})
        }
        else{
            console.log("Please fill all the fields!");
            shipInfoText.innerHTML = "Please fill all the fields!";
            shipInfoText.style = "color:#C9252D";
        }
    }
    
    return(
        <>
            <span>3. Payment Information</span>
            <span id="shipInfoHelp"></span>
            <div className="payment-info">
                <div className="ship-method-list">
                    <input type="radio" name="payment-type" value="Credit Card" id="credit-card"  onChange={ e => setState({...state, paymentType: e.target.value})}/>
                    <label htmlFor="credit-card">Credit Card</label>
                </div>
                <div className="check-container">
                    <div className="check-items">
                        <label htmlFor="name-on-card">Name on Card</label>
                        <input type="text" id="name-on-card" name="name-on-card" placeholder="" onChange={ e => setState({...state, name: e.target.value})}/>
                    </div>
                </div>
                <div className="check-container">
                    <div className="check-items">
                        <label htmlFor="credit-card-no">Credit Card Number</label>
                        <input type="text" id="credit-card-no" name="credit-card-no" placeholder="" onChange={ e => setState({...state, creditCardNum: e.target.value})}/>
                    </div>
                </div>
                <div className="check-container">
                    <div className="state-zip" >
                        <div id="state-ct">
                            <label htmlFor="expiration-date">Expiration Date</label>
                            <input type="text" id="expiration-date" name="expiration-date" placeholder="" onChange={ e => setState({...state, expireDate: e.target.value})}/>
                        </div>
                        <div id="zip-ct">
                            <label htmlFor="cvv">CVV</label>
                            <input type="text" id="cvv" name="cvv" placeholder="" onChange={ e => setState({...state, cvv: e.target.value})} /><img src={help} alt="help" />
                        </div>
                    </div>
                </div>
                <div className="ship-method-list">
                    <input type="checkbox" name="Billing address same as shipping address" id="add-check" value="yes" onChange={ e => setState({...state, billingAddressSameAsShippingAddress: e.target.value})}/>
                    <label htmlFor="add-check">Billing address same as shipping address</label>
                </div>
                <div className="ship-method-list border-info">
                    <input type="radio" name="payment-type" value="PayPal" id="paypal" onClick={ e => setState({...state, paymentType: e.target.value})}/>
                    <label htmlFor="paypal">PayPal</label>
                </div>
            </div>
            <button onClick={onSubmit}>CONTINUE TO REVIEW ORDER</button>
        </>
    );
}