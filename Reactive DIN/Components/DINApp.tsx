import * as React from 'react';



export class DINApp extends React.Component {


    render() {
        return (
            <div className="main">
                <div className="din-table">
                    <h2>DIN table</h2>
                    <table>
                        { /* hard code for now */ }
                        <thead>
                            <tr>
                                <th>Skier Code</th>
                                <th>1</th>
                                <th>2</th>
                                <th>3</th>
                                <th>4</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>A</td>
                                <td>0.75</td>
                                <td>0.75</td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>B</td>
                                <td>1.00</td>
                                <td>1.00</td>
                                <td>0.75</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>C</td>
                                <td>1.50</td>
                                <td>1.25</td>
                                <td>1.00</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>D</td>
                                <td>1.75</td>
                                <td>1.50</td>
                                <td>1.25</td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="din-inputs">
                    <h2>DIN inputs</h2>

                    <div className="radio-group">
                        <p>Experience Level</p>
                        <label>
                            Level 1
                            <input type="radio" name="level" />
                        </label>
                        <label>
                            Level 2
                            <input type="radio" name="level" />
                        </label>
                        <label>
                            Level 3
                            <input type="radio" name="level" />
                        </label>
                    </div>
                    <div className="textbox-group">
                        <label>Age</label>
                        <input type="number" />
                    </div>
                    <div className="textbox-group">
                        <label>Height</label>
                        <input type="text"/>
                    </div>
                    <div className="textbox-group">
                        <label>Weight</label>
                        <input type="text" />
                    </div>
                    <div className="textbox-group">
                        <label>Shoe Size</label>
                        <input type="text" />
                    </div>
                    <button>Calculate</button>
                    <label>
                        DIN:
                        <input type="text" disabled/>
                    </label>
                </div>
            </div>
        );
    }
}
