import React from "react";

interface ButtonProps {
  children?: React.ReactNode;
  text?: string;
  link?: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

export const MyFillButton: React.FC<ButtonProps> = ({
  children,
  text,
  link,
  onClick,
  className = "",
  disabled = false,
  type = "button",
}) => {
  const handleClick = () => {
    if (link) {
      window.location.href = link;
    } else if (onClick) {
      onClick();
    }
  };

  return (
    <button
      type={type}
      onClick={handleClick}
      disabled={disabled}
      className={`bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${className} ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
    >
      {text || children}
    </button>
  );
};
