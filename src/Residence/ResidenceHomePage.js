import './Residence.css'
import { useNavigate } from 'react-router-dom';


function ResidenceHomePage() {
  let navigate = useNavigate();
  return (
    <div className="residence">
      <div className="left">
        <p>logo</p>
        <h4>RESIDE IN LUXURY</h4>
        <h5> surround lorem ipsum lorem ipsum</h5>
        <button  onClick={()=>{ navigate('/residence')}}>THE RESIDENCES</button>
      </div>
      <div className="right">
        <p>There is  an image here</p>
      </div>
    </div>
  )
}

export default ResidenceHomePage