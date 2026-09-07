import { useState, useEffect } from 'react';
import CardPizza from './CardPizza';
import { pizzas as pizzasLocales } from '../utils/pizzas';

const Home = () => {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    // Cargamos las pizzas directamente desde el archivo local de utils
    setPizzas(pizzasLocales);
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