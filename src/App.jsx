import { Route, Routes } from "react-router-dom";
import ProductList from "./Components/Products";
import ErrorPage from "./Pages/ErrorPage";
import ProductDetails from "./Pages/ProductDetails";
import Homepage from "./Pages/homepage";
import CartPage from "./Pages/cart";
import PrivateRoute from "./Routes/privateroute";

function App() {
  return (
    <>
      <Routes path="" element={<PrivateRoute/>}>
        <Route path="/cart" element={<CartPage />}></Route>
      </Routes>
      
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route
          path="/Categories/:categoryname?"
          element={<ProductList />}
        ></Route>
        <Route path="/productdetails/:id" element={<ProductDetails />}></Route>
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
