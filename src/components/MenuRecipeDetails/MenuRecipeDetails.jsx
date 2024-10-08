import React, { useRef, useState, useEffect } from "react";
import "./Menu.css";

const menu = [
  "Beef Biryani",
  "Chicken Biryani",
  "Aloo Keema",
  "Lassi",
  "Pasta",
  "Kebabs",
  "Salad",
  "Blueberry",
  "Mutton",
  "Grill",
];

const MenuRecipeDetails = () => {
  const menuRef = useRef(null);
  const [isRightArrowDisabled, setIsRightArrowDisabled] = useState(false);
  const [isLeftArrowDisabled, setIsLeftArrowDisabled] = useState(true);

  const checkArrowVisibility = () => {
    if (menuRef.current) {
      const { scrollWidth, clientWidth, scrollLeft } = menuRef.current;
      setIsRightArrowDisabled(scrollLeft + clientWidth >= scrollWidth);
      setIsLeftArrowDisabled(scrollLeft === 0);
    }
  };

  // Function to scroll left
  const scrollLeft = () => {
    menuRef.current.scrollBy({
      top: 0,
      left: -200, // Adjust scroll amount
      behavior: "smooth",
    });
    setTimeout(checkArrowVisibility, 300); // Delay check after scrolling
  };

  // Function to scroll right
  const scrollRight = () => {
    menuRef.current.scrollBy({
      top: 0,
      left: 200, // Adjust scroll amount
      behavior: "smooth",
    });
    setTimeout(checkArrowVisibility, 300); // Delay check after scrolling
  };

  useEffect(() => {
    checkArrowVisibility(); // Initial check on component mount
    window.addEventListener("resize", checkArrowVisibility); // Check on window resize
    return () => window.removeEventListener("resize", checkArrowVisibility); // Cleanup
  }, []);

  return (
    <div className="relative">
      {/* Left Arrow */}
      <button
        className={`absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full z-10 ${
          isLeftArrowDisabled ? "opacity-50 cursor-not-allowed" : ""
        }`}
        onClick={scrollLeft}
        disabled={isLeftArrowDisabled}
      >
        &lt;
      </button>

      {/* Menu Items */}
      <div
        ref={menuRef}
        className="flex justify-start items-center main-menu lg:px-8 lg:gap-10 py-4 drop-shadow-2xl overflow-x-auto no-scrollbar"
      >
        {menu.map((item, index) => (
          <div
            key={index}
            className="menu-item lg:ml-4 text-center whitespace-nowrap text-white"
          >
            <li className="text-sm sm:text-md lg:text-lg">{item}</li>
          </div>
        ))}
      </div>

      {/* Right Arrow */}
      <button
        className={`absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full z-10 ${
          isRightArrowDisabled ? "opacity-50 cursor-not-allowed" : ""
        }`}
        onClick={scrollRight}
        disabled={isRightArrowDisabled}
      >
        &gt;
      </button>
    </div>
  );
};

export default MenuRecipeDetails;
