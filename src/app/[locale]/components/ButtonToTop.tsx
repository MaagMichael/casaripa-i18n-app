"use client";

import { useEffect, useState } from "react";

function ButtonToTop() {
  const [visible, setVisible] = useState(false);

  // when scrolled more than 300px, show the button
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;

    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  // check at every scroll movement the visibility of top button
  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
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
