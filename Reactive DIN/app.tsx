import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Game } from "./Components/Game";
import { DINApp } from "./Components/DINApp";



/* Todos:
 * - Figure out how to do functional componenet (in order to add typesafe to prop)
 *
 * */

export class App extends React.Component {
    render() {
        return (
            <DINApp/>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));