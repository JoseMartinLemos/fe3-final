import React, {useContext} from 'react'
import { ContextGlobal } from '../Components/utils/global.context'

const Footer = () => {
const {state} = useContext(ContextGlobal)
console.log(state.bgFlag)
  return (
    <footer  style={{backgroundColor: state.bgColor, color: state.ftColor, display:"flex", justifyContent:"space-between"}}>
        <p>Powered by</p>
        <img src="../Images/DH.png" alt='DH-logo'/>
          <div >
            <i style={{margin:"20px"}} className="fa-brands fa-facebook fa-lg"></i>
            <i style={{margin:"20px"}} className="fa-brands fa-instagram fa-lg"></i>
            <i style={{margin:"20px"}} className="fa-brands fa-whatsapp fa-lg"></i>
            <i style={{margin:"20px"}} className="fa-brands fa-tiktok fa-lg"></i>
          </div>
    </footer>
  )
}

export default Footer
