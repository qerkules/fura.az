const { default: axios } = require("axios");

export const submitForm = async (
  e,
  features,
  selectedArray,
  images,
  path,
  modalOpener,
  year
) => {
  e.preventDefault();
  const formData = new FormData(e.target);

  features &&
    features.forEach((feature) => {
      if (selectedArray.some((el) => feature.id !== el)) {
        formData.append(feature.id, false);
      }
    });

  selectedArray.forEach((value) => {
    formData.append(value, true);
  });
  year && formData.append("Year", year);

  for (const file of images) {
    formData.append("AdImage", file.file, file.file.name);
  }
  try {
    const token = localStorage.getItem("token");

    let url;

    path === "SemiTrailer" && formData.append("RefrigeratorRequest", false);
    path === "ConstructonMachinery"
      ? (url = `${process.env.NEXT_PUBLIC_API_LINK}/${path}/CreateConstructionMachineryAd`)
      : (url = `${process.env.NEXT_PUBLIC_API_LINK}/${path}/Create${path}Ad`);

    await axios
      .post(url, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((data) => {
        modalOpener(true, "Ad Succesfully Created");
        return data.data;
      })
      .catch((error) => {
        modalOpener(false, "Ad Cannot Created");

        console.error("Error:", error);
      });
  } catch (error) {
    console.log(error);
  }
};
