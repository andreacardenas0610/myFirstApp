import React from 'react'
import { NavLink } from 'react-router-dom'

export const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top shadow">
            <div className="container-fluid">

                {/* Logo / Título */}
                <NavLink className="navbar-brand fw-bold" to="/">
                    Carrito de Compras
                </NavLink>

                {/* Botón hamburguesa */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarContent"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Contenido colapsable */}
                <div className="collapse navbar-collapse" id="navbarContent">

                    {/* Links */}
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/article">Article</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/props">Props</NavLink>
                        </li>
                    </ul>

                    {/* Buscador */}
                    <form className="d-flex">
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Buscar productos..."
                        />
                        <button className="btn btn-primary">
                            Buscar
                        </button>
                    </form>

                </div>
            </div>
        </nav>
    )
}
