import React, { useEffect, useState } from "react";
import './navbar.css'; // Import your CSS file for navbar styling
import cookies from "js-cookie";


export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  //const [username, setUsername] = useState("");
  useEffect(() => {
    const storedUsername = cookies.get("username");
    if (storedUsername) {
      setIsLoggedIn(true);
      //setUsername(storedUsername);
    }
  }, []);

  const handleLogout = () => {
    cookies.remove("username");
    setIsLoggedIn(false);
    //setUsername("");
  };


  return (
    <header>
      <div className="logo">MARKETABLE</div>
      <input type="checkbox" id="nav_check" hidden />
      <nav>
        <ul>
          <li>
            <a href="">
              Courses
            </a>
          </li>
          <li>
            <a href="">Mentors</a>
          </li>
          <li>
            <a href="">Offers</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
          <li className="signin">
            {!isLoggedIn?(
              <a href="" onClick={handleLogout} >Logout</a>
            ):(
              <a href=""  >Sign In</a>
            )}
          </li>
          
        </ul>
        
      </nav>
      <button className="signIn_logout_btn">Sign In</button>
      <label htmlFor="nav_check" className="hamburger">
        <div></div>
        <div></div>
        <div></div>
      </label>
    </header>
  );
}
