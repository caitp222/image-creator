import React from 'react'
import ImageCanvas from './imageCanvas';

const SketchBook = (props) => {
  const {
    imageSrc,
    downloadButton,
    clearButton,
    useDisplayNewImage,
    displayFrame,
    useToggleDisplayFrame,
    displaySmiley,
    useToggleDisplaySmiley,
    smileyLocation,
    updateSmileyLocation
  } = props;

  return(
    <div className="flex-container">
      <div id="image-canvas" className="card">
        <ImageCanvas
          imageSrc={imageSrc}
          displayFrame={displayFrame}
          displaySmiley={displaySmiley}
          smileyLocation={smileyLocation}
          updateSmileyLocation={updateSmileyLocation}
        />
      </div>
      <div id="tools" className="card">
        <a
          onClick={useToggleDisplayFrame}
          className="waves-effect waves-light btn-small"
        >
        {
          displayFrame ?
          "Remove Frame" :
          "Add Frame"
        }
        </a>
        <a
          onClick={useToggleDisplaySmiley}
          className="waves-effect waves-light btn-small"
        >
        {
          displaySmiley ?
          "Remove Smiley" :
          "Add Smiley"
        }
        </a>
      </div>
      {clearButton}
      {downloadButton}
    </div>
  )
};

export default SketchBook;
