import React from "react";
import Card from "./Card";
import { HiArrowRight } from "react-icons/hi";

type CourseCardProps = {
  children: React.ReactNode;
  image: string;
  bgType: string;
};

const CourseCard: React.FC<CourseCardProps> = ({ children, image, bgType }) => {
  return (
    <Card className={`${bgType}-100`}>
      <div className={`${bgType}-200 opacity-90 rounded-lg p-3 lg:p-5 xl:p-10 my-3`}>
        <img src={image} alt="Program" className="w-36 lg:w-32 mx-auto -rotate-6" />
      </div>
      {children}
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
        <button className="p-3 rounded-xl bg-amber-200 hover:shadow-lg active:opacity-80">
          <HiArrowRight />
        </button>
      </div>
    </Card>
  );
};

export default CourseCard;
