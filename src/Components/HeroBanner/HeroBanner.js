//import heroimg from "../../Images/hero-banner.png";
import { useNavigate } from "react-router-dom";
export default function HeroBanner() {
    let navigate = useNavigate();
    return (
        <>
        <section className="hero aem-Grid aem-Grid--12">
            <div className="hero-sec1 aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12 aem-GridColumn--tablet--6">
                <h2>Shop the new Signature Collection</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lobortis mattis aliquam faucibus purus.</p>
                <button onClick={() => { navigate("/products/")}} >SHOP NOW</button>
            </div>
            <div className="carousel aem-GridColumn aem-GridColumn--phone--12 aem-GridColumn--tablet--hide">
                    {/* <!-- The dots/circles --> */}
                    <div style={{textAlign:`center`}}>
                        <span className="dot" ></span>
                        <span className="dot" ></span>
                        <span className="dot" ></span>
                    </div>                        
                                    
            </div>
            <div className="hero-sec2 aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--hide aem-GridColumn--tablet--6">
                
            </div>
        </section>
        <section className="cat "> 
        <div className="cat-items " onClick={() => { navigate("/category/women's clothing/")}}>
            <div className="cat-details">
                <h2>Shop Women</h2>
                <span>Lorem ipsum dolor sit amet</span>
            </div>
        </div>
        <div className="cat-items " onClick={() => { navigate("/category/men's clothing/")}}>
            <div className="cat-details">
                <h2>Shop Men</h2>
                <span>Lorem ipsum dolor sit amet</span>
            </div>
        </div>
        <div className="cat-items " onClick={() => { navigate("/category/jewelery/")}}>
            <div className="cat-details">
                <h2>Jewellery</h2>
                <span>Lorem ipsum dolor sit amet</span>
            </div>
        </div>
        <div className="cat-items " onClick={() => { navigate("/category/electronics/")}}>
            <div className="cat-details">
                <h2>Electronics</h2>
                <span>Lorem ipsum dolor sit amet</span>
            </div>
            <span className="cat-spacer"></span>
        </div>
    </section>
    </>
    );
}