import heroimg from "../../Images/hero-banner.png"
export default function HeroBanner() {
    return (
        <section className="hero aem-Grid aem-Grid--12">
            <div className="hero-sec1 aem-GridColumn aem-GridColumn--default--6">
                <h2>Shop the new Signature Collection</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lobortis mattis aliquam faucibus purus.</p>
                <button>SHOP NOW</button>
            </div>
            <div className="hero-sec2 aem-GridColumn aem-GridColumn--default--6">
                <img src={heroimg} alt="Hero-banner" />
            </div>
        </section>
    );
}