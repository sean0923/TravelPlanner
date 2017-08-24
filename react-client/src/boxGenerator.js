const generateBox = (lftOrRgtStr, wPx, hPx, bColor) => {

  lftOrRgtStr = lftOrRgtStr === 'r' ? 'right' : 'left';

  return {
    border: '1px solid gray',
    display: 'inline-block',
    width: wPx,
    height: hPx,
    float: lftOrRgtStr,
    borderColor: bColor,
  };

}

const generateBoxWoBorder = (lftOrRgtStr, wPx, hPx) => {

  lftOrRgtStr = lftOrRgtStr === 'r' ? 'right' : 'left';

  return {
    // border: '1px solid gray',
    display: 'inline-block',
    width: wPx,
    height: hPx,
    float: lftOrRgtStr,
    // borderColor: bColor,
  };

}

module.exports.generateBox = generateBox;
module.exports.generateBoxWoBorder = generateBoxWoBorder;