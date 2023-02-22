<template>
    <div id="result">
        <div class="date">Generated on {{ new Date().toLocaleString(undefined, { year: 'numeric', month: 'long', day: 'numeric' }) }}.</div>
        <div class="title">
            <div>Results summarized —</div>
            <h1>{{ resultText?.title }}</h1>
        </div>
        <div class="categories">
            <div v-for="category in filteredResult" :key="category.id">
                <div class="name">{{ category.name }}</div>
                <div class="bar">
                    <div :style="{ width: `${calcScore(category.matches!, category.total!)}%` }"></div>
                </div>
                <div class="labels">
                    <div>{{ `${calcScore(category.matches!, category.total!)}%` }}</div>
                    <router-link :to="`/glossary/${getTermIndex(category.name)}`">Learn more</router-link>
                </div>
            </div>
        </div>
        <div class="result-text">
            <p>{{ resultText?.description }}</p>
            <p>The following percentages are calculated based on if you picked the left-wing option (the answer which a typical leftist would choose) and various categories each question belong to.</p>
            <p>You can retake the test as many times as you want. Remember that your current result will disappear if you choose to retake the test and it won't be possible to recover the result once it is gone.</p>
        </div>
        <button @click="resetTest" class="btn-secondary retake-btn">Retake the test</button>
    </div>
</template>

<script setup lang="ts">
import resultBoilerplate from '@/data/resultBoilerplate'
import questions from '@/data/questions'
import explanations from '@/data/explanations'
import definitions from '@/data/definitions'
import answers from '@/store/answers'
import currentQuestion from '@/store/currentQuestion'
import display from '@/store/isReady'
import { IResult, IExplanation } from '@/types'

const result = new Array(...resultBoilerplate)

// calculate the number of total questions for each category
questions.forEach(q => {
    q.choices.find(c => c.removals)?.removals?.forEach(id => {
        const category = result.find(r => r.id === id)
        if (category) {
            category.total++
            category.matches++
        }
    })
})

// calculate score
answers.value.forEach(a => {
    // if user chose the answer that deviates from the leftist position
    if (a.chosen?.reductions) {
        a.chosen?.reductions.forEach(id => {
            const category = result.find(r => r.id === id)
            if (category) category.matches -= 1
        })
    }
    // if user chose to skip the question
    if (a.chosen?.removals) {
        a.chosen?.removals.forEach(id => {
            const category = result.find(r => r.id === id)
            if (category) {
                category.total -= 1
                category.matches -= 1
            }
        })
    }
})

const resultText = generateText(result, explanations)
const filteredResult = result.filter(r => r.id != 1)

function getTermIndex(termName: string) {
    return definitions.map(d => d.title.toLowerCase()).indexOf(termName.toLowerCase())
}

function calcScore(score: number, total: number) {
    const percentage = (score / total) * 100
    const rounded = Math.round(percentage * 10) / 10
    return rounded
}

function resetTest() {
    answers.value.forEach(a => {
        a.chosen = undefined
    })
    display.value = 'test'
    currentQuestion.value = questions[0]
}

function generateText(result: IResult[], explanations: IExplanation[]) {
    // user is not left-wing at all
    const antiLeftism = result.find(r => r.id === 1)!
    if (antiLeftism.matches === antiLeftism.total) {
        return explanations.find(e => e.id === 9)
    }
    // user is a socdem
    const socdem = result.find(r => r.id === 7)!
    if (socdem.matches === socdem.total) {
        return explanations.find(e => e.id === 1)
    }
    // user is a libertarian marxist
    const anarchism = result.find(r => r.id === 6)!
    const marxism = result.find(r => r.id === 5)!
    if ((anarchism.matches === anarchism.total) && (marxism.matches === marxism.total)) {
        return explanations.find(e => e.id === 2)
    }
    // user is a marxist
    if (marxism.matches === marxism.total) {
        return explanations.find(e => e.id === 3)
    }
    // user is an anarchist
    if (anarchism.matches === anarchism.total) {
        return explanations.find(e => e.id === 4)
    }
    // user is a socialist
    const socialism = result.find(r => r.id === 4)!
    if (socialism.matches === socialism.total) {
        return explanations.find(e => e.id === 5)
    }
    // user is a left-wing nationalist
    const leftism = result.find(r => r.id === 2)!
    const inernationalism = result.find(r => r.id === 3)!
    if ((leftism.matches === leftism.total) && (inernationalism.matches <= (inernationalism.total / 2))) {
        return explanations.find(e => e.id === 6)
    }
    // user is a left-wing internationalist
    if ((leftism.matches === leftism.total) && (inernationalism.matches > (inernationalism.total / 2))) {
        return explanations.find(e => e.id === 7)
    }
    // user is only partially left-wing
    if (leftism.matches < leftism.total) {
        return explanations.find(e => e.id === 8)
    }
}
</script>

<style lang="scss">
#result {
    display: grid;
    grid-row-gap: 2rem;
    max-width: 540px;

    p {
        line-height: 1.65;
    }

    .date {
        color: var(--black-50);
        margin-bottom: 0.5rem;
    }

    .title {
        div {
            font-variation-settings: 'wght' 575;
        }
        
        h1 {
            margin-top: 0.5rem;
        }
    }

    .categories {
        display: grid;
        grid-row-gap: 2.5rem;
        margin-top: 0.75rem;
        margin-bottom: 0.5rem;

        > div {
            display: grid;
            grid-row-gap: 0.75rem;

            .labels {
                align-items: flex-end;
                display: flex;
                justify-content: space-between;
            }

            .name {
                font-variation-settings: 'wght' 550;
            }

            .bar {
                background-color: var(--black-20);
                border-radius: 10rem;
                height: 0.75rem;
                width: 100%;

                div {
                    background-color: var(--primary-color);
                    border-radius: 10rem;
                    height: 100%;
                }
            }
        }
    }

    .result-text {
        display: grid;
        grid-row-gap: 1.375rem;
    }

    .retake-btn {
        font-size: 0.9375rem;
        width: fit-content;
    }
}
</style>