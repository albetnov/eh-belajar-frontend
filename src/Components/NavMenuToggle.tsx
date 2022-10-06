import { HiMenu } from "react-icons/hi";
import Typography from "./Typography";
import logo from "../Assets/logo.png";

type Props = {
  onClick: () => void;
  isExpanded: boolean;
};

const NavMenuToggle: React.FC<Props> = ({ onClick, isExpanded }) => {
  // return (
  //   <button
  //     onClick={onClick}
  //     className="sm:hidden shadow-lg border border-transparent p-3 rounded-full text-slate-600 hover:border-primary focus:outline-none z-20"
  //   >
  //     <HiMenu className={`text-2xl transition-all delay-100 ${isExpanded ? "-rotate-90" : ""}`} />
  //   </button>
  // );
  return (
    <div className="w-full p-3 h-16 fixed z-10 bg-transparent backdrop-blur-md sm:backdrop-blur-none sm:w-fit flex items-center">
      <button
        onClick={onClick}
        className="sm:hidden shadow border border-transparent p-3 rounded-full text-slate-600 hover:border-primary focus:outline-none z-20"
      >
        <HiMenu className={`text-2xl transition-all delay-100 ${isExpanded ? "-rotate-90" : ""}`} />
      </button>
      <div className="mx-auto flex items-center gap-2 sm:mx-0">
        <img src={logo} alt="logo" className="14 h-14 rounded" />
        <Typography variant="body1" className="font-semibold font-dancing__script">
          Eh-Belajar
        </Typography>
      </div>
    </div>
  );
};

export default NavMenuToggle;
