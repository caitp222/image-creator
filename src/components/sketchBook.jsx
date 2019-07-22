import React from 'react'
import ImageCanvas from './imageCanvas';

const SketchBook = (props) => {
  const {
    imageSrc,
    downloadButton,
    clearButton,
    useDisplayNewImage,
    displayFrame,
    useToggleDisplayFrame
  } = props;

  return(
    <div className="flex-container">
      <div id="image-canvas" className="card">
        <ImageCanvas
          imageSrc={imageSrc}
          displayFrame={displayFrame}
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
      </div>
      {clearButton}
      {downloadButton}
    </div>
  )
};

export default SketchBook;
