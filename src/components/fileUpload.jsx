import React from 'react';
import Icon from './miniComponents/icon';

const FileUpload = (props) => {
  const { useDisplayNewImage } = props;

  return(
    <div id="icon-row">
      <div className="file-field input-field">
        <Icon innerText={"add_a_photo"} />
        <input onChange={useDisplayNewImage} type="file" id="file" accept="jpg gif" />
      </div>
    </div>
  )
};

export default FileUpload;
