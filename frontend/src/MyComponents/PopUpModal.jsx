import React from "react";
import { Inputfield2 } from "./Input";
import Button from "./Button";
import TimeIcon from "../icons/time";

export default function PopUpModal({
  innerText,
  submit,
  title,
  setTitle,
  description,
  setDescription,
}) {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const today = `${day}/${month}/${year}`;
  const inputStyle = {
    margin: "0.5rem auto",
    border: "none",
    width: "95%",
    height: "3rem",
    fontSize: "1.8rem",
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "45.5rem",
          height: "27.5rem",
          borderRadius: "1.25rem",
          border: "1px solid black",
          backgroundColor: "white",
          display: "flex",
          flexDirection: "column",
          alignContent: "center",
          filter: "drop-shadow(-6px 8px 10px gray)",
        }}
      >
        <input
          type="text"
          placeholder="Description..."
          style={inputStyle}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Inputfield2
          type="text"
          title="Add title"
          setVariable={setTitle}
          value={title}
        />

        <div
          style={{
            display: "flex",
            position: "absolute",
            marginTop: "24.5rem",
            width: "45rem",
            justifyContent: " space-between",
          }}
        >
          <div
            style={{
              fontSize: "1.4rem",
              marginLeft: "2rem",
              display: "inline-block",
              verticalAlign: "middle",
            }}
          >
            <TimeIcon />
            <span>{today}</span>
          </div>
          <div style={{}}>
            <Button innerText={innerText} submit={submit} />
          </div>
        </div>
      </div>
    </div>
  );
}
