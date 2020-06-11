import * as React from 'react';
import { BodyMassProps, BodyMassInterval, Interval } from './Interfaces'
import { Helper } from "./Helper"

export class BodyMassChart extends React.Component<BodyMassProps> {
    constructor(props) {
        super(props);
    }

    renderTableBody() {
        return this.props.intervals.map((interval, index) => {
            const { weight, height } = interval;
            return (
                <tr className={ this.props.selectedRow == index ? "selected-row" : "" }>
                    <td className={this.props.selectedWeight == index ? "selected-cell" : ""}>{Helper.intervalToString(weight, "kg")}</td>
                    <td className={this.props.selectedHeight == index ? "selected-cell" : ""}>{Helper.intervalToString(height, "cm")}</td>
                </tr>
            );
        });
    }

    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>Weight (kg)</th>
                        <th>Height (cm)</th>
                    </tr>
                </thead>
                <tbody>
                    { this.renderTableBody() }
                </tbody>
            </table>
        );
    }
}