<template>
    <header>
        <router-link to="/">Leftify</router-link>
        <div @click="changeTheme">
            <MoonIcon/>
        </div>
    </header>
</template>

<script setup lang="ts">
import SunIcon from '../icons/SunIcon.vue'
import MoonIcon from '../icons/MoonIcon.vue'

const root = document.documentElement

if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    root.setAttribute("data-theme", "dark");
}

function changeTheme() {
    if (root.getAttribute("data-theme") === "light") root.setAttribute("data-theme", "dark")
    else root.setAttribute("data-theme", "light")
}
</script>

<style lang="scss">
header {
    align-items: flex-end;
    display: flex;
    height: 2.375rem;
    justify-content: space-between;
    width: 100%;

    a {
        color: var(--black-90);
        font-size: 0.875rem;
    }

    > div {
        cursor: pointer;
        display: flex;
    }

    svg {
        fill: var(--black-90);
        height: 1rem;
    }
}
</style>