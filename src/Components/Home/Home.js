import { useNavigate } from "react-router-dom";
import BannerFullWidth from "../BannerFullWidth/BannerFullWidth";
import HeroBanner from "../HeroBanner/HeroBanner";
import ProductBanner from "../ProductBanner/ProductBanner";

export default function Home(){
    let navigate = useNavigate();
    return(
        <>
        <HeroBanner/>
        <section className="cat aem-Grid aem-Grid--12"> 
            <div className="cat-items aem-GridColumn aem-GridColumn--default--3" onClick={() => { navigate("category/women's clothing")}}>
                <div className="cat-details">
                    <h2>Shop Women</h2>
                    <span>Lorem ipsum dolor sit amet</span>
                </div>
            </div>
            <div className="cat-items aem-GridColumn aem-GridColumn--default--3" onClick={() => { navigate("category/men's clothing")}}>
                <div className="cat-details">
                    <h2>Shop Men</h2>
                    <span>Lorem ipsum dolor sit amet</span>
                </div>
            </div>
            <div className="cat-items aem-GridColumn aem-GridColumn--default--3" onClick={() => { navigate("category/jewelery")}}>
                <div className="cat-details">
                    <h2>Jewellery</h2>
                    <span>Lorem ipsum dolor sit amet</span>
                </div>
            </div>
            <div className="cat-items aem-GridColumn aem-GridColumn--default--3" onClick={() => { navigate("category/electronics")}}>
                <div className="cat-details">
                    <h2>Electronics</h2>
                    <span>Lorem ipsum dolor sit amet</span>
                </div>
                <span className="cat-spacer"></span>
            </div>
        </section>
        <ProductBanner/>
        <BannerFullWidth/>
        </>
    );
}