import React, { useState } from "react";
import { productsList } from "./product-list";

type ProductType = {
  id: number;
  name: string;
  price: number;
  description: string;
};

const Products = () => {
  const [values, setValues] = useState({
    name: "",
    price: 0,
    description: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newProduct: ProductType = {
      id: productsList.length + 1, // Automatski generirajte ID
      name: values.name,
      price: values.price,
      description: values.description,
    };
    // Ažurirajte listu proizvoda unutar komponente Products
    // (Zamijenite ovaj dio s vašom funkcionalnošću za ažuriranje liste proizvoda)
    console.log("Dodajte kod za ažuriranje liste proizvoda ovdje.");

    setValues({ name: "", price: 0, description: "" }); // Očistite formu nakon dodavanja proizvoda
  };

  return (
    <div>
      <h2>Dodaj novi proizvod</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Naziv proizvoda:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={values.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="price">Cijena:</label>
          <input
            type="number"
            id="price"
            name="price"
            value={values.price}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="description">Opis:</label>
          <textarea
            id="description"
            name="description"
            value={values.description}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Dodaj proizvod</button>
      </form>
    </div>
  );
};

export default Products;
