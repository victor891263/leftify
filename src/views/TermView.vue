<template>
    <div class="term">
        <router-link to="/glossary">
            <ArrowIcon/>
            <div>Back to index</div>
        </router-link>
        <h1>{{ term.title }}</h1>
        <p>{{ term.body }}</p>
    </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import definitions from '@/data/definitions'
import ArrowIcon from '@/components/icons/ArrowIcon.vue'

const route = useRoute()
const termIndex = route.params.id as string
const term = definitions[Number(termIndex)]
</script>

<style lang="scss">
.term {
    max-width: 720px;

    a {
        align-items: center;
        display: flex;
        gap: 0.625rem;
        margin-bottom: 2rem;

        div {
            color: var(--primary-color);
        }

        svg {
            fill: var(--primary-color);
            height: 0.75rem;
            transform: scaleX(-1);
        }
    }

    h1 {
        margin-bottom: 2rem;
    }

    p {
        line-height: 1.65;
        white-space: pre-wrap;
    }
}
</style>