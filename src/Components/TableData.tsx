import React from "react";

interface TableDataProps {
  children: React.ReactNode;
}

const TableData: React.FC<TableDataProps> = ({ children }) => {
  return <td className="p-3">{children}</td>;
};

export default TableData;
