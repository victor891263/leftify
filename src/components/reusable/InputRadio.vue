<template>
    <div>
        <div v-for="answer in answers" :key="answer.id" >
            <input type="radio" :name="String(questionId)" :value="answer.id" @input="() => selectAnswer(answer.id)" />
            <label>
                <div></div>
                <p>{{ answer.body }}</p>
            </label>
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps<{
    answers: {
        id: number,
        body: string,
        reductions?: number[],
        removals?: number[]
    }[],
    questionId: number,
    selectAnswer: (id: number) => void
}>()
</script>