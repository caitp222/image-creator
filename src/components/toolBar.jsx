import React from 'react';
import Button from './miniComponents/Button';

const ToolBar = (props) => {
  const {
    displayFrame,
    displaySmiley,
    useToggleDisplayFrame,
    useToggleDisplaySmiley,
    isDrawing,
    toggleIsDrawing
  } = props;

  return(
    <div id="tools" className="card">
      <Button
        onClick={useToggleDisplayFrame}
        className="waves-effect waves-light btn-small red lighten-1 link-button"
        innerText={displayFrame ? "Remove Frame" : "Add Frame"}
      />
      <Button
        onClick={useToggleDisplaySmiley}
        className="waves-effect waves-light btn-small red lighten-1 link-button"
        innerText={displaySmiley ? "Remove Smiley" : "Add Smiley"}
      />
      <Button
        onClick={toggleIsDrawing}
        className="waves-effect waves-light btn-small red lighten-1 link-button"
        innerText={isDrawing ? "Stop Drawing" : "Draw"}
      />
    </div>
  )
};

export default ToolBar;
