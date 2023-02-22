import { ref } from "vue"
import { IAnswer } from "@/types"
import questions from "@/data/questions"

const array: IAnswer[] = []
for (let i = 1; i <= questions.length; i++) {
    array.push({
        questionId: i,
        chosen: undefined
    })
}

const answers = ref<IAnswer[]>(array)

export default answers