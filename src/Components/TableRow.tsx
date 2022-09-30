import React from "react";

interface TableRowProps {
  children: React.ReactNode;
}

const TableRow: React.FC<TableRowProps> = ({ children }) => {
  return (
    <tr className="transition-all delay-200 hover:cursor-pointer hover:rounded-lg hover:bg-white hover:shadow-lg">
      {children}
    </tr>
  );
};

export default TableRow;
