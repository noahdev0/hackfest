import React from "react";

interface Props {
  children: React.ReactNode;
}

const GridLayout: React.FC<Props> = ({ children }) => {
  if (!children) {
    throw new Error("GridLayout component requires children prop.");
  }

  return (
    <div className="py-10 lg:py-14 ">
      <div className="grid lg:grid-cols-2 lg:gap-y-16 gap-10 ">{children}</div>
    </div>
  );
};

export default GridLayout;
