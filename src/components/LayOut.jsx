import { useEffect, useState } from "react";
import { Outlet } from "react-router";
import Footer from "./footer/Footer";
import Header from "./header/Header";

const LayOut = () => {
  const [showBtn, setShowBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setShowBtn(true);
      } else {
        setShowBtn(false);
      }
    });
  }, []);

  return (
    <>
      <div className="subBody " id="up">
        <Header />
        <Outlet></Outlet>
        <Footer />
      </div>

      <a
        style={{ opacity: showBtn ? 1 : 0 }}
        href="#up"
        className="position-fixed btnUp"
      >
        <i className="fas fa-arrow-circle-up"></i>
      </a>
    </>
  );
};

export default LayOut;
