import "./Residence.css";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

function Residences() {
  let navigate = useNavigate();
  return (
    <div>
      <div className="top-part">
        <Navbar />
      </div>
      <div className="section2">
        <div className="residence-left">
          <p>LOGO CARD the residences</p>
          <h2>LUXURY Units</h2>
          <h3>CAREFULLY CONSIDERED AND METICULOUSLY DESIGNED</h3>
          <h4>
            With uninterrupted views from each appartments, 'The Saruni' at
            Riverside Drive, is a modern interpretation of contemporary luxury
            specifically designed to enhance your living exparience
          </h4>
        </div>
        <div className="residence-right">
          <img
            src="https://i.pinimg.com/564x/12/2c/c0/122cc0bcf1520d5206e834142236a999.jpg"
            alt="views"
            className="viewsample"
          />
        </div>
      </div>

      <div className="bottom">
        <button
          onClick={() => {
            navigate("/livingroom");
          }}
        >
          EXPLORE THE RESIDENCES
        </button>
      </div>
    </div>
  );
}

export default Residences;
