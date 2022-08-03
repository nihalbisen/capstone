//import WomensOuterwear from "../../Images/banner-top.png";
export default function Banner(props){
    return(
        <section className="banner-container aem-Grid aem-Grid--12">
            <div className="banner-sec1 aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--hide aem-GridColumn--tablet--12">
                <h1 className="banner-title">{props.category}</h1>
                <hr className="divider"/>
            </div>
            <div className="banner-sec2 aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--phone--12 aem-GridColumn--tablet--12">
                
            </div>
            <div className="banner-sec3 aem-GridColumn aem-GridColumn--phone--11 ">
                <h2 className="banner-title">Women's<br/>Outerwear</h2>
                <hr className="divider"/>
            </div>
        </section>
    );
}