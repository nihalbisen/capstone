import Legging from "../../Images/signatureLegging.png";
export default function ProductBanner(){
    return(
        <>
        <section className="prod-banner aem-Grid aem-Grid--12">
            <div className="prodBan-sec1 aem-GridColumn aem-GridColumn--default--6">
                <h3>Take off in the new Signature Legging</h3>
                <span>Lorem Ipsum Dolor Tempor</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor labore dolore magna lorem ipsum dolor sit dolore magna.</p>
                <button className="coll-btn">SHOP COLLECTION</button>
                <button className="shop-btn">SHOP NOW</button>
                <span className="prodBan-divder"></span>
            </div>
            <div className="prodBan-sec2 aem-GridColumn aem-GridColumn--default--6">
                <img src={Legging} alt="signature Legging"/>
            </div>
        </section>
        </>
    );
}