import { useNavigate } from 'react-router-dom';
import './Navbar.css'

function Navbar() {
  let navigate = useNavigate();

  return (
    <div className='navbar'>
 
      <button className='explore'  onClick={()=>{ navigate('/')}} >THE SARUNI</button>
 
    </div>
  )
}

export default Navbar