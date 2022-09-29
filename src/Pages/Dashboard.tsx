import { HiBadgeCheck, HiCheckCircle, HiPencil } from "react-icons/hi";
import CourseCard from "../Components/CourseCard";
import RoundButton from "../Components/RoundButton";
import Template from "../Components/Template";
import Typography from "../Components/Typography";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default function Dashboard() {
  return (
    <Template breadcrumbs={["Dashboard"]}>
      <div className="grid sm:grid-cols-3 sm:grid-rows-2">
        <div className="col-span-2">
          <Typography variant="body2" className="mt-3">
            New Courses
          </Typography>
          <div className="mt-10 flex flex-col flex-wrap gap-7 md:flex-row justify-center">
            <CourseCard bgType="bg-amber" image="https://source.unsplash.com/300x300?program">
              <Typography variant="body2" className="font-bold">
                Geography
              </Typography>
              <Typography className="text-slate-500">12 Lessons</Typography>
            </CourseCard>
            <CourseCard bgType="bg-amber" image="https://source.unsplash.com/300x300?program">
              <Typography variant="body2" className="font-bold">
                Geography
              </Typography>
              <Typography className="text-slate-500">12 Lessons</Typography>
            </CourseCard>
            <CourseCard bgType="bg-amber" image="https://source.unsplash.com/300x300?program">
              <Typography variant="body2" className="font-bold">
                Geography
              </Typography>
              <Typography className="text-slate-500">12 Lessons</Typography>
            </CourseCard>
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
              className="mx-auto w-40 rounded-full"
            />
            <div className="flex w-full mt-3 gap-2 justify-center items-center">
              <Typography variant="large">Asep Surasep</Typography>
              <HiBadgeCheck className="text-primary" />
            </div>
            <Typography variant="small" className="text-center text-slate-500">
              Elementary
            </Typography>
            <Calendar className="my-3" value={new Date()} />
          </div>
        </div>
      </div>
    </Template>
  );
}
