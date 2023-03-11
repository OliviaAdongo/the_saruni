import './Amenities.css'
import { useNavigate } from 'react-router-dom';

function Gym() {
  let navigate = useNavigate();
  return (
    <div className='gym-container'>
    <p>The Gym</p>
    <button  onClick={()=>{ navigate('/courtyard')}}>EXPLORE MORE go to courtyard</button>
    </div>
  )
}

export default Gym