shouldRotateToOrientation = function(orientation) {
  console.log("Orientation is: " + window.orientation);
  console.log('Passed to screen change func: ' + orientation);
  var pdfOpen = Session.get('pdfOpen');
  if (pdfOpen)
    return true;

  if (window.orientation != 0) { // Portrait
    console.log('Returning True for orientation change')
    return true;
  }

  return false;
};
