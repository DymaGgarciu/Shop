export const dataToColor = (data) => {
  const AllColors = data
    .map((item) => item.node.colorFamily)
    .flat(Infinity)
    .filter((item) => Boolean(item))
    .map((item) => item.name.trim().toLowerCase());

  const colorSet = new Set(AllColors);
  const uniqeArray = Array.from(colorSet).map((color) => ({
    color: color,
    cheked: false,
  }));

  return uniqeArray;
};
