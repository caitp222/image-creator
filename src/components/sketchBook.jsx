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
    <div>
      <div className="row">
        <div className="col s12 m7">
          <div className="card">
            <div className="card-image">
              <ImageCanvas
                imageSrc={imageSrc}
                displayFrame={displayFrame}
              />
            </div>
            <div className="card-action">
              <a href="#" onClick={useToggleDisplayFrame}>{displayFrame ? "Remove Frame" : "Add Frame"}</a>
            </div>
            <div className="card-content">
              {clearButton}
              {downloadButton}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default SketchBook;
