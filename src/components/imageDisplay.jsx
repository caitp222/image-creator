import React, { Fragment, useState } from 'react'
import SketchBook from './SketchBook';
import ImageDisplayHeader from './imageDisplayHeader';

const ImageDisplay = () => {
  const [ image, updateImage ] = useState("https://images.squarespace-cdn.com/content/v1/531d09e9e4b025f65847ba91/1548005908980-2P5870ROH4E18WDL1I87/ke17ZwdGBToddI8pDm48kDqFA6F2bdj-odyieWaIIzV7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1Ue4ISNS0LB8b7S_RzFTzjXasR14DQkyTwibcWsfKbwqmujUcYgnCrl657jva-OwOHQ/L4177R2-R01-014.Jpg?format=1000w");
  const [ displayFrame, updateDisplayFrame ] = useState(true);

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

  const useToggleDisplayFrame = () => {
    updateDisplayFrame(!displayFrame);
  }

  let clearButton, downloadButton;

  if (image.length > 0) {
    const clearImage = () => updateImage("");
    clearButton = <i onClick={clearImage} className="material-icons">delete_outline</i>
    downloadButton = <a href={image} download={"image.jpg"} className="material-icons">save_alt</a>;
  }

  return(
    <Fragment>
      <ImageDisplayHeader />
      <div id="icon-row">
        <div className="file-field input-field">
          <i className="material-icons">add_a_photo</i>
          <input onChange={useDisplayNewImage} type="file" id="file" accept="jpg gif" />
        </div>
      </div>
      <SketchBook
        imageSrc={image}
        clearButton={clearButton}
        downloadButton={downloadButton}
        useDisplayNewImage={useDisplayNewImage}
        displayFrame={displayFrame}
        useToggleDisplayFrame={useToggleDisplayFrame}
      />
    </Fragment>
  )
};

export default ImageDisplay;
