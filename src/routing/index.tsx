import { Route, Routes } from "react-router-dom";
import Home from './Home'
import Customer from './Customer'
import Product from './Product'
import Notfound from './Notfound'

const Router = () =>(
    <Routes>
         <Route path="/" element={<Home />} />
          <Route path="/customer/:id" element={<Customer />} />
          <Route path="/product" element={<Product />} />
          <Route path="*" element={<Notfound />} />
    </Routes>
)

export default Router