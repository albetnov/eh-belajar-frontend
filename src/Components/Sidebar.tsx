import {
  HiHome,
  HiBookmark,
  HiChat,
  HiChartPie,
  HiCalendar,
  HiAdjustments,
  HiShoppingCart,
} from "react-icons/hi";
import SidebarList from "./SidebarList";
import Typography from "./Typography";
import MaBoyShitting from "../Assets/MaBoyShitting.png";
import Button from "./Button";

type Props = {
  isExpanded: boolean;
};

export default function Sidebar({ isExpanded }: Props) {
  return (
    <div
      className={`transition-all delay-100 ${
        isExpanded
          ? "opacity-1 bg-slate-50 sm:bg-transparent rounded w-64"
          : "opacity-0 w-0 sm:opacity-100 sm:w-64"
      } px-5 h-full sm:flex sm:flex-col sm:justify-between`}
    >
      <div className="flex flex-col gap-2 mt-5 px-2 py-3">
        <SidebarList icon={<HiHome />} text="Dashboard" isActive />
        <SidebarList icon={<HiBookmark />} text="Courses" />
        <SidebarList icon={<HiChat />} text="Chats" />
        <SidebarList icon={<HiChartPie />} text="Grades" />
        <SidebarList icon={<HiCalendar />} text="Schedules" />
        <SidebarList icon={<HiAdjustments />} text="Settings" />
        <SidebarList premium icon={<HiShoppingCart />} text="Buy Premium" />
      </div>
      <div className="hidden sm:block mt-10 mb-3 bg-secondary p-3 rounded-lg">
        <img src={MaBoyShitting} alt="Someone sat." className="-mt-36 -z-10" />
        <Typography variant="body2" className="font-semibold text-center">
          Premium Subscriptions
        </Typography>
        <Typography className="text-center mt-3">
          Buy Premium and get access to high quality courses.
        </Typography>
        <Button className="mt-5 mb-3 w-full">More Detail</Button>
      </div>
    </div>
  );
}
