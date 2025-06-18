import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";

export default function useContent() {
  const [contents, setContents] = useState([]);

  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/todo/preview`, {
        headers: {
          token: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        console.log(response.data);
        setContents(response.data.userTodos || []);
      })
      .catch((err) => console.log(err));
  }, []);

  return contents;
}
