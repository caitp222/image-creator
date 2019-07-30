import React from 'react'
import ImageCanvas from './imageCanvas';
import ToolBar from './toolBar';
import FooterControls from './footerControls';

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
    updateSmileyLocation,
    isDrawing,
    toggleIsDrawing
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
          isDrawing={isDrawing}
        />
      </div>
      <ToolBar
        displayFrame={displayFrame}
        displaySmiley={displaySmiley}
        useToggleDisplayFrame={useToggleDisplayFrame}
        useToggleDisplaySmiley={useToggleDisplaySmiley}
        isDrawing={isDrawing}
        toggleIsDrawing={toggleIsDrawing}
      />
      <FooterControls
        clearButton={clearButton}
        downloadButton={downloadButton}
      />
    </div>
  )
};

export default SketchBook;
