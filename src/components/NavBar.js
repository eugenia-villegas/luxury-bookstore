import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../img/Deluxe.png';
import Carrito from '../components/CartWidget';
import { Link } from 'react-router-dom';
import SearchForm from "../components/SearchForm.js";

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light ">
            <div className="container-fluid">
                <Link to="/"><img alt='logo' className="logo-img" src={Logo} /></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/category/2" className="nav-link active" aria-current="page" href="/">Board Games</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/category/3" className="nav-link active" aria-current="page" href="/">Accesories</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/category/1" className="nav-link active" href="/">Magazines</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/aboutUs" className="nav-link active" href="/">About Us</Link>
                    </li>  
                    <li className="nav-item">
                        <SearchForm/>  
                    </li> 
                    <li className="nav-item">
                        <span className="carrito"><Link to="/cart" className="nav-link active" href="/"><Carrito /></Link></span>
                    </li>             
                </ul>
            </div>
        </div>
        </nav>
        </div>
    );
}

export default Navbar;