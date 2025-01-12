import { createContext, useState } from "react";

const AddToCartContext = createContext();

const ProductProvider = (props) => {
    const [ productsInCart , setProductsInCart ] = useState(0);
    
    return(
        <AddToCartContext.Provider value={ {productsInCart , setProductsInCart}}>
            {props.children}
        </AddToCartContext.Provider>
    )
}

export { AddToCartContext , ProductProvider };