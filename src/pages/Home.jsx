import { useState, useEffect } from 'react';
import CardPizza from '../components/CardPizza';

const Home = () => {
  const [pizzas, setPizzas] = useState([]);

  const consultarApi = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/pizzas");
      
      if (!response.ok) {
        throw new Error("No se pudo conectar al backend");
      }
      
      const data = await response.json();
      setPizzas(data);
    } catch (error) {
      console.warn("Usando datos locales de respaldo debido a:", error.message);
      
      
      const pizzasLocales = [
        {
          id: "p001",
          name: "Napolitana",
          price: 5950,
          ingredients: ["mozzarella", "tomates", "jamón", "orégano"],
          img: "/img/p001.jpeg"
        },
        {
          id: "p002",
          name: "Española",
          price: 7250,
          ingredients: ["mozzarella", "tomates", "jamón", "chorizo"],
          img: "/img/p002.jpeg"
        },
        {
          id: "p003",
          name: "Salame",
          price: 5990,
          ingredients: ["mozzarella", "tomates", "salame", "orégano"],
          img: "/img/p003.jpeg"
        },
        {
          id: "p004",
          name: "Four Cheese",
          price: 8500,
          ingredients: ["mozzarella", "gorgonzola", "parmesano", "provolone"],
          img: "/img/p004.jpeg"
        },
        {
          id: "p005",
          name: "Vegetariana",
          price: 6500,
          ingredients: ["mozzarella", "tomates", "champiñones", "pimentón"],
          img: "/img/p005.jpeg"
        },
        {
          id: "p006",
          name: "Pepperoni",
          price: 7000,
          ingredients: ["mozzarella", "pepperoni", "orégano"],
          img: "/img/p006.jpeg"
        }
      ];
      
      setPizzas(pizzasLocales);
    }
  };

  useEffect(() => {
    consultarApi();
  }, []);

  return (
    <div className="container my-5">
      <div className="row">
        {pizzas.map((pizza) => (
          <div className="col-md-4 mb-4" key={pizza.id}>
            <CardPizza 
              id={pizza.id}
              name={pizza.name}
              price={pizza.price}
              ingredients={pizza.ingredients}
              img={pizza.img}
              desc={pizza.desc}
              pizza={pizza}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;