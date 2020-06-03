declare var require: any

var React = require('react');
var ReactDOM = require('react-dom');

import { Board } from "./Components/Board";


export class App extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));