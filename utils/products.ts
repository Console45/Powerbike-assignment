export interface Product {
  id: number;
  name: string;
  amount: string;
  image: string;
}
export const products: Product[] = [
  {
    id: 1,
    name: "Pinarello Bike",
    amount: "1,700.00",
    image: require("../assets/images/pinarelloo.png"),
  },
  {
    id: 2,
    name: "Brompton Bike",
    amount: "1,500.00",
    image: require("../assets/images/brompton.png"),
  },
  {
    id: 3,
    name: "Schwinn Bike",
    amount: "1,200.00",
    image: require("../assets/images/norco.png"),
  },
  {
    id: 4,
    name: "Norco Bike",
    amount: "980.00",
    image: require("../assets/images/norco.png"),
  },
  {
    id: 5,
    name: "Norco Bike",
    amount: "980.00",
    image: require("../assets/images/norco.png"),
  },
];
