import {useState} from "react";
export default function Sidebar({filterProduct}){
    const [isChosen, setIsChosen] = useState(false); 
   
    return(
        <section className="filters">
            <span className="filter-category">Clothing / Women's / Outerwear</span>
            <span className="filter-head">Filters</span>
            <div className="attribute-sec">
                <h2 className="attribute-title">Categories</h2>
                <ul className="filter-option">
                    <li><input type="checkbox" id="Jewellery" name="Categories" value="Jewellery" 
                    onClick={() => {
                        setIsChosen(!isChosen);
                        filterProduct("Jewellery");
                    }} />
                        <label htmlFor="Jewellery">Jewellery</label></li>

                    <li><input type="checkbox" id="Electronics" name="Categories" value="Electronics" 
                    onClick={() => {
                        setIsChosen(!isChosen);
                        filterProduct("Electronics");
                    }}/>
                    <label htmlFor="Electronics">Electronics</label></li>
                    
                    <li><input type="checkbox" id="Men's Clothing" name="Categories" value="Men's Clothing" onClick={() => {
                        setIsChosen(!isChosen);
                        filterProduct("Men's Clothing");
                    }}/>
                    <label htmlFor="Men's Clothing">Men's Clothing</label></li>

                    <li><input type="checkbox" id="Women's Clothing" name="Categories" value="Women's Clothing" 
                    onClick={() => {
                        setIsChosen(!isChosen);
                        filterProduct("Women's Clothing");
                    }} />
                    <label htmlFor="Women's Clothing">Women's Clothing</label></li>
                </ul>
            </div>
        </section>
    );
}