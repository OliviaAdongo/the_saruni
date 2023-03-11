import './Amenities.css'
import { useNavigate } from 'react-router-dom';

function Courtyard() {
  let navigate = useNavigate();
  return (
    <div>
    <p>The Courtyard</p>
    <button  onClick={()=>{ navigate('/details')}}> Check amenities at a glance</button>
    </div>
  )
}

export default Courtyard