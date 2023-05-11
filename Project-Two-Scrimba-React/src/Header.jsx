import airBNBLogo from "./assets/airbnb-logo.png"

function Header () {
    return(
        <>
            <nav>
                <div className="header">
                    <img src={airBNBLogo} alt="Air BNB Logo" className="logo-image" />
                </div>
            </nav>
        </>
    )       
}

export default Header