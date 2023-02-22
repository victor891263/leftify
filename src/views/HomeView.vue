<template>
    <div id="home">
        <h1>Find out if you're left-wing.</h1>
        <p>A comprehensive questionnaire that determines if your views and values are similar to what is considered left-wing.</p>
        <div class="btns">
            <span @click="refreshTest"><router-link to="/test" class="btn-primary">Take the test</router-link></span>
            <router-link to="/about" class="btn-secondary">Learn more</router-link>
        </div>
        <div class="sub">Not familiar with the terms? <router-link to="/glossary">View glossary</router-link></div>
    </div>
</template>

<script setup lang="ts">
import questions from '@/data/questions'
import answers from '@/store/answers'
import display from '@/store/isReady'
import currentQuestion from '@/store/currentQuestion'

function refreshTest() {
    answers.value.forEach(a => {
        a.chosen = undefined
    })
    display.value = 'ready'
    currentQuestion.value = questions[0]
}
</script>

<style lang="scss">
#home {
    text-align: center;

    h1 {
        font-size: 2.125rem;
        line-height: 1.2;
        margin-left: auto;
        margin-right: auto;
    }

    p {
        margin-left: auto;
        margin-right: auto;
        margin-top: 1.375rem;
        max-width: 29em;
    }

    .btns {
        display: flex;
        gap: 0.4375rem;
        justify-content: center;
        margin-top: 1.5rem;

        a {
            font-size: 0.875rem;
        }
    }

    .sub {
        font-size: 0.875rem;
        margin-top: 1.875rem;
    }
}

@media (min-width: 1536px) {
    #home {
        h1 {
            font-size: 3rem;
            letter-spacing: -0.025em;
        }

        p {
            font-size: 1.125rem;
        }

        .btns a,
        .sub {
            font-size: 1rem;
        }
    }
}
</style>