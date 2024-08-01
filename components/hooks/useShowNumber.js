import { useState, useEffect } from "react";
import useFormatPhoneNumber from "./useFormatPhoneNumber";

const useShowNumber = () => {
  const [isShortened, setIsShortened] = useState(false);

  useEffect(() => {
    const formatPhoneNumber = useFormatPhoneNumber();

    document.querySelectorAll(".formatted-number").forEach((element) => {
      let fullNumber = element.getAttribute("data-full-number");

      const prefix = fullNumber.slice(0, 3);
      if (
        prefix === "050" ||
        prefix === "051" ||
        prefix === "055" ||
        prefix === "077" ||
        prefix === "070" ||
        prefix === "099" ||
        prefix === "060" ||
        prefix === "010" ||
        prefix === "012"
      ) {
        fullNumber = formatPhoneNumber(fullNumber);
      }

      const shortenedNumber = fullNumber.slice(0, -2) + "..";

      if (isShortened) {
        element.textContent = fullNumber;
      } else {
        element.textContent = shortenedNumber;
      }
    });

    const postInNumber = document.querySelector(".post-in-number-item");
    if (isShortened) {
      postInNumber.removeAttribute("onclick");
      postInNumber.classList.remove("hided-number");
      postInNumber.classList.add("showed-number");
      postInNumber.firstElementChild.remove();
    }
    setIsShortened(!isShortened);
  }, [isShortened]);

  return { isShortened, setIsShortened };
};

export default useShowNumber;
