import { HiBadgeCheck, HiPencil } from "react-icons/hi";
import CourseCard from "../Components/CourseCard";
import RoundButton from "../Components/RoundButton";
import Template from "../Components/Template";
import Typography from "../Components/Typography";
import Calendar from "react-calendar";
import HomeworkProgress from "../Components/HomeworkProgress";

export default function Dashboard() {
  return (
    <Template breadcrumbs={"Dashboard"}>
      <div className="grid lg:grid-cols-3 sm:grid-rows-1">
        <div className="col-span-2">
          <Typography variant="body2" className="mt-3">
            New Courses
          </Typography>
          <div className="mt-10 flex flex-col flex-wrap gap-7 md:flex-row justify-center">
            {[1, 2, 3].map((item, index) => {
              return (
                <CourseCard
                  key={index}
                  bgType={{ bgDrop: "bg-amber-100", bg: "bg-amber-300" }}
                  image="https://source.unsplash.com/300x300?program"
                >
                  <Typography variant="body2" className="font-bold">
                    Geography
                  </Typography>
                  <Typography className="text-slate-500">12 Lessons</Typography>
                </CourseCard>
              );
            })}
          </div>
        </div>
        <div className="hidden sm:block p-3">
          <div className="grid grid-cols-2 items-center">
            <Typography variant="body2">Profile</Typography>
            <RoundButton icon={<HiPencil />} className="justify-self-end" />
          </div>
          <div className="grid justify-center mt-5">
            <img
              src="https://source.unsplash.com/300x300?potrait"
              className="mx-auto w-24 rounded-full"
            />
            <div className="flex w-full mt-3 gap-2 justify-center items-center">
              <Typography variant="large">Asep Surasep</Typography>
              <HiBadgeCheck className="text-primary" />
            </div>
            <Typography variant="small" className="text-center text-slate-500">
              Elementary
            </Typography>
            <Calendar className="my-3" value={new Date()} />
            <div className="flex gap-2 flex-col">
              <Typography variant="large" className="mt-3">
                Homework Progress
              </Typography>
              <HomeworkProgress percent={30} isActive title="Styling with css" taskCount={3} />
              <HomeworkProgress percent={50} title="Styling with css" taskCount={3} />
              <HomeworkProgress percent={100} title="Styling with css" taskCount={3} />
            </div>
          </div>
        </div>
      </div>
    </Template>
  );
}
