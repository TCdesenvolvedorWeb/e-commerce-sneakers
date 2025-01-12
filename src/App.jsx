import { GlobalStyle } from "./assets/styles/globalStyle";
import { ProductProvider } from "./context/QuantityProducts";
import { Home } from "./pages/home";

function App() {
  return (
    <>
      <ProductProvider>
        <GlobalStyle />
        <Home />
      </ProductProvider>
    </>
  );
}

export default App;
