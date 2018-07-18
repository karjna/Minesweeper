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
        for(y=this.props.rowNo-1; y < this.props.rowNo+2; y++){
             for (x = this.props.tileNo-1; y < this.props.tileNo+2; y++){
                 if (this.props.board[y][x]== 1){
                     this.state.touching++
                 }
             }
        }
        // increment with every mine found
        // row before (-1 0 +1)
    }


  



    render () {
        return (<div>{this.props.tile}</div>)
    }
}

export default Tile;

