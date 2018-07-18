import 'babel-polyfill';
import React from 'react';
import Row from './Row';

class Rows extends React.Component {
    constructor (props) {
        super(props)

    }

    render () {
        

        if (this.props.board.length > 0) {
            console.log('propss', this.props)
            var rows = this.props.board.map((row, i)=>{
                return (<tr key={i}><Row row={row} rowNo={i} board={this.props.board}/></tr>)
              })

         return ( <div>
            
            {rows}
            </div>)
            
        } else {
            return (<div></div>)
        }
    }
}

export default Rows;