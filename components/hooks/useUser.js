import { getCookie, hasCookie } from "cookies-next";
import { useEffect, useState } from "react";

export default function useUser() {
  // const username = getCookie("username");
  const [username, setUsername] = useState(null);

  useEffect(() => {
    setUsername(localStorage.getItem("username"));
  }, []);
  return [username];
}
