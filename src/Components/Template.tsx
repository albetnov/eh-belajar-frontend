import React from "react";
import Navbar from "./Navbar";

type Props = {
  children: React.ReactNode;
};

export default function Template({ children }: Props) {
  return (
    <>
      <Navbar />
      <div className={`ml-[${+300}px]`}>{children}</div>
    </>
  );
}
