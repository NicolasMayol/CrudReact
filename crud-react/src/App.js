import React, { Fragment, useState, useEffect } from 'react';
import Form from './components/Form';
import Table from './components/Table';
import './styles/app.scss';

function App() {

  const [newPersona, setNewPersona] = useState ({
    nombre: '',
    apellido:'',
    edad: 0
  });

  const [page, setPage] = useState (false);

    useEffect(()=>{
        setPage([false]);
    },[page]);


  return (
    <Fragment>
      <h1 className="titulo">Crud</h1>
      <div className="container">
        <Table newPersona={newPersona} setPage={setPage} page={page}/>
        <Form newPersona={newPersona} setNewPersona={setNewPersona}/>
      </div>
    </Fragment>
  )
};

export default App;
