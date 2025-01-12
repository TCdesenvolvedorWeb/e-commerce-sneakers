import imgCart from "../../assets/images/icon-cart.svg";
import imgAvatar from "../../assets/images/image-avatar.png";
import imgLogo from "../../assets/images/logo.svg";
import iconDelete from "../../assets/images/icon-delete.svg";
import imgProduct from "../../assets/images/image-product-1.jpg";
import {
  HeaderHome,
  HeaderContainer,
  Logo,
  Linkers,
  Options,
  Cart,
  Avatar,
  Profile,
  CartContainer,
  ExpandedCart,
  ProductInCart,
  ProductIn,
  Trash,
} from "../../assets/styles/Header";
import { FLES } from "../../utils";

const RenderHeader = (props) => {
  return (
    <HeaderHome>
      <HeaderContainer>
        <Logo src={imgLogo} alt="logo" />

        <nav>
          <input type="checkbox" id="menu-hamburguer" />
          <label htmlFor="menu-hamburguer">
            <div className="menu">
              <span className="hamburguer"></span>
            </div>
          </label>

          <Linkers>
            <Options>Collections</Options>
            <Options>Men</Options>
            <Options>Woman</Options>
            <Options>About</Options>
            <Options>Contact</Options>
          </Linkers>
        </nav>

        <Profile>
          <CartContainer>
            {props.productsInCart > 0 && (
              <span> {props.savedQuantityPoducts} </span>
            )}
            <Cart src={imgCart} alt="Cart" onClick={props.ShowCart} />
            {props.showCart && (
              <ExpandedCart>
                <h2> Cart </h2>
                {props.savedQuantityPoducts > 0 ? (
                  <>
                    <section>
                      <ProductInCart>
                        <div>
                          <ProductIn src={imgProduct} alt="Product" />
                          <div>
                            <h3>Fall Limited Edition Sneakers</h3>
                            <ul>
                              <li>$125,00</li>
                              <li> x {props.savedQuantityPoducts} </li>
                              <li>
                                <strong>
                                  {props.formatValue(
                                    FLES * props.savedQuantityPoducts
                                  )}
                                </strong>
                              </li>
                            </ul>
                          </div>
                          <Trash
                            src={iconDelete}
                            alt="Remove"
                            onClick={props.removeProduct}
                          />
                        </div>
                      </ProductInCart>
                    </section>
                  </>
                ) : (
                  <p>Your cart is empty.</p>
                )}
                {props.savedQuantityPoducts > 0 && <button>Checkout</button>}
              </ExpandedCart>
            )}
          </CartContainer>

          <Avatar src={imgAvatar} alt="Avatar" />
        </Profile>
      </HeaderContainer>
    </HeaderHome>
  );
};

export { RenderHeader };
