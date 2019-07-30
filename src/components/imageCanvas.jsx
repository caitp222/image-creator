import React, { Fragment } from 'react';
import DrawingCanvas from './drawingCanvas';
import frameLandscape from '../../public/images/frameLandscape.png';
import smiley from '../../public/images/smiley.png';

const ImageCanvas = (props) => {
  const {
    imageSrc,
    displayFrame,
    displaySmiley,
    smileyLocation,
    updateSmileyLocation,
    isDrawing
  } = props;

  const handleDragOver = (evt) => {
    evt.preventDefault();
    const smiley = document.getElementById("smiley");
    smiley.style.opacity = 0.5;
    smiley.style.left = `${
      evt.pageX - evt.target.getClientRects()[0].left - (smiley.offsetWidth / 2)
    }px`;
    smiley.style.top = `${
      evt.pageY - evt.target.getClientRects()[0].top - (smiley.offsetHeight / 2)
    }px`;
  };

  const handleDrop = (evt) => {
    evt.preventDefault();
    const smiley = document.getElementById("smiley");
    smiley.style.opacity = 1;
    updateSmileyLocation([
      parseInt(smiley.style.left.replace("px", "")),
      parseInt(smiley.style.top.replace("px", ""))
    ]);
  };

  return(
    <div
      id="image-canvas"
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <img src={imageSrc} id="image" />
      <DrawingCanvas
        isDrawing={isDrawing}
      />
      {
        displayFrame ?
        <img
          id="frame"
          className="stacked-images"
          src={frameLandscape}
        /> :
        null
      }
      {
        displaySmiley ?
        <img
          id="smiley"
          className="stacked-images"
          src={smiley}
          style={{
            left: smileyLocation[0],
            top: smileyLocation[1]
          }}
        /> :
        null
      }
    </div>
  )
};

export default ImageCanvas;
