import user from "../../Images/user.png";
import shoppingBag from "../../Images/shopping-bag.svg";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";
import drawer from "../../Images/menu.svg";

export default function Header(){
    //let { cartTotalQuantity } = useSelector((state) => state.cart);
    //Cart Related Code v1
  const cartY = useSelector((state) => { 
    return state.cart.cartItems;
  });

  const totalcartitem = cartY.length;
  // console.log(totalcartitem);

    const openNav = () =>{
        document.getElementById("mySidenav").style.width = "100%";
    }
    const closeNav = () =>{
        document.getElementById("mySidenav").style.width = "0";
    }

   


    return(
        <>
        <ToastContainer/>
        <header className="aem-Grid aem-Grid--12">
            <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--tablet--2 aem-GridColumn--phone--8">
                    <div id="mySidenav" class="sidenav">
                        <span class="closebtn" onClick={closeNav} >&times;</span>
                        <a href="/capstone/" className="cat-head" aria-label="shop-categories"  onClick={closeNav}>Shop Categories</a>
                        <a href="#/category/women's clothing" aria-label="women"  onClick={closeNav}>Women</a>
                        <a href="#/category/men's clothing" aria-label="men"  onClick={closeNav}>Men</a>
                        <a href="#/category/electronics" aria-label="Electronics"  onClick={closeNav}>Electronics</a>
                        <a href="#/category/jewelery" aria-label="Jewellery"  onClick={closeNav}>Jewellery</a>

                        <div className="sidenav-bottom">
                            <a href="/capstone/" aria-label="Account"><img src={user} alt="Search"/>Account</a>
                            <a href="/capstone/" aria-label="sign in">Sign-in</a>
                        </div>
                    </div> 

                    {/* <!-- Use any element to open the sidenav --> */}
                    <img src={drawer} alt="drawer menu" onClick={openNav} id="drawer-menu"/>
                
                
                <a href="/capstone/" aria-label="Home" className="logo">
                    <span data-content="VENIA">VENIA</span>
                </a>
            </div>
            
            <nav role="navigation" aria-label="Main" className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--5 aem-GridColumn--phone--hide">
                <ul className="menu">
                    <li><a href="/capstone/" aria-label="Home" >Home</a></li>
                    <li><a href="#/category/women's clothing" aria-label="Women" >Women</a></li>
                    <li><a href="#/category/men's clothing" aria-label="Men" >Men</a></li>
                    <li><a href="#/category/electronics" aria-label="Electronics" >Electronics</a></li>
                    <li><a href="#/category/jewelery" aria-label="Jewellery" >Jewellery</a></li> 
                </ul>
            </nav>
            <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--tablet--5 aem-GridColumn--phone--4">
                <ul className="side-menu">
                    <li> <a href="#/cart/"  aria-label="Cart"><img className="side-menu-icon" src={shoppingBag} alt="Shopping Bag"/><span>{totalcartitem}</span></a></li> 
                </ul>
            </div>
        </header>
        </>
    );
}