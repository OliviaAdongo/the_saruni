import './Neighborhood.css'
import { useNavigate } from 'react-router-dom';


function NeighborhoodHomepage() {
  let navigate = useNavigate();
  return (
    <div className="neighborhood">
    <div className="left">
      <p>there is an image here</p>
    </div>
    <div className="right"><p>logo</p>
      <h4>NEIGHBORHOOD</h4>
      <h5> surround lorem ipsum lorem ipsum</h5>
      <button   onClick={()=>{ navigate('/neighborhood')}}>THE NEIGHBORHOOD</button>
    </div>
  </div>
  )
}

export default NeighborhoodHomepage