
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Favs from './Routes/Favs';
import Detail from './Routes/Detail';
import Home from './Routes/Home';
import Contact from './Routes/Contact';
import { Route, Routes } from 'react-router-dom';
import { useContextProvider } from "./Components/utils/global.context";

function App() {
  const {theme} = useContextProvider();
  return (
      <div className={`App ${theme}`}>
          <Navbar/>
          <div className="con-route">
          <Routes>
            <Route path='/home' element={<Home/>}></Route>
            <Route path='/contact' element={<Contact/>}></Route>
            <Route path='/favs' element={<Favs/>}></Route>
            <Route path='/dentist/:id' element={<Detail/>}></Route>
            
          </Routes>

          </div>
          <Footer/>
      </div>
  );
}

export default App;
