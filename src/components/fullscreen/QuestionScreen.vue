<template>
    <div class="question">
        <div class="current-question-label">{{ `${currentQuestionIndex + 1}/${questions.length}` }}</div>
        <p class="term-expander" v-html="currentQuestion.body"></p>
        <p v-if="currentQuestion.note" class="note">{{ currentQuestion.note }}</p>
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
            <button v-if="currentQuestionIndex === (questions.length - 1)" :disabled="!areAllQuestionsAnswered" @click="() => getResult()">
                <div>Finalize</div>
                <ArrowIcon/>
            </button>
        </div>
    </div>
</template>


<script setup lang="ts">
import { computed, defineProps, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import questions from '@/data/questions'
import definitions from '@/data/definitions'
import answers from '@/store/answers'
import currentQuestion from '@/store/currentQuestion'
import AnswerComponent from '@/components/reusable/AnswerComponent.vue'
import ArrowIcon from '@/components/icons/ArrowIcon.vue'

const router = useRouter()
const props = defineProps<{
    getResult: () => void
}>()

const currentQuestionIndex = computed(() => {
    return questions.map(q => q.id).indexOf(currentQuestion.value.id)
})

const areAllQuestionsAnswered = computed(() => {
    return answers.value.find(a => a.chosen === undefined) ? false : true
})

function changeQuestion(count: number) {
    currentQuestion.value = questions[currentQuestionIndex.value + count]
}

onMounted(() => {
    document.querySelectorAll('.term-expander').forEach(b => {
        b.addEventListener('click', (e: any) => {
            if (e.target.hasAttribute('data-name')) {
                const termName: string = e.target.attributes['data-name'].value
                const termIndex = definitions.map(d => d.title.toLowerCase()).indexOf(termName.toLowerCase())
                router.push(`/glossary/${termIndex}`)
            }
        })
    })
})
</script>




<style lang="scss">
.question {
    display: grid;
    grid-row-gap: 1.5rem;
    max-width: 720px;

    .current-question-label {
        color: var(--black-40);
        font-variation-settings: 'wght' 550;
    }

    > p {
        font-variation-settings: 'wght' 550;
        white-space: pre-wrap;

        button {
            color: var(--primary-color);
        }
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

        button[disabled] {
            cursor: default;
            opacity: 0.5;
        }
    }
}
</style>