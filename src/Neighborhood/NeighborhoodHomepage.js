import './Neighborhood.css'
import { useNavigate } from 'react-router-dom';


function NeighborhoodHomepage() {
  let navigate = useNavigate();
  return (
    <div className="neighborhood">
    <div className="left">
      <p>there is an image here left</p>
    </div>
    <div className="right"><p>logo</p>
      <h4>NAIROBI'S EXCLUSIVE ADDRESS</h4>
      <h5> A statement of luxury and prestige</h5>
      <button   onClick={()=>{ navigate('/neighborhood')}}>THE NEIGHBORHOOD</button>
    </div>
  </div>
  )
}

export default NeighborhoodHomepage