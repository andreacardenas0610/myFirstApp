import React from 'react'

function getImageUrl(person, size = 's') {
    return (
        'https://i.imgur.com/' +
        person.imageId +
        size +
        '.jpg'
    );
}

function Avatar({ person, size }) {
    return (
        <div className="text-center">
            <img
                className="rounded-circle shadow mb-3"
                src={getImageUrl(person)}
                alt={person.name}
                width={size}
                height={size}
            />
            <h5 className="fw-semibold">{person.name}</h5>
        </div>
    );
}

export const Props = () => {
    return (
        <div className="container py-5">

            {/* Título */}
            <div className="text-center mb-4">
                <h1 className="fw-bold">Props React</h1>
            </div>

            {/* Descripción */}
            <div className="text-center mb-5">
                <p className="text-muted">
                    Este componente demuestra el uso de <strong>props</strong> en React.
                    Cada Avatar recibe datos desde el componente padre,
                    permitiendo reutilizar el mismo componente con diferente información.
                </p>
            </div>

            {/* Avatares */}
            <div className="row justify-content-center text-center">

                <div className="col-12 col-md-4 mb-4">
                    <Avatar
                        size={140}
                        person={{
                            name: 'Katsuko Saruhashi',
                            imageId: 'YfeOqp2'
                        }}
                    />
                </div>

                <div className="col-12 col-md-4 mb-4">
                    <Avatar
                        size={110}
                        person={{
                            name: 'Aklilu Lemma',
                            imageId: 'OKS67lh'
                        }}
                    />
                </div>

                <div className="col-12 col-md-4 mb-4">
                    <Avatar
                        size={90}
                        person={{
                            name: 'Lin Lanying',
                            imageId: '1bX5QH6'
                        }}
                    />
                </div>

            </div>

        </div>
    )
}