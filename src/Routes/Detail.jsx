import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {

  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  let {id} = useParams()

  const [odontologoDetalle, setOdontologoDetalle] = useState([]);
  
  useEffect(()=>{
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => setOdontologoDetalle(res.data))
    },);

  return (
    <>
      <h1>Detail Dentist id </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      <main style={{display:"flex", flexWrap:"wrap", border:"solid black 2px"}}>
        <table  border="1" width="100%" align="center">
            <thead><tr align="center">
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Website</th>
            </tr></thead>
            <tbody><tr align="center">
                <td>{odontologoDetalle.name}</td>
                <td>{odontologoDetalle.email}</td>
                <td>{odontologoDetalle.phone}</td>
                <td>{odontologoDetalle.website}</td>
            </tr></tbody>
          </table>


      </main>
          </>
  )
}

export default Detail