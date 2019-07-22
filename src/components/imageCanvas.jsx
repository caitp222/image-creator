import React, { Fragment } from 'react';
import frameLandscape from '../../public/images/frameLandscape.png';

const ImageCanvas = (props) => {
  const { imageSrc, displayFrame } = props;
  return(
    <div id="image-canvas">
      <img src={imageSrc} id="image" />
      {
        displayFrame ?
        <img
          id="frame"
          className="stacked-images"
          src={frameLandscape}
        /> :
        null
      }
    </div>
  )
};

export default ImageCanvas;
