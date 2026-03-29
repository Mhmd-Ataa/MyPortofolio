import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../header/Header.css";

const Header = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("currentMood") ?? "dark",
  );

  useEffect(() => {
    if (theme === "light") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    }
  }, [theme]);

  let [response, setResponse] = useState(false);
  return (
    <>
      <header className="d-flex justify-content-between pt-4  ">
        <div
          className="menu  align-items-center justify-content-center"
          onClick={() => {
            setResponse(true);
          }}
        >
          <i className="fa-solid fa-bars"></i>
        </div>
        <div />

        <nav className="align-items-center px-5 py-2">
          <ul className="d-flex column-gap-3 p-0 m-0 ">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="Projects">Projects</Link>
            </li>
            <li>
              <Link to="Resume">Resume</Link>
            </li>
            <li>
              <Link to="contact">Contact</Link>
            </li>
          </ul>
        </nav>

        <div
          className="mood d-flex align-items-center justify-content-center"
          onClick={() => {
            localStorage.setItem(
              "currentMood",
              theme === "dark" ? "light" : "dark",
            );
            setTheme(localStorage.getItem("currentMood"));
          }}
        >
          {theme === "dark" ? (
            <i className="fa-regular fa-moon"></i>
          ) : (
            <i className="fa-regular fa-sun"></i>
          )}
        </div>
        {response && (
          <div className="overlay">
            <div className="list mt-5 position-absolute p-3  ">
              <ul className=" p-0">
                <div
                  className="close text-end "
                  onClick={() => {
                    setResponse(false);
                  }}
                >
                  <i className="fa-solid fa-xmark "></i>
                </div>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="Projects">Projects</Link>
                </li>
                <li>
                  <Link to="Resume">Resume</Link>
                </li>
                <li>
                  <Link to="contact">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
