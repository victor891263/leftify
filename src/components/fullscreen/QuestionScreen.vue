<template>
    <div>
        <div>1/32</div>
        <p>{{ question.body }}</p>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps<{
    question: {
        id: number,
        body: string,
        answers: {
            id: number,
            body: string,
            reductions?: number[],
            removals?: number[]
        }[]
    }
}>()
</script>