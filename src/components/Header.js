import logo from '../images/vector-logo.svg';

function Header () {
    return (
        <div>
        <header className="header">
        <img src={logo} alt="logo" className="logo"/>
    </header>
    </div>
    )
}

export default Header