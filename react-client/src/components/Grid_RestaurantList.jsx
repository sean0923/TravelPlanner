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
    // console.log('chosen');
    return styles.gridTileChosen
  } else {
    // console.log('!!! NOT chosen');
    return styles.gridTileGray
  }
}

export default class Grid_RestaurantList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lastClickedIdx: undefined,
      isClicked: false
    }
    this.handleFoodClick = this.handleFoodClick.bind(this);
  }

  handleFoodClick(fooditem, e, idx, sortedRestaurent){
    this.setState({
      selected: !this.state.selected
    }, ()=>{
      this.props.handleFoodItemState( this, fooditem );
    })

    console.log('price: ', fooditem.price.length)
    fooditem.is_closed = true;

    this.setState({
      lastClickedIdx: idx
    });

  
  }

  render() {

    // let foodclasses = classnames('attrBackground', {activeAttr: this.state.selected} );
    // return(
    //   <div className = {foodclasses} id="itemBorder" onClick = {this.handleFoodClick.bind(this)}>
    //     <div>
    //       <b>{ this.props.fooditem.name }</b>
    //     </div>
    //     <div>{ this.props.fooditem.location.display_address.join(', ') }</div>
    //     <div>
    //       { this.props.fooditem.price }
    //       <span id="foodtype">{this.props.fooditem.categories[0].title}</span>
    //     </div>
    //     <img src={ this.props.fooditem.image_url } width='150' height = '150'></img>
    //   </div>
    // )

    var sortedRestaurent = [];

    var restaurentLen = this.props.foodlist.length/3;

    if (restaurentLen) {
      var oneDlFoodItem = this.props.foodlist.slice(restaurentLen*0,restaurentLen*1);
      var twoDlFoodItem = this.props.foodlist.slice(restaurentLen*1,restaurentLen*2);
      var threeDlFoodItem = this.props.foodlist.slice(restaurentLen*2,restaurentLen*3);
      for (var i = 0; i < oneDlFoodItem.length; i++) {
        sortedRestaurent.push(oneDlFoodItem[i], twoDlFoodItem[i], threeDlFoodItem[i]);
      }
      // console.log(sortedRestaurent)
    }

    return(
      <div style={styles.root}>
        <GridList
          cellHeight={300}
          cols={3}
          padding={20}
          style={styles.gridList}
        >


          {sortedRestaurent.map((fooditem, idx) => {
            return (
              <span key={idx} >
                
              <GridTile
                key={idx} 
                title={fooditem.name}
                subtitle={fooditem.location.display_address.join(', ')}
                actionPosition="left"
                titlePosition="top"
                titleBackground="linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
                className={"tileDesign_00"}
                onClick={(e) => (this.handleFoodClick(fooditem, e, idx, sortedRestaurent))}
                style={styleToggler(fooditem.is_closed)}
              >
              <img 
                src={fooditem.image_url} 
                className="avoid-clicksSean"
                onClick={(e) => (this.handleFoodClick(fooditem, e, idx))}
              />
              
              </GridTile>
              {/* {console.log((fooditem.is_closed))} */}
              </span>
            );
          })} 

        </GridList>
      </div>
    )
  }
}
