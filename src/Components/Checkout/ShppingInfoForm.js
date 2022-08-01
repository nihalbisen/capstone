import React, { useState} from "react";

export default function ShippingInfoForm({setDisplayComp}){
    
    const [state, setState] = useState({
        email: '',
        phone: '',
        country: '',
        firstName: '',
        lastName: '',
        address1:'',
        address2:'',
        city:'',
        state:'',
        zip:'',
        orderno:Math.floor(Math.random() * 10000000),
    });

    const onSubmit = (e) => {
        const shipInfoText = document.querySelector('#shipInfoHelp');
        if(Object.values(state.email && state.phone && state.country && state.firstName && state.lastName && state.address1 && state.address2 && state.city && state.state && state.zip).length>0)
        {   
            shipInfoText.innerHTML = "";
            console.log("form sucessfully submitted");
            localStorage.setItem('shippingInfo', JSON.stringify(state));
            setDisplayComp({ShippingForm: false, ShipMethodForm: true })

        }
        else{
            console.log("Please fill all the field");
            shipInfoText.innerHTML = "Please fill all the fields!";
            shipInfoText.style = "color:#C9252D";
        }
        //e.preventDefault()
        // localStorage.setItem('shippingInfo', JSON.stringify(state));
        // setDisplayComp({ShippingForm: false, ShipMethodForm: true })
        
    }

   
    
    const validateEmail = (e) => {
        const submitForm = document.querySelector('#submitForm');
        const emailText = document.querySelector('#emailHelp');
        // eslint-disable-next-line
        const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (e.target.value.match(mailformat)) {
            emailText.innerHTML = "Valid email address!";
            emailText.style = "color:green";
            document.querySelector("#email").style.border="2px solid green";
            submitForm.removeAttribute("disabled", true);
            setState({...state, email: e.target.value})
        }
        else {
            emailText.innerHTML = "You have entered an invalid email address!";
            emailText.style = "color:#C9252D";
            document.querySelector("#email").style.border="2px solid #EC5B62";
            submitForm.setAttribute("disabled", true);
        }
    }

    const validatePhone = (e) => {
        const submitForm = document.querySelector('#submitForm');
        const phoneText = document.querySelector('#phoneHelp');
        const phoneformat = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        if (e.target.value.match(phoneformat)) {
            phoneText.innerHTML = "valid phone number!";
            phoneText.style = "color:green";
            document.querySelector("#phone").style.border="2px solid green";
            submitForm.removeAttribute("disabled", true);
            setState({...state, phone: e.target.value})
        }
        else {
            phoneText.innerHTML = "You have entered an invalid phone number!";
            phoneText.style = "color:#C9252D";
            document.querySelector("#phone").style.border="2px solid #EC5B62";
            submitForm.setAttribute("disabled", true);
        }
    }

    const validateCountry = (e) => {
        const submitForm = document.querySelector('#submitForm');
        const countryText = document.querySelector('#countryHelp');
        if (e.target.value.length > 0) {
            countryText.innerHTML = "";
            document.querySelector("#country").style.border="2px solid green";
            submitForm.removeAttribute("disabled", true);
            setState({...state, country: e.target.value})
        }
        else {
            countryText.innerHTML = "Please select the country";
            countryText.style = "color:#C9252D";
            document.querySelector("#country").style.border="2px solid #EC5B62";
            submitForm.setAttribute("disabled", true);
        }
    }

    const validateFirstName = (e) => {
        const submitForm = document.querySelector('#submitForm');
        const firstNameText = document.querySelector('#firstNameHelp');
        if (e.target.value.length > 0) {
            firstNameText.innerHTML = "";
            document.querySelector("#first-name").style.border="2px solid green";
            submitForm.removeAttribute("disabled", true);
            setState({...state, firstName: e.target.value})
        }
        else {
            firstNameText.innerHTML = "Please enter first name";
            firstNameText.style = "color:#C9252D";
            document.querySelector("#first-name").style.border="2px solid #EC5B62";
            submitForm.setAttribute("disabled", true);
        }
    }

    const validateLastName = (e) => {
        const submitForm = document.querySelector('#submitForm');
        const lastNameText = document.querySelector('#lastNameHelp');
        if (e.target.value.length > 0) {
            lastNameText.innerHTML = "";
            document.querySelector("#last-name").style.border="2px solid green";
            submitForm.removeAttribute("disabled", true);
            setState({...state, lastName: e.target.value})
        }
        else {
            lastNameText.innerHTML = "Please enter last name";
            lastNameText.style = "color:#C9252D";
            document.querySelector("#last-name").style.border="2px solid #EC5B62";
            submitForm.setAttribute("disabled", true);
        }
    }

    const validateAddress1 = (e) => {
        const submitForm = document.querySelector('#submitForm');
        const address1Text = document.querySelector('#add1Help');
        if (e.target.value.length > 0) {
            address1Text.innerHTML = "";
            document.querySelector("#address1").style.border="2px solid green";
            submitForm.removeAttribute("disabled", true);
            setState({...state, address1: e.target.value})
        }
        else {
            address1Text.innerHTML = "Please enter address";
            address1Text.style = "color:#C9252D";
            document.querySelector("#address1").style.border="2px solid #EC5B62";
            submitForm.setAttribute("disabled", true);
        }
    }

    const validateAddress2 = (e) => {
        const submitForm = document.querySelector('#submitForm');
        const address2Text = document.querySelector('#add2Help');
        if (e.target.value.length > 0) {
            address2Text.innerHTML = "";
            document.querySelector("#address2").style.border="2px solid green";
            submitForm.removeAttribute("disabled", true);
            setState({...state, address2: e.target.value})
        }
        else {
            address2Text.innerHTML = "Please enter address";
            address2Text.style = "color:#C9252D";
            document.querySelector("#address2").style.border="2px solid #EC5B62";
            submitForm.setAttribute("disabled", true);
        }
    }

    const validateCity = (e) => {
        const submitForm = document.querySelector('#submitForm');
        const cityText = document.querySelector('#cityHelp');
        if (e.target.value.length > 0) {
            cityText.innerHTML = "";
            document.querySelector("#city").style.border="2px solid green";
            submitForm.removeAttribute("disabled", true);
            setState({...state, city: e.target.value})
        }
        else {
            cityText.innerHTML = "Please enter City";
            cityText.style = "color:#C9252D";
            document.querySelector("#city").style.border="2px solid #EC5B62";
            submitForm.setAttribute("disabled", true);
        }
    }

    const validateState = (e) => {
        const submitForm = document.querySelector('#submitForm');
        const steteText = document.querySelector('#stateHelp');
        if (e.target.value.length > 0) {
            steteText.innerHTML = "";
            document.querySelector("#state").style.border="2px solid green";
            submitForm.removeAttribute("disabled", true);
            setState({...state, state: e.target.value})
        }
        else {
            steteText.innerHTML = "Please select state";
            steteText.style = "color:#C9252D";
            document.querySelector("#state").style.border="2px solid #EC5B62";
            submitForm.setAttribute("disabled", true);
        }
    }

    const validateZip = (e) => {
        const submitForm = document.querySelector('#submitForm');
        const steteText = document.querySelector('#stateHelp');
        const zipformat = /(^\d{6}$)|(^\d{5}-\d{4}$)/;
        if (e.target.value.match(zipformat)) {
            steteText.innerHTML = "";
            document.querySelector("#zip").style.border="2px solid green";
            submitForm.removeAttribute("disabled", true);
            setState({...state, zip: e.target.value})
        }
        else {
            steteText.innerHTML = "Please enter valid zip code";
            steteText.style = "color:#C9252D";
            document.querySelector("#zip").style.border="2px solid #EC5B62";
            submitForm.setAttribute("disabled", true);
        }
    }


    return(
        < >
            <span>Contact information</span>
            <p>We'll use these details to keep you informed on your delivery.</p>
            <span id="shipInfoHelp"></span>
            <div className="check-container">
                <div className="check-items">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" value={state.email} placeholder="abc@xyz.com" onChange={validateEmail} />
                    <span id="emailHelp"></span>
                </div>
                <div className="check-items">
                    <label htmlFor="phone">Phone Number</label>
                    <input type="tel" id="phone" name="phone"  placeholder="(222) 222-2222" onChange={validatePhone} />
                    <span id="phoneHelp"></span>
                </div>
            </div>
            <span>1. Shipping Information</span>
            <div className="check-container">
                <div className="check-items">
                    <label htmlFor="country">Country</label>
                    <select id="country" name="country" onClick={validateCountry} >
                        <option value=""></option>
                        <option value="United States">United States</option>
                        <option value="India">England</option>
                    </select>
                    <span id="countryHelp"></span>
                </div>
            </div>
            <div className="check-container">
                <div className="check-items">
                    <label htmlFor="first-name">First Name</label>
                    <input type="text" id="first-name" name="first-name" placeholder="" onChange={validateFirstName} />
                    <span id="firstNameHelp"></span>
                </div>
                <div className="check-items">
                    <label htmlFor="last-name">Last Name</label>
                    <input type="text" id="last-name" name="last-name" placeholder=""  onChange={validateLastName} />
                    <span id="lastNameHelp"></span>
                </div>
            </div>
            <div className="check-container">
                <div className="check-items">
                    <label htmlFor="addres1">Street Address</label>
                    <input type="text" id="address1" name="address1" placeholder=""  onChange={validateAddress1} />
                    <span id="add1Help"></span>
                </div>
                <div className="check-items">
                    <label htmlFor="address2">Street Address 2</label>
                    <input type="text" id="address2" name="address2" placeholder="" onChange={validateAddress2} />
                    <span id="add2Help"></span>
                </div>
            </div>
            <div className="check-container">
                <div className="check-items">
                    <label htmlFor="city">City</label>
                    <input type="text" id="city" name="city" placeholder=""  onChange={validateCity} />
                    <span id="cityHelp"></span>
                </div>
                <div className="check-items state-zip" >
                    <div id="state-ct">
                        <label htmlFor="state">State</label>
                        <select id="state" name="state" onClick={validateState} >
                            <option></option>
                            <option value="California">California</option>
                            <option value="New York">New York</option>
                            <option value="South East">South East</option>
                        </select>
                    </div>
                    
                    <div id="zip-ct">
                        <label htmlFor="zip">Zip</label>
                        <input type="text" id="zip" name="zip" placeholder="" onChange={validateZip} />
                    </div>
                    <br/>
                    <span id="stateHelp"></span>
                </div>
            </div>
            <button onClick={onSubmit} id="submitForm">CONTINUE TO SHIPPING METHOD</button>
        </>
    );
}