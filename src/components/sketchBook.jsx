import React from 'react'

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
      {
        displayFrame ?
        <img
          id="frame"
          className="stacked-images"
          src={'http://tanamen.com/img/d_default/gold-frame-border-png/gold-frame-border-png-transparent-background-5c74a15d2a132.png'}
        /> :
        null
      }
      <div className="row">
        <div className="col s12 m7">
          <div className="card">
            <div className="card-image">
              <img
                id="image"
                className="stacked-images"
                src={imageSrc}
              />
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

export default SketchBook;
