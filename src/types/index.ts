interface IChoice {
    id: number,
    body: string,
    reductions?: number[],
    removals?: number[],
    note?: string
}

interface IQuestion {
    id: number,
    body: string,
    choices: IChoice[],
    note?: string
}

interface IAnswer {
    questionId: number,
    chosen: undefined | IChoice
}

interface IResult {
    id: number,
    name: string,
    total: number,
    matches: number
}

interface IExplanation {
    id: number,
    title: string,
    description: string
}

export { IChoice, IQuestion, IAnswer, IResult, IExplanation }