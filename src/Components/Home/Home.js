//import { useNavigate } from "react-router-dom";
import BannerFullWidth from "../BannerFullWidth/BannerFullWidth";
import HeroBanner from "../HeroBanner/HeroBanner";
import ProductBanner from "../ProductBanner/ProductBanner";

export default function Home(){
    //let navigate = useNavigate();
    return(
        <>
        <HeroBanner/>
        <ProductBanner/>
        <BannerFullWidth/>
        </>
    );
}