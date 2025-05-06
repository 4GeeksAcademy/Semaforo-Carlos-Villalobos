import React, { useState } from "react";
import Circulo from "./Logica.jsx";

const Home = () => {
  const [activoId, setActivoId] = useState(null);

  const clickEnCirculo = (id) => {
    setActivoId(id); 
  };

  

  return (
    <div className="text-center row container">
      <div className="col-12 bg-dark tamaño container d-flex flex-column align-items-center rounded-4 mt-4">
        <div className="my-1">
          <Circulo
            id={1} 
            isActive={activoId === 1} 
            onClick={clickEnCirculo} 
            Color="red"
          />
        </div>
        <div className="my-1">
          <Circulo
            id={2}
            isActive={activoId === 2}
            onClick={clickEnCirculo}
            Color="yellow"
          />
        </div>
        <div className="my-1">
          <Circulo
            id={3}
            isActive={activoId === 3}
            onClick={clickEnCirculo}
            Color="#08ed08"
          />

        </div>
      </div>
      <div className="col-12">
      <button type="button" className="btn btn-primary" onClick={()=> { const randomColor = Math.floor(Math.random() * 3) + 1;
            clickEnCirculo(randomColor); }}>Primary</button>
      
      </div>
    </div>
  );
};

export default Home;