import CourseCard from "../Components/CourseCard";
import Template from "../Components/Template";
import Typography from "../Components/Typography";

export default function Dashboard() {
  return (
    <Template breadcrumbs={["Dashboard"]}>
      <Typography variant="body2" className="mt-3">
        New Courses
      </Typography>
      <div className="mt-10 flex flex-col gap-7 md:flex-row justify-center">
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
    </Template>
  );
}
