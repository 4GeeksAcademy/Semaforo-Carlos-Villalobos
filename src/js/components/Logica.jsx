import React from 'react';

const Circulo = (props) => {
  const cambiarColor = () => {
    props.onClick(props.id);
  };

  return (
    <div
      className='circulo container'
      onClick={cambiarColor}
      style={{
        backgroundColor: props.Color,
        opacity: props.isActive ? 1 : 0.4,
      }}
    ></div>

    
  );
}

export default Circulo;