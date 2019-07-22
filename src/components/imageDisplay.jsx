import React, { Fragment, useState } from 'react';
import SketchBook from './sketchBook';
import ImageDisplayHeader from './imageDisplayHeader';
import defaultImage from '../../public/images/defaultImage.jpeg';

const ImageDisplay = () => {
  const [ image, updateImage ] = useState(defaultImage);
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

  const downloadImage = () => {
    const image = document.querySelector('#image');
    const frame = document.querySelector('#frame');
    const canvas = document.createElement('canvas');
    canvas.height = displayFrame ? frame.height : image.height;
    canvas.width = displayFrame ? frame.width : image.width;
    const context = canvas.getContext('2d');
    context.drawImage(
      image,
      0,
      0,
      image.offsetWidth,
      image.offsetHeight
    );
    if (displayFrame) {
      context.drawImage(
        frame,
        0,
        0,
        frame.offsetWidth,
        frame.offsetHeight
      );
    }
    const link = document.createElement('a');
    link.download = 'image.png';
    link.href = canvas.toDataURL();
    link.click();
  };

  let clearButton, downloadButton;

  if (image.length > 0) {
    const clearImage = () => {
      updateImage("");
      updateDisplayFrame(false);
    };
    clearButton = <i onClick={clearImage} className="material-icons">delete_outline</i>
    downloadButton = <i onClick={downloadImage} className="material-icons">save_alt</i>;
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
