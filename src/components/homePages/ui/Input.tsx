import React from "react";
import clsx from "clsx";

interface InputProps {
  type?: string; // Input type (text, number, etc.)
  name?: string; // Input name
  id?: string; // Input id
  placeholder?: string; // Placeholder text
  value?: string; // Input value
  onSearch?: () => void; // Optional search trigger callback
  icon?: React.ReactNode; // Custom icon (for search or others)
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void; // Callback for change event
  maxLength?: number; // Maximum number of characters
  className?: string; // Custom wrapper class names
  inputClassName?: string; // Custom class names for the input element
}

const Input: React.FC<InputProps> = ({
  type = "text",
  name,
  id,
  placeholder = "",
  value,
  onChange,
  maxLength,
  className,
  inputClassName,
  onSearch,
  icon,
}) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;

    // Apply maxLength if specified
    if (maxLength && newValue.length > maxLength) {
      e.target.value = newValue.slice(0, maxLength); // Truncate value to maxLength
    }

    // Trigger custom onChange logic (if any)
    onChange?.(e);
  };

  return (
    <div className={clsx("flex items-center relative", className)}>
      {/* Optional Custom Icon */}
      <input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={handleInputChange}
        className={clsx(
          "peer border-[#e5eaf2] border rounded-md text-[#8A8FB9] pl-2 outline-none focus:border-OffNavyBlue transition-colors duration-300",
          inputClassName
        )}
        onKeyDown={(e) => {
          if (e.key === "Enter" && onSearch) {
            onSearch();
          }
        }}
      />
      {/* Optional Custom Icon */}
      {icon && (
        <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
          {icon}
        </div>
      )}
    </div>
  );
};

export default Input;
