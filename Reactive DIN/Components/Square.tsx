import * as React from 'react';
//export class Square extends React.Component {
//    render() {
//        return (
//            <button className="square">
//                {this.props.value}
//            </button>
//        );
//    }
//}

//export const Square = (value: any) => (
//    <button className="square">
//        {value}
//    </button>
//)

export const Square: React.FC = (value: number) => {
    return <button> {value} </button>
}