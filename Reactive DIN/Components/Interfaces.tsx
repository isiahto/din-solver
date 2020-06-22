
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
    selectedRow: number,
    selectedWeight: number,
    selectedHeight: number,
    selectedCode: number,
    selectedShoeSize: number,
    adjustedShoeSize: number,
    selectedSkierLevel: number,
    showTargetDIN: boolean,
    targetDIN: number,
    showWalkThrough: boolean,
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

export interface DINProps {
    selectedCode: number,
    selectedShoeSize: number,
    adjustedShoeSize: number,
    DINCodes: DINCodes[],
    shoeSizes: ShoeSizeInterval,
    showTargetDIN: boolean,
}

export interface ShoeSizeInterval {
    intervals: Interval[]
}

export interface DINCodes {
    skierCode: string,
    values: number[]
}
