import Sidebar from "./Sidebar";
import NavMenuToggle from "./NavMenuToggle";
import { useState } from "react";

export default function Navbar() {
  const [isExpanded, setIsExpanded] = useState(false);

  // return (
  //   <div className="h-screen fixed z-10 flex flex-col w-full sm:w-fit">
  //     <div className="bg-slate-50 sm:bg-transparent pt-3 px-5 h-fit flex items-center sm:gap-3">
  //       <NavMenuToggle
  //         onClick={() => {
  //           setIsExpanded((prevValue) => !prevValue);
  //         }}
  //         isExpanded={isExpanded}
  //       />
  //       <div className="mx-auto flex items-center gap-2 sm:mx-0">
  //         <img src={logo} alt="logo" className="14 h-14 rounded" />
  //         <Typography variant="body1" className="font-semibold font-dancing__script">
  //           Eh-Belajar
  //         </Typography>
  //       </div>
  //     </div>
  //     <Sidebar isExpanded={isExpanded} />
  //   </div>
  // );

  return (
    <>
      <NavMenuToggle
        onClick={() => {
          setIsExpanded((prevValue) => !prevValue);
        }}
        isExpanded={isExpanded}
      />
      <div className="mt-[2.7rem] sidebar__wrapper__height sm:sidebar__wrapper__reset z-10 fixed">
        <Sidebar isExpanded={isExpanded} />
      </div>
    </>
  );
}
