const categories = [
  {
    id: 1,
    name: "Old",
    icon: "book-open-page-variantp",
    backgroundColor: "#fc5c65",
    color: "white",
  },
  {
    id: 2,
    name: "New",
    icon: "book-open-variant",
    backgroundColor: "#fd9644",
    color: "white",
  },
  {
    id: 3,
    name: "IT",
    icon: "book-open-page-variant",
    backgroundColor: "#fed330",
    color: "white",
  },
  {
    id: 4,
    name: "Matric",
    icon: "book-open-variant",
    backgroundColor: "#26de81",
    color: "white",
  },
  {
    id: 5,
    name: "Inter",
    icon: "book-open-page-variant",
    backgroundColor: "#2bcbba",
    color: "white",
  },
  {
    id: 6,
    name: "Islamic",
    icon: "book-open-variant",
    backgroundColor: "#45aaf2",
    color: "white",
  },
  {
    id: 7,
    name: "Noval",
    icon: "book-open-page-variant",
    backgroundColor: "#4b7bec",
    color: "white",
  },
  {
    id: 8,
    name: "Books",
    icon: "book-open-variant",
    backgroundColor: "#a55eea",
    color: "white",
  },
  {
    id: 9,
    name: "Other",
    icon: "application",
    backgroundColor: "#778ca3",
    color: "white",
  },
];

const getCategories = () => categories;

const getCategory = (id) => categories.find((c) => c.id === id);

module.exports = {
  getCategories,
  getCategory,
};
