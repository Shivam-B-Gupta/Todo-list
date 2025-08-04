import { Link } from "react-router-dom";
import Button from "./Button";
import {
  IconTargetArrow,
  IconOctagonPlus,
  IconLock,
  IconInfoCircleFilled,
  IconMenu2,
  IconLogout,
} from "@tabler/icons-react";
import { useState } from "react";
import PopUpModal from "./PopUpModal";

export default function SideBar() {
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function handleLogout() {
    localStorage.removeItem("token");
    localStorage.removeItem("firstname");
    localStorage.removeItem("email");
    window.location.href = "/todoiest/signin";
  }

  function handlePopUp(e) {
    e.preventDefault();
    setShowModal(true);
  }

  function handleSubmit() {
    console.log("Todo submitted:", { title, description });
    // your submit logic here
    setShowModal(false); // close modal after submission
  }

  const LinkStyle = "flex gap-1 text-lg p-2 items-center hover:bg-gray-200";
  return (
    <aside className="flex flex-col justify-between h-screen shadow-xl/30">
      <div>
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
        <a href="#" onClick={handlePopUp} className={LinkStyle}>
          <IconOctagonPlus stroke={2} size={28} /> Add Todo
        </a>
        <Link to="/todoiest/signup" className={LinkStyle}>
          <IconLock stroke={2} size={28} />
          Signup
        </Link>
      </div>
      <div className={LinkStyle}>
        <IconLogout stroke={2} size={28} />
        <Button innerText="Logout" submit={handleLogout} />
      </div>

      {showModal && (
        <PopUpModal
          innerText="Submit"
          submit={handleSubmit}
          title={title}
          setTitle={setTitle}
          description={description}
          setDescription={setDescription}
          setShowModal={setShowModal}
        />
      )}
    </aside>
  );
}
