import { HiMenu } from "react-icons/hi";

type Props = {
  onClick: () => void;
  isExpanded: boolean;
};

const NavMenuToggle: React.FC<Props> = ({ onClick, isExpanded }) => {
  return (
    <button
      onClick={onClick}
      className="sm:hidden shadow-lg border border-transparent p-3 rounded-full text-slate-600 hover:border-primary focus:outline-none z-20"
    >
      <HiMenu className={`text-2xl transition-all delay-100 ${isExpanded ? "-rotate-90" : ""}`} />
    </button>
  );
};

export default NavMenuToggle;
