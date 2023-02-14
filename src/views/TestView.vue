<template>
    <div>
        <ReadyScreen v-if="display === 'ready'" :getReady="() => display = 'test'" />
        <QuestionScreen v-if="display === 'test'" :question="questions[currentQuestion]" />
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import questions from '@/data/questions'
import ReadyScreen from '@/components/fullscreen/ReadyScreen.vue'
import QuestionScreen from '@/components/fullscreen/QuestionScreen.vue'

const display = ref<'ready' | 'test' | 'result'>('ready')
const currentQuestion = ref<number>(0)
</script>