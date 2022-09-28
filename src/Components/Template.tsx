import React from "react";
import Navbar from "./Navbar";

type Props = {
  children: React.ReactNode;
};

export default function Template({ children }: Props) {
  return (
    <div className="grid container-grid-mobile sm:container-grid">
      <Navbar />
      {children}
    </div>
  );
}
