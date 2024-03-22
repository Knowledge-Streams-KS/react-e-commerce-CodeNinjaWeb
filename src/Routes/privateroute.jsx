
const PrivateRoute = (props) => {
    const isLoggedin = true;
    return ( 
        <>
        {isLoggedin ? (<>
        {props.children}
        </>):(<>
        <Navigate to = "/"/>
        </>)}
        </>
     )
        
}
 
export default PrivateRoute;