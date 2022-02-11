import Home from "./pages/Home";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import GlobalStyles from "./components/styles/Global";
import { ThemeProvider } from "styled-components";
import { theme } from "./components/styles/theme";
import { Routes, Route,useParams} from "react-router-dom";


const App = () => {

  const user = true;
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Product/:id" element={<Product />} />
          <Route path="Cart" element={<Cart />} />
          <Route path="Login" element={<Login />} />
          <Route path="Register" element={<Register />} />
        </Routes>
      </>
    </ThemeProvider>
  );
};

export default App;
