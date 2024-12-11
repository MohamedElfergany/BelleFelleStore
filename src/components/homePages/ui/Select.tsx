import React, { useState, useEffect, useRef } from "react";
import { IoChevronDown } from "react-icons/io5";
import clsx from "clsx";

interface SelectProps {
  options: string[]; // Dynamic options for the dropdown
  onChange?: (value: string) => void; // Callback to handle option selection
  defaultOption?: string; // Default displayed option
  width?: string; // Custom width of the dropdown
  height?: string; // Custom height of the button
  fontSize?: string; // Tailwind font size class for dynamic text size
  className?: string; // Custom class names to apply to the dropdown container
}

const Select: React.FC<SelectProps> = ({
  options,
  onChange,
  defaultOption = "Select Option",

  className, // Additional custom class names
}) => {
  const [isActive, setIsActive] = useState(false); // Dropdown state
  const [content, setContent] = useState(defaultOption); // Selected content
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close the dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsActive(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Handle option selection
  const handleOptionClick = (option: string) => {
    setContent(option);
    setIsActive(false);
    if (onChange) onChange(option); // Trigger the callback if provided
  };

  return (
    <div
      className={clsx("relative dropdown space-x-3", className)} // Add custom className
      ref={dropdownRef}
    >
      <button
        className={clsx(
          "bg-white border text-[#8A8FB9] border-[#e5eaf2] flex items-center justify-between px-3 py-2 w-full cursor-pointer",
          className // Dynamically applied font size
        )}
        onClick={() => setIsActive(!isActive)}
      >
        {content}
        <IoChevronDown
          className={clsx(
            "transition-all duration-300 text-xs text-[#8A8FB9]",
            { "rotate-180": isActive, "rotate-0": !isActive } // Rotate icon dynamically
          )}
        />
      </button>
      <div
        className={clsx(
          "absolute #8A8FB9 py-2 left-0 z-40 bg-white rounded-xl w-full flex flex-col overflow-hidden transition-all duration-300 ease-in-out",
          {
            "opacity-100 scale-100": isActive, // Visible state
            "opacity-0 scale-95": !isActive, // Hidden state
          }
        )}
        style={{
          boxShadow: "0 15px 60px -15px rgba(0, 0, 0, 0.3)",
        }}
      >
        {options.map((option, index) => (
          <p
            className={clsx(
              "py-2 px-4 text-[#8A8FB9] hover:bg-gray-200 transition-all duration-200 cursor-pointer",
              // Dynamically applied font size
              className
            )}
            key={index}
            onClick={() => handleOptionClick(option)}
          >
            {option}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Select;
