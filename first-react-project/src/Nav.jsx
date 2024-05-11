import { Link } from "react-router-dom";

function Nav(){
    return <nav className="nav">
        <img src="src/assets/logo.png"></img><a href="/" className="site-title">RENT-BOOK</a>
        <ul>
            
        <li><Link to="/katalog">Katalog</Link></li>
        <li><Link to="/kontakt">Kontakt</Link></li>
        <li><Link to="/konto">Moje konto</Link></li>
        <li><Link to="/koszyk">Koszyk</Link></li>
            
        </ul>

    </nav>
}



export default Nav