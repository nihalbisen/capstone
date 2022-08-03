import { useState } from "react";
import { useNavigate } from "react-router-dom";
import fav from "../../Images/heart.png";
import Banner from "../Banner/Banner";
import Sidebar from "../Sidebar/Sidebar";
import ReactPaginate from "react-paginate";
import arrowdown from "../../Images/arrow-down.svg";
import arrowup from "../../Images/arrow-up.svg";
import sliders from "../../Images/sliders.svg";


export default function ProductCards(props) {
  const [pageNumber, setPageNumber] = useState(0);

  const productPerPage = 9; 
  const pagesVisited = pageNumber * productPerPage;
  // eslint-disable-next-line
  const [prodData, setData] = useState([]);
  //let catfilterArr = JSON.parse(localStorage.getItem('catvalues'));
  let catdata = props.data.filter(function (item) {
    return item.category === props.category;
  });
  
  const pageCount = Math.ceil((catdata.length !==0 ? catdata.length : prodData.length !==0 ? prodData.length : props.data.length) / productPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  
  const sorted = (catdata.length !== 0 ? [...catdata].sort((a, b) => b["price"] - a["price"]):[...props.data].sort((a, b) => b["price"] - a["price"]));
    

  const sortByPrice = (e) => {
    if (e.target.value === "hightolow") {
      
      setData(sorted);
      
    }
    else if (e.target.value === "lowtohigh") {
      
      setData(sorted.reverse());
    }
    else{
      setData(props.data);
    }
  }
  
  let navigate = useNavigate();
  const itemval = [];
  let index;
  
  
  


  const filterProduct = (item) => {
    
    //find index
    index= itemval.findIndex(rank => rank === item);
    
    // only try removing it, if it exists in the array
    if (index !== -1) {
      itemval.splice(index, 1);
    }
    else{
      itemval.push(item);
    }
    
    let testdata;
    testdata = itemval.map(x => props.data.filter(function(item){
      return item.category === x ;        
    }));
    let newcatvalues = [].concat(...testdata);
    setData(newcatvalues);
    
  }
  
  
  // let categoryData = [];
  // //runcode();
  // const runcode =( ) =>{
  //   //console.log(itemval);
  //   categoryData=props.data;
        
  //       if(itemval.length>0){
  //           if(itemval.length===1){
  //               categoryData=categoryData.filter(x=>(x.category===itemval[0]));
  //           }else if(itemval.length===2){
  //               categoryData=categoryData.filter(x=>(x.category===itemval[0]) || (x.category===itemval[1]));

  //           }else if(itemval.length===3){
  //               categoryData=categoryData.filter(x=>(x.category===itemval[0]) || (x.category===itemval[1]) || (x.category===itemval[2]));

  //           }else if(itemval.length===4){
  //               categoryData=categoryData.filter(x=>(x.category===itemval[0]) || (x.category===itemval[1]) || (x.category===itemval[2]) || (x.category===itemval[3]));

  //           }else if(itemval.length===5){
  //               categoryData=categoryData.filter(x=>(x.category===itemval[0]) || (x.category===itemval[1]) || (x.category===itemval[2]) || (x.category===itemval[3]) || (x.category===itemval[4]));

  //           }
           

  //       }else{
  //           categoryData=props.data;
  //       }
        
  //       //props.data = categoryData;
  //       // console.log(categoryData);
  //       setData(categoryData);
        
    

  //   // value1 = testdata[0];
  //   // value2 = testdata[1];
  //   // value3 = testdata[2];
  //   // value4 = testdata[3];
  //   // combine = [].concat(value1,value2,value3,value4).filter(e => e);
  //   // setData(combine);
  // }

  const openNav1 = () => {
    document.getElementById("mySidenav1").style.width = "90vw";
    document.getElementById("mySidenav1").style.zIndex = 999;
  }
  const closeNav1 = () => {
    document.getElementById("mySidenav1").style.width = "0";
  }
  
  
  return (
    <>
      <Banner category={props.category? props.category : "All Products"}/>
      <section className="aem-Grid aem-Grid--12 products-grid">
        <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--hide aem-GridColumn--tablet--hide">
          <Sidebar filterProduct={filterProduct} />
        </div>
        <div className="aem-GridColumn aem-GridColumn--default--9 aem-GridColumn--phone--12 aem-GridColumn--tablet--12 aem-Grid aem-Grid--12">
          <div id="mySidenav1" class="sidefilter">
            <div className="sidefilter-head">
              <a href="/capstone/" aria-label="shop-categories">Filters</a>
              <span class="closebtn" onClick={closeNav1} >&times;</span>
            </div>
            <div className="sidefilter-container">
              <span>Clear all</span>
              <div className="attribute-sec">
                <h2 className="attribute-title">Categories</h2>
                <ul className="filter-option">
                    <li><input type="checkbox" id="jewellery" name="Categories" value="jewelery" />
                    <label htmlFor="jewellery">Jewellery</label></li>

                    <li><input type="checkbox" id="electronics" name="Categories" value="electronics"/>
                    <label htmlFor="electronics">Electronics</label></li>
                    
                    <li><input type="checkbox" id="men's Clothing" name="Categories" value="men's clothing"/>
                    <label htmlFor="men's Clothing">Men's Clothing</label></li>

                    <li><input type="checkbox" id="women's Clothing" name="Categories" value="women's clothing" />
                    <label htmlFor="women's Clothing">Women's Clothing</label></li>
                </ul>
            </div>
            </div>
            

            
          </div> 
          
          <div className="filter-items aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
            <button onClick={openNav1}><img src={sliders} alt="sliders"/><span>Filter Results</span></button>
            <button><img src={arrowup} alt="arrowup"/><img src={arrowdown} alt="arrowdown"/><span>Sort Products</span></button>
          </div>
          <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
            <span className="result-count">{catdata.length !==0 ? catdata.length : prodData.length !==0 ? prodData.length : props.data.length} Results</span>
          </div>
          <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--hide">
            <form className="sorting">
              <label htmlFor="sorting">Sort by: </label>
              <select onChange={sortByPrice} id="sorting">
                <option value="latest">Latest</option>
                <option value="hightolow">Price: High to Low</option>
                <option value="lowtohigh">Price: Low to High</option>
              </select>
            </form>
          </div>
          { props.data>=0 ? (<span className="loader">Content is loading...</span>):(
          <>
          {
          prodData.length !== 0 ?(
            prodData.slice(pagesVisited, pagesVisited + productPerPage)
                .map((product) => {
                  
                  return (
                    <>
                      <section key={product.id} className="prod-items aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--tablet--4 aem-GridColumn--phone--6">
                        <div className="prod-image">
                          <img src={product.image} alt={product.title} onClick={() => { navigate("product/"+product.id) }} />
                        </div>
                        <span className="prod-title" onClick={() => { navigate("product/" + product.id) }} >{product.title}</span>
                        <span className="prod-price">${product.price}</span>
                        <img className="fav-prod" src={fav} alt="add favorite" />
                      </section>
                    </>
                  );
                })
              ):
              catdata.length !== 0 ? (
                catdata
                .slice(pagesVisited, pagesVisited + productPerPage)
                .map((product) => {
                  return ( 
                    <>
                      <section key={product.id} className="prod-items aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--tablet--4 aem-GridColumn--phone--6">
                        <div className="prod-image">
                          <img src={product.image} alt={product.title} onClick={() => { navigate("product/" + product.id) }}/>
                        </div>
                        <span className="prod-title" onClick={() => { navigate("product/" + product.id) }} >{product.title}</span>
                        <span className="prod-price">${product.price}</span>
                        <img className="fav-prod" src={fav} alt="add favorite" />
                      </section>
                    </>
                  );
                })
  
            ):
              (
                props.data.slice(pagesVisited, pagesVisited + productPerPage)
                .map((product) => {
                  
                  return (
                    <>
                      <section key={product.id} className="prod-items aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--tablet--4 aem-GridColumn--phone--6">
                        <div className="prod-image">
                          <img src={product.image} alt={product.title} onClick={() => { navigate("product/"+product.id) }} />
                        </div>
                        <span className="prod-title" onClick={() => { navigate("product/" + product.id) }} >{product.title}</span>
                        <span className="prod-price">${product.price}</span>
                        <img className="fav-prod" src={fav} alt="add favorite" />
                      </section>
                    </>
                  );
                })

              )
              

          }
          
         
          

          <ReactPaginate
            previousLabel={"<"}
            nextLabel={">"}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"paginationBttns"}
            previousLinkClassName={"previousBttn"}
            nextLinkClassName={"nextBttn"}
            disabledClassName={"paginationDisabled"}
            activeClassName={"paginationActive"}
          />
          
          </>)}
        </div>
      </section>
    </>
  );
}
