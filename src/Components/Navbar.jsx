import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { ContextGlobal } from './utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const {state, dispatch} = useContext(ContextGlobal)
  return (
    <div style={{backgroundColor: state.bgColor, color: state.ftColor}}>
      <nav style={{
        display:"flex",
        width:"95%", 
        justifyContent: "space-around",
        backgroundColor: state.bgColor,
        color: state.ftColor
        }}>
        <h1>
          <span style={{color:"red"}}>D</span>H Odonto
        </h1>
        {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
          <ul style={{
            display: "flex", 
            listStyle:"none",
            }}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/favs">Favs</Link>
            </li>
          </ul>
        {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
        <button className= "dark" onClick={() => dispatch({bgFlag: state.bgFlag})}>Change theme</button>
      </nav>
    </div>
  )
}

export default Navbar