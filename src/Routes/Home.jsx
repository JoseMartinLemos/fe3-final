import axios from 'axios'
import React, { useEffect, useState, useContext} from 'react'
import Card from '../Components/Card'
import { ContextGlobal } from '../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const [dentistas, setDentistas] = useState([]);
  const {state} = useContext(ContextGlobal)

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setDentistas(res.data));
  }, []);

  return (
    <main className="" style={{backgroundColor: state.bgColor, color: state.ftColor}}>
      <h1>Home</h1>
      <div className='card-grid'  >
        {/* Aqui deberias renderizar las cards */}
        {dentistas.map((dentista)=>{
          return <Card key={dentista.id} dentista={dentista}/>
        })}
      </div>
    </main>
  )
}

export default Home