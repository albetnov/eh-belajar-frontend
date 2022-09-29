import React from "react";
import { HiArrowRight } from "react-icons/hi";
import { NumberRange } from "../utils/NumberRange";
import Typography from "./Typography";

interface HomeworkProgressProps {
  title: string;
  taskCount: number;
  isActive?: boolean;
  percent: NumberRange;
}

const HomeworkProgress: React.FC<HomeworkProgressProps> = ({
  title,
  taskCount,
  isActive = false,
  percent,
}) => {
  const fontColor = isActive ? "text-white" : "";
  const circleReferece = 25 * 2 * Math.PI;

  return (
    <div
      className={`p-3 ${
        isActive ? "bg-primary" : "bg-transparent shadow-lg"
      } rounded-lg flex justify-between items-center`}
    >
      <div
        x-data="scrollProgress"
        className="relative inline-flex items-center justify-center overflow-hidden rounded-full rotate-90"
      >
        {/* <!-- Building a Progress Ring: https://css-tricks.com/building-progress-ring-quickly/ --> */}
        <svg className="w-16 h-16">
          <circle
            className="text-gray-300 fill-transparent stroke-white"
            stroke-width="5"
            r="25"
            cx="35"
            cy="35"
          />
          <circle
            className={isActive ? "text-secondary" : "text-primary"}
            stroke-width="5"
            stroke-dasharray={circleReferece}
            stroke-dashoffset={circleReferece - (percent / 100) * circleReferece}
            stroke-linecap="round"
            stroke="currentColor"
            fill="transparent"
            r="25"
            cx="35"
            cy="35"
          />
        </svg>
        <span
          className={`absolute text-sm ${fontColor} bottom-5 ${
            percent === 100 ? "right-3" : "right-4"
          } -rotate-90`}
        >
          {percent}%
        </span>
      </div>
      <div>
        <Typography className={`${fontColor} font-semibold`}>{title}</Typography>
        <Typography className={`${fontColor}`} variant="small">
          {taskCount} tasks
        </Typography>
      </div>
      <HiArrowRight
        className={`${fontColor} text-lg mr-3 hover:cursor-pointer transition-all delay-100 hover:translate-x-3`}
      />
    </div>
  );
};

export default HomeworkProgress;
