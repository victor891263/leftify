<template>
    <div id="ready">
        <h1>You are about to take the test.</h1>
        <div class="body">
            <div>
                <p>The test consists of two types of questions:</p>
                <ol>
                    <li>A statement will be given and you'll be asked to agree or disagree with it, or</li>
                    <li>You'll be provided with multiple statements and you'll be asked to pick the one you agree the most with.</li>
                </ol>
            </div>
            <p>Once you've provided answers to all questions, you can finalize and get results. You can go back to any question and change your answer as many times as you want before doing this.</p>
            <p>There are a total of 32 questions. The test has no time limit.</p>
            <div class="warning">
                <div class="title">
                    <WarningIcon :bold="true" />
                    <div>Keep in mind.</div>
                </div>
                <p>Refreshing the page at any time during the test or when the results are being shown will cause the answers to be reset and the results to dissappear.</p>
            </div>
        </div>
        <div class="btns">
            <button class="btn-primary" @click="getReady">Begin test</button>
            <button class="btn-secondary">Go back</button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import WarningIcon from '@/components/icons/WarningIcon.vue'

const props = defineProps<{
    getReady: () => void
}>()
</script>

<style lang="scss">
#ready {
    max-width: 540px;

    h1 {
        margin-bottom: 2.5rem;
        max-width: 8em;
    }

    .body {
        display: grid;
        grid-row-gap: 1.25rem;

        ol {
        display: grid;
        grid-row-gap: 1.125rem;
        margin-left: 1rem;
        margin-top: 1.125rem;
        }

        li {
            line-height: 1.6;
        }

        li::marker {
            font-weight: bold;
        }

        .warning {
            background-color: whitesmoke;
            display: grid;
            grid-row-gap: 1rem;
            margin-top: 0.75rem;
            padding: 1.25rem 1.5rem;

            .title {
                align-items: center;
                display: flex;
                gap: 0.5rem;

                svg {
                    display: flex;
                    fill: gray;
                    height: 0.875rem;
                }

                div {
                    color: gray;
                    font-weight: bold;
                }
            }

            p {
                color: gray;
            }
        }
    }

    .btns {
        display: flex;
        gap: 0.5rem;
        margin-top: 2.625rem;

        button {
            font-size: 0.9375rem;
        }
    }
}
</style>