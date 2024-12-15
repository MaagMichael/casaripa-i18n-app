"use client";

import { useEffect, useState } from "react";

const SCROLL_THRESHOLD = 300;

function ButtonToTop() {
  const [visible, setVisible] = useState(false);

  // when scrolled more than SCROLL_THRESHOLD, show the button
  const toggleVisible = () : void => {
    // const scrolled: number = document.documentElement.scrollTop;
    
    // Using modern scroll position APIs provides better cross-browser compatibility.
    const scrolled = window.scrollY;

    if (scrolled > SCROLL_THRESHOLD) {
      setVisible(true);
    } else if (scrolled <= SCROLL_THRESHOLD) {
      setVisible(false);
    }
  };

  // check at every scroll movement the visibility of top button
  useEffect(() => {
    // window.addEventListener("scroll", toggleVisible);
    try {
      window.addEventListener("scroll", toggleVisible);
    } catch (error) {
      console.error('Failed to add scroll listener:', error);
    }
    return () => {
      window.removeEventListener("scroll", toggleVisible);
    };
  }, []);

  // scroll to top action when button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <button
        onClick={scrollToTop}
        // control the visibility of the button by ternary operator
        className={`fixed bottom-4 right-4 bg-green text-white font-[Poppins] p-2 rounded ${
          visible ? "opacity-100" : "opacity-0"
        } transition-opacity duration-300`}
      >
        Top
      </button>
    </div>
  );
}

export default ButtonToTop;
