import mountain from "../../Images/mountain.png";
import mappin from "../../Images/map-pin.svg"; 
export default function BannerFullWidth(){
    return(
        <>
            <section className="ban-full aem-Grid aem-Grid--12">
                <div className="ban-full-sec1 ">
                    <img src={mountain} alt="Mountain" />
                </div>
                <div className="ban-full-sec2 ">
                    <h2>Conquer your next adventure</h2>
                    <span>Lorem Ipsum Dolor Tempor</span>
                    <button>SHOP DEVICES</button>
                    <img src={mappin} alt="map pin"/>
                    <hr/>
                </div>
            </section>
        </>
    );
}