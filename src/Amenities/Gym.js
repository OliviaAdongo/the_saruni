import './Amenities.css'
import { useNavigate } from 'react-router-dom';

function Gym() {
  let navigate = useNavigate();
  return (
    <div>Gym
    <button  onClick={()=>{ navigate('/courtyard')}}>EXPLORE MORE go to courtyard</button>
    </div>
  )
}

export default Gym