import * as React from 'react';
import { DINProps } from './Interfaces'
import { Helper } from "./Helper"

export class DINChart extends React.Component<DINProps> {

    constructor(props) {
        super(props);
    }

    renderShoeSizeIntervals() {
        return this.props.shoeSizes.intervals.map((interval, index) => {
            return (
                <th>{Helper.intervalToString(interval, null)}</th>
            );
        });
    }

    isSelectedCol(colIndex: number) {
        return colIndex == this.props.selectedShoeSize;
    }

    isSelectedRow(rowIndex: number) {
        return rowIndex == this.props.selectedCode;
    }

    getDINCellStyle(din: number, rowIndex: number, colIndex: number): string {
        /* Rules:
         *  highlight row => isSelectedRow
         *  hightlight col => nop (done in col-group)
         *  target cell => isSelectedRow && isSelectedCol
         *  no Border => din is null
         */
        if (!din) {
            return "no-border";
        }

        let styleClasses = [];

        if (this.isSelectedRow(rowIndex)) {
            styleClasses.push("target-row");
        }

        if (this.isSelectedRow(rowIndex) && this.isSelectedCol(colIndex)) {
            styleClasses.push("target-cell");
        }

        return styleClasses.join(" ");
    }

    renderTableBody() {
        return this.props.DINCodes.map((DINRow, rowIndex) => {
            return (
                <tr>
                    <td className={ this.isSelectedRow(rowIndex) ? "target-row" : "" }>{DINRow.skierCode}</td>
                    {
                        DINRow.values.map((din, colIndex) => {
                            return (
                                <td className={this.getDINCellStyle(din, rowIndex, colIndex)}>{din?.toFixed(2)}</td>
                            );
                        })
                    }
                </tr>
            );
        });
    }

    renderColGroups() {
        return this.props.shoeSizes.intervals.map((interval, index) => {
            return (<col className={ this.props.selectedShoeSize == index ? "target-col" : "" }/>)
        });
    }

    render() {
        return (
            <table>
                <colgroup>
                    <col/>
                    { this.renderColGroups() }
                </colgroup>
                <thead>
                    <tr>
                        <th>Skier Code</th>
                        { this.renderShoeSizeIntervals() }
                    </tr>
                </thead>
                <tbody>
                    {this.renderTableBody()}
                </tbody>
            </table>
        );
    }
}