import { imgProducts } from "../../utils";
import { useContext, useEffect, useState } from "react";
import { AddToCartContext } from "../../context/QuantityProducts";
import mitt from "mitt";
import { RenderHero } from "../Render/Hero";
import { eventCart , eventHide } from "../Header";
const eventBus = mitt();

const Hero = ({ border = 'solid hsl(26, 100%, 55%) 2px', borderRadius = "13px", height = "69px", opacity = "0.3" , none = 'none' }) => {
  const { setProductsInCart } = useContext(AddToCartContext);
  const [products, setProducts] = useState(0);
  const [product, setProduct] = useState(1);
  const [attImg, setAttImg] = useState(1);
  const [expandedPreview, setExpandedPreview] = useState(false);
  const [close, setClose] = useState(false);
  const [ hide , setHide ] = useState(false);

  const handleChangeImgProduct = () => {
    if (product === 1) {
      setAttImg(imgProducts[0].product1);
    } else if (product === 2) {
      setAttImg(imgProducts[1].product2);
    } else if (product === 3) {
      setAttImg(imgProducts[2].product3);
    } else {
      setAttImg(imgProducts[3].product4);
    }
  };

  const handleClose = () => close === true && setExpandedPreview(false);

  const increase = () => setProducts(products + 1);

  const decrement = () => setProducts(products !== 0 ? products - 1 : 0);

  const addToCart = () => {
    setProductsInCart(products);
    eventBus.emit("Botão clicado", true);
  };

  const isExpandedPreview = () => {
    setExpandedPreview(true);
    if (expandedPreview === false) {
      setClose(false);
    }
  };

  useEffect(() => {
    handleClose();
    handleChangeImgProduct();
    const listner = (actived) => actived && setHide(hide === true ? false : true);
    const listnerLabel = (actived) => actived && setHide(hide === true ? false : true);

    eventCart.on('botton clicked' , listner);
    eventHide.on('botton clicked' , listnerLabel)
    return () => {
      eventCart.off('botton clicked' , listner);
      eventHide.off('botton clicked' , listnerLabel)
    }
  }, [product, close , hide]);

  return (
    <RenderHero
      attImg={attImg}
      isExpandedPreview={isExpandedPreview}
      expandedPreview={expandedPreview}
      product={product}
      setProduct={setProduct}
      decrement={decrement}
      products={products}
      increase={increase}
      addToCart={addToCart}
      setClose={setClose}
      border={border}
      borderRadius={borderRadius}
      height={height}
      opacity={opacity}
      none={none}
      hide={hide}
    />
  );
};

export { Hero, eventBus };