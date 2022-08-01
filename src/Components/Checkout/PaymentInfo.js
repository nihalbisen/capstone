import edit from "../../Images/edit-2.svg";
export default function PaymentInfo({setDisplayComp}){
    let getShippingInfo = localStorage.getItem('PaymentInfo');
    let localShippingInfo = JSON.parse(getShippingInfo);
    const { paymentType, creditCardNum } = localShippingInfo;
    const editform = () =>{
        setDisplayComp({Payment: true, PaymentDetails: false })
    }
    return(
        <>
            <div className="ship-info">
                <div className="ship-info-head">
                    <span>Payment Information</span>
                    <button aria-label="edit item" onClick={editform}><img src={edit} alt="edit" />Edit item</button>
                </div>
                <div className="ship-info-details">
                    <p>{paymentType} Visa ending in {creditCardNum}</p>
                </div>
            </div>
        </>
    );
}