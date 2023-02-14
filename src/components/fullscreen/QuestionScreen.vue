<template>
    <div class="question">
        <div class="current-question-label">{{ `${currentQuestionIndex + 1}/${questions.length}` }}</div>
        <p>{{ currentQuestion.body }}</p>
        <AnswerComponent />
        <div class="navigation">
            <button v-show="currentQuestionIndex > 0" @click="() => changeQuestion(-1)">
                <ArrowIcon/>
                <div>Previous</div>
            </button>
            <button v-show="currentQuestionIndex < (questions.length - 1)" @click="() => changeQuestion(1)">
                <div>Next</div>
                <ArrowIcon/>
            </button>
        </div>
    </div>
</template>


<script setup lang="ts">
import { computed } from 'vue'
import questions from '@/data/questions'
import currentQuestion from '@/store/currentQuestion'
import AnswerComponent from '@/components/reusable/AnswerComponent.vue'
import ArrowIcon from '@/components/icons/ArrowIcon.vue'

const currentQuestionIndex = computed(() => {
    return questions.map(q => q.id).indexOf(currentQuestion.value.id)
})

function changeQuestion(count: number) {
    currentQuestion.value = questions[currentQuestionIndex.value + count]
}
</script>


<style lang="scss">
.question {
    display: grid;
    grid-row-gap: 1.5rem;
    max-width: 540px;

    .current-question-label {
        color: darkgray;
        font-weight: 600;
    }

    > p {
        font-weight: 600;
    }

    .navigation {
        display: grid;
        grid-auto-flow: column;
        margin-top: 2rem;

        button {
            align-items: center;
            display: flex;
            gap: 0.625rem;

            svg {
                fill: var(--primary-color);
                height: 0.75rem;
            }

            div {
                color: var(--primary-color);
            }
        }

        button:first-of-type {
            justify-self: left;
        }

        button:first-of-type svg {
            transform: scaleX(-1);
        }

        button:last-of-type {
            justify-self: right;
        }
    }
}
</style>

<!--v-show="currentQuestion > 0"-->