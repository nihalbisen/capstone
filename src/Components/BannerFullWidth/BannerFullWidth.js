import mountain from "../../Images/mountain.png";
export default function BannerFullWidth(){
    return(
        <>
            <section className="ban-full aem-Grid aem-Grid--12">
                <div className="ban-full-sec1 aem-GridColumn aem-GridColumn--default--7">
                    <img src={mountain} alt="Mountain" />
                </div>
                <div className="ban-full-sec2 aem-GridColumn aem-GridColumn--default--5">
                    <h2>Conquer your next adventure</h2>
                    <span>Lorem Ipsum Dolor Tempor</span>
                    <button>SHOP DEVICES</button>
                </div>
            </section>
        </>
    );
}