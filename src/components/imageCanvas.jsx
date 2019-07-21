import React from 'react'

const ImageCanvas = (props) => {
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
              <img
                id="image"
                className="stacked-images"
                src={imageSrc}
              />
              {
                displayFrame ?
                  <img
                    id="frame"
                    className="stacked-images"
                    src={'https://www.pngfind.com/pngs/m/80-804703_ornate-picture-frame-png-arc-studios-gallery-transparent.png'}
                  /> :
                  null
              }
              <span className="card-title">
                <div className="file-field input-field">
                  <i className="material-icons">add_a_photo</i>
                  <input onChange={useDisplayNewImage} type="file" id="file" accept="jpg gif" />
                </div>
              </span>
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

export default ImageCanvas;
