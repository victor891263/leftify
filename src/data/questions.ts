interface IQuestion {
    id: number,
    body: string,
    answers: {
        id: number,
        body: string,
        reductions?: number[],
        removals?: number[]
    }[]
}

const questions: IQuestion[] = [
    {
        id: 1,
        body: 'Pick the statement that you agree with the most.',
        answers: [
            {
                id: 1,
                body: 'If, in order to obtain something, someone does not have to give up anything in return, then it is generally a good idea, assuming that nobody is hurt in the process.'
            },
            {
                id: 2,
                body: 'It is fundamentally wrong for anyone to get anything for free; people should have to put in effort for what they want.',
                reductions: [1]
            },
            {
                id: 3,
                body: 'I am undecided.',
                removals: [1]
            }
        ]
    }
]

export default questions