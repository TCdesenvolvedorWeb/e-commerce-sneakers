import thumnailPoduct1 from "../../assets/images/image-product-1-thumbnail.jpg";
import thumnailPoduct2 from "../../assets/images/image-product-2-thumbnail.jpg";
import thumnailPoduct3 from "../../assets/images/image-product-3-thumbnail.jpg";
import thumnailPoduct4 from "../../assets/images/image-product-4-thumbnail.jpg";
import iconMore from "../../assets/images/icon-plus.svg";
import iconMinus from "../../assets/images/icon-minus.svg";
import iconCart from "../../assets/images/icon-cart.svg";
import iconClose from "../../assets/images/icon-close.svg";
import { useWindowSize } from "../../hooks/useWindowSize";

import {
  HeroStyle,
  ImgProduct1Style,
  ThumnailProduct,
  Products,
  Border,
  Info,
  Price,
  Discount,
  PricreDiscount,
  OldPrice,
  Bottons,
  AddToCart,
  Add,
  ExpandedPreview,
  ContainerPreview,
  IconClose,
} from "../../assets/styles/Hero";

const RenderHero = (props) => {
  const { width } = useWindowSize();

  return (
    <>
      <HeroStyle>
        <Products>
          <svg
            style={width > 475 || props.hide === true ? {display: props.none } : null}
            className="icon-svg-responsive return"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() =>
              props.setProduct(
                props.product > 1 ? props.product - 1 : props.product
              )
            }
          >
            <path
              className="seta"
              d="M11 1 3 9l8 8"
              stroke="#1D2026"
              fill="none"
              transform="translate(11 , 11)"
            />
          </svg>
          <ImgProduct1Style
            src={props.attImg}
            alt="Product"
            onClick={props.isExpandedPreview}
          />
          <svg
            style={width > 475 || props.hide === true ? {display: props.none } : null}
            className="icon-svg-responsive next"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() =>
              props.setProduct(
                props.product < 4 ? props.product + 1 : props.product
              )
            }
          >
            <path
              className="seta"
              d="m2 1 8 8-8 8"
              stroke="#1D2026"
              fill="none"
              transform="translate( 14 , 11)"
            />
          </svg>

          <figcaption>
            <Border
              style={
                props.product === 1
                  ? {
                      border: props.border,
                      borderRadius: props.borderRadius,
                      height: props.height,
                    }
                  : null
              }
            >
              <ThumnailProduct
                src={thumnailPoduct1}
                onClick={() => props.setProduct(1)}
                alt="thumbnail product 1"
                style={props.product === 1 ? { opacity: props.opacity } : null}
              />
            </Border>
            <Border
              style={
                props.product === 2
                  ? {
                      border: props.border,
                      borderRadius: props.borderRadius,
                      height: props.height,
                    }
                  : null
              }
            >
              <ThumnailProduct
                src={thumnailPoduct2}
                onClick={() => props.setProduct(2)}
                alt="thumbnail product 2"
                style={props.product === 2 ? { opacity: props.opacity } : null}
              />
            </Border>
            <Border
              style={
                props.product === 3
                  ? {
                      border: props.border,
                      borderRadius: props.borderRadius,
                      height: props.height,
                    }
                  : null
              }
            >
              <ThumnailProduct
                src={thumnailPoduct3}
                onClick={() => props.setProduct(3)}
                alt="thumbnail product 2"
                style={props.product === 3 ? { opacity: props.opacity } : null}
              />
            </Border>
            <Border
              style={
                props.product === 4
                  ? {
                      border: props.border,
                      borderRadius: props.borderRadius,
                      height: props.height,
                    }
                  : null
              }
            >
              <ThumnailProduct
                src={thumnailPoduct4}
                onClick={() => props.setProduct(4)}
                alt="thumbnail product 2"
                style={props.product === 4 ? { opacity: props.opacity } : null}
              />
            </Border>
          </figcaption>
        </Products>

        <Info>
          <h1>Sneaker Company</h1>
          <h2>Fall Limited Edition Sneakers</h2>
          <p>
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they’ll withstand everything
            the weather can offer.
          </p>
          <section>
            <PricreDiscount>
              <Price> $125.00 </Price>
              <Discount> 50% </Discount>
            </PricreDiscount>
            <OldPrice> $250.00 </OldPrice>
          </section>

          <Add>
            <Bottons>
              <img src={iconMinus} alt="Minus" onClick={props.decrement} />
              <strong> {props.products} </strong>
              <img src={iconMore} alt="More" onClick={props.increase} />
            </Bottons>
            <AddToCart onClick={props.addToCart}>
              <img src={iconCart} alt="Cart" />
              Add to cart
            </AddToCart>
          </Add>
        </Info>
      </HeroStyle>

      {props.expandedPreview === true ? (
        <ContainerPreview>
          <ExpandedPreview>
            <IconClose
              src={iconClose}
              alt="close"
              onClick={() => props.setClose(true)}
            />
            <svg
              className="icon-return"
              xmlns="http://www.w3.org/2000/svg"
              onClick={() =>
                props.setProduct(
                  props.product > 1 ? props.product - 1 : props.product
                )
              }
            >
              <path
                className="seta"
                d="M11 1 3 9l8 8"
                stroke="#1D2026"
                fill="none"
                transform="translate(11 , 11)"
              />
            </svg>

            <ImgProduct1Style
              className="expanded"
              src={props.attImg}
              alt="Product"
              onClick={props.isExpandedPreview}
            />

            <figcaption>
              <Border
                style={
                  props.product === 1
                    ? {
                        border: props.border,
                        borderRadius: props.borderRadius,
                        height: props.height,
                      }
                    : null
                }
              >
                <ThumnailProduct
                  src={thumnailPoduct1}
                  onClick={() => props.setProduct(1)}
                  alt="thumbnail product 1"
                  style={
                    props.product === 1 ? { opacity: props.opacity } : null
                  }
                />
              </Border>
              <Border
                style={
                  props.product === 2
                    ? {
                        border: props.border,
                        borderRadius: props.borderRadius,
                        height: props.height,
                      }
                    : null
                }
              >
                <ThumnailProduct
                  src={thumnailPoduct2}
                  onClick={() => props.setProduct(2)}
                  alt="thumbnail product 2"
                  style={
                    props.product === 2 ? { opacity: props.opacity } : null
                  }
                />
              </Border>
              <Border
                style={
                  props.product === 3
                    ? {
                        border: props.border,
                        borderRadius: props.borderRadius,
                        height: props.height,
                      }
                    : null
                }
              >
                <ThumnailProduct
                  src={thumnailPoduct3}
                  onClick={() => props.setProduct(3)}
                  alt="thumbnail product 2"
                  style={
                    props.product === 3 ? { opacity: props.opacity } : null
                  }
                />
              </Border>
              <Border
                style={
                  props.product === 4
                    ? {
                        border: props.border,
                        borderRadius: props.borderRadius,
                        height: props.height,
                      }
                    : null
                }
              >
                <ThumnailProduct
                  src={thumnailPoduct4}
                  onClick={() => props.setProduct(4)}
                  alt="thumbnail product 2"
                  style={
                    props.product === 4 ? { opacity: props.opacity } : null
                  }
                />
              </Border>
            </figcaption>

            <svg
              className="icon-close"
              xmlns="http://www.w3.org/2000/svg"
              onClick={() =>
                props.setProduct(
                  props.product < 4 ? props.product + 1 : props.product
                )
              }
            >
              <path
                className="seta"
                d="m2 1 8 8-8 8"
                stroke="#1D2026"
                fill="none"
                transform="translate( 14 , 11)"
              />
            </svg>
          </ExpandedPreview>
        </ContainerPreview>
      ) : null}
    </>
  );
};

export { RenderHero };
