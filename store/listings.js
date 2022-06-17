const listings = [
  {
    id: 201,
    title: "Starting Out With C++",
    images: [{ fileName: "C" }],
    price: 100,
    categoryId: 5,
    userId: 1,
    location: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
  },
  {
    id: 3,
    title: " LINEAR ALGEBRA (11TH EDITION)",
    images: [{ fileName: "LA" }],
    categoryId: 1,
    price: 1200,
    userId: 2,
    location: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
  },
  {
    id: 1,
    title: "DATA STRUCTURE AND ALGORITHMS",
    description: "I'm selling my old dsa book at a discount price. DM me asap.",
    images: [
      { fileName: "DSA" },
      { fileName: "couch2" },
      { fileName: "couch3" },
    ],
    price: 1000,
    categoryId: 1,
    userId: 1,
    location: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
  },
  {
    id: 2,
    title: "INTRODUCTION TO ALGORITHMS ",
    images: [{ fileName: "AOA" }],
    categoryId: 5,
    price: 100,
    userId: 2,
    location: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
  },
  {
    id: 102,
    title: "DATA COMMUNICATIONS AND NETWORKING ",
    images: [{ fileName: "CN" }],
    price: 300,
    categoryId: 3,
    userId: 1,
    location: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
  },
  {
    id: 101,
    title: "DATABASE SYSTEMS Management ",
    images: [{ fileName: "Database" }],
    price: 350,
    categoryId: 3,
    userId: 1,
    location: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
  },
  {
    id: 4,
    title: "COMPUTER SYSTEM ARCHITECTURE",
    description: "Like new book",
    images: [{ fileName: "SAD" }],
    categoryId: 1,
    price: 950,
    userId: 2,
    location: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
  },
  {
    id: 6,
    title: "SOFTWARE ENGINEERING 7th Ed.",
    images: [{ fileName: "SE" }],
    categoryId: 5,
    price: 50,
    userId: 2,
    location: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
  },
];

const addListing = (listing) => {
  listing.id = listings.length + 1;
  listings.push(listing);
};

const getListings = () => listings;

const getListing = (id) => listings.find((listing) => listing.id === id);

const filterListings = (predicate) => listings.filter(predicate);

module.exports = {
  addListing,
  getListings,
  getListing,
  filterListings,
};
