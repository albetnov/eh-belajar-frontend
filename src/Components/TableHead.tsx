import React from "react";

interface TableHeadProps {
  children: React.ReactNode;
}

const TableHead: React.FC<TableHeadProps> = ({ children }) => {
  return <th className="font-normal p-3 text-start text-sm">{children}</th>;
};

export default TableHead;
