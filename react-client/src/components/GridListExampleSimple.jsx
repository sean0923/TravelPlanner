import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import Star from 'material-ui/svg-icons/toggle/star';
import ActionGrade from 'material-ui/svg-icons/action/grade';

const boxGenFile = require('../boxGenerator.js');
const makeBoxWiBoder = boxGenFile.makeBoxWiBoder;
const makeBoxWiNoBoder = boxGenFile.makeBoxWiNoBoder;

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    width: '100%',
  },
  gridList: {
    width: '100%',
    padding: '4%',
    height: '100%',
    overflowY: 'auto',
  },
  gridTile: {
    // marginBottom: '20%',
    paddingBottom: 50
  },
};

const imgURL = [
  'https://www.codeproject.com/KB/GDI-plus/ImageProcessing2/flip.jpg',
  'http://wallpaper-gallery.net/images/image/image-3.jpg',
  'http://www.menucool.com/slider/jsImgSlider/images/image-slider-2.jpg',
  'https://s-media-cache-ak0.pinimg.com/originals/5b/6f/38/5b6f38d097f6a93af17ea67f3dceca28.jpg',
  'http://www.menucool.com/slider/jsImgSlider/images/image-slider-1.jpg',
  'https://static.guim.co.uk/sys-images/Guardian/Pix/pictures/2014/4/11/1397210130748/Spring-Lamb.-Image-shot-2-011.jpg',
  'https://www.codeproject.com/KB/GDI-plus/ImageProcessing2/flip.jpg',
  'http://wallpaper-gallery.net/images/image/image-3.jpg',
  'http://www.menucool.com/slider/jsImgSlider/images/image-slider-2.jpg',
  'https://s-media-cache-ak0.pinimg.com/originals/5b/6f/38/5b6f38d097f6a93af17ea67f3dceca28.jpg',
  'http://www.menucool.com/slider/jsImgSlider/images/image-slider-1.jpg',
  'https://static.guim.co.uk/sys-images/Guardian/Pix/pictures/2014/4/11/1397210130748/Spring-Lamb.-Image-shot-2-011.jpg',
]

const tilesData = imgURL.map((oneUrl) => {
  return (
    {
      img: oneUrl,
      title: 'Breakfast',
      author: 'jill111',
    }
  );
})



{/* actionIcon={<IconButton><StarBorder color="white" /></IconButton>} */}

const iconToggle = (isClick) => {
  if (isClick) {

  } else {
    return 'actionIcon={<IconButton><StarBorder color="white" /></IconButton>}'
  }
}

class GridListExampleSimple extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {

    // }

  }

  render() {
    return(
      <div style={styles.root}>
        <div style={makeBoxWiBoder('TestRedBox', '100%', '10px', 'red')}></div>
        <GridList
          cellHeight={300}
          cols={3}
          padding={20}
          style={styles.gridList}
        >
          {/* actionIcon={<IconButton><StarBorder color="white" /></IconButton>} */}
          <Subheader>December</Subheader>

          {tilesData.map((tile, idx) => {
            if (false) { 
              return (
              <GridTile
                key={idx} 
                title={tile.title}
                 actionIcon={<IconButton><StarBorder color="white" /></IconButton>} 
                actionPosition="left"
                titlePosition="top"
                titleBackground="linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
              >
                <img src={tile.img} />
              
              </GridTile>
              );
            } else {
              return (
              <GridTile
                key={idx} 
                title={tile.title}
                actionIcon={<IconButton> <Star color="yellow"/></IconButton>}
                actionPosition="left"
                titlePosition="top"
                titleBackground="linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
              >
                <img src={tile.img} />
              
              </GridTile>
              );
            }
          })} 



          {/* {tilesData.map((tile, idx) => (
              <GridTile
                key={idx} 
                title={tile.title}
                actionIcon={<IconButton> <Star color="yellow"/></IconButton>}
                actionPosition="left"
                titlePosition="top"
                titleBackground="linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
              >
                <img src={tile.img} />
              
              </GridTile>
          ))} */}
        </GridList>
      </div>
    )
  }
}

export default GridListExampleSimple;