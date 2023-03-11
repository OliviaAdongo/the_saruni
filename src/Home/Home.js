import './Home.css'
import { useNavigate } from 'react-router-dom';

function Home() {
  let navigate = useNavigate();
  return (
    <div className="homepage">
      <div className="toppart">Navigation bar</div>
      <div className="main body">
        <h1> THE SARUNI </h1>
        <h3>LUXURIOUS LOREM IPSUM LOREM IPSUM</h3>
      </div>
      <div className="scroller">
      <button className='explore'  onClick={()=>{ navigate('/residencehomepage')}} >EXPLORE</button>
      <h6>Riverside drive in nairobi</h6>
      </div>
    </div>
  );
}

export default Home;
