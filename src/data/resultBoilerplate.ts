import { IResult } from '@/types'

const resultBoilerplateUnscored = [
    {
        id: 1,
        name: 'Anti-leftism'
    },
    {
        id: 2,
        name: 'Social justice'
    },
    {
        id: 3,
        name: 'Internationalism'
    },
    {
        id: 4,
        name: 'Anti-capitalism'
    },
    {
        id: 5,
        name: 'Scientific socialism'
    },
    {
        id: 6,
        name: 'Anti-authoritarianism'
    },
    {
        id: 7,
        name: 'Reformism'
    }
]

const resultBoilerplate = addScores(resultBoilerplateUnscored)

function addScores(result: any): IResult[] {
    result.forEach((r: { total: number; matches: number }) => {
        r.total = 0
        r.matches = 0
    })
    return result
}

export default resultBoilerplate