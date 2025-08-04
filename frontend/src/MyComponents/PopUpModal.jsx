import React from "react";
import { Inputfield2 } from "./Input";
import Button from "./Button";
import TimeIcon from "../icons/time";
import { IconX } from "@tabler/icons-react";

export default function PopUpModal({
  innerText,
  submit,
  title,
  setTitle,
  description,
  setDescription,
  setShowModal,
}) {
  const date = new Date();
  const today = `${date.getDate()}/${
    date.getMonth() + 1
  }/${date.getFullYear()}`;

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-opacity-30 z-50">
      <div
        style={{
          width: "45.5rem",
          height: "27.5rem",
          borderRadius: "1.25rem",
          border: "1px solid black",
          backgroundColor: "white",
          display: "flex",
          flexDirection: "column",
          padding: "2rem",
          position: "relative",
          filter: "drop-shadow(-6px 8px 10px gray)",
        }}
      >
        <IconX
          stroke={2}
          className="absolute right-5 top-5 cursor-pointer"
          size={30}
          onClick={() => setShowModal(false)}
        />
        <Inputfield2
          type="text"
          title="Add title"
          setVariable={setTitle}
          value={title}
        />
        <Inputfield2
          type="text"
          title="Add Description"
          setVariable={setDescription}
          value={description}
        />
        <div
          style={{
            display: "flex",
            position: "absolute",
            bottom: "1.5rem",
            left: "2rem",
            right: "2rem",
            justifyContent: "space-between",
          }}
        >
          <div style={{ fontSize: "1.4rem" }}>
            <TimeIcon /> <span>{today}</span>
          </div>
          <Button innerText={innerText} submit={submit} />
        </div>
      </div>
    </div>
  );
}
