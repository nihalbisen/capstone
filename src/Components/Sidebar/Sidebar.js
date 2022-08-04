
export default function Sidebar({filterProduct}){
   
   
    return(
        <section className="filters">
            <span className="filter-category">Clothing / Women's / Outerwear</span>
            <span className="filter-head">Filters</span>
            <div className="attribute-sec">
                <h2 className="attribute-title">Categories</h2>
                <ul className="filter-option" onChange={filterProduct}>
                    <li><input type="checkbox" id="Jewellery" name="Categories" value="jewelery" 
                     />
                        <label htmlFor="Jewellery">Jewellery</label></li>

                    <li><input type="checkbox" id="Electronics" name="Categories" value="electronics" 
                    />
                    <label htmlFor="Electronics">Electronics</label></li>
                    
                    <li><input type="checkbox" id="Men's Clothing" name="Categories" value="men's clothing" 
                        />
                    <label htmlFor="Men's Clothing">Men's Clothing</label></li>

                    <li><input type="checkbox" id="Women's Clothing" name="Categories" value="women's clothing" 
                    />
                    <label htmlFor="Women's Clothing">Women's Clothing</label></li>
                </ul>
            </div>
        </section>
    );
}