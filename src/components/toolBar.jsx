import React from 'react';

const ToolBar = (props) => {
  const {
    displayFrame,
    displaySmiley,
    useToggleDisplayFrame,
    useToggleDisplaySmiley
  } = props;

  return(
    <div id="tools" className="card">
      <a
        className="link-button"
        onClick={useToggleDisplayFrame}
        className="waves-effect waves-light btn-small red lighten-1"
      >
      {
        displayFrame ?
        "Remove Frame" :
        "Add Frame"
      }
      </a>
      <a
        className="link-button"
        onClick={useToggleDisplaySmiley}
        className="waves-effect waves-light btn-small red lighten-1"
      >
      {
        displaySmiley ?
        "Remove Smiley" :
        "Add Smiley"
      }
      </a>
    </div>
  )
};

export default ToolBar;
