import 'babel-polyfill';
import React from 'react';

class Tile extends React.Component {
    constructor (props) {
        super(props)

        this.state = {
            clicked: false,
            touching: 0,
            value: '•'
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
                      this.setState({value : "x"})  
                }else{
                    this.proximity();

                }


            }
        })
    }

    // calculate number
    proximity () {
        // based on position:
        // set starting touching value
      
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
         topLeft =  this.props.board[this.props.rowNo-1][this.props.tileNo-1] === undefined ? 0 :  this.props.board[this.props.rowNo-1][this.props.tileNo-1];
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

        if(this.state.touching > 0 ){
            this.setState({value : this.state.touching}) 
        }else{
            this.setState({value : ""}) 
        }
        // increment with every mine found
        // row before (-1 0 +1)
    }


  



    render () {
        
        return (<div onClick={this.Reveal.bind(this)}>{this.state.value}</div>)
    }
}

export default Tile;

