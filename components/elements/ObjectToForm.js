import React from "react";

export const objectToFormData = (obj, form, namespace) => {
  const formData = form || new FormData();

  for (let property in obj) {
    if (obj.hasOwnProperty(property)) {
      const key = namespace ? `${namespace}[${property}]` : property;

      if (
        typeof obj[property] === "object" &&
        !(obj[property] instanceof File)
      ) {
        objectToFormData(obj[property], formData, key);
      } else {
        formData.append(key, obj[property]);
      }
    }
  }

  return formData;
};

