import headphonesImage from "../assets/headphones.jpg";
import keyboardImage from "../assets/keyboard.jpg";
import lampImage from "../assets/lamp.jpg";
import tshirtImage from "../assets/tshirt.jpg";
import serumImage from "../assets/serum.jpg";
import journalImage from "../assets/journal.jpg";
import bandsImage from "../assets/band.jpg";
import mouseImage from "../assets/mouse.jpg";

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    category: "Electronics",
    price: 2499,
    rating: 4.5,
    image: headphonesImage,
  },
  {
    id: 2,
    name: "Mechanical Gaming Keyboard",
    category: "Gaming",
    price: 3299,
    rating: 4.7,
    image: keyboardImage,
  },
  {
    id: 3,
    name: "Smart LED Desk Lamp",
    category: "Home",
    price: 1499,
    rating: 4.3,
    image: lampImage,
  },
  {
    id: 4,
    name: "Oversized Cotton T-Shirt",
    category: "Fashion",
    price: 899,
    rating: 4.4,
    image: tshirtImage,
  },
  {
    id: 5,
    name: "Hydrating Face Serum",
    category: "Beauty",
    price: 699,
    rating: 4.6,
    image: serumImage,
  },
  {
    id: 6,
    name: "Classic Hardcover Journal",
    category: "Books",
    price: 499,
    rating: 4.8,
    image: journalImage,
  },
  {
    id: 7,
    name: "Resistance Training Bands",
    category: "Sports",
    price: 799,
    rating: 4.2,
    image: bandsImage,
  },
  {
    id: 8,
    name: "Wireless Gaming Mouse",
    category: "Gaming",
    price: 1899,
    rating: 4.6,
    image: mouseImage,
  },
];

export default products;