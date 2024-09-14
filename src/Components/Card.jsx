import { Link } from "react-router-dom";
import { useContextProvider } from "./utils/global.context";
import "../Styles/Card.css"

const Card = ({ id, recipe}) => {
  const {theme} = useContextProvider();
  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage

    let favs = localStorage.getItem("favs");

    let favArray = favs ? JSON.parse(favs) : [];
    if(!favArray.some(x => x.id === id)){
      favArray.push(recipe);
      localStorage.setItem("favs", JSON.stringify(favArray));
    }
  }

  return (
    <div className="card">
        <img src="/public/images/doctor.jpg"
        alt="" 
        width={100}
        />
        <Link to={`/dentist/${id}`} className={`color-${theme}`}>Name: {recipe.name}</Link>
        <h4>User Name: {recipe.username} </h4>
        <h4>Id: {id}</h4>

        {/* En cada card deberan mostrar en name - username y el id */}

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton">⭐</button>
    </div>
  );
};

export default Card;
