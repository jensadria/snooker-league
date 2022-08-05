import { NextPage } from "next";
import React, { FC } from "react";

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

const Button: FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button
      className='px-3 mx-1 bg-green-700 h-10 rounded-md text-white font-medium'
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
