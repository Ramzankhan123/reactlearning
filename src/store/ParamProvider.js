import React, { useState } from "react";
import { ProductsList } from "../assests/ProductList";

const IdContext = React.createContext();

const IdProvider = (props) => {
  const [isProductList, setIsProductList] = useState(ProductsList);
  const [isCartItems, setIsCartItems] = useState([]);

  return (
    <IdContext.Provider
      value={{
        isProductList,
        setIsProductList,
        isCartItems,
        setIsCartItems
      }}
    >
      {props.children}
    </IdContext.Provider>
  );
};

export { IdContext, IdProvider };