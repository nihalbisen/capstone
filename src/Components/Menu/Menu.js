import React,{Suspense,lazy} from "react";
import {Route,HashRouter,Routes} from 'react-router-dom';
import Checkout from "../Checkout/Checkout";
const Home=lazy(()=>import('../Home/Home'));
const ProductCards=lazy(()=>import('../ProductCards/Products'));
const Cart=lazy(()=>import('../Cart/Cart'));
const SingleProduct=lazy(()=>import('../SingleProduct/SingleProduct'));
const PageNotFound = lazy(() => import ('../../Pages/PageNotFound/PageNotFound'))
export default function Menu(){
    return(
      <div>
        <Suspense fallback="Loading...">
          <HashRouter>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/' element={<Home />} />
              <Route path='cart' element={<Cart />} />
              <Route path='cart/checkout' element={<Checkout/>} />
              {/* <Route path='product' element={<SingleProduct />} /> */}
              <Route path='category/:category' element={<ProductCards/>} />
              <Route path="category/women's%20clothing/product/:id" element={<SingleProduct/>} />
              <Route path="category/men's%20clothing/product/:id" element={<SingleProduct/>} />
              <Route path='category/jewelery/product/:id' element={<SingleProduct/>} />
              <Route path='category/electronics/product/:id' element={<SingleProduct/>} />
              <Route path='cart/product/:id' element={<SingleProduct/>} />
              <Route path='/*' element={<PageNotFound />} />
            </Routes>
          </HashRouter>
        </Suspense> 
      </div>
    );
}