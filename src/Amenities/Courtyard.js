import './Amenities.css'
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

function Courtyard() {
  let navigate = useNavigate();
  return (
    <div>
   
    <div><Navbar/></div>
    <p>The Courtyard</p>
    <button  onClick={()=>{ navigate('/details')}}> Check amenities at a glance</button>
    </div>
  )
}

export default Courtyard