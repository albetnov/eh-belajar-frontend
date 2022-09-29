import React from "react";

interface RoundButtonProps {
  icon: React.ReactNode;
  className?: string;
}

export default function RoundButton({ icon, className = "" }: RoundButtonProps) {
  return <button className={`shadow-lg rounded-xl p-3 text-slate-700 ${className}`}>{icon}</button>;
}
