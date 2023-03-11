import { useNavigate } from 'react-router-dom';


function Navbar() {
  let navigate = useNavigate();

  return (
    <div>
      NAVBAR:   <button className='explore'  onClick={()=>{ navigate('/')}} >HOME</button>

    </div>
  )
}

export default Navbar