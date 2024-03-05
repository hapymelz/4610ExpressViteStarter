export const Home = () => {
    
    const token = window.localStorage.getItem(token);

    //window.localStorage.removeItem(token) to log out


    return (
        <>
        <div>

            <h1>I am on the Home Page</h1>
            [token ? (
                <div>You are logged in</div>
            )] : (

                <Link to="/login">Login</Link>
                <Link to="/sign_up">Sign Up</Link>
            )
        </div>
        </>
    )
}