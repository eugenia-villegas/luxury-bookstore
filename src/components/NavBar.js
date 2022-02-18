import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../img/Deluxe.png';
import Carrito from '../components/CartWidget';



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
                    <a className="nav-link active" aria-current="page" href="/">Board Games</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">Accesories</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link active" href="/">Magazines</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link active" href="/">About Us</a>
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