import React, { Fragment, useState } from 'react';
import SketchBook from './sketchBook';
import ImageDisplayHeader from './imageDisplayHeader';
import FileUpload from './fileUpload';
import Icon from './miniComponents/icon';
import defaultImage from '../../public/images/defaultImage.jpeg';

const ImageDisplay = () => {
  const [ image, updateImage ] = useState(defaultImage);
  const [ displayFrame, updateDisplayFrame ] = useState(true);
  const [ displaySmiley, updateDisplaySmiley ] = useState(true);
  const [ smileyLocation, updateSmileyLocation ] = useState([160,160]);

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

  const useToggleDisplaySmiley = () => {
    updateDisplaySmiley(!displaySmiley);
  }

  const downloadImage = () => {
    const image = document.querySelector('#image');
    const frame = document.querySelector('#frame');
    const smiley = document.querySelector('#smiley');
    const canvas = document.createElement('canvas');
    canvas.height = displayFrame ? frame.height : image.height;
    canvas.width = displayFrame ? frame.width : image.width;
    const context = canvas.getContext('2d');
    context.drawImage(
      image,
      0,
      0,
      image.offsetWidth,
      image.offsetHeight,
    );
    if (displaySmiley) {
      context.drawImage(
        smiley,
        0,
        0,
        smiley.naturalWidth,
        smiley.naturalHeight,
        smileyLocation[0],
        smileyLocation[1],
        smiley.offsetWidth,
        smiley.offsetHeight,
      )
    }
    if (displayFrame) {
      context.drawImage(
        frame,
        0,
        0,
        frame.offsetWidth,
        frame.offsetHeight,
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
    clearButton = <Icon onClick={clearImage} innerText={"delete_outline"} />;
    downloadButton = <Icon onClick={downloadImage} innerText={"save_alt"} />;
  }

  return(
    <Fragment>
      <ImageDisplayHeader />
      <FileUpload
        useDisplayNewImage={useDisplayNewImage}
      />
      <SketchBook
        imageSrc={image}
        clearButton={clearButton}
        downloadButton={downloadButton}
        useDisplayNewImage={useDisplayNewImage}
        displayFrame={displayFrame}
        useToggleDisplayFrame={useToggleDisplayFrame}
        displaySmiley={displaySmiley}
        useToggleDisplaySmiley={useToggleDisplaySmiley}
        smileyLocation={smileyLocation}
        updateSmileyLocation={updateSmileyLocation}
      />
    </Fragment>
  )
};

export default ImageDisplay;
