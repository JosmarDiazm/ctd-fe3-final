
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
import Card from "../Components/Card";
import axios from "axios";
import { useEffect, useState } from "react";

const Home = () => {
  useEffect(()=>{
    cardsDoctor();
  }, []);

  const [cards, setCards] = useState([]);

  const cardsDoctor = () => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      console.log(res.data);
      setCards(res.data);
    });

  }

  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {cards.map((card)=> (
          <Card key={card.id} id={card.id} recipe={card}/>
        ))}

           
        {/* Aqui deberias renderizar las cards */}
      </div>
    </main>
  )
}

export default Home