export const downloadImage = (displayFrame, displaySmiley, smileyLocation) => {
  const image = document.querySelector('#image');
  const frame = document.querySelector('#frame');
  const smiley = document.querySelector('#smiley');
  const canvas = document.createElement('canvas');
  canvas.height = displayFrame ? frame.height : image.height;
  canvas.width = displayFrame ? frame.width : image.width;
  const context = canvas.getContext('2d');
  context.drawImage(
    image,
    0,
    0,
    image.offsetWidth,
    image.offsetHeight,
  );
  if (displaySmiley) {
    context.drawImage(
      smiley,
      0,
      0,
      smiley.naturalWidth,
      smiley.naturalHeight,
      smileyLocation[0],
      smileyLocation[1],
      smiley.offsetWidth,
      smiley.offsetHeight,
    )
  }
  if (displayFrame) {
    context.drawImage(
      frame,
      0,
      0,
      frame.offsetWidth,
      frame.offsetHeight,
    );
  }
  const link = document.createElement('a');
  link.download = 'image.png';
  link.href = canvas.toDataURL();
  link.click();
};
