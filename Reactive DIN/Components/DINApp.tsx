import * as React from "react";
import { BodyMassChart } from "./BodyMassChart";
import { BodyMassInterval, DINState } from "./Interfaces"


export class DINApp extends React.Component<{}, DINState> {
    // placeholder
    private weight: React.RefObject<HTMLInputElement>;
    private height: React.RefObject<HTMLInputElement>;

    constructor() {
        super(null);
        this.weight = React.createRef();
        this.height = React.createRef();

        //  init states
        this.state = {
            selectedRow: -1,
            selectedWeight: -1,
            selectedHeight: -1,    
        } as DINState;
        
    }

    getIntervals(): BodyMassInterval[] {
        return [
            { weight: { lower: 10, upper: 13 }, height: null },
            { weight: { lower: 14, upper: 17 }, height: null },
            { weight: { lower: 18, upper: 21 }, height: null },
            { weight: { lower: 22, upper: 25 }, height: null },
            { weight: { lower: 26, upper: 30 }, height: null },
            { weight: { lower: 31, upper: 35 }, height: null },
            { weight: { lower: 36, upper: 41 }, height: null },
            { weight: { lower: 42, upper: 48 }, height: { lower: null, upper: 148} },
            { weight: { lower: 49, upper: 57 }, height: { lower: 149, upper: 157 } },
            { weight: { lower: 58, upper: 66 }, height: { lower: 158, upper: 166 } },
            { weight: { lower: 67, upper: 78 }, height: { lower: 167, upper: 178 } },
            { weight: { lower: 79, upper: 94 }, height: { lower: 179, upper: 194 } },
            { weight: { lower: 95, upper: null }, height: { lower: 195, upper: null} },
        ]
    }

    onButtonClicked() {
        console.log("button clicked");
        console.log("Weight:", this.weight.current.value);
        console.log("Height:", this.height.current.value);

        this.setState({ selectedWeight: parseInt(this.weight.current.value) });
        this.setState({ selectedRow: parseInt(this.height.current.value) });
    }

    render() {
        return (
            <div className="main">
                <div className="din-table">
                    <h2>DIN table</h2>
                    <BodyMassChart intervals={this.getIntervals()}
                        selectedHeight={this.state.selectedHeight}
                        selectedWeight={this.state.selectedWeight}
                        selectedRow={this.state.selectedRow} />

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
                    <div className="textbox-group">
                        <label>Weight</label>
                        <input type="text" ref={ this.weight } />
                    </div>
                    <div className="textbox-group">
                        <label>Height</label>
                        <input type="text" ref={ this.height }/>
                    </div>
                    <button onClick={() => this.onButtonClicked()}>Calculate</button>


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
                        <label>Shoe Size</label>
                        <input type="text" />
                    </div>
                    
                    <label>
                        DIN:
                        <input type="text" disabled/>
                    </label>
                </div>
            </div>
        );
    }
}
