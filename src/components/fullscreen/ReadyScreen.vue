<template>
    <div id="ready">
        <h1>About this test</h1>
        <p>The test consists of two types of questions:</p>
        <ul>
            <li>
                <p>A statement will be given to you and you'll be asked to agree or disagree with it; or</p>
            </li>
            <li>
                <p>You'll be provided with multiple statements and you'll be asked to pick the one you agree the most with.</p>
            </li>
        </ul>
        <p>Once you've provided answers to all questions, you can finalize and get results. You can go back to any question and change your answer as many times as you want before doing this.</p>
        <p>There are a total of <b>32</b> questions. The test has <b>no time limit</b>.</p>
        <p class="warning"><b>Remember:</b> refreshing the page at any time during the test or when the results are being shown will cause the answers to be reset and the results to dissappear.</p>
        <button class="btn-primary" @click="getReady">Begin</button>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps<{
    getReady: () => void
}>()
</script>

<style lang="scss">
#ready {
    display: grid;
    grid-row-gap: 1.2rem;
    max-width: 540px;

    h1 {
        font-size: 1.875rem;
        margin-bottom: 0.8rem;
    }

    ul {
        display: grid;
        grid-row-gap: 1.2rem;
        margin-left: 1rem;
    }

    .warning {
        background-color: var(--black-10);
        border-radius: 0.75rem;
        color: var(--black-50);
        margin-top: 0.75rem;
        padding: 1.25rem 1.5rem;

        b {
            color: var(--black-50);
        }
    }

    button {
        font-size: 0.9375rem;
        margin-top: 1.25rem;
    }
}

@media (min-width: 720px) {
    button {
        width: fit-content;
    }
}
</style>