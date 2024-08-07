import { getCookie, hasCookie } from "cookies-next";
import { useEffect, useState } from "react";

export default function useUser() {
  // const username = getCookie("username");
  const [username, setUsername] = useState(null);
  const [isBusiness, setIsBusiness] = useState(null);

  useEffect(() => {
    setUsername(localStorage.getItem("username"));
    setIsBusiness(localStorage.getItem("isBusiness"));
  }, []);

  return [ username, isBusiness];
}
