import * as React from 'react';
import { BodyMassProps, BodyMassInterval, Interval } from './Interfaces'

export class BodyMassChart extends React.Component<BodyMassProps> {
    constructor(props) {
        super(props);
    }

    intervalToString(i: Interval, unit: string): string {
        if (i == null) {
            return "";
        }

        if (i.lower && i.upper) {
            return `${i.lower} - ${i.upper} ${unit}`;
        }
        else if (i.upper) {
            return `<= ${i.upper} ${unit}`;
        }
        else if (i.lower) {
            return `>= ${i.lower} ${unit}`;
        } else {
            console.error("Empty interval, stacktrace:");
            console.trace();
            return "ERROR";
        }
    }

    renderTableBody() {
        return this.props.intervals.map((interval) => {
            const { height, weight } = interval;
            return (
                <tr>
                    <td>{this.intervalToString(weight, "kg")}</td>
                    <td>{this.intervalToString(height, "cm")}</td>
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