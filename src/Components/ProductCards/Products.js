import { useEffect, useState } from "react";
import ProductCards from "./ProductCards";
import { useParams } from "react-router-dom";

export default function Products(){
    const [initialDataCat, setDataCat] = useState([]);
    let category = useParams().category;
    
   
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products`)
        .then((res) => res.json())
        .then((data) => setDataCat(data));
        // eslint-disable-next-line 
    }, []);
     //console.log(initialDataCat)
    return(
        <>
            <ProductCards data={initialDataCat} category={category} />
            
        </>
    );
    
}