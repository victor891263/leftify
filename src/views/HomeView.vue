<template>
    <div id="home">
        <h1>Are you a leftist? If so, what type?</h1>
        <div class="text">
            <p>Take this test to find out how similar your views on society and your values are to what is commonly considered left-wing.</p>
            <p></p>
        </div>
        <div class="btns">
            <router-link to="/test" class="btn-primary">Begin test</router-link>
            <router-link to="/about" class="btn-secondary">Learn more</router-link>
        </div>
        <div class="sub">Not familiar with political terms? <a href="#">View glossary</a></div>
    </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss">
#home {
    text-align: center;

    h1 {
        line-height: 1.3;
        margin-left: auto;
        margin-right: auto;
        max-width: 9em;
    }

    .text {
        margin-top: 1.25rem;
        max-width: 30em;
    }

    .btns {
        display: flex;
        gap: 0.5rem;
        justify-content: center;
        margin-top: 1.5rem;

        a {
            font-size: 0.9375rem;
            text-decoration: none;
        }
    }

    .sub {
        color: darkgray;
        font-size: 0.875rem;
        margin-top: 1.75rem;

        a {
            color: darkgray;
        }
    }
}

@media (min-width: 1536px) {
    #home {
        h1 {
            font-size: 2.25rem;
        }

        .text {
            font-size: 1.125rem;
            margin-top: 1.375rem;
        }

        .btns {
            margin-top: 1.625rem;

            a {
                font-size: 1rem;
            }
        }

        .sub {
            font-size: 1rem;
            margin-top: 1.875rem;
        }
    }
}
</style>