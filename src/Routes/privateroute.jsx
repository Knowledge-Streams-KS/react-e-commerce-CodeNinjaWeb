
const PrivateRoute = (props) => {
    const isLoggedin = true;
    return ( 
        isLoggedin ? <>
        props.children;
        </> : <>
        <Navigate to="/" replace={true} />
        </>
     );
}
 
export default PrivateRoute;