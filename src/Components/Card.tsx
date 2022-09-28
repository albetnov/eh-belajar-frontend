import React from "react";

const Card = (props: React.HTMLAttributes<HTMLDivElement>) => {
  return <div {...props} className={`p-3 rounded-lg shadow-md ${props.className}`}></div>;
};

export default Card;
