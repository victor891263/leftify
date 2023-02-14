interface IAnswer {
    questionId: number,
    chosen: undefined | {
        id: number,
        body: string,
        reductions?: number[],
        removals?: number[],
        note?: string
    }
}

import { ref } from "vue"

const answers = ref<IAnswer[]>([
    {
        questionId: 1,
        chosen: undefined
    },
    {
        questionId: 2,
        chosen: undefined
    }
])

export default answers