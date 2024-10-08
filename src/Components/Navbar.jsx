import { Link } from "react-router-dom"
import { useContextProvider } from "./utils/global.context";
import "../Styles/Navbar.css"
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const {theme, setTheme} = useContextProvider();

  const handleChangeTheme = () => {
    if(theme == 'light'){
      setTheme("dark")
    }else{
      setTheme("light")
    }
  }

  return (
    <nav className={`style-nav style-nav-${theme}`}>
      <img src="/public/images/DH.png" alt="" width={100}/>
      <Link to="/home" className={`color-${theme}`}>Home</Link>
      <Link to="/Contact" className={`color-${theme}`}>Contact</Link>
      <Link to="/favs" className={`color-${theme}`}>Favs</Link>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <span className="change-theme" onClick={handleChangeTheme}>{theme === "light" ? '🌚' : '🌞'}</span>
    </nav>
  )
}

export default Navbar