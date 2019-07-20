import React from 'react'

const ImageCanvas = (props) => {
  const { imageSrc } = props;
  return(
    <div>
      <img id="image" src={imageSrc} />
    </div>
  )
};

export default ImageCanvas;
