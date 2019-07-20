import React, { Fragment, useState } from 'react'
import Button from './miniComponents/Button';
import ImageCanvas from './imageCanvas';

const ImageDisplay = () => {
  const [ image, updateImage ] = useState("https://images.squarespace-cdn.com/content/v1/531d09e9e4b025f65847ba91/1548005908980-2P5870ROH4E18WDL1I87/ke17ZwdGBToddI8pDm48kDqFA6F2bdj-odyieWaIIzV7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1Ue4ISNS0LB8b7S_RzFTzjXasR14DQkyTwibcWsfKbwqmujUcYgnCrl657jva-OwOHQ/L4177R2-R01-014.Jpg?format=1000w");

  const useDisplayNewImage = () => {
    const reader = new FileReader();
    const file = document.querySelector('#file').files[0];
    reader.onload = () => {
      updateImage(reader.result);
    }
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  let clearButton, downloadButton;

  if (image.length > 0) {
    const clearImage = () => updateImage("");
    clearButton = <Button
      onClick={clearImage}
      innerText={"Clear Image"}
    />

    downloadButton = <a href={image} download={"image.jpg"}>Download Image</a>;

  }

  return(
    <Fragment>
      <div>Image Display</div>
      <input type="file" accept="jpg gif" id='file' />
      <Button
        onClick={useDisplayNewImage}
        innerText={"Upload Image"}
      />
      {clearButton}
      {downloadButton}
      <ImageCanvas imageSrc={image} />
    </Fragment>
  )
};

export default ImageDisplay;
