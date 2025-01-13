import styled from "styled-components";

const HeaderHome = styled.header`
  width: 80vw;
  margin: auto;
  border-bottom: solid 1px hsl(223, 64%, 98%);
  margin-bottom: 70px;

  @media (max-width: 475px) {
    border-bottom: none;
    margin-bottom: -30px;
    width: 100vw;
    padding: 0 30px;
    background: #fff;
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  height: 100px;
  align-items: center;
  justify-content: space-between;

  .menu {
    display: none;
    width: 60px;
    height: 60px;
  }

  .hamburguer {
    background-color: #000;
    position: relative;
    display: block;
    width: 30px;
    height: 2px;
    top: 29px;
    left: 15px;
    transition: 0.5s ease-in-out;

    &:before {
      top: -10px;
      background-color: #000;
      content: "";
      display: block;
      width: 100%;
      height: 100%;
      position: absolute;
      transition: 0.5s ease-in-out;
    }

    &:after {
      bottom: -10px;
      background-color: #000;
      content: "";
      display: block;
      width: 100%;
      height: 100%;
      position: absolute;
      transition: 0.5s ease-in-out;
    }
  }

  input {
    display: none;

    &:checked ~ label .hamburguer:before {
      transform: rotate(45deg);
    }

    &:checked ~ label .hamburguer:before {
      transform: rotate(90deg);
      top: 0;
    }

    &:checked ~ label .hamburguer:after {
      transform: rotate(90deg);
      top: 0;
    }
  }

  @media (max-width: 1050px) {
    .menu {
      display: block;
      align-self: flex-start;
    }

    nav label {
      cursor: pointer;
      width: 60px;
      display: flex;
      flex-direction: column;
    }

    nav ul {
      display: none;
      width: 200px;
      height: 100vh;
      background-color: #fff;
      padding: 2rem;

      li {
        color: #000;
      }
    }

    input {
      &:checked ~ ul {
        display: block;
      }
    }

    nav {
      position: absolute;
      top: 8px;
      right: 2rem;
      left: 0;
    }

    nav ul li {
      text-align: center;
      padding: 2rem;
      display: block;
    }
  }

  @media (max-width: 1030px) {
    height: 70px;
  }
`;

const Logo = styled.img`
  width: 150px;
  height: 30px;

  @media (max-width: 475px) {
    width: 120px;
    height: 20px;
  }

  @media (max-width: 615px) {
    margin-left: 30px;
  }
`;

const Linkers = styled.ul`
  display: flex;
  flex-grow: 1;
`;

const Options = styled.li`
  margin-left: 30px;
  font-size: 2rem;
  color: hsl(220, 14%, 75%);
  cursor: pointer;
  position: relative;

  &:hover {
    color: hsl(220, 13%, 13%);

    &::after {
      content: "";
      left: 0;
      right: 0;
      border-bottom: solid hsl(26, 100%, 55%);
      padding: 30px 0;
      position: absolute;
    }
  }

  @media(max-width: 1050px) {
    &:hover{
      color: hsl(26, 100%, 55%);
      
      &::after{
        border: none;
      }
    }
  }
`;

const Profile = styled.section`
  display: flex;
  align-items: center;
`;

const CartContainer = styled.section`
  position: relative;

  span {
    position: absolute;
    background-color: hsl(26, 100%, 55%);
    padding: 2px 4px;
    border-radius: 100%;
    top: -8px;
    right: -5px;
  }
`;

const ExpandedCart = styled.div`
  position: absolute;
  bottom: -235px;
  left: -140px;
  min-width: 300px;
  min-height: 210px;
  max-height: 250px;
  box-shadow: 1px 15px 20px 2px hsl(220, 14%, 88%);
  background-color: #fff;
  overflow: auto;

  display: flex;
  flex-direction: column;

  section {
    overflow: auto;
    max-height: 100px;
  }

  h2 {
    font-weight: 700;
    padding: 10px 20px 20px 20px;
    border-bottom: solid 1px hsl(223, 64%, 98%);
  }

  p {
    font-size: 1.4rem;
    width: 130px;
    margin: auto;
    font-weight: 700;
    color: hsl(220, 14%, 55%);
  }

  button {
    width: 250px;
    height: 40px;
    margin: auto;
    background-color: hsl(26, 100%, 55%);
    border: none;
    border-radius: 5px;
    font-weight: 700;
    cursor: pointer;

    &:active {
      opacity: 0.8;
    }
  }

  @media (max-width: 475px) {
    width: 95vw;
    min-height: 290px;
    top: 55px;
    left: -340px;
    box-shadow: none;
    border-radius: 10px;

    h2 {
      margin-top: 10px;
    }

    button {
      height: 50px;
      width: 80vw;
      font-size: 1.7rem;
    }
  }

  @media (max-width: 430px) {
    left: -297px;
  }

  @media(max-width: 415px){
    left: -282px;
  }

  @media (max-width: 400px) {
    left: -240px;
  }

  @media (max-width: 394px) {
    left: -260px;
  }
`;
const ProductInCart = styled.section`
  width: 250px;
  margin: auto;
  margin-bottom: 10px;

  div {
    display: flex;

    div {
      flex-direction: column;
      color: hsl(219, 9%, 45%);
      margin-left: 10px;

      ul {
        display: flex;
        padding: 5px;
        justify-content: space-between;

        li {
          strong {
            font-weight: 700;
            color: #000;
          }
        }
      }
    }
  }
  @media (max-width: 475px) {
    margin: 20px 30px;
    width: 80vw;

    div {
      div {
        margin-right: 10px;

        h3 {
          font-size: 1.7rem;
        }
        ul {
          font-size: 1.5rem;
          justify-content: start;

          li {
            margin-right: 10px;
          }
        }
      }
    }
  }
`;

const Trash = styled.img`
  cursor: pointer;
  height: 15px;
  margin: 15px 10px;
`;
const ProductIn = styled.img`
  width: 50px;
`;
const Cart = styled.img`
  cursor: pointer;
`;
const Avatar = styled.img`
  cursor: pointer;
  width: 50px;
  margin-left: 40px;

  &:hover {
    border: solid hsl(26, 100%, 55%);
    border-radius: 30px;
  }

  @media (max-width: 475px) {
    width: 30px;
  }
`;

export {
  HeaderHome,
  HeaderContainer,
  Logo,
  Linkers,
  Options,
  CartContainer,
  ExpandedCart,
  ProductInCart,
  ProductIn,
  Trash,
  Cart,
  Avatar,
  Profile,
};
