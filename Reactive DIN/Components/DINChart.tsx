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
        /* Rules: (in order)
         *  No Border => din is null
         *  target cell => isSelectedRow && isSelectedCol
         *  highlight row => isSelectedRow
         *  hightlight col => nop (done in col-group)
         */
        if (!din) {
            return "null-din";
        }

        if (this.props.showTargetDIN && this.isSelectedRow(rowIndex) && this.isSelectedCol(colIndex)) {
            return "target-din";
        }

        if (this.isSelectedRow(rowIndex)) {
            return "target-row";
        }
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