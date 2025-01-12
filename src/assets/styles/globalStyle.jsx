import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html{
        font-size: 62.5%;
    }

    *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Kumbh Sans" , sans-serif;
    font-weight: 400;
    }

    li{
    list-style: none;
    }
`;
export { GlobalStyle };
