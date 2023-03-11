import './Residence.css'
import { useNavigate } from 'react-router-dom';

function Residences() {
  let navigate = useNavigate();
  return (
    <div>
      <div className='residence-left'>
        <p>LOGO CARD</p>
        <h2>LUXURY</h2>
        <p>Lorem ipsums lorem ipsums lorem ipsums</p>
      </div>
      <div className='residence-right'>
        <p>here goes an image</p>
      </div>
      <div className='bottom'>
        <button onClick={()=>{ navigate('/livingroom')}} >EXPLORE MORE</button>
      </div>
    </div>
  )
}

export default Residences
