import axios from "axios";

export const getModels = async (e, setModels) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_LINK}/Model/GetModelByBrandId?BrandId=${e.target.value}`
    );
    setModels(response.data.models);
    return response.data.models;
  } catch (error) {
    throw error;
  }
};
