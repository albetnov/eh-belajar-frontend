import { useEffect, useRef, useState } from "react";
import { HiBell, HiSearch } from "react-icons/hi";
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
          expand ? "w-1/2 sm:w-1/5 flex items-center gap-3" : "w-10 hover:cursor-pointer"
        }`}
        onClick={enableExpand}
        tabIndex={1}
      >
        <HiSearch className="text-slate-700" />
        {expand && (
          <input ref={searchRef} className="w-full bg-transparent h-full focus:outline-none" />
        )}
      </div>
      <RoundButton icon={<HiBell />} />
    </div>
  );
};

export default Searchbar;
