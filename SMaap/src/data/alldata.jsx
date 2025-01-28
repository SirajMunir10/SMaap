import Standard1 from "../assets/Standard1.jpg"; // Adjust the path based on your folder structure
import Standard2 from "../assets/Standard2.jpg";
import Standard3 from "../assets/Standard3.jpg";
import Standard4 from "../assets/Standard4.jpg";
import Standard5 from "../assets/Standard5.jpg";
import Standard6 from "../assets/Standard6.jpg";
import Standard7 from "../assets/Standard7.jpg";
import Standard8 from "../assets/Standard8.jpg";
import Standard9 from "../assets/Standard9.jpg";
import Standard10 from "../assets/Standard10.jpg";
import Luxury1 from "../assets/Luxury1.jpg";
import Luxury2 from "../assets/Luxury2.jpg";
import Luxury3 from "../assets/Luxury3.jpg";
import Luxury4 from "../assets/Luxury4.jpg";
import Luxury5 from "../assets/Luxury5.jpg";
export const services = [
  {
    icon: <i className="fa fa-hotel fa-2x text-primary"></i>,
    name: "Rooms & Appartment",
    discription: "Contrary to popular belief, ipsum is not simply random.",
  },
  {
    icon: <i className="fa fa-utensils fa-2x text-primary"></i>,
    name: "Food & Restaurant",
    discription: "Contrary to popular belief, ipsum is not simply random.",
  },
  {
    icon: <i className="fa fa-spa fa-2x text-primary"></i>,
    name: "Spa & Fitness",
    discription: "Contrary to popular belief, ipsum is not simply random.",
  },

  {
    icon: <i className="fa fa-swimmer fa-2x text-primary"></i>,
    name: "Sports & Gaming",
    discription: "Contrary to popular belief, ipsum is not simply random.",
  },
  {
    icon: <i className="fa fa-glass-cheers fa-2x text-primary"></i>,
    name: "Event & Party",
    discription: "Contrary to popular belief, ipsum is not simply random.",
  },

  {
    icon: <i className="fa fa-dumbbell fa-2x text-primary"></i>,
    name: "GYM & Yoga",
    discription: "Contrary to popular belief, ipsum is not simply random.",
  },
];
export const roomsdata = [
  {
    roomid: 1,
    name: "Paradise Room",
    image: [Standard1],
    space: 2,
    price: 1500,
    type: "Standard",
    maxcount: 1,
    phonenumber: 9989649278,
    currentbookings: [],
    description: "",
  },
  {
    roomid: 2,
    name: "International Standard Room",
    image: [Standard2],
    space: 3,
    price: 1800,
    type: "Standard",
    maxcount: 1,
    phonenumber: 9123456789,
    currentbookings: [],
    description: "",
  },
  {
    roomid: 3,
    name: "Luxury Room",
    image: [Standard3],
    space: 2,
    price: 2200,
    type: "Standard",
    maxcount: 1,
    phonenumber: 9876543210,
    currentbookings: [],
    description:
      "Luxury Room Inn is centrally located with easy access to key destinations.",
  },
  {
    roomid: 4,
    name: "Green Leaf",
    image: [Luxury1],
    space: 1,
    price: 1200,
    type: "Luxury",
    maxcount: 1,
    phonenumber: 9234567890,
    currentbookings: [],
    description:
      "Green Leaf offers a peaceful stay with lush green surroundings.",
  },
  {
    roomid: 5,
    name: "Hotel Stay Inn",
    image: [Luxury2],
    space: 1,
    price: 1600,
    type: "Luxury",
    maxcount: 1,
    phonenumber: 9988776655,
    currentbookings: [],
    description:
      "Stay Inn provides affordable comfort for travelers visiting Secunderabad.",
  },
  {
    roomid: 6,
    name: "Comfort Rooms",
    image: [Luxury3],
    space: 2,
    price: 2000,
    type: "Luxury",
    maxcount: 1,
    phonenumber: 9345678901,
    currentbookings: [],
    description:
      "Comfort Rooms is a premium suite offering luxurious stay facilities.",
  },
  {
    roomid: 7,
    name: "Regal Residency",
    image: [Standard4],
    space: 2,
    price: 2400,
    type: "Standard",
    maxcount: 1,
    phonenumber: 9463748392,
    currentbookings: [],
    description:
      "Regal Residency offers stylish executive room with all modern amenities.",
  },
  {
    roomid: 8,
    name: "Serene Palace",
    image: [Luxury4],
    space: 4,
    price: 900,
    type: "Luxury",
    maxcount: 1,
    phonenumber: 9123456780,
    currentbookings: [],
    description:
      "Serene Palace provides budget-friendly options with quality services.",
  },
  {
    roomid: 9,
    name: "Meera Mansion",
    image: [Luxury5],
    space: 8,
    price: 2700,
    type: "Luxury",
    maxcount: 1,
    phonenumber: 9356781234,
    currentbookings: [],
    description:
      "Meera Mansion is an upscale townhouse offering premium suites for business and leisure.",
  },
  {
    roomid: 10,
    name: "Grand Elegance",
    image: [Standard5],
    space: 1,
    price: 1300,
    type: "Standard",
    maxcount: 1,
    phonenumber: 9198765432,
    currentbookings: [],
    description:
      "Grand Elegance ensures a stylish and comfortable stay for its guests.",
  },
  {
    roomid: 11,
    name: "Oceanic Suite",
    image: [Standard6],
    space: 4,
    price: 1900,
    type: "Standard",
    maxcount: 1,
    phonenumber: 9321654789,
    currentbookings: [],
    description: "Oceanic Suite features seaside views with modern amenities.",
  },
  {
    roomid: 12,
    name: "Elegant Escape",
    image: [Standard8],
    space: 2,
    price: 2200,
    type: "Standard",
    maxcount: 1,
    phonenumber: 9365784321,
    currentbookings: [],
    description:
      "Elegant Escape provides an elegant and serene environment for relaxation.",
  },
  {
    roomid: 13,
    name: "Majestic Villa",
    image: [Standard9],
    space: 6,
    price: 2500,
    type: "Standard",
    maxcount: 1,
    phonenumber: 9123456781,
    currentbookings: [],
    description:
      "Majestic Villa offers an exclusive and majestic stay experience.",
  },
  {
    roomid: 14,
    name: "Tranquil Terrace",
    image: [Standard7],
    space: 4,
    price: 1700,
    type: "Standard",
    maxcount: 1,
    phonenumber: 9234567891,
    currentbookings: [],
    description: "Tranquil Terrace provides a comfortable and tranquil stay.",
  },
  {
    roomid: 15,
    name: "Royal Retreat",
    image: [Standard10],
    space: 2,
    price: 2800,
    type: "Standard",
    maxcount: 1,
    phonenumber: 9345678902,
    currentbookings: [],
    description:
      "Royal Retreat offers a luxurious stay with top-notch facilities.",
  },
];
