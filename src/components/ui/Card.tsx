import React, { FC, ReactNode } from "react";

interface CardProps {
  children?: ReactNode;
}

const Card: FC<CardProps> = ({ children }) => {
  return (
    <div className="w-full h-full rounded-md overflow-hidden drop-shadow-md transition-all ease-in">
      {children}
    </div>
  );
};

export default Card;
