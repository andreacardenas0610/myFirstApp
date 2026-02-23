import React from 'react'

export const Content = () => {
    return (
        <div className="container-fluid px-4 my-4">
            <div className="row">

                {/* PRODUCTOS */}
                <div className="col-lg-8">
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <div className="d-flex justify-content-between mb-3">
                                <h4 className="mb-0">Productos</h4>
                                <span className="text-muted">Mostrando 6 productos</span>
                            </div>

                            <div className="row g-6">
                                {products.map((product, index) => (
                                    <div className="col-md-6" key={index}>
                                        <div className="card h-100 shadow-sm">
                                            <img
                                                src= {product.image}
                                                className="card-img-top"
                                                alt={product.name}
                                                style={{ height: "150px", objectFit: "cover" }}
                                            />

                                            <div className="card-body">
                                                <h6 className="fw-bold">{product.name}</h6>
                                                <p className="mb-1 fw-semibold">
                                                    COP ${product.price}
                                                </p>

                                                <span className={`badge ${product.badgeClass}`}>
                                                    {product.stockLabel}
                                                </span>
                                            </div>

                                            <div className="card-footer d-flex justify-content-center">
                                                <button className="btn btn-outline-primary btn-sm">
                                                    Editar
                                                </button>
                                                <button className="btn btn-outline-danger btn-sm">
                                                    Eliminar
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                        </div>
                    </div>
                </div>

                {/* FORMULARIO */}
                <div className="col-lg-4">
                    <div className="card shadow-sm">
                        <div className="card-header bg-primary text-white">
                            Agregar producto
                        </div>

                        <div className="card-body">
                            <div className="mb-3">
                                <label className="form-label">Nombre del producto</label>
                                <input type="text" className="form-control" />
                            </div>

                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Precio (COP)</label>
                                    <input type="number" className="form-control" />
                                </div>

                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Stock</label>
                                    <input type="number" className="form-control" defaultValue={1} />
                                </div>
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Categoría</label>
                                <select className="form-select">
                                    <option>Selecciona una categoría</option>
                                    <option>Tecnología</option>
                                    <option>Accesorios</option>
                                </select>
                            </div>

                            <div className="mb-3">
                                <label className="form-label">URL de imagen</label>
                                <input type="text" className="form-control" />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Descripción</label>
                                <textarea className="form-control" rows="3"></textarea>
                            </div>

                            <div className="d-flex justify-content-between">
                                <button className="btn btn-success">
                                    Agregar al catálogo
                                </button>
                                <button className="btn btn-outline-secondary">
                                    Limpiar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

 const products = [
    {
        name: "Teclado Mecánico",
        price: "249.000",
        stockLabel: "Pocas unidades",
        badgeClass: "bg-warning text-dark",
        image: "/img/TecladoMecanico.jpg"
    },
      {
        name: "Mouse Inalámbrico",
        price: "49.900",
        stockLabel: "En stock",
        badgeClass: "bg-success",
        image: "/img/MouseInalambrico.jpg"
    },
    {
        name: "Auriculares Bluetooth",
        price: "159.900",
        stockLabel: "En stock",
        badgeClass: "bg-success",
        image: "/img/AuricularesBluetooth.jpg"
    },
   
    {
        name: "Smartwatch ",
        price: "329.000",
        stockLabel: "Agotado",
        badgeClass: "bg-secondary",
        image: "/img/Smartwatch.jpg"
    },
    
    {
        name: "SSD 1TB",
        price: "399.000",
        stockLabel: "Pocas unidades",
        badgeClass: "bg-warning text-dark",
        image: "/img/Monitor.jpg"
    },

    {
        name: "Cámara ",
        price: "1.099.000",
        stockLabel: "En stock",
        badgeClass: "bg-success",
        image: "/img/CamaraCompacta.jpg"
    }
];
