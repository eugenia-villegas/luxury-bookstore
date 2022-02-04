import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../img/Deluxe.png';
import Carrito from './CartWidget.js';



const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">New In</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link active" href="/">Accesories</a>
                    </li>
                    <li className="nav-item dropdown">
                    <a className="nav-link active dropdown-toggle" href="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Categories
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <li><a className="dropdown-item" href="/">Fantasy</a></li>
                        <li><a className="dropdown-item" href="/">Sci-Fi</a></li>
                        <li><a className="dropdown-item" href="/">Poetry</a></li>
                    </ul>
                    </li>
                </ul>
                <a className="navbar-brand" href="/"><img alt='logo' className="logo-img" src={Logo} /></a>
                <div className="d-none d-sm-block d-md-block d-lg-block d-xl-block d-xxl-block">
                 <p className="carrito"><Carrito /></p>
                 
                </div>
            </div>
        </div>
        </nav>
        </div>
    );
}

export default Navbar;