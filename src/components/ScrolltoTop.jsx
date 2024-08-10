import React, { useState, useEffect } from "react";
//import "../styles/scrolltoTop.css";

const ScrolltoTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    console.log("Current scroll position:", window.scrollY); // Verifica la posición del scroll
    if (window.scrollY > 5000) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      console.log("Scroll event triggered"); // Verifica si el evento de scroll se dispara
      toggleVisibility();
    };

    console.log("Adding scroll event listener"); // Verifica si se agrega el listener
    window.addEventListener("scroll", handleScroll);

    // Limpieza del evento de scroll
    return () => {
      console.log("Removing scroll event listener"); // Verifica si se elimina el listener
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button  style={{ position: 'fixed',
    bottom: '80px',
    right: '80px',
    backgroundColor: '#ff0800',
    color: '#ffffff',
    border: 'none',
    borderRadius: '50%',
    width: '50px',
    height: '50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    cursor: 'pointer',
    fontSize: '24px',
    transition: 'opacity 0.3s ease',
    opacity: isVisible ? '1' : '0' }}
      className={`scroll-to-top ${isVisible ? "visible" : ""}`}
      onClick={scrollToTop}
    >
      <i className="fa-solid fa-arrow-up"></i>
      {console.log("Button isVisible:", isVisible)}
    </button>
  );
};

export default ScrolltoTop;
