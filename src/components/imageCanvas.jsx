import React, { Fragment } from 'react';

const ImageCanvas = (props) => {
  const { imageSrc, displayFrame } = props;
  return(
    <div id="image-canvas">
      <img
        id="image"
        className="stacked-images"
        src={imageSrc}
      />
      {
        displayFrame ?
        <span className="card-title">
          <img
            id="frame"
            className="stacked-images"
            src={'http://tanamen.com/img/d_default/gold-frame-border-png/gold-frame-border-png-transparent-background-5c74a15d2a132.png'}
          />
        </span> :
        null
      }
    </div>
  )
};

export default ImageCanvas;
