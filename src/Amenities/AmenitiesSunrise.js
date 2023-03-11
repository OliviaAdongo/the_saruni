import './Amenities.css'
import { useNavigate } from 'react-router-dom';

function AmenitiesSunrise() {
  let navigate = useNavigate();
  return (
    <div>AmenitiesSunrise
    <button  onClick={()=>{ navigate('/sunset')}}>Check the sunset</button>
    </div>
  )
}

export default AmenitiesSunrise