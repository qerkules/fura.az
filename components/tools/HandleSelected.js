



export const handleSelected = (selectedItem, setSelectedArray) => {
  setSelectedArray((prevSelectedArray) =>
    prevSelectedArray.some((item) => item === selectedItem)
      ? prevSelectedArray.filter((item) => item !== selectedItem)
      : [...prevSelectedArray, selectedItem]
  );
};

export const isSelected = (value, selectedArray) =>
  selectedArray.some((el) => value === el);
