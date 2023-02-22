<template>
    <div>
        <ReadyScreen v-if="display === 'ready'" :getReady="() => display = 'test'" />
        <QuestionScreen v-if="display === 'test'" :getResult="() => display = 'result'" />
        <ResultScreen v-if="display === 'result'" />
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ReadyScreen from '@/components/fullscreen/ReadyScreen.vue'
import QuestionScreen from '@/components/fullscreen/QuestionScreen.vue'
import ResultScreen from '@/components/fullscreen/ResultScreen.vue'
import display from '@/store/isReady'
</script>