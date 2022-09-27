import Typography from "./Typography";

type Props = {
  icon: React.ReactNode;
  text: string;
  isActive?: boolean;
};

const SidebarList: React.FC<Props> = ({ icon, text, isActive = false }) => {
  let classes =
    "p-2 rounded-md font-medium flex items-center gap-4 hover:cursor-pointer transition-all delay-100 z-10";
  if (isActive) {
    classes += " bg-secondary";
  } else {
    classes += " text-slate-400 hover:bg-slate-100";
  }

  return (
    <div className={classes}>
      {icon}
      <Typography className={isActive ? "font-semibold" : "text-slate-400"}>{text}</Typography>
    </div>
  );
};

export default SidebarList;
