export const dataToCategory = (data) => {
  const AllCategories = data
    .map((item) => item.node.categoryTags)
    .flat(Infinity)
    .filter(Boolean)
    .map((item) => item.trim().toLowerCase());
  const setCategories = new Set(AllCategories);
  const uniqueArray = Array.from(setCategories).map((item) => ({
    product: item,
    cheked: false,
  }));
  return uniqueArray;
};
