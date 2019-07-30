import React from 'react';

const DrawingCanvas = (props) => {
  const { isDrawing } = props;

  return(
    <canvas
      id="drawingCanvas"
    />
  )
};

export default DrawingCanvas;
