import React, { useContext, useEffect , useState} from "react";
import { AddToCartContext } from "../../context/QuantityProducts";
import { eventBus } from "../Hero";
import { RenderHeader } from "../Render/Header";
import { FLES } from "../../utils";
import mitt from "mitt";
const eventCart = mitt();

const Header = () => {
  const { productsInCart } = useContext(AddToCartContext);
  const [ savedQuantityPoducts , setQuantityProducts ] = useState(0);
  const [ showCart , setShowCart ] = useState(false);
  const [ trigger , setTrigger ] = useState(0);

  const ShowCart = () => {
    setShowCart( showCart === true ? false : true);
    eventCart.emit('botton clicked' , true);
  }

  const removeProduct = () => {
    setQuantityProducts(0)
  }

  const isActiveTrigger = () => {
    setTrigger( trigger + 1 );
  }

  const increaseProductsInCart = () =>{
    setQuantityProducts( productsInCart > 0 && savedQuantityPoducts + productsInCart );
  }

  const formatValue = () => {
    return new Intl.NumberFormat('pt-BR' , {
      style: 'currency',
      currency: 'BRL',
    }).format(FLES * savedQuantityPoducts)
  }

  useEffect(() => {
    increaseProductsInCart()
    const listener = (actived) => actived && isActiveTrigger();
    
    eventBus.on('Botão clicado' , listener);
    return () => {
      eventBus.off('Botão clicado' , listener);
    };
    
  } , [trigger])

  return <RenderHeader productsInCart={productsInCart} savedQuantityPoducts={savedQuantityPoducts} showCart={showCart} ShowCart={ShowCart} formatValue={formatValue} removeProduct={removeProduct}/>
};

export { Header , eventCart};