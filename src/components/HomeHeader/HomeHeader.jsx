import "./HomeHeader.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { auth } from "../../firebase"; // adjust path if needed

function HomeHeader() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUsername(user.displayName || user.email || "");
      } else {
        setUsername("");
      }
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = () => {
    auth.signOut().then(() => {
      navigate("/login");
    });
  };

  return (
    <div className="home-header">
      <div className="header-top">
        <span className="welcome-text">
          {username ? `Welcome, ${username}` : ""}
        </span>
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
      <img src="././logo.png" alt="logo" />
      <h1>
        Dream it.
        <br />
        Rent it. Buy it.
      </h1>
      <div>
        <form className="search-bar">
          <input type="text" placeholder="Search..." />
          <button type="submit">
            <span role="img" aria-label="search">
              <img
                src="https://img.icons8.com/fluency/48/search.png"
                alt="search"
              />
            </span>
          </button>
        </form>
      </div>
    </div>
  );
}
export default HomeHeader;