interface IQuestion {
    id: number,
    body: string,
    choices: {
        id: number,
        body: string,
        reductions?: number[],
        removals?: number[],
        note?: string
    }[]
}

const questions: IQuestion[] = [
    {
        id: 1,
        body: 'Pick the statement that you agree with the most.',
        choices: [
            {
                id: 1,
                body: `If, in order to obtain something, someone doesn't have to give up anything in return, then it is generally a positive thing, assuming that nobody is hurt in the process.`
            },
            {
                id: 2,
                body: 'It is fundamentally wrong for anyone to get anything for free; people should have to put in effort for what they want.',
                reductions: [1]
            },
            {
                id: 3,
                body: `I'm undecided.`,
                removals: [1]
            }
        ]
    },
    {
        id: 2,
        body: 'We should strive to ensure that our society is fully capable of providing everyone the means to sustain themselves, even if no same or any amount of contribution can be expected back from them.',
        choices: [
            {
                id: 1,
                body: 'I agree.'
            },
            {
                id: 2,
                body: 'I disagree.',
                reductions: [1]
            },
            {
                id: 3,
                body: `I'm undecided.`,
                removals: [1]
            }
        ]
    }
]

export default questions