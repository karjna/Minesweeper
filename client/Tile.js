import 'babel-polyfill';
import React from 'react';

class Tile extends React.Component {
    constructor (props) {
        super(props)

        this.state = {
            clicked: false,
            touching: 0
        }
        this.proximity = this.proximity.bind(this);
    }

    // on click : 
  //show what it has
        // if its a mine game over all mine locations are revealed
        // if not show it


    Reveal () {
        this.setState({clicked: true}, () => {
            if (this.state.clicked === true) {
                if (this.props.tile ==1){

                }else{
                    this.proximity()
                }


            }
        })
    }

    // calculate number
    proximity () {
        // based on position:
        // set starting touching value
        // for(y=this.props.rowNo-1; y < this.props.rowNo+2; y++){
            
        //      for (x = this.props.tileNo-1; y < this.props.tileNo+2; y++){
        //          if (this.props.board[y][x]== 1){
        //              this.state.touching++
        //          }
        //      }
        let topLeft,
            topMiddle,
            topRight,
            middleLeft,
            middleRight,
            bottomLeft,
            bottomMiddle,
            bottomRight
        
        // }
        if (this.props.rowNo-1 >= 0 && this.props.tileNo-1 >= 0){
         topleft =  this.props.board[this.props.rowNo-1][this.props.tileNo-1] === undefined ? 0 :  this.props.board[this.props.rowNo-1][this.props.tileNo-1];
        }else{
            topLeft = 0
        }

        if (this.props.rowNo-1 >= 0){
         topMiddle = this.props.board[this.props.rowNo-1][this.props.tileNo] === undefined ? 0 : this.props.board[this.props.rowNo-1][this.props.tileNo];
        }else{topMiddle =0};

        if (this.props.rowNo-1 >= 0 && this.props.tileNo < this.props.board.length){
        topRight = this.props.board[this.props.rowNo-1][this.props.tileNo+1]  === undefined ? 0 : this.props.board[this.props.rowNo-1][this.props.tileNo+1] ;
        }else{topRight =0};

        if ( this.props.tileNo-1 >= 0){
        middleLeft = this.props.board[this.props.rowNo][this.props.tileNo-1] === undefined ? 0 : this.props.board[this.props.rowNo][this.props.tileNo-1];
         } else{
            middleLeft = 0
        }
        if (this.props.tileNo < this.props.board.length){
        middleRight = this.props.board[this.props.rowNo][this.props.tileNo+1] === undefined ? 0 : this.props.board[this.props.rowNo][this.props.tileNo+1] ;
        } else{
            middleRight = 0
        }

        if (this.props.rowNo+1 < this.props.board.length && this.props.tileNo-1 >= 0){
        bottomLeft = this.props.board[this.props.rowNo+1][this.props.tileNo-1] === undefined ? 0 : this.props.board[this.props.rowNo+1][this.props.tileNo-1];
        }else{
            bottomLeft = 0
        }
        if (this.props.rowNo+1 < this.props.board.length ){
        bottomMiddle = this.props.board[this.props.rowNo+1][this.props.tileNo] === undefined ? 0 : this.props.board[this.props.rowNo+1][this.props.tileNo]; 
        }else{
            bottomMiddle = 0
        }

        if (this.props.rowNo+1 < this.props.board.length && this.props.tileNo+1 < this.props.board.length){
        bottomRight = this.props.board[this.props.rowNo+1][this.props.tileNo+1] === undefined ? 0 : this.props.board[this.props.rowNo+1][this.props.tileNo+1]; 
        }else{
            bottomRight = 0
        }
        
        this.state.touching = topLeft + topMiddle + topRight + middleLeft+ middleRight + bottomLeft+ bottomMiddle+ bottomRight
            
     

        this.setState({touching: this.state.touching})
        // increment with every mine found
        // row before (-1 0 +1)
    }


  



    render () {
        return (<div onClick={this.Reveal.bind(this)}>{this.props.tile}</div>)
    }
}

export default Tile;

