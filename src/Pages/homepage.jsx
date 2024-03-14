import { useNavigate } from "react-router-dom";

const homepage = () => {
    const navigate = useNavigate();

    const allproducts = () => {
        navigate("/Categories/:categoryname?")
    }

    return(
        <div>
            <h1>Welcome to our store!</h1>
            <p>Please click the button below to view all of our products.</p>
            <button onClick={allproducts}>View Products</button>
        </div>
    )
}
export default homepage;