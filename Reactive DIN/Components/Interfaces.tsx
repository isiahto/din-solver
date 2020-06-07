
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
    squares: string[]
}