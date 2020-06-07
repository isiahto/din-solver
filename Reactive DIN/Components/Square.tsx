import * as React from 'react';
import { SqaureProps } from './Interfaces';

export const Square = (props: SqaureProps) => {
    return (
        <button className="square" onClick={() => props.onClick()}>
            {props.value}
        </button>
    )
}