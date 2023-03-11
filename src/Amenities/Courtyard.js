import './Amenities.css'
import { useNavigate } from 'react-router-dom';

function Courtyard() {
  let navigate = useNavigate();
  return (
    <div>Courtyard
    <button  onClick={()=>{ navigate('/details')}}> check amenities at a glance</button>
    </div>
  )
}

export default Courtyard