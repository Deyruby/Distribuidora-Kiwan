import React, { useState, useEffect } from "react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Function to handle scroll event
  /* const handleScroll = () => {
    if (window.scrollY > 300) { // Show button after scrolling down 300px
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }; */

  const handleScroll = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    // Mostrar o ocultar el botón según la posición del desplazamiento
    setIsVisible(scrollTop > 100);
  };

  // Function to scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    // Add event listener on mount
    window.addEventListener("scroll", handleScroll);

    // Remove event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {isVisible && (
        <button className="button" onClick={scrollToTop}>
          <i className="fa-solid fa-arrow-up"></i>
        </button>
      )}
    </div>
  );
};



export default ScrollToTopButton;
