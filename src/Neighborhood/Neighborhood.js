import './Neighborhood.css'
import { useNavigate } from 'react-router-dom';

function Neighborhood() {

  let navigate = useNavigate();
  return (
    <div>Neighborhood
    
    <button   onClick={()=>{ navigate('/map')}}>EXPLORE MORE go to map</button>
    </div>
  )
}

export default Neighborhood