import { Button, TextField, Grid } from "@mui/material";
import React from "react";
import { useState } from "react";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const[nombre, setNombre]= useState("")
  const[email, setEmail]= useState("")
  const [inputValues, setInputValues] = useState({ nombre: "", email: ""})
  function EnviarFormulario(evento){
    evento.preventDefault()
    console.log(inputValues)
    evento.target.reset()
  } 

  function CambiarNombre(e){
    setInputValues({ ...inputValues, nombre: e.target.value })
    setNombre(e.target.value)
  }

  function CambiarEmail(e){
    setInputValues({ ...inputValues, email: e.target.value })
    setEmail(e.target.value)
  }

  return (
    <div>
      <form onSubmit={(evento)=> EnviarFormulario(evento)} action="" className ='from-conteiner'>
      <TextField sx={{m: 1}} onChange={(evento)=>CambiarNombre(evento)} value={nombre} type="text" label="Full Name" variant="outlined" />
      <TextField sx={{m: 1}} onChange={(evento)=>CambiarEmail(evento)} value={email} type="email" label="Email" variant="outlined" />
      </form>
      <Button sx={{m: 5}} type="submit">Send</Button>
    </div>
  );
};

export default Form;
