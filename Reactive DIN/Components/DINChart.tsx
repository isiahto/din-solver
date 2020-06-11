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

    renderTableBody() {
        return this.props.DINCodes.map((DINRow, index) => {
            return (
                <tr>
                    <td>{DINRow.code}</td>
                    {
                        DINRow.values.map((din, index) => {
                            return (
                                <td>{din?.toFixed(2)}</td>
                            );
                        })
                    }
                </tr>
            );
        });
    }

    render() {
        return (
            <table>
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