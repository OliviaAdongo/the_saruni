import './Residence.css'
import { useNavigate } from 'react-router-dom';


function ResidenceHomePage() {
  let navigate = useNavigate();
  return (
    <div className="residence">
      <div className="left">
        <p>logo</p>
        <h4>RESIDE IN LUXURY</h4>
        <h5> surrounded by spectacular views</h5>
        <button  onClick={()=>{ navigate('/residence')}}>THE RESIDENCES</button>
      </div>
      <div className="right">
        <p>There is  an image here right side</p>
      </div>
    </div>
  )
}

export default ResidenceHomePage