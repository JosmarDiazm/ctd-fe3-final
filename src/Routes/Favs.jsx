
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

import { useEffect, useState } from "react";
import Card from "../Components/Card";

const Favs = () => {    

  const [cards, setCards] = useState([]);

  useEffect(()=> {
    let favs = localStorage.getItem("favs");
    let favsArray = favs ? JSON.parse(favs): [];
    setCards(favsArray)
  }, [])

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {cards.map((card) => (
          <Card id={card.id} recipe={card} key={card.id} />
        ))}
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */} 
      </div>
    </>
  );
};

export default Favs;
