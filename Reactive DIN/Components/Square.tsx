declare var require: any
var React = require('react');

export const Square = (props) => {
    return (
        <button className="square" onClick={() => props.onClick()}>
            {props.value}
        </button>
    )
}