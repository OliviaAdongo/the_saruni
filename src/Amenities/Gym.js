import './Amenities.css'
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

function Gym() {
  let navigate = useNavigate();
  return (
    <div className='gym-container'>
    <div><Navbar/></div>
    <p>The Gym</p>
    <button  onClick={()=>{ navigate('/courtyard')}}>EXPLORE MORE go to courtyard</button>
    </div>
  )
}

export default Gym