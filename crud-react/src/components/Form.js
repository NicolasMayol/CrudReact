import React from 'react';

const Form = ({newPersona, setNewPersona}) => {

    const handleChange = e =>{
        setNewPersona({
        ...newPersona,
            [e.target.name]: e.target.value
        })
        console.log(newPersona)
    }

    const handleClick = e =>{
        e.preventDefault();
        const requestInit = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newPersona)
        };
        fetch('http://localhost:9000/api', requestInit)
        .then(res=> res.text())
        setNewPersona({
            nombre: '',
            apellido:'',
            edad: 0
        });
        window. location. reload(true);
    };

    return (
        <div className="formulario">
            <form onSubmit={handleClick}>
                <input  name="nombre" type="text" onChange={handleChange} required placeholder="Ingresa un nombre"/>
                <input  name="apellido" type="text" onChange={handleChange} required placeholder="Ingresa un apellido"/>
                <input  name="edad" type="number" onChange={handleChange} min="1" pattern="^[0-9]+" required placeholder="Ingresa una edad"/>
                <input type="submit" onSubmit={handleClick} value="Cargar usuario"/>
            </form>  
        </div>
    );
};

export default Form;