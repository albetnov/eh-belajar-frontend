import React, { useCallback } from "react";
import { Calendar } from "react-calendar";
import { HiBadgeCheck, HiOutlinePencil } from "react-icons/hi";
import Container from "./Container";
import HomeworkProgress from "./HomeworkProgress";
import Navbar from "./Navbar";
import RoundButton from "./RoundButton";
import Searchbar from "./Searchbar";
import Typography from "./Typography";

type Props = {
  children: React.ReactNode;
  breadcrumbs: string | string[];
};

export default function Template({ children, breadcrumbs }: Props) {
  const parsedBreadcrumbs = useCallback(() => {
    if (Array.isArray(breadcrumbs)) {
      return breadcrumbs.join(" / ");
    }
    return breadcrumbs;
  }, []);

  return (
    <div className="grid container-grid-mobile sm:container-grid">
      <Navbar />
      <Container>
        <div className="grid lg:grid-cols-3 sm:grid-rows-1">
          <div className="col-span-2">
            <div className="flex items-center justify-between flex-col sm:flex-row gap-3 sm:gap-0">
              <Typography variant="heading3" className="text-slate-500">
                {parsedBreadcrumbs()}
              </Typography>
              <Searchbar />
            </div>
            {children}
          </div>
          <div className="hidden sm:block p-3 pt-0">
            <div className="grid grid-cols-2 items-center">
              <Typography variant="body2">Profile</Typography>
              <RoundButton icon={<HiOutlinePencil />} className="justify-self-end" />
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
      </Container>
    </div>
  );
}
