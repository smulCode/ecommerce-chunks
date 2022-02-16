import Home from "./pages/Home";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Login from "./pages/Login";
import GlobalStyles from "./components/styles/Global";
import { ThemeProvider } from "styled-components";
import { theme } from "./components/styles/theme";
import { Routes, Route, useParams } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  const user = true;
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="Product/:id" element={<Product />} />
            <Route path="Login" element={<Login />} />
          </Routes>
        </ScrollToTop>
      </>
    </ThemeProvider>
  );
};

export default App;
