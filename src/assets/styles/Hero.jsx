import styled from "styled-components";
const HeroStyle = styled.section`
  margin: auto;
  width: 80vw;
  display: flex;
  justify-content: space-evenly;

  @media (max-width: 475px) {
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100vw;
  }

  @media (max-width: 900px) {
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

const Products = styled.figure`
  width: 350px;
  
  figcaption {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    }
    
    .icon-svg-responsive {
      display: none;
    }

  @media (max-width: 475px) {
    width: 100vw;
    height: 380px;
    margin-top: 30px;
    figcaption {
      display: none;
    }
    .icon-svg-responsive {
      background-color: #fff;
      position: absolute;
      width: 40px;
      height: 40px;
      border-radius: 100%;
      top: 25%;
      cursor: pointer;
      display: block;
    }
    .return {
      left: 10px;
    }
    .next {
      right: 10px;
    }
  }

`;

const ContainerPreview = styled.section`
  top: 0;
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  background-opacity: 0.8;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ExpandedPreview = styled.figure`
  width: 350px;
  position: relative;

  figcaption {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
  }

  svg {
    background-color: hsl(25, 100%, 94%);
    position: absolute;
    width: 40px;
    height: 40px;
    border-radius: 100%;
    top: 30%;
    cursor: pointer;

    .seta {
      stroke-width: 3;
    }

    &:hover {
      .seta {
        stroke: hsl(26, 100%, 55%);
      }
    }
  }

  .icon-return {
    left: -20px;
  }

  .icon-close {
    right: -20px;
  }
`;
const IconClose = styled.img`
  position: absolute;
  top: -30px;
  right: 5px;
  cursor: pointer;
`;

const ImgProduct1Style = styled.img`
  width: 350px;
  border-radius: 15px;

  @media (max-width: 475px) {
    width: 100vw;
    border-radius: 0;
  }
`;
const Border = styled.div`
  background-color: hsl(25, 100%, 94%);
  border-radius: 13px;
  height: 65px;
`;

const ThumnailProduct = styled.img`
  width: 65px;
  border-radius: 10px;
  background-color: hsl(25, 100%, 94%);
  cursor: pointer;
  transition: 0.7s;

  &:hover {
    opacity: 0.3;
  }
`;

const Info = styled.aside`
  width: 350px;
  align-items: center;

  h1 {
    font-weight: 700;
    color: hsl(219, 9%, 45%);
    margin-bottom: 10px;
    margin-top: 60px;
    text-transform: uppercase;
  }

  h2 {
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 30px;
  }

  p {
    font-size: 1.2rem;
    color: hsl(219, 9%, 45%);
    margin-bottom: 20px;
  }

  section {
    flex-direction: column;
  }

  @media(max-width: 900px){
    min-height: 400px;
  }

  @media (max-width: 475px) {
    width: 100vw;
    background-color: #fff;
    padding: 0 20px;

    h1 {
      margin-top: 20px;
      letter-spacing: 2px;
    }

    h2 {
      margin-bottom: 10px;
    }

    p {
      line-height: 20px;
      font-size: 1.5rem;
      text-align: justify;
    }

    section {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 10px;
    }
  }
`;

const PricreDiscount = styled.ul`
  display: flex;
  margin-bottom: 5px;

  li {
    font-weight: 700;
  }

  @media (max-width: 475px) {
    align-items: center;
  }
`;
const Price = styled.li`
  font-size: 1.7rem;

  @media (max-width: 475px) {
    font-size: 2.4rem;
  }
`;
const Discount = styled.li`
  background-color: #000;
  color: #fff;
  font-size: 1.3rem;
  margin-left: 10px;
  padding: 2px 10px;
  border-radius: 5px;

  @media (max-width: 475px) {
    height: 20px;
  }
`;
const OldPrice = styled.p`
  color: hsl(220, 13%, 13%);
  font-weight: 700;
  text-decoration: line-through;
`;
const Add = styled.div`
  display: flex;

  @media (max-width: 475px) {
    flex-direction: column;
  }
`;
const Bottons = styled.div`
  background: hsl(223, 64%, 98%);
  width: 100px;
  height: 36px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-right: 10px;

  img {
    cursor: pointer;

    &:active {
      opacity: 0.7;
    }
  }

  strong {
    font-size: 1.4rem;
    font-weight: 700;
  }

  @media (max-width: 475px) {
    width: 100%;
    height: 50px;
    justify-content: space-around;
  }
`;
const AddToCart = styled.button`
  display: flex;
  align-items: center;
  background-color: hsl(26, 100%, 55%);
  border: none;
  border-radius: 5px;
  padding: 10px 40px;
  font-weight: 700;
  cursor: pointer;

  &:active {
    opacity: 0.7;
  }

  img {
    width: 14px;
    margin-right: 15px;
  }

  @media (max-width: 475px) {
    width: 100%;
    height: 50px;
    justify-content: center;
    margin-top: 20px;
  }
`;

export {
  HeroStyle,
  ImgProduct1Style,
  ThumnailProduct,
  Products,
  ContainerPreview,
  ExpandedPreview,
  IconClose,
  Border,
  Info,
  PricreDiscount,
  Price,
  Discount,
  OldPrice,
  Bottons,
  AddToCart,
  Add,
};
