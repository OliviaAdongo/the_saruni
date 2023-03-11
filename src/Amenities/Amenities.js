import './Amenities.css'
import { useNavigate } from 'react-router-dom';

function Amenities() {
  let navigate = useNavigate();
  return (
    <div>
    Amenities
    <button  onClick={()=>{ navigate('/sunrise')}}>Check sunrise</button>
    </div>
  )
}

export default Amenities