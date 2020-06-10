
export interface SqaureProps {
    onClick: () => void,
    value: string
}

export interface BoardProps {
    squares: string[],
    onClick: (number) => void,
}

export interface States {
    history: BoardInputs[],
    stepNumber: number,
    xIsNext: boolean,
}

export interface BoardInputs {
    squares: string[],
}

export interface DINState {
    selectedWeight: number,
    selectedHeight: number,
    selectedRow: number,
}

export interface Interval {
    lower: number,
    upper: number,
}

export interface BodyMassProps {
    intervals: BodyMassInterval[],
    selectedHeight: number,
    selectedWeight: number,
    selectedRow: number,
}

export interface BodyMassInterval {
    weight: Interval,
    height: Interval,
}