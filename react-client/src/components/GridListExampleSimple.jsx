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
    border: '5px solid red',
    fontSize: '20px',
  },

};



{/* actionIcon={<IconButton><StarBorder color="white" /></IconButton>} */}

var styleToggler = (isClicked) => {
  if (isClicked) {
    console.log('chosen');
    return styles.gridTileChosen
  } else {
    console.log('!!! NOT chosen');
    return styles.gridTileGray
  }
}

class GridListExampleSimple extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lastClickedIdx: undefined,
      isClicked: false
    }
  }

  handleHotelClick(hotel, event, idx){
    this.props.handleHotelClick(hotel, event);
    hotel.is_closed = true;
    if (this.state.lastClickedIdx === undefined) {
      this.setState({
        lastClickedIdx: idx
      });
    } else {
      this.props.hotels[this.state.lastClickedIdx].is_closed = false;
      this.setState({
        lastClickedIdx: idx
      });
    }
  }

  render() {
    return(
      <div style={styles.root}>
        <GridList
          cellHeight={300}
          cols={3}
          padding={20}
          style={styles.gridList}
        >
          <Subheader>December</Subheader>
          {this.props.hotels.map((hotel, idx) => {
            return (
              <span>
              <GridTile
                key={idx} 
                title={hotel.name}
                subtitle={hotel.location.display_address.join(', ')}
                actionPosition="left"
                titlePosition="top"
                titleBackground="linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
                className={"tileDesign_00"}
                onClick={(e) => (this.handleHotelClick(hotel, e, idx))}
                style={styleToggler(hotel.is_closed)}
              >
              <img 
                src={hotel.image_url} 
                className="avoid-clicksSean"
                onClick={(e) => (this.handleHotelClick(hotel, e, idx))}
              />
              
              </GridTile>
              {console.log((hotel.is_closed))}
              </span>
            );
          })} 

      {/* <div  className="itemBorderSean" onClick={(e) => (this.handleHotelClick(this.props.hotel, e))}>
          <div className='avoid-clicksSean'>
            <div className='avoid-clicksSean'><b>{this.props.hotel.name}</b></div>
            <div className='avoid-clicksSean'>{this.props.hotel.location.display_address.join(', ')}</div>
            <div className='avoid-clicksSean'> {this.props.hotel.price}</div>
            <img className='avoid-clicksSean' src={this.props.hotel.image_url} width="150" height = "150"></img>
          </div>
      </div> */}

        </GridList>
      </div>
    )
  }
}

export default GridListExampleSimple;