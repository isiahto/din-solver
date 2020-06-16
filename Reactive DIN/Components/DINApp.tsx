import * as React from "react";
import { BodyMassChart } from "./BodyMassChart";
import { DINChart } from "./DINChart";
import { BodyMassInterval, DINState, Interval, ShoeSizeInterval, DINCodes } from "./Interfaces";


export class DINApp extends React.Component<{}, DINState> {
    // placeholder
    private weight: React.RefObject<HTMLInputElement>;
    private height: React.RefObject<HTMLInputElement>;
    private age: React.RefObject<HTMLInputElement>;
    private shoesize: React.RefObject<HTMLInputElement>;

    constructor() {
        super(null);
        this.weight = React.createRef();
        this.height = React.createRef();
        this.age = React.createRef();
        this.shoesize = React.createRef();


        //  init states
        this.state = {
            selectedRow: -1,
            selectedWeight: -1,
            selectedHeight: -1,
            selectedCode: -1,
            selectedShoeSize: -1,
            selectedSkierLevel: -1,
            showTargetDIN: false,
            targetDIN: 0
        } as DINState;

        this.onRadioButtonChanged = this.onRadioButtonChanged.bind(this);
    }

    /* data generating functions */
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
            { skierCode: "A", values: [0.75, 0.75, null, null, null, null, null, null] },
            { skierCode: "B", values: [1.0, 0.75, 0.75, 0.75, null, null, null, null] },
            { skierCode: "C", values: [1.5, 1.25, 1.25, 1.0, null, null, null, null] },
            { skierCode: "D", values: [2.0, 1.75, 1.5, 1.5, 1.25, null, null, null] },
            { skierCode: "E", values: [2.5, 2.25, 2.0, 1.75, 1.5, 1.5, null, null] },
            { skierCode: "F", values: [3.0, 2.75, 2.5, 2.25, 2.0, 1.75, 1.75, null] },
            { skierCode: "G", values: [null, 3.5, 3.0, 2.75, 2.5, 2.25, 2.0, null] },
            { skierCode: "H", values: [null, null, 3.5, 3.0, 3.0, 2.75, 2.5, null] },
            { skierCode: "I", values: [null, null, 4.5, 4.0, 3.5, 3.5, 3.0, null] },
            { skierCode: "J", values: [null, null, 5.5, 5.0, 4.5, 4.0, 3.5, 3.0] },
            { skierCode: "K", values: [null, null, 6.5, 6.0, 5.5, 5.0, 4.5, 4.0] },
            { skierCode: "L", values: [null, null, 7.5, 7.0, 6.5, 6.0, 5.5, 5.0] },
            { skierCode: "M", values: [null, null, null, 8.5, 8.0, 7.0, 6.5, 6.0] },
            { skierCode: "N", values: [null, null, null, 10.0, 9.5, 8.5, 8.0, 7.5] },
            { skierCode: "O", values: [null, null, null, 11.5, 11.0, 10.0, 9.5, 9.0] },
            { skierCode: "P", values: [null, null, null, null, null, 12.00, 11.0, 10.5] },
        ]
        return lookup;
    }
    /* data generating functions */

    withinInterval(n: number, i: Interval): boolean {

        return (
            (i != null) && (
            (n >= i.lower && n <= i.upper)    || // ordinary case
            (i.lower == null && n <= i.upper) || // min bound
            (i.upper == null && n >= i.lower))    // max bound
        ); 
        
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
    getShoeSizeIndex(size) {
        var data = this.getShoeSizes().intervals;
        for (let i = 0; i < data.length; i++) {
            if (this.withinInterval(size, data[i])) {
                return i;
            }
        }
        console.error("No match for shoe size: ", size);
        return -1;
    }

    // step 1
    onButtonClicked() {
        var sw = this.getWeightIndex(parseInt(this.weight.current.value));
        var sh = this.getHeightIndex(parseInt(this.height.current.value));
        this.setState({ selectedWeight: sw, selectedHeight: sh});
    }

    // step 1b
    chooseRowWithSmallerValue() {
        let row = Math.min(this.state.selectedHeight, this.state.selectedWeight);

        // un-highlight
        this.setState({
            selectedWeight: row,
            selectedHeight: row,
            selectedRow: row
        });
    }

    // step 2
    adjustSkierCode() {
        let adjustment = this.state.selectedSkierLevel;
        let skier_age = parseInt(this.age.current.value);
        adjustment += this.getAdjustmentByAge(skier_age);


        this.setState({
            selectedHeight: -1,
            selectedWeight: -1,
            selectedRow: this.state.selectedRow + adjustment
        });
    }

    getAdjustmentByAge(age: number): number {
        if (age < 10 || age >= 50) {
            return -1;
        }
        return 0;
    }

    // step 3
    hightlightShoeSizeColumn() {
        let shoesizeColIdx = this.getShoeSizeIndex(parseInt(this.shoesize.current.value));

        this.setState({
            selectedShoeSize: shoesizeColIdx // offset skier code column
        });
    }

    // step 4
    showIntersectedCell() {
        this.setState({
            showTargetDIN: true
        });
    }
    // 4b?

    // step 5
    // pure logic, no animation
    displayResult() {
        const weightIndex = this.getWeightIndex(parseInt(this.weight.current.value));
        const heightIndex = this.getHeightIndex(parseInt(this.height.current.value));
        const lowestIndex = Math.min(weightIndex, heightIndex);

        const skier_age = parseInt(this.age.current.value);
        const adjustment = this.getAdjustmentByAge(skier_age) + this.state.selectedSkierLevel;

        const skierCodeIndex = lowestIndex + adjustment;
        const shoesizeColIdx = this.getShoeSizeIndex(parseInt(this.shoesize.current.value));

        let dinTable = this.getDINLookup();
        const row = dinTable.find((d, i) => i == skierCodeIndex);

        if (row) {
            this.setState({
                targetDIN: row.values[shoesizeColIdx]
            });
        } else {
            console.error("error row is null/undefined");
        }
    }

    onRadioButtonChanged(event) {
        this.setState({
            selectedSkierLevel: parseInt(event.target.value)
        })
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
                            showTargetDIN={this.state.showTargetDIN}
                            DINCodes={this.getDINLookup()}
                            shoeSizes={this.getShoeSizes()} />
                    </div>
                </div>
                <div className="din-inputs">
                    <h2>DIN inputs</h2>
                    <div className="textbox-group">
                        <label>Weight</label>
                        <input type="text" ref={this.weight} />
                    </div>
                    <div className="textbox-group">
                        <label>Height</label>
                        <input type="text" ref={this.height}/>
                    </div>
                    <div className="radio-group">
                        <p>Skier Level</p>
                        <label>
                            <input type="radio" name="skier_level" value="0" checked={this.state.selectedSkierLevel == 0} onChange={this.onRadioButtonChanged} />
                            Level 1
                        </label>
                        <label>
                            <input type="radio" name="skier_level" value="1" checked={this.state.selectedSkierLevel == 1} onChange={this.onRadioButtonChanged} />
                            Level 2
                        </label>
                        <label>
                            <input type="radio" name="skier_level" value="2" checked={this.state.selectedSkierLevel == 2} onChange={this.onRadioButtonChanged} />
                            Level 3
                        </label>
                    </div>
                    <div className="textbox-group">
                        <label>Age</label>
                        <input type="number" ref={this.age}/>
                    </div>
                    <div className="textbox-group">
                        <label>Shoe Size</label>
                        <input type="text" ref={this.shoesize}/>
                    </div>

                    <br/>
                    <button onClick={() => this.onButtonClicked()}>1a: Match Height/Weight</button>
                    <br />
                    <button onClick={() => this.chooseRowWithSmallerValue()}>1b: Find the row with smaller value</button>
                    <br />
                    <button onClick={() => this.adjustSkierCode()}>2: Adjust skier code by age and skill</button>
                    <br />
                    <button onClick={() => this.hightlightShoeSizeColumn()}>3: Hightlight shoesize Column</button>
                    <br />
                    <button onClick={() => this.showIntersectedCell()}>4: Show Intersection </button>
                    <br />
                    <button onClick={() => this.displayResult()}>5: Display Result</button>
                    <label>
                        DIN:
                        <input type="text" disabled value={this.state.targetDIN}/>
                    </label>
                </div>
            </div>
        );
    }
}
