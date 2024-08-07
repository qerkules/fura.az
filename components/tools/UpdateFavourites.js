import { getCookie, hasCookie, setCookie } from "cookies-next";

export const SetFavourites = (
  isFavouriteClicked,
  setFavouriteClicked,
  data,
  productName
) => {
  let cookieValues = hasCookie("favorites")
    ? JSON.parse(getCookie("favorites"))
    : [];

  if (isFavouriteClicked) {
    cookieValues = cookieValues.filter((i) => i.id != data.id);

    setCookie("favorites", JSON.stringify(cookieValues));

    localStorage.setItem("favorites", JSON.stringify(cookieValues));

    window.dispatchEvent(new CustomEvent("cookie-change"));
  } else {
    cookieValues.push(data);

    setCookie("favorites", JSON.stringify(cookieValues));

    localStorage.setItem("favorites", JSON.stringify(cookieValues));

    window.dispatchEvent(new CustomEvent("cookie-change"));
  }

  setFavouriteClicked(!isFavouriteClicked);
};
