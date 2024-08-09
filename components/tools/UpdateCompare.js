import { getCookie, hasCookie, setCookie } from "cookies-next";

export const SetCompares = (isClicked, setClicked, id, productName) => {
  let cookieValues = hasCookie("compare")
    ? JSON.parse(getCookie("compare"))
    : [];

  if (isClicked) {
    cookieValues = cookieValues.filter((i) => i.id !== id);
  } else {
    if (cookieValues.length > 0) {
      const existingCategory = cookieValues[0].category;

      if (existingCategory !== productName) {
        return true;
      }
    }

    if (cookieValues.length >= 2) {
      cookieValues.shift();
    }

    cookieValues.push({ id, category: productName });
  }

  setCookie("compare", JSON.stringify(cookieValues));
  localStorage.setItem("compare", JSON.stringify(cookieValues));

  window.dispatchEvent(new CustomEvent("cookie-change"));

  setClicked(!isClicked);
};
