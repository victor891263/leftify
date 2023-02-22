<template>
    <div class="answers">
        <div
        v-for="choice in currentQuestion.choices"
        :key="choice.id"
        class="answer"
        :data-checked="answers.find(a => a.questionId === currentQuestion.id)!.chosen === choice"
        >
            <button class="circle" @click="() => selectAnswer(choice)">
                <div></div>
            </button>
            <div>
                <p class="term-expander" v-html="choice.body"></p>
                <p v-if="choice.note" v-html="choice.note"></p>
            </div>
        </div>
    </div>
</template>


<script setup lang="ts">
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import definitions from '@/data/definitions'
import currentQuestion from '@/store/currentQuestion'
import answers from '@/store/answers'
import { IChoice } from '@/types'

const router = useRouter()

function selectAnswer(option: IChoice) {
    const ans = answers.value.find(a => a.questionId === currentQuestion.value.id)
    if (ans) ans.chosen = option
}
</script>


<style lang="scss">
.answers {
    display: grid;
    grid-row-gap: 1.25rem;
}

.answer {
    display: grid;
    grid-column-gap: 1rem;
    grid-template-columns: max-content auto;
    text-align: left;
    width: fit-content;

    .circle {
        border: 1px solid var(--black-90);
        border-radius: 50%;
        height: 1.5rem;
        width: 1.5rem;

        align-items: center;
        display: flex;
        justify-content: center;

        div {
            border-radius: 50%;
            height: 50%;
            width: 50%;
        }
    }

    p button {
        color: var(--primary-color);
    }
}

.answer[data-checked=true] .circle {
    border-color: var(--primary-color);

    div {
        background-color: var(--primary-color);
    }
}
</style>