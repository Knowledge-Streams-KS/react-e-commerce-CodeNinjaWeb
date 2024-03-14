import { Route, Routes } from "react-router-dom"
import ProductList from "./Components/Products"
import ErrorPage from "./Pages/ErrorPage"
import ProductDetails from "./Pages/ProductDetails"

function App() {

  return(
    <>
      <Routes>
        <Route path="/Categories/:categoryname?" element= {<ProductList/>}></Route>
        <Route path="*" element={<ErrorPage/>}></Route>
        <Route path="/productdetails/:id" element={<ProductDetails/>}></Route>
      </Routes>
    </>
  )
}

export default App
