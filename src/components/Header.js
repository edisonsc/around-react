import logo from "../images/vector-logo.svg";

function Header() {
  return (
      <header className="header">
        <img src={logo} alt="logo" className="logo" />
      </header>
  );
}

export default Header;
