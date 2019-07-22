import React from 'react';

const FooterControls = (props) => {
  const { clearButton, downloadButton } = props;

  return(
    <div id="footer-controls">
      {clearButton}
      {downloadButton}
    </div>
  )
};

export default FooterControls;
