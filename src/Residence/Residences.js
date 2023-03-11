import "./Residence.css";
import { useNavigate } from "react-router-dom";

function Residences() {
  let navigate = useNavigate();
  return (
    <div>
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
        <p>here goes an image</p>
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
