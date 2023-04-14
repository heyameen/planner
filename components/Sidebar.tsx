import Card from "./Card";
import Image from "next/image";
import logo from "@/assets/images/logo.png";
import SidebarLink from "./SidebarLink";

const links = [
  { label: "Home", icon: "Home", link: "/home" },
  {
    label: "My Tasks",
    icon: "FileText",
    link: "/my-tasks",
  },
  { label: "Profile", icon: "User", link: "/profile" },
  {
    label: "Settings",
    icon: "Settings",
    link: "/settings",
  },
];

const Sidebar = () => {
  return (
    <Card className="h-full w-40 flex items-center justify-between flex-wrap">
      <div className="w-full flex justify-center items-center">
        <Image src={logo} alt="Company logo" priority className="w-14" />
      </div>
      {links.map((link) => (
          <SidebarLink link={link} key={link} />
      ))}
    </Card>
  );
};

export default Sidebar;
