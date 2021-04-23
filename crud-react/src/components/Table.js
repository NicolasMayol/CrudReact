import React, { useEffect, useState } from 'react';

const Table = ({newPersona, setPage, page}) => {

    useEffect(()=>{
        getPersona();
        setPage([false])
    },[page]);

    const [persona, setPersona] = useState ([]);

    const getPersona = async () =>{
        let save = await fetch('http://localhost:9000/api');
        let data = await save.json();
        setPersona(data)
    };

    const handleDelete = id =>{
        const requestInit = {
            method: 'DELETE'
        };
        fetch(`http://localhost:9000/api/${id}`, requestInit)
        .then(res=> res.text())
        setPage(true)
    }
    
    let {nombre, apellido, edad} = newPersona;

    const handleUpdate = (id) =>{
        edad = parseInt(edad, 200);
        if (nombre === ''|| apellido === '' || edad <= 0) {
            alert('los campos estan vacios');
        }
        const requestInit = {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newPersona)
        };
        fetch(`http://localhost:9000/api/${id}`, requestInit)
        .then(res=> res.text())

        setPage(true);
    }

    return (
        <div className="tablaDatos">
           <table>
			<thead>
                <tr>
                    <th>ID</th>
                    <th>NOMBRE</th>
                    <th>APELLIDO</th>
                    <th>EDAD</th>
                </tr>
            </thead>
            <tbody>
                {
                    persona.map( persona =>(
                        <tr>
                            <th>{persona.id}</th>
                            <th>{persona.nombre}</th>
                            <th>{persona.apellido}</th>
                            <th>{persona.edad}</th>
                            <th>
                                <div>
                                    <button onClick={()=>handleDelete(persona.id)}>DELETE</button>
                                </div>
                            </th>
                            <th>
                                <div>
                                    <button onClick={()=>handleUpdate(persona.id)}>UPDATE</button>
                                </div>
                            </th>
                        </tr>
                    ))
                }
            </tbody>
		</table> 
        </div>
    );
};

export default Table;