import React from "react";

type Props = {
  variant?:
    | "heading1"
    | "heading2"
    | "heading3"
    | "body1"
    | "body2"
    | "large"
    | "paragraph"
    | "small";
  className?: string;
  children: React.ReactNode | string;
};

const Typography: React.FC<Props> = ({ variant = "paragraph", className, children }) => {
  const classes =
    className?.includes("text-") && !className?.includes("text-center")
      ? className
      : `${className ? className : ""} text-slate-700`;

  switch (variant) {
    case "heading1":
      return <h1 className={`text-6xl ${classes}`}>{children}</h1>;
    case "heading2":
      return <h2 className={`text-4xl ${classes}`}>{children}</h2>;
    case "heading3":
      return <h3 className={`text-3xl ${classes}`}>{children}</h3>;
    case "body1":
      return <h4 className={`text-2xl ${classes}`}>{children}</h4>;
    case "body2":
      return <h5 className={`text-xl ${classes}`}>{children}</h5>;
    case "large":
      return <p className={`text-lg ${classes}`}>{children}</p>;
    case "small":
      return <p className={`text-sm ${classes}`}>{children}</p>;
    default:
      return <p className={`text-base ${classes}`}>{children}</p>;
  }
};

export default Typography;
