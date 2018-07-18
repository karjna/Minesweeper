import React from 'react';
import { render } from 'react-dom';


class Board extends React.Component {
    constructor(props) {
    super(props);
   
    }

    render(){
       return (<h1>hello</h1>)
    }
}

export default Board;

render(<Board />, document.getElementById('application'));
