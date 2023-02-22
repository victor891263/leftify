<template>
    <div id="glossary-index">
        <h1>Glossary</h1>
        <div>
            <router-link v-for="(definition, index) in definitions" :to="`/glossary/${index}`" :key="index">
                <div>{{ definition.title }}</div>
                <ArrowIcon />
            </router-link>
        </div>
    </div>
</template>

<script setup lang="ts">
import definitions from '@/data/definitions'
import ArrowIcon from '@/components/icons/ArrowIcon.vue'
</script>

<style lang="scss">
#glossary-index {
    width: min(540px, 100%);

    h1 {
        margin-bottom: 3rem;
    }

    > div {
        display: grid;
        grid-row-gap: 1.5rem;

        a {
            align-items: center;
            display: flex;
            justify-content: space-between;

            div {
                color: var(--primary-color);
            }

            svg {
                fill: var(--primary-color);
                height: 0.875rem;
            }
        }
    }
}
</style>