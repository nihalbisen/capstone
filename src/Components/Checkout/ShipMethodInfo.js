import edit from "../../Images/edit-2.svg";
export default function ShippingMethodInfo({setDisplayComp}){
    const getShippingInfo = localStorage.getItem('ShippingMethod');
    const localShippingInfo = JSON.parse(getShippingInfo);
    const { method } = localShippingInfo;
    const editform = () =>{
        setDisplayComp({ShipMethodForm: true, shipDetails: false })
    }
    return(
        <>
            <div className="ship-info">
                <div className="ship-info-head">
                    <span>Shipping Method</span>
                    <button aria-label="edit item" onClick={editform}><img src={edit} alt="edit" />Edit item</button>
                </div>
                <div className="ship-info-details">
                    <p>{method}</p> 
                </div>
            </div>
        </>
    );
}