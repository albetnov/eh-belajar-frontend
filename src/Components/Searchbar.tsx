import { useEffect, useRef, useState } from "react";
import { HiOutlineBell, HiSearch } from "react-icons/hi";
import RoundButton from "./RoundButton";

const Searchbar = () => {
  const [expand, toggleExpand] = useState(false);
  const searchRef = useRef<HTMLInputElement>(null);

  const disableExpand = () => {
    toggleExpand(false);
  };

  const enableExpand = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    if (expand) {
      return;
    }
    toggleExpand(true);
    window.addEventListener("click", disableExpand, { once: true });
  };

  useEffect(() => {
    if (searchRef.current !== null) {
      const timer = setTimeout(() => {
        searchRef.current!.focus();
      });
      return () => {
        clearTimeout(timer);
      };
    }
  }, [expand]);

  return (
    <div className="flex gap-7 w-full justify-end">
      <div
        className={`rounded-full shadow-lg p-3 text-zinc-700 transition-all delay-100 ${
          expand ? "w-1/2 lg:w-1/3 flex items-center gap-3" : "w-10 hover:cursor-pointer"
        }`}
        onClick={enableExpand}
        tabIndex={1}
      >
        <HiSearch className="text-slate-700" />
        {expand && (
          <input
            ref={searchRef}
            className="w-full bg-transparent h-full focus:outline-none text-zinc-700"
          />
        )}
      </div>
      <RoundButton
        icon={
          <div className="relative">
            <HiOutlineBell />
            <div className="absolute -top-2 p-3 scale-[0.3] rounded-full bg-primary"></div>
          </div>
        }
      />
    </div>
  );
};

export default Searchbar;
