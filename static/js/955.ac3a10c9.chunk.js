"use strict";(self.webpackChunkcapstone=self.webpackChunkcapstone||[]).push([[955],{3955:function(e,t,s){s.r(t),s.d(t,{default:function(){return f}});var i=s(885),n=s(2791),r=s(4802),a=s(6871),l=s(184);function d(){var e,t=(0,r.v9)((function(e){return e.cart})),s=(0,a.s0)();return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("div",{className:"ship-info",children:[(0,l.jsx)("div",{className:"ship-info-head",children:(0,l.jsxs)("span",{children:[t.cartItems.length," items in your order"]})}),(0,l.jsx)("div",{className:"ship-info-details",children:null===(e=t.cartItems)||void 0===e?void 0:e.map((function(e){return(0,l.jsxs)("div",{className:"check-cart-products",children:[(0,l.jsx)("img",{src:e.image,alt:e.title}),(0,l.jsxs)("div",{className:"check-cart-details",children:[(0,l.jsx)("span",{children:e.title}),(0,l.jsx)("span",{children:"Size : Medium"}),(0,l.jsx)("span",{children:"Color : Storm"}),(0,l.jsxs)("span",{children:["Quantity: ",e.cartQuantity]})]})]},e.id)}))})]}),(0,l.jsx)("button",{id:"place-order",onClick:function(){s("order-success/")},children:"PLACE ORDER"}),(0,l.jsxs)("p",{id:"terms",children:["By clicking confirm order you agree to our ",(0,l.jsx)("a",{href:"/","aria-label":"Terms and Conditions",children:"Terms and Conditions"})]})]})}var c=s(1413);var o=s.p+"static/media/help-circle.6e768c3bac19f3986961e860b1d13f2d.svg";function m(e){var t=e.setDisplayComp,s=(0,n.useState)({paymentType:"Credit Card",name:"",creditCardNum:"4567",expireDate:"",cvv:"",billingAddressSameAsShippingAddress:""}),r=(0,i.Z)(s,2),a=r[0],d=r[1];return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("span",{children:"3. Payment Information"}),(0,l.jsx)("span",{id:"shipInfoHelp"}),(0,l.jsxs)("div",{className:"payment-info",children:[(0,l.jsxs)("div",{className:"ship-method-list",children:[(0,l.jsx)("input",{type:"radio",name:"payment-type",value:"Credit Card",id:"credit-card",onChange:function(e){return d((0,c.Z)((0,c.Z)({},a),{},{paymentType:e.target.value}))}}),(0,l.jsx)("label",{htmlFor:"credit-card",children:"Credit Card"})]}),(0,l.jsx)("div",{className:"check-container",children:(0,l.jsxs)("div",{className:"check-items",children:[(0,l.jsx)("label",{htmlFor:"name-on-card",children:"Name on Card"}),(0,l.jsx)("input",{type:"text",id:"name-on-card",name:"name-on-card",placeholder:"",onChange:function(e){return d((0,c.Z)((0,c.Z)({},a),{},{name:e.target.value}))}})]})}),(0,l.jsx)("div",{className:"check-container",children:(0,l.jsxs)("div",{className:"check-items",children:[(0,l.jsx)("label",{htmlFor:"credit-card-no",children:"Credit Card Number"}),(0,l.jsx)("input",{type:"text",id:"credit-card-no",name:"credit-card-no",placeholder:"",onChange:function(e){return d((0,c.Z)((0,c.Z)({},a),{},{creditCardNum:e.target.value}))}})]})}),(0,l.jsx)("div",{className:"check-container",children:(0,l.jsxs)("div",{className:"state-zip",children:[(0,l.jsxs)("div",{id:"state-ct",children:[(0,l.jsx)("label",{htmlFor:"expiration-date",children:"Expiration Date"}),(0,l.jsx)("input",{type:"text",id:"expiration-date",name:"expiration-date",placeholder:"",onChange:function(e){return d((0,c.Z)((0,c.Z)({},a),{},{expireDate:e.target.value}))}})]}),(0,l.jsxs)("div",{id:"zip-ct",children:[(0,l.jsx)("label",{htmlFor:"cvv",children:"CVV"}),(0,l.jsx)("input",{type:"text",id:"cvv",name:"cvv",placeholder:"",onChange:function(e){return d((0,c.Z)((0,c.Z)({},a),{},{cvv:e.target.value}))}}),(0,l.jsx)("img",{src:o,alt:"help"})]})]})}),(0,l.jsxs)("div",{className:"ship-method-list",children:[(0,l.jsx)("input",{type:"checkbox",name:"Billing address same as shipping address",id:"add-check",value:"yes",onChange:function(e){return d((0,c.Z)((0,c.Z)({},a),{},{billingAddressSameAsShippingAddress:e.target.value}))}}),(0,l.jsx)("label",{htmlFor:"add-check",children:"Billing address same as shipping address"})]}),(0,l.jsxs)("div",{className:"ship-method-list border-info",children:[(0,l.jsx)("input",{type:"radio",name:"payment-type",value:"PayPal",id:"paypal",onClick:function(e){return d((0,c.Z)((0,c.Z)({},a),{},{paymentType:e.target.value}))}}),(0,l.jsx)("label",{htmlFor:"paypal",children:"PayPal"})]})]}),(0,l.jsx)("button",{onClick:function(e){document.querySelector("#shipInfoHelp").innerHTML="",console.log("form sucessfully submitted"),localStorage.setItem("PaymentInfo",JSON.stringify(a)),t({Payment:!1,PaymentDetails:!0})},children:"CONTINUE TO REVIEW ORDER"})]})}var h=s.p+"static/media/edit-2.f1553a709f4deb1bd7806b8006f7f878.svg";function p(e){var t=e.setDisplayComp,s=localStorage.getItem("PaymentInfo"),i=JSON.parse(s),n=i.paymentType,r=i.creditCardNum;return(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)("div",{className:"ship-info",children:[(0,l.jsxs)("div",{className:"ship-info-head",children:[(0,l.jsx)("span",{children:"Payment Information"}),(0,l.jsxs)("button",{"aria-label":"edit item",onClick:function(){t({Payment:!0,PaymentDetails:!1})},children:[(0,l.jsx)("img",{src:h,alt:"edit"}),"Edit item"]})]}),(0,l.jsx)("div",{className:"ship-info-details",children:(0,l.jsxs)("p",{children:[n," Visa ending in ",r]})})]})})}function u(){return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("div",{className:"border-info",children:(0,l.jsx)("p",{children:"3. Payment Information"})})})}function x(e){var t=e.setDisplayComp,s=(0,n.useState)({method:"Standard Shipping Est. delivery in 4 - 8 business days FREE"}),r=(0,i.Z)(s,2),a=r[0],d=r[1];return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("span",{children:"2. Shipping Method"}),(0,l.jsx)("span",{id:"shipInfoHelp"}),(0,l.jsxs)("div",{className:"ship-method",children:[(0,l.jsxs)("div",{className:"ship-method-list",children:[(0,l.jsx)("input",{type:"radio",name:"ship-method",value:"Standard Shipping (4-8 business days via USPS) FREE",id:"free",onClick:function(e){return d((0,c.Z)((0,c.Z)({},a),{},{method:e.target.value}))}}),(0,l.jsx)("label",{htmlFor:"free",children:"Standard Shipping (4-8 business days via USPS) FREE"})]}),(0,l.jsxs)("div",{className:"ship-method-list",children:[(0,l.jsx)("input",{type:"radio",name:"ship-method",value:"Express Delivery (2-5 business days via USPS) $17.95",id:"express",onClick:function(e){return d((0,c.Z)((0,c.Z)({},a),{},{method:e.target.value}))}}),(0,l.jsx)("label",{htmlFor:"express",children:"Express Delivery (2-5 business days via USPS) $17.95"})]}),(0,l.jsxs)("div",{className:"ship-method-list",children:[(0,l.jsx)("input",{type:"radio",name:"ship-method",value:"Next Day Delivery (Next business days via FedEx) $53.61",id:"next-day",onClick:function(e){return d((0,c.Z)((0,c.Z)({},a),{},{method:e.target.value}))}}),(0,l.jsx)("label",{htmlFor:"next-day",children:"Next Day Delivery (Next business days via FedEx) $53.61"})]})]}),(0,l.jsx)("button",{onClick:function(e){var s=document.querySelector("#shipInfoHelp");Object.values(a.method).length>0?(s.innerHTML="",console.log("form sucessfully submitted"),localStorage.setItem("ShippingMethod",JSON.stringify(a)),t({ShipMethodForm:!1,shipDetails:!0,Payment:!0})):(console.log("Please select the shipping method"),s.innerHTML="Please select the shipping method!",s.style="color:#C9252D")},children:"CONTINUE TO PAYMENT"})]})}function y(e){var t=e.setDisplayComp,s=localStorage.getItem("ShippingMethod"),i=JSON.parse(s).method;return(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)("div",{className:"ship-info",children:[(0,l.jsxs)("div",{className:"ship-info-head",children:[(0,l.jsx)("span",{children:"Shipping Method"}),(0,l.jsxs)("button",{"aria-label":"edit item",onClick:function(){t({ShipMethodForm:!0,shipDetails:!1})},children:[(0,l.jsx)("img",{src:h,alt:"edit"}),"Edit item"]})]}),(0,l.jsx)("div",{className:"ship-info-details",children:(0,l.jsx)("p",{children:i})})]})})}function j(){return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("div",{className:"border-info",children:(0,l.jsx)("p",{children:"2. Shipping Method"})})})}function v(e){var t=e.setDisplayComp,s=localStorage.getItem("shippingInfo"),i=JSON.parse(s),n=i.email,r=i.phone,a=i.firstName,d=i.lastName,c=i.address1,o=i.address2,m=i.zip,p=i.city,u=i.state,x=i.country;return(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)("div",{className:"ship-info",children:[(0,l.jsxs)("div",{className:"ship-info-head",children:[(0,l.jsx)("span",{children:"Shipping Information"}),(0,l.jsxs)("button",{"aria-label":"edit item",onClick:function(){t({ShippingForm:!0,ShippingFormEdit:!0})},children:[(0,l.jsx)("img",{src:h,alt:"edit"}),"Edit item"]})]}),(0,l.jsxs)("div",{className:"ship-info-details",children:[(0,l.jsxs)("p",{children:[n," ",r]}),(0,l.jsxs)("p",{children:[a," ",d," ",c," ",o," ",p," ",m," ",u," ",x," "]})]})]})})}function g(e){var t=e.setDisplayComp,s=(0,n.useState)({email:"q_farhan@gmail.com",phone:"+1 (555) 229-3367",country:"United States",firstName:"Qadim",lastName:"Farhan",address1:"1098",address2:"Wapello",city:"Street",state:"California",zip:"91001",orderno:Math.floor(1e7*Math.random())}),r=(0,i.Z)(s,2),a=r[0],d=r[1];return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("span",{children:"Contact information"}),(0,l.jsx)("p",{children:"We'll use these details to keep you informed on your delivery."}),(0,l.jsx)("span",{id:"shipInfoHelp"}),(0,l.jsxs)("div",{className:"check-container",children:[(0,l.jsxs)("div",{className:"check-items",children:[(0,l.jsx)("label",{htmlFor:"email",children:"Email"}),(0,l.jsx)("input",{type:"email",id:"email",name:"email",value:a.email,placeholder:"abc@xyz.com",onChange:function(e){var t=document.querySelector("#emailHelp");e.target.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)?(t.innerHTML="Valid email address!",t.style="color:green",document.querySelector("#email").style.border="2px solid green",d((0,c.Z)((0,c.Z)({},a),{},{email:e.target.value}))):(t.innerHTML="You have entered an invalid email address!",t.style="color:#C9252D",document.querySelector("#email").style.border="2px solid #EC5B62")}}),(0,l.jsx)("span",{id:"emailHelp"})]}),(0,l.jsxs)("div",{className:"check-items",children:[(0,l.jsx)("label",{htmlFor:"phone",children:"Phone Number"}),(0,l.jsx)("input",{type:"tel",id:"phone",name:"phone",placeholder:"(222) 222-2222",onChange:function(e){var t=document.querySelector("#submitForm"),s=document.querySelector("#phoneHelp");e.target.value.match(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/)?(s.innerHTML="valid phone number!",s.style="color:green",document.querySelector("#phone").style.border="2px solid green",d((0,c.Z)((0,c.Z)({},a),{},{phone:e.target.value}))):(s.innerHTML="You have entered an invalid phone number!",s.style="color:#C9252D",document.querySelector("#phone").style.border="2px solid #EC5B62",t.setAttribute("disabled",!0))}}),(0,l.jsx)("span",{id:"phoneHelp"})]})]}),(0,l.jsx)("span",{children:"1. Shipping Information"}),(0,l.jsx)("div",{className:"check-container",children:(0,l.jsxs)("div",{className:"check-items",children:[(0,l.jsx)("label",{htmlFor:"country",children:"Country"}),(0,l.jsxs)("select",{id:"country",name:"country",onClick:function(e){var t=document.querySelector("#submitForm"),s=document.querySelector("#countryHelp");e.target.value.length>0?(s.innerHTML="",document.querySelector("#country").style.border="2px solid green",d((0,c.Z)((0,c.Z)({},a),{},{country:e.target.value}))):(s.innerHTML="Please select the country",s.style="color:#C9252D",document.querySelector("#country").style.border="2px solid #EC5B62",t.setAttribute("disabled",!0))},children:[(0,l.jsx)("option",{value:""}),(0,l.jsx)("option",{value:"United States",children:"United States"}),(0,l.jsx)("option",{value:"India",children:"England"})]}),(0,l.jsx)("span",{id:"countryHelp"})]})}),(0,l.jsxs)("div",{className:"check-container",children:[(0,l.jsxs)("div",{className:"check-items",children:[(0,l.jsx)("label",{htmlFor:"first-name",children:"First Name"}),(0,l.jsx)("input",{type:"text",id:"first-name",name:"first-name",placeholder:"",onChange:function(e){var t=document.querySelector("#submitForm"),s=document.querySelector("#firstNameHelp");e.target.value.length>0?(s.innerHTML="",document.querySelector("#first-name").style.border="2px solid green",d((0,c.Z)((0,c.Z)({},a),{},{firstName:e.target.value}))):(s.innerHTML="Please enter first name",s.style="color:#C9252D",document.querySelector("#first-name").style.border="2px solid #EC5B62",t.setAttribute("disabled",!0))}}),(0,l.jsx)("span",{id:"firstNameHelp"})]}),(0,l.jsxs)("div",{className:"check-items",children:[(0,l.jsx)("label",{htmlFor:"last-name",children:"Last Name"}),(0,l.jsx)("input",{type:"text",id:"last-name",name:"last-name",placeholder:"",onChange:function(e){var t=document.querySelector("#submitForm"),s=document.querySelector("#lastNameHelp");e.target.value.length>0?(s.innerHTML="",document.querySelector("#last-name").style.border="2px solid green",d((0,c.Z)((0,c.Z)({},a),{},{lastName:e.target.value}))):(s.innerHTML="Please enter last name",s.style="color:#C9252D",document.querySelector("#last-name").style.border="2px solid #EC5B62",t.setAttribute("disabled",!0))}}),(0,l.jsx)("span",{id:"lastNameHelp"})]})]}),(0,l.jsxs)("div",{className:"check-container",children:[(0,l.jsxs)("div",{className:"check-items",children:[(0,l.jsx)("label",{htmlFor:"addres1",children:"Street Address"}),(0,l.jsx)("input",{type:"text",id:"address1",name:"address1",placeholder:"",onChange:function(e){var t=document.querySelector("#submitForm"),s=document.querySelector("#add1Help");e.target.value.length>0?(s.innerHTML="",document.querySelector("#address1").style.border="2px solid green",d((0,c.Z)((0,c.Z)({},a),{},{address1:e.target.value}))):(s.innerHTML="Please enter address",s.style="color:#C9252D",document.querySelector("#address1").style.border="2px solid #EC5B62",t.setAttribute("disabled",!0))}}),(0,l.jsx)("span",{id:"add1Help"})]}),(0,l.jsxs)("div",{className:"check-items",children:[(0,l.jsx)("label",{htmlFor:"address2",children:"Street Address 2"}),(0,l.jsx)("input",{type:"text",id:"address2",name:"address2",placeholder:"",onChange:function(e){var t=document.querySelector("#submitForm"),s=document.querySelector("#add2Help");e.target.value.length>0?(s.innerHTML="",document.querySelector("#address2").style.border="2px solid green",d((0,c.Z)((0,c.Z)({},a),{},{address2:e.target.value}))):(s.innerHTML="Please enter address",s.style="color:#C9252D",document.querySelector("#address2").style.border="2px solid #EC5B62",t.setAttribute("disabled",!0))}}),(0,l.jsx)("span",{id:"add2Help"})]})]}),(0,l.jsxs)("div",{className:"check-container",children:[(0,l.jsxs)("div",{className:"check-items",children:[(0,l.jsx)("label",{htmlFor:"city",children:"City"}),(0,l.jsx)("input",{type:"text",id:"city",name:"city",placeholder:"",onChange:function(e){var t=document.querySelector("#submitForm"),s=document.querySelector("#cityHelp");e.target.value.length>0?(s.innerHTML="",document.querySelector("#city").style.border="2px solid green",d((0,c.Z)((0,c.Z)({},a),{},{city:e.target.value}))):(s.innerHTML="Please enter City",s.style="color:#C9252D",document.querySelector("#city").style.border="2px solid #EC5B62",t.setAttribute("disabled",!0))}}),(0,l.jsx)("span",{id:"cityHelp"})]}),(0,l.jsxs)("div",{className:"check-items state-zip",children:[(0,l.jsxs)("div",{id:"state-ct",children:[(0,l.jsx)("label",{htmlFor:"state",children:"State"}),(0,l.jsxs)("select",{id:"state",name:"state",onClick:function(e){var t=document.querySelector("#submitForm"),s=document.querySelector("#stateHelp");e.target.value.length>0?(s.innerHTML="",document.querySelector("#state").style.border="2px solid green",d((0,c.Z)((0,c.Z)({},a),{},{state:e.target.value}))):(s.innerHTML="Please select state",s.style="color:#C9252D",document.querySelector("#state").style.border="2px solid #EC5B62",t.setAttribute("disabled",!0))},children:[(0,l.jsx)("option",{}),(0,l.jsx)("option",{value:"California",children:"California"}),(0,l.jsx)("option",{value:"New York",children:"New York"}),(0,l.jsx)("option",{value:"South East",children:"South East"})]})]}),(0,l.jsxs)("div",{id:"zip-ct",children:[(0,l.jsx)("label",{htmlFor:"zip",children:"Zip"}),(0,l.jsx)("input",{type:"text",id:"zip",name:"zip",placeholder:"",onChange:function(e){var t=document.querySelector("#submitForm"),s=document.querySelector("#stateHelp");e.target.value.match(/(^\d{6}$)|(^\d{5}-\d{4}$)/)?(s.innerHTML="",document.querySelector("#zip").style.border="2px solid green",d((0,c.Z)((0,c.Z)({},a),{},{zip:e.target.value}))):(s.innerHTML="Please enter valid zip code",s.style="color:#C9252D",document.querySelector("#zip").style.border="2px solid #EC5B62",t.setAttribute("disabled",!0))}})]}),(0,l.jsx)("br",{}),(0,l.jsx)("span",{id:"stateHelp"})]})]}),(0,l.jsx)("button",{onClick:function(e){var s=document.querySelector("#cityHelp");Object.values(a.email&&a.phone&&a.country&&a.firstName&&a.lastName&&a.address1&&a.address2&&a.city&&a.state&&a.zip).length>0?(s.innerHTML="",console.log("form sucessfully submitted"),localStorage.setItem("shippingInfo",JSON.stringify(a)),t({ShippingForm:!1,ShipMethodForm:!0})):(console.log("Please fill all the field"),s.innerHTML="Please fill all the fields!",s.style="color:#C9252D")},id:"submitForm",children:"CONTINUE TO SHIPPING METHOD"})]})}function f(){var e=(0,r.v9)((function(e){return e.cart})),t=(0,n.useState)({ShippingForm:!0,ShipMethodForm:!1,shipDetails:!1,Payment:!1,PaymentDetails:!1}),s=(0,i.Z)(t,2),a=s[0],c=s[1];return(0,l.jsxs)("section",{className:"checkout aem-Grid aem-Grid--12",children:[(0,l.jsxs)("div",{className:"check-head",children:[(0,l.jsx)("h2",{children:"Checkout"}),(0,l.jsx)("hr",{})]}),(0,l.jsx)("div",{className:"aem-GridColumn aem-GridColumn--default--9 aem-GridColumn--phone--12 aem-GridColumn--tablet--12",children:(0,l.jsxs)("div",{className:"check-form",children:[(0,l.jsx)("h3",{children:"Guest Checkout"}),a.ShippingForm?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(g,{setDisplayComp:c}),(0,l.jsx)(j,{}),(0,l.jsx)(u,{})]}):(0,l.jsx)(v,{setDisplayComp:c}),a.ShipMethodForm?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(x,{setDisplayComp:c}),(0,l.jsx)(u,{})]}):a.shipDetails?(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(y,{setDisplayComp:c})}):console.log("order-Success takes time"),a.Payment?(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(m,{setDisplayComp:c})}):a.PaymentDetails?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(y,{setDisplayComp:c}),(0,l.jsx)(p,{setDisplayComp:c}),(0,l.jsx)(d,{})]}):console.log("order-Success takes time")]})}),(0,l.jsxs)("div",{className:"aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12 aem-GridColumn--tablet--12",children:[(0,l.jsxs)("div",{className:"exp-check",children:[(0,l.jsx)("span",{children:"Sign in for Express Checkout"}),(0,l.jsx)("button",{children:"SIGN IN"})]}),(0,l.jsxs)("div",{className:"pricing-summary",children:[(0,l.jsx)("h4",{children:"Pricing Summary"}),(0,l.jsxs)("span",{children:["Subtotal: $",e.cartTotalAmount]}),(0,l.jsx)("span",{children:"Coupon: $0"}),(0,l.jsx)("span",{children:"Gift Card: $0"}),(0,l.jsx)("span",{children:"Estimated Tax: $0"}),(0,l.jsx)("span",{children:"Estimated Shipping: FREE"}),(0,l.jsxs)("span",{children:["Estimated Total: $",e.cartTotalAmount]})]})]})]})}}}]);
//# sourceMappingURL=955.ac3a10c9.chunk.js.map