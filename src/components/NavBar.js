import { React } from "react";
import { CartWidget } from "./CartWidget";
import { Link } from "react-router-dom"

export const NavBar = () => {
    return (<nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">Bazar Lucas</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="#">Tienda</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" to="#">Contacto</Link>
                    </li>
                </ul>
                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-primary" type="submit">Buscar</button>
                </form>
            </div>
        </div>
        <Link to="carrito" className="carrito"> <CartWidget /></Link>
    </nav>

    )
}

export default NavBar