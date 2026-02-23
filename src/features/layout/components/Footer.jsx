import React from 'react'

export const Footer = () => {
    return (
        <footer className="bg-white border-top py-3 mt-auto fixed-bottom">
            <div className="container-fluid d-flex justify-content-between">
                <small>
                    © 2026 - Carrito de Compras (Maquetación Bootstrap)
                </small>

                <div>
                    <a href="#" className="me-3 text-decoration-none">
                        Ayuda
                    </a>
                    <a href="#" className="text-decoration-none">
                        Políticas
                    </a>
                </div>
            </div>
        </footer>
    );
}