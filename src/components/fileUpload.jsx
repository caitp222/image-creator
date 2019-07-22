import React from 'react';

const FileUpload = (props) => {
  const { useDisplayNewImage } = props;

  return(
    <div id="icon-row">
      <div className="file-field input-field">
        <i className="material-icons">add_a_photo</i>
        <input onChange={useDisplayNewImage} type="file" id="file" accept="jpg gif" />
      </div>
    </div>
  )
};

export default FileUpload;
