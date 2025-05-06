import React from 'react';
import Circulo from './Logica';

const Botoncillo = () => {

  return (
    <div className="my-1">
    <Circulo
      id={4}
      isActive={activoId === 4}
      onClick={clickEnCirculo}
      Color="bluevioletblueviolet"
    />
  </div>

    
  );
}

export default Botoncillo;