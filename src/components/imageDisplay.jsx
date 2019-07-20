import React, { Fragment, useState } from 'react'

const ImageDisplay = () => {
  const [ image, updateImage ] = useState("");

  const useDisplayNewImage = () => {
    const reader = new FileReader();
    const file = document.querySelector('#file').files[0];
    reader.onload = () => {
      updateImage(reader.result);
    }
    reader.readAsDataURL(file);
  };

  return(
    <Fragment>
      <div>Image Display</div>
      <input type="file" accept="jpg" id="file" />
      <button onClick={() => useDisplayNewImage()}>Upload Image</button>
      <img src={image} />
    </Fragment>
  )
};

export default ImageDisplay;
