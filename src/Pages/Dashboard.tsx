import { HiOutlineTemplate } from "react-icons/hi";
import CourseCard from "../Components/CourseCard";
import CourseTableItem from "../Components/CourseTableItem";
import TableData from "../Components/TableData";
import TableHead from "../Components/TableHead";
import Template from "../Components/Template";
import Typography from "../Components/Typography";
import { DiDocker, DiGit, DiLaravel, DiLinux, DiNodejs, DiReact } from "react-icons/di";
import TableRow from "../Components/TableRow";

export default function Dashboard() {
  return (
    <Template breadcrumbs={"Dashboard"}>
      <Typography variant="body2" className="mt-5">
        New Courses
      </Typography>
      <div className="mt-5 flex flex-col flex-wrap gap-7 md:flex-row justify-center">
        <CourseCard
          bgType={{
            bgDrop: "bg-amber-100",
            bg: "bg-amber-300",
            shadow: "hover:shadow-amber-400",
          }}
          imageIcon={<DiLinux className="text-orange-700 sm:h-20 text-9xl md:text-8xl mx-auto" />}
          lessonCount={32}
          title="Linux Made Easy!"
        />
        <CourseCard
          bgType={{
            bgDrop: "bg-rose-100",
            bg: "bg-rose-300",
            shadow: "hover:shadow-rose-400",
          }}
          imageIcon={<DiLaravel className="text-red-700 sm:h-20 text-9xl md:text-8xl mx-auto" />}
          lessonCount={70}
          title="The Artisans: Laravel"
        />
        <CourseCard
          bgType={{
            bgDrop: "bg-sky-100",
            bg: "bg-sky-300",
            shadow: "hover:shadow-sky-400",
          }}
          imageIcon={<DiDocker className="text-blue-700 sm:h-20 text-9xl md:text-8xl mx-auto" />}
          lessonCount={70}
          title="A Ocean Whale: Docker"
        />
      </div>
      <div className="mt-10 p-5">
        <div className="flex justify-between">
          <Typography variant="body2">My Courses</Typography>
          <a href="#">
            <Typography className="text-primary">View All</Typography>
          </a>
        </div>
        <table className="w-full table-auto">
          <thead>
            <tr className="text-slate-400">
              <TableHead>Course Name</TableHead>
              <TableHead>Start</TableHead>
              <TableHead>Rate</TableHead>
              <TableHead>Level</TableHead>
            </tr>
          </thead>
          <tbody>
            <TableRow>
              <TableData>
                <CourseTableItem
                  Icon={HiOutlineTemplate}
                  courseName="Web Design"
                  lessonCount={12}
                />
              </TableData>
              <TableData>
                <Typography>12 May</Typography>
              </TableData>
              <TableData>
                <Typography>4.8</Typography>
              </TableData>
              <TableData>
                <Typography>ELementary</Typography>
              </TableData>
            </TableRow>
            <TableRow>
              <TableData>
                <CourseTableItem Icon={DiGit} courseName="Git EZ PZ" lessonCount={3} />
              </TableData>
              <TableData>
                <Typography>10 Apr</Typography>
              </TableData>
              <TableData>
                <Typography>4.2</Typography>
              </TableData>
              <TableData>
                <Typography>Elementary</Typography>
              </TableData>
            </TableRow>
            <TableRow>
              <TableData>
                <CourseTableItem
                  Icon={DiReact}
                  courseName="Introduction into React"
                  lessonCount={30}
                />
              </TableData>
              <TableData>
                <Typography>12 Dec</Typography>
              </TableData>
              <TableData>
                <Typography>4.9</Typography>
              </TableData>
              <TableData>
                <Typography>Intermediate</Typography>
              </TableData>
            </TableRow>
            <TableRow>
              <TableData>
                <CourseTableItem
                  Icon={DiNodejs}
                  courseName="Node JS: JavaScript on the fly"
                  lessonCount={40}
                />
              </TableData>
              <TableData>
                <Typography>17 Aug</Typography>
              </TableData>
              <TableData>
                <Typography>4.3</Typography>
              </TableData>
              <TableData>
                <Typography>Elementary</Typography>
              </TableData>
            </TableRow>
            <TableRow>
              <TableData>
                <CourseTableItem
                  Icon={DiLinux}
                  courseName="Linux and why developers love them."
                  lessonCount={64}
                />
              </TableData>
              <TableData>
                <Typography>1 Jan</Typography>
              </TableData>
              <TableData>
                <Typography>4.5</Typography>
              </TableData>
              <TableData>
                <Typography>Elementary</Typography>
              </TableData>
            </TableRow>
          </tbody>
        </table>
      </div>
    </Template>
  );
}
