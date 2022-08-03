import edit from "../../Images/edit-2.svg";

export default function ShippingInfo({setDisplayComp}){
    let getShippingInfo = localStorage.getItem('shippingInfo');
    let localShippingInfo = JSON.parse(getShippingInfo);
    const { email, phone, firstName, lastName, address1, address2, zip, city, state, country } = localShippingInfo;
    const editform = () =>{
        setDisplayComp({ShippingForm: true, ShippingFormEdit: true })
    }
    return(
        <>
            <div className="ship-info">
                <div className="ship-info-head">
                    <span>Shipping Information</span>
                    <button aria-label="edit item" onClick={editform}><img src={edit} alt="edit"/>Edit item</button>
                </div>
                <div className="ship-info-details">
                    <p>{email} {phone}</p>
                    <p>{firstName} {lastName} {address1} {address2} {city} {zip} {state} {country} </p>
                </div>
            </div>
        </>
    );
}