declare var require: any

var React = require('react');
var ReactDOM = require('react-dom');

import { Game } from "./Components/Game";


/* Todos:
 * - Figure out how to do functional componenet (in order to add typesafe to prop)
 *
 * */

export class App extends React.Component {
    render() {
        return (
            <Game/>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));