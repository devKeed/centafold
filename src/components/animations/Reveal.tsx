import React from "react";

interface RevealOnScrollProps {
  children: React.ReactNode;
  className?: string;
}

const RevealOnScroll: React.FC<RevealOnScrollProps> = ({
  children,
  className = "",
}) => {
  return <div className={`animate-fade-in ${className}`}>{children}</div>;
};

export default RevealOnScroll;
