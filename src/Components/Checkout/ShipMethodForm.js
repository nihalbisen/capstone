import React, { useState} from "react";
export default function ShipMethodForm({setDisplayComp}){

    const [state, setState] = useState({
        method: '',
    });
    
    const onSubmit = (e) => {
        const shipInfoText = document.querySelector('#shipInfoHelp');
        if(Object.values(state.method).length>0)
        {   
            shipInfoText.innerHTML = "";
            console.log("form sucessfully submitted");
            localStorage.setItem('ShippingMethod', JSON.stringify(state));
            setDisplayComp({ShipMethodForm: false, shipDetails: true, Payment:true })

        }
        else{
            console.log("Please select the shipping method");
            shipInfoText.innerHTML = "Please select the shipping method!";
            shipInfoText.style = "color:#C9252D";
        }
    }

    return(
        <>
            <span>2. Shipping Method</span>
            <span id="shipInfoHelp"></span>
            <div className="ship-method">
                <div className="ship-method-list">
                    <input type="radio" name="ship-method" value="Standard Shipping (4-8 business days via USPS) FREE" id="free" onClick={ e => setState({...state, method:e.target.value})}/>
                    <label htmlFor="free">Standard Shipping (4-8 business days via USPS) FREE</label>
                </div>
                <div className="ship-method-list">
                    <input type="radio" name="ship-method" value="Express Delivery (2-5 business days via USPS) $17.95" id="express" onClick={ e => setState({...state, method: e.target.value})}/>
                    <label htmlFor="express">Express Delivery (2-5 business days via USPS) $17.95</label>
                </div>
                <div className="ship-method-list">
                    <input type="radio" name="ship-method" value="Next Day Delivery (Next business days via FedEx) $53.61" id="next-day" onClick={ e => setState({...state, method: e.target.value})}/>
                    <label htmlFor="next-day">Next Day Delivery (Next business days via FedEx) $53.61</label>
                </div>
            </div>
            <button onClick={onSubmit} >CONTINUE TO PAYMENT</button>
        </>
    );
}