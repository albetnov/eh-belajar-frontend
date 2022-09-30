import React from "react";
import Card from "./Card";
import { HiArrowRight } from "react-icons/hi";
import Typography from "./Typography";

type CourseCardProps = {
  image?: string;
  imageIcon?: React.ReactNode;
  bgType: {
    bgDrop: string;
    bg: string;
    shadow: string;
  };
  title: string;
  lessonCount: number;
};

const CourseCard: React.FC<CourseCardProps> = ({
  title,
  lessonCount,
  image,
  bgType,
  imageIcon,
}) => {
  if (!image && !imageIcon) {
    throw new Error("WTF is the argument?");
  }

  return (
    <Card className={bgType.bgDrop}>
      <div className={`${bgType.bg} opacity-90 rounded-lg p-3 lg:p-5 xl:p-10 my-3`}>
        {imageIcon
          ? imageIcon
          : image && (
              <img src={image} alt="Program" className="w-36 h-24 lg:w-32 mx-auto -rotate-6" />
            )}
      </div>
      <Typography variant="body2" className="font-bold">
        {title}
      </Typography>
      <Typography className="text-slate-500">
        {lessonCount} {lessonCount > 1 ? "lessons" : "lesson"}
      </Typography>
      <div className="relative flex items-center justify-between mt-10 pb-3">
        <div>
          <img
            src="https://source.unsplash.com/1000x1000?potrait"
            className="w-7 rounded-full absolute top-1"
          />
          <img
            src="https://source.unsplash.com/1000x1000?potrait"
            className="w-7 rounded-full absolute top-1 left-4"
          />
          <img
            src="https://source.unsplash.com/1000x1000?potrait"
            className="w-7 rounded-full absolute top-1 left-9"
          />
        </div>
        <button
          className={`p-3 text-white font-semibold text-lg rounded-xl ${bgType.bg} hover:shadow-lg ${bgType.shadow} active:opacity-80`}
        >
          <HiArrowRight />
        </button>
      </div>
    </Card>
  );
};

export default CourseCard;
