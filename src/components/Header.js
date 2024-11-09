import { useState } from "react";
import Logo from "../assets/img/food_villa.jpg";
import { Link } from "react-router-dom";
const LoggedInUser = () => {
  return true;
};
const Title = () => {
  return (
    <Link to="/">
      <img
        className="logo"
        alt="logo"
        src={Logo}
      />
    </Link>
  );
};
const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link>Cart</Link></li>
          <li><Link to="/instamart">Insta Mart</Link></li>
        </ul>
      </div>
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Log in</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Log Out</button>
      )}
    </div>
  );
};
export default Header;
