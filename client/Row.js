import 'babel-polyfill';
import React from 'react';
import Tile from './Tile';

class Row extends React.Component {
    constructor (props) {
        super(props)

    }

    render () {
        if (this.props.row.length) {
            var tiles = this.props.row.map((tile,i)=>{
                return (<td><Tile tile={tile} tileNo={i} rowNo={this.props.rowNo} 
                /></td>)
              })

         return ( <div>{tiles}</div>)
            
        } else {
            return (<div></div>)
        }
    }
    
}

export default Row;