import ps5 from "../src/images/ps5.png";
import cookbook from "../src/images/cookbook.png";
import shoes from "../src/images/cookbook.png";

// interface Review {
//   autor: string;
//   time: Date;
//   text: string;
// }

export interface Product {
  id?: string;
  name?: string;
  description?: string;
  category?: string;
  price?: number;
  image?: string;
  quantity?: number;
}

export const DUMMY_PRODUCTS: Product[] = [
  {
    id: "p1",
    name: "ps5",
    description:
      "This is the latest edition of the play station and it is the best gaming console in the world.",
    category: "Technology",
    price: 500.0,
    quantity: 1,
    image: ps5,
  },
  {
    id: "p2",
    name: "nike shoes",
    description:
      "Nike has the best shoes for running while also providing you with a fashionable look.",
    category: "Clothing",
    price: 125.99,
    quantity: 1,
    image: shoes,
  },
  {
    id: "p3",
    name: "Cookbook",
    description:
      "Joshua Weissman is one of the best chefs on youtube and has changed the game with this cookbook.",
    category: "Clothing",
    price: 40.99,
    quantity: 1,
    image: cookbook,
  },
];
