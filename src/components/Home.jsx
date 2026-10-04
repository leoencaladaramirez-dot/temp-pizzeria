import { useState, useEffect } from 'react';
import CardPizza from './CardPizza';

const Home = () => {
  const [pizzas, setPizzas] = useState([]);

  const consultarApi = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/pizzas");
      const data = await response.json();
      setPizzas(data);
    } catch (error) {
      console.error("Error al cargar las pizzas:", error);
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