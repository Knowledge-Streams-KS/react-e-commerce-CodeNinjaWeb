import { Route, Routes } from "react-router-dom"
import ProductList from "./Components/Products"
import ErrorPage from "./Pages/ErrorPage"
import ProductDetails from "./Pages/ProductDetails"
import Homepage from "./Pages/homepage"

function App() {

  return(
    <>
      <Routes>
        <Route path="/" element= {<Homepage/>}></Route>
        <Route path="/Categories/:categoryname?" element= {<ProductList/>}></Route>
        <Route path="/productdetails/:id" element={<ProductDetails/>}></Route>
        <Route path="*" element={<ErrorPage/>}></Route>
      </Routes>
    </>
  )
}

export default App
