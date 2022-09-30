import React from "react";
import Typography from "./Typography";

type Props = {
  icon: React.ReactNode;
  text: string;
  isActive?: boolean;
  premium?: boolean;
};

const SidebarList: React.FC<Props> = ({ icon, text, isActive = false, premium = false }) => {
  let classes =
    "p-3 sm:p-2 rounded-md font-medium flex items-center gap-4 hover:cursor-pointer transition-all delay-100 z-10";
  if (isActive) {
    classes += " bg-secondary";
  } else {
    classes += " text-slate-400 hover:bg-slate-100";
  }

  if (premium) {
    classes =
      "hover:bg-light__primary hover:shadow-shadow__primary text-white shadow-lg shadow-light__shadow__primary bg-primary p-3 sm:p-2 rounded-md font-medium flex items-center gap-4 hover:cursor-pointer transition-all delay-100 z-10 sm:hidden";
  }

  const fontColor = premium ? "text-white" : "text-slate-400";

  return (
    <div className={classes}>
      {icon}
      <Typography className={isActive ? "font-semibold" : fontColor}>{text}</Typography>
    </div>
  );
};

export default SidebarList;
