<template>
    <div id="home">
        <h1>Are you <span>left-wing</span> politically?</h1>
        <p>A comprehensive questionnaire that determines if your views and values are similar to what's called left-wing.</p>
        <div class="buttons">
            <span @click="refreshTest"><router-link to="/test" class="btn-primary">Take the test</router-link></span>
            <router-link to="/about" class="btn-secondary">Learn more</router-link>
        </div>
        <div class="note">Not familiar with the terms? <router-link to="/glossary">View glossary</router-link></div>
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
    display: grid;
    grid-row-gap: 1rem;
    justify-items: center;
    text-align: center;

    h1 {
        font-size: 2.25rem;
        max-width: 10em;

        span {
            background: -webkit-linear-gradient(315deg,var(--blue-60),var(--violet-60));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;

            font-variation-settings: 'wght' 725;
            letter-spacing: -0.025em;
        }
    }

    p {
        font-size: 1.125rem;
        max-width: 29em;
    }

    .buttons {
        display: grid;
        grid-row-gap: 0.625rem;
        margin-top: 0.5rem;
        width: 100%;
    }

    .note {
        font-size: 0.9375rem;
        margin-top: 0.875rem;
    }
}

@media (min-width: 720px) {
    #home {
        h1 {
            font-size: 3.5rem;
            margin-bottom: 0.25rem;
        }

        .buttons {
            grid-column-gap: 0.5rem;
            grid-template-columns: repeat(2, max-content);
            justify-content: center;
        }
    }
}
</style>