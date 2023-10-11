import { Link } from "react-router-dom";

export type ProductType = {
  id: number;
  name: string;
  price: number;
  description: string;
};

export const productsList: ProductType[] = [
  {
    id: 1,
    name: "Proizvod 1",
    price: 19.99,
    description: "Ovo je opis proizvoda 1.",
  },
  {
    id: 2,
    name: "Proizvod 2",
    price: 29.99,
    description: "Ovo je opis proizvoda 2.",
  },
  {
    id: 3,
    name: "Proizvod 3",
    price: 39.99,
    description: "Ovo je opis proizvoda 3.",
  },
  {
    id: 4,
    name: "Proizvod 4",
    price: 49.99,
    description: "Ovo je opis proizvoda 4.",
  },
  {
    id: 5,
    name: "Proizvod 5",
    price: 59.99,
    description: "Ovo je opis proizvoda 5.",
  },
  {
    id: 6,
    name: "Proizvod 6",
    price: 69.99,
    description: "Ovo je opis proizvoda 6.",
  },
];

const Products = () => {
  return (
    <div>
      <h2>Lista proizvoda</h2>
      <ul>
        {productsList.map((product) => {
          return (
            <li key={product.id}>
              <Link to={`/dashboard/products/${product.id}`}>
                {product.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Products;
