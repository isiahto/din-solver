import { Square } from "./Square";

declare var require: any

var React = require('react');

export class Board extends React.Component {
    renderSquare(i : number) {
        return <Square value={i}/>;
    }

    render() {
        return (
            <div>
                <div>{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        )
    }
}