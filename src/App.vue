<template>
    <HeaderComponent/>
    <main>
        <router-view/>
    </main>
    <footer>© 2023 Leftify. All rights reserved.</footer>
</template>

<script setup lang="ts">
import HeaderComponent from '@/components/reusable/HeaderComponent.vue';
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');

:root[data-theme='light'] {
    --background: rgb(255, 255, 255);
    --primary-color: rgb(79, 70, 229);

    --black-10: rgb(244, 244, 245);
    --black-20: rgb(228, 228, 231);
    --black-30: rgb(212, 212, 216);
    --black-40: rgb(161, 161, 170);
    --black-50: rgb(113, 113, 122);
    --black-60: rgb(82, 82, 91);
    --black-70: rgb(63, 63, 70);
    --black-80: rgb(39, 39, 42);
    --black-90: rgb(24, 24, 27);
}

:root[data-theme='dark'] {
    --background: rgb(24, 24, 27);
    --primary-color: rgb(99, 102, 241);

    --black-90: rgb(244, 244, 245);
    --black-80: rgb(228, 228, 231);
    --black-70: rgb(212, 212, 216);
    --black-60: rgb(161, 161, 170);
    --black-50: rgb(113, 113, 122);
    --black-40: rgb(82, 82, 91);
    --black-30: rgb(63, 63, 70);
    --black-20: rgb(39, 39, 42);
    --black-10: rgb(24, 24, 27);
}

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    
    color: var(--black-90);
    font-family: 'Inter', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

body {
    background-color: var(--background);
}

h1, h2 {
    font-variation-settings: 'wght' 650;
    letter-spacing: -0.02em;
}

h2 {
    font-size: 2rem;
}

p {
    line-height: 1.6;
}

button {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 1rem;
    outline: none;
}

a {
    color: var(--primary-color);
    text-decoration: none;
}

footer {
    color: var(--black-40);
    font-size: 0.875rem;
    height: 2.375rem;
    text-align: center;
    width: 100%;
}

%btn {
    border-radius: 0.5em;
    cursor: pointer;
    display: block;
    padding: 0.75em 1em;
}

.btn-secondary {
    @extend %btn;
    border: 1px solid var(--black-40);
    color: var(--primary-color);
}

.btn-primary {
    @extend %btn;
    background-color: var(--primary-color);
    color: white;
}

#app {
    padding-left: 1.5rem;
    padding-right: 1.5rem;

    main {
        align-items: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        min-height: calc(100vh - 4.75rem);
        padding-bottom: 8rem;
        padding-top: 8rem;
    }
}


</style>
