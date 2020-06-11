import * as React from "react";
import { BodyMassChart } from "./BodyMassChart";
import { DINChart } from "./DINChart";
import { BodyMassInterval, DINState, Interval, ShoeSizeInterval, DINCodes } from "./Interfaces";


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
            selectedCode: -1,
            selectedShoeSize: -1,
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

    getShoeSizes(): ShoeSizeInterval {
        let intervals = [
            { lower: null, upper: 230 },
            { lower: 231, upper: 250 },
            { lower: 251, upper: 270 },
            { lower: 271, upper: 290 },
            { lower: 291, upper: 310 },
            { lower: 311, upper: 330 },
            { lower: 331, upper: 350 },
            { lower: 351, upper: null }
        ];
        return { intervals };
    }

    getDINLookup(): DINCodes[] {

        let lookup: DINCodes[] = [
            { code: "A", values: [0.75, 0.75] },
            { code: "B", values: [1.0, 0.75, 0.75, 0.75] },
            { code: "C", values: [1.5, 1.25, 1.25, 1.0] },
            { code: "D", values: [2.0, 1.75, 1.5, 1.5, 1.25] },
            { code: "E", values: [2.5, 2.25, 2.0, 1.75, 1.5, 1.5] },
            { code: "F", values: [3.0, 2.75, 2.5, 2.25, 2.0, 1.75, 1.75] },
            { code: "G", values: [null, 3.5, 3.0, 2.75, 2.5, 2.25, 2.0] },
            { code: "H", values: [null, null, 3.5, 3.0, 3.0, 2.75, 2.5] },
            { code: "I", values: [null, null, 4.5, 4.0, 3.5, 3.5, 3.0] },
            { code: "J", values: [null, null, 5.5, 5.0, 4.5, 4.0, 3.5, 3.0] },
            { code: "K", values: [null, null, 6.5, 6.0, 5.5, 5.0, 4.5, 4.0] },
            { code: "L", values: [null, null, 7.5, 7.0, 6.5, 6.0, 5.5, 5.0] },
            { code: "M", values: [null, null, null, 8.5, 8.0, 7.0, 6.5, 6.0] },
            { code: "N", values: [null, null, null, 10.0, 9.5, 8.5, 8.0, 7.5] },
            { code: "O", values: [null, null, null, 11.5, 11.0, 10.0, 9.5, 9.0] },
            { code: "P", values: [null, null, null, null, null, 12.00, 11.0, 10.5] },
        ]
        return lookup;
    }

    withinInterval(n: number, i: Interval): boolean {
        // cannot check for true with & because there are cases when upper/lower is null
        if (!i || n < i.lower || n > i.upper) return false;
        return true;
    }

    getWeightIndex(w) {
        var data = this.getIntervals();
        for (let i = 0; i < data.length; i++) {
            if (this.withinInterval(w, data[i].weight)) {
                return i;
            }
        }
        console.error("No match for weight: ", w);
        return -1;
    }
    getHeightIndex(w) {
        var data = this.getIntervals();
        for (let i = 0; i < data.length; i++) {
            if (this.withinInterval(w, data[i].height)) {
                return i;
            }
        }
        console.error("No match for height: ", w);
        return -1;
    }

    onButtonClicked() {
        console.log("button clicked");
        console.log("Weight:", this.weight.current.value);
        console.log("Height:", this.height.current.value);

        var sw = this.getWeightIndex(parseInt(this.weight.current.value));
        var sh = this.getHeightIndex(parseInt(this.height.current.value));

        this.setState({ selectedWeight: sw});
        this.setState({ selectedHeight: sh});
    }

    render() {
        return (
            <div className="main">
                <div className="din-table">
                    <h2>DIN table</h2>
                    <div className="table-container">
                        <BodyMassChart intervals={this.getIntervals()}
                            selectedHeight={this.state.selectedHeight}
                            selectedWeight={this.state.selectedWeight}
                            selectedRow={this.state.selectedRow} />
                    </div>
                    <div className="table-container" style={{ position: "relative", left: "-1px"}}>
                        <DINChart
                            selectedCode={this.state.selectedRow}
                            selectedShoeSize={this.state.selectedShoeSize}
                            DINCodes={this.getDINLookup()}
                            shoeSizes={this.getShoeSizes()} />
                    </div>
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
