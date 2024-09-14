import "../Styles/Footer.css";
import { useContextProvider } from "./utils/global.context";

const Footer = () => {
  const {theme} = useContextProvider();
  return (
    <footer className={`foo-style foo-style-${theme}`}>
        <p>Powered by</p>
        <img src="../../public/images/DH.png" alt='DH-logo' />
        <div className="footer-icon">
          <img className="icon" src="../../public/images/ico-whatsapp.png" alt="" width={100}/>
          <img className="icon" src="../../public/images/ico-facebook.png" alt="" width={100}/>
          <img className="icon" src="../../public/images/ico-instagram.png" alt="" width={100}/>
          <img className="icon" src="../../public/images/ico-tiktok.png" alt="" width={100}/>
        </div>
    </footer>
  )
}

export default Footer
