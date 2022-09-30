import React from "react";
import Typography from "./Typography";

interface ClassNameProps {
  className: string;
}

interface CourseTableItemProps {
  Icon: React.FC<ClassNameProps>;
  courseName: string;
  lessonCount: number;
}

const CourseTableItem: React.FC<CourseTableItemProps> = ({ Icon, courseName, lessonCount }) => {
  return (
    <div className="flex items-center gap-3">
      <div className="p-3 bg-secondary w-fit rounded-lg">
        <Icon className="text-primary text-2xl" />
      </div>
      <div>
        <Typography className="font-semibold">{courseName}</Typography>
        <Typography variant="small" className="text-slate-400">
          {lessonCount} {lessonCount > 1 ? "lessons" : "lesson"}
        </Typography>
      </div>
    </div>
  );
};

export default CourseTableItem;
