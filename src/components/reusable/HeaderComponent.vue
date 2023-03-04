<template>
    <header>
        <router-link to="/">Leftify</router-link>
        <div>
            <div class="large-links">
                <router-link to="/about">About</router-link>
                <router-link to="/glossary">Glossary</router-link>
                <router-link to="/test" class="btn-primary">Take the test</router-link>
            </div>
            <button class="theme-button" @click="changeTheme">
                <MoonIcon/>
            </button>
            <button @click="() => mobileMenuOpen = !mobileMenuOpen" class="mobile-menu-toggle-button">
                <CrossIcon v-if="mobileMenuOpen" />
                <MenuIcon v-else />
            </button>
        </div>
    </header>
    <MobileNavComponent v-show="mobileMenuOpen" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import MobileNavComponent from './MobileNavComponent.vue'
import CrossIcon from '../icons/CrossIcon.vue'
import SunIcon from '../icons/SunIcon.vue'
import MoonIcon from '../icons/MoonIcon.vue'
import MenuIcon from '../icons/MenuIcon.vue'

const mobileMenuOpen = ref(false)

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
    align-items: center;
    display: flex;
    justify-content: space-between;
    padding-top: 1.375rem;
    width: 100%;

    a {
        color: var(--black-90);
        font-size: 0.875rem;
    }

    > div {
        align-items: center;
        display: flex;
        gap: 1.25rem;

        button {
            display: flex;

            svg {
                fill: var(--black-90);
                height: 1rem;
            }
        }
    }

    .large-links {
        align-items: center;
        display: flex;
        gap: 1.25rem;
    }

    .btn-primary {
        padding: 0.625em 0.75em;
    }
}

[data-theme='dark'] header .btn-primary {
    font-variation-settings: 'wght' 500;
}

@media (max-width: 719px) {
    header .large-links {
        display: none;
    }
}

@media (min-width: 720px) {
    header .mobile-menu-toggle-button {
        display: none;
    }
}
</style>