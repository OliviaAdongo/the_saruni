import "./Home.css";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

function Home() {
  let navigate = useNavigate();
  return (
    <div className="up-section">
      <div className="homepage">
        <div className="top-part">
          <Navbar />
        </div>
        <div className="main-body">
          <div className="main-content">
            <img
              src="https://i.pinimg.com/564x/a0/b7/78/a0b7780d9b390e8fb9d71761ffa4e397.jpg"
              alt="logo"
              className="logo"
            />
            <h1> THE SARUNI </h1>
            <h3>A LUXURIOUS SANCTUARY</h3>
            <h5>nested in unparalleled tranquility</h5>
          </div>
        </div>
      </div>
      <div className="scroller">
        <button 
          className="explore"
          onClick={() => {
            navigate("/residencehomepage");
          }}
        >
          EXPLORE
        </button>
      </div>
      <div className="riverside">
        <h6>Riverside Drive in Nairobi</h6>
      </div>
    </div>
  );
}

export default Home;
