<template>
    <div class="answers">
        <button
        v-for="choice in currentQuestion.choices"
        :key="choice.id"
        class="answer"
        @click="() => selectAnswer(choice)"
        :data-checked="answers.find(a => a.questionId === currentQuestion.id)!.chosen === choice"
        >
            <div class="circle">
                <div></div>
            </div>
            <div>
                <p>{{ choice.body }}</p>
                <p v-if="choice.note">{{ choice.note }}</p>
            </div>
        </button>
    </div>
</template>


<script setup lang="ts">
import currentQuestion from '@/store/currentQuestion'
import answers from '@/store/answers'

interface IOption {
    id: number,
    body: string,
    reductions?: number[],
    removals?: number[],
    note?: string
}

function selectAnswer(option: IOption) {
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
        border: 1px solid black;
        border-radius: 50%;
        height: 1.5rem;
        margin-top: 0.0625rem;
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
}

.answer:hover .circle {
    border-color: blueviolet;
}

.answer[data-checked=true] .circle {
    border-color: blueviolet;

    div {
        background-color: blueviolet;
    }
}
</style>