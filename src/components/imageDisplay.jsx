import React, { Fragment, useState } from 'react';
import SketchBook from './sketchBook';
import ImageDisplayHeader from './imageDisplayHeader';
import FileUpload from './fileUpload';
import Icon from './miniComponents/icon';
import defaultImage from '../../public/images/defaultImage.jpeg';
import * as ImageHelpers from '../helpers/imageHelpers';

const ImageDisplay = () => {
  const [ image, updateImage ] = useState(defaultImage);
  const [ displayFrame, updateDisplayFrame ] = useState(true);
  const [ displaySmiley, updateDisplaySmiley ] = useState(true);
  const [ smileyLocation, updateSmileyLocation ] = useState([160,160]);
  const [ isDrawing, updateIsDrawing ] = useState(false);

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

  const toggleIsDrawing = () => {
    updateIsDrawing(!isDrawing);
  }

  let clearButton, downloadButton;

  if (image.length > 0) {
    const clearImage = () => {
      updateImage("");
      updateDisplayFrame(false);
    };
    clearButton = <Icon onClick={clearImage} innerText={"delete_outline"} />;
    downloadButton = <Icon onClick={ImageHelpers.downloadImage} innerText={"save_alt"} />;
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
        isDrawing={isDrawing}
        toggleIsDrawing={toggleIsDrawing}
      />
    </Fragment>
  )
};

export default ImageDisplay;
