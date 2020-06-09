import * as React from 'react';
import { BodyMassInterval, Interval } from './Interfaces'

export class BodyMassChart extends React.Component {
    constructor(props) {
        super(props);
    }

    getIntervals(): BodyMassInterval[] {
        return [
            { weight: { lower: 10, upper: 13 }, height: null },
            { weight: { lower: 36, upper: 41 }, height: null },
            { weight: { lower: 42, upper: 48 }, height: { upper: 148 } as Interval },
            { weight: { lower: 49, upper: 57 }, height: { lower: 149, upper: 157} },
        ]
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
        return this.getIntervals().map((interval) => {
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