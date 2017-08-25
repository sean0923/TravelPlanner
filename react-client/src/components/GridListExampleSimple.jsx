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
  gridTileGray: {
    border: '1px solid black',
    // '-webkit-filter': 'grayscale(100%)',
    // filter: 'grayscale(50%)',
  },
  gridTileChosen: {
    // border: '5px solid rgb(0,188,212)',
    border: '5px solid black',
    fontSize: '20px',
  },
  smallIcon: {
    width: 36,
    height: 36,
  },
  mediumIcon: {
    width: 48,
    height: 48,
  },
  largeIcon: {
    width: 60,
    height: 60,
  },
  small: {
    width: 72,
    height: 72,
    padding: 16,
  },
  medium: {
    width: 96,
    height: 96,
    padding: 24,
  },
  large: {
    width: 120,
    height: 120,
    padding: 30,
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
      isStarClicked: false,
    }
  );
})



{/* actionIcon={<IconButton><StarBorder color="white" /></IconButton>} */}



class GridListExampleSimple extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lastClickedIdx: undefined,
      isStarClicked: false
    }

    this.toggleStar = this.toggleStar.bind(this);

  }

  toggleStar (tile, idx, tilesData) {
    // console.log(idx);
    console.log('state clicked:', this.state.lastClickedIdx);
    tile.isStarClicked = true;
    if (this.state.lastClickedIdx === undefined) { // if user cick it for the first time 
      this.setState({ 
        lastClickedIdx: idx,
      });
    } else { // if user click star for more than first time !!!
      tilesData[this.state.lastClickedIdx].isStarClicked = false; // <-- so that user can only click one hotel
      this.setState({
        lastClickedIdx: idx,
      });
    }

  }

  render() {
    return(
      <div style={styles.root}>
        {/* <div style={styles.gridTile} /> */}
        <GridList
          cellHeight={300}
          cols={3}
          padding={20}
          style={styles.gridList}
        >
         {/* {console.log(this.props.hotels)}   */}
        {/* actionIcon={<IconButton><StarBorder color="white" /></IconButton>} */}
          <Subheader>December</Subheader>

          {this.props.hotels.map((hotel, idx) => {
            if (hotel.isStarClicked) { 
              return (
              <GridTile
                key={idx} 
                title={hotel.title}
                actionIcon={
                  <IconButton> 
                    <Star onClick={() => (this.toggleStar(hotel, idx, tilesData))} color="yellow"/>
                  </IconButton>
                  }
                actionPosition="left"
                titlePosition="top"
                titleBackground="linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
                style={styles.gridTileChosen}
                className="tileDesignChosen"
                titleStyle={{fontSize: 20}}
                
              >
                <img src={hotel.image_url} onClick={() => (this.toggleStar(hotel, idx, tilesData))}/>
                {/* <div style={styles.gridTile} /> */}
              </GridTile>
              );
            } else {
              return (
              <GridTile
                key={idx} 
                title={hotel.title}
                actionIcon={<IconButton><StarBorder onClick={() => (this.toggleStar(hotel, idx, tilesData))} color="white" /></IconButton>}
                actionPosition="left"
                titlePosition="top"
                titleBackground="linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
                style={styles.gridTileGray}
                className="tileDesign_00"
              >
              <img src={hotel.image_url} onClick={() => (this.toggleStar(hotel, idx, tilesData))}/>
              
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