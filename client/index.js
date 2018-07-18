import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import Rows from './Rows';

class Board extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            level: null,
            size: null,
            mineCount: null,
            board:[]
        }
        this.createBoard = this.createBoard.bind(this);
        this.shuffleBoard = this.shuffleBoard.bind(this);
    }

    setDifficulty () {
        if (this.state.level==null){
            let difficulty = document.getElementById('level').value;
            console.log('hellfo', difficulty);

            this.setState({level: difficulty}, () => {
                console.log('helsdflo', this.state)
                if (this.state.level == 'easy') {
                    this.setState({size: 8, mineCount: 16})
                } else if (this.state.level =='medium') {
                    this.setState({size:12, mineCount: 50})
                }else if (this.state.level =='hard'){
                    this.setState({size:16, mineCount: 80})
                }

                this.createBoard();
            });
        }
       
    }

    shuffleBoard(a) {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }

    createBoard (){
        
        console.log('creatbeae', this.state);
        for(var i = 0; i < this.state.size*this.state.size; i++) {
            if(i <= this.state.mineCount){
                this.state.board.push(1);
            }else{
                this.state.board.push(0);
            }  
        }

        let rows = [];
        this.shuffleBoard(this.state.board)

        this.state.board.forEach((item)=>{
            if(!rows.length || rows[rows.length-1].length == this.state.size)
            rows.push([]);
          
            rows[rows.length-1].push(item);
          });
        
        this.setState({board: rows})

    }
    

    
   
    

    render(){
       return (<div>
           <div>
               <select id = "level" onChange={this.setDifficulty.bind(this)}>
                    <option default value = "">Choose Difficulty</option>
                   <option value = "easy">easy</option>
                   <option value="medium">medium</option>
                   <option value = "hard">hard</option>
               </select>

               <button onClick={this.createBoard.bind(this)}>Play</button>
            </div> 
            <table>
                {console.log('inside index render', this.state)}
                <Rows board = {this.state.board}/>
        
            </table>


       </div>)
    }
}

export default Board;

render(<Board />, document.getElementById('application'));
