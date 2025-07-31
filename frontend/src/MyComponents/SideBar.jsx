import { Link } from "react-router-dom";
import {
  IconTargetArrow,
  IconOctagonPlus,
  IconLock,
  IconInfoCircleFilled,
  IconMenu2,
} from "@tabler/icons-react";

export default function SideBar() {
  const LinkStyle = "flex gap-1 text-lg p-2 hover:bg-gray-200";
  return (
    <aside className="flex flex-col  h-screen shadow-xl/30">
      <button className="p-2">
        <IconMenu2 stroke={2} size={28} />
      </button>
      <Link to="/todoiest" className={LinkStyle}>
        <IconTargetArrow stroke={2} size="28" /> Tasks
      </Link>
      <Link to="#" className={LinkStyle}>
        <IconInfoCircleFilled stroke={2} size={28} />
        About
      </Link>
      <Link to="/todoiest/addtodo" className={LinkStyle}>
        <IconOctagonPlus stroke={2} size={28} /> Add Todo
      </Link>
      <Link to="/todoiest/signup" className={LinkStyle}>
        <IconLock stroke={2} size={28} />
        Signup
      </Link>
    </aside>
  );
}
