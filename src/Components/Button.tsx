import { forwardRef } from "react";

type Props = {
  children: React.ReactNode | string;
  className?: string;
};

const Button: React.FC<Props> = forwardRef(({ children, className }, ref) => {
  const classes =
    className?.includes("bg-") ||
    (className?.includes("text-") && !className.includes("text-center"))
      ? "p-3 transition-shadow delay-100 hover:shadow-lg hover:shadow-shadow__primary active:opacity-90"
      : "p-3 rounded-lg bg-primary text-slate-200 transition-shadow delay-100 hover:shadow-lg hover:shadow-shadow__primary active:opacity-90";
  const finalClass = `${classes} ${className}`;

  return <button className={finalClass}>{children}</button>;
});

export default Button;
