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
    --black-0: rgb(255, 255, 255);
    --black-10: rgb(244, 244, 245);
    --black-20: rgb(228, 228, 231);
    --black-30: rgb(212, 212, 216);
    --black-40: rgb(161, 161, 170);
    --black-50: rgb(113, 113, 122);
    --black-60: rgb(82, 82, 91);
    --black-70: rgb(63, 63, 70);
    --black-80: rgb(39, 39, 42);
    --black-90: rgb(24, 24, 27);

    --indigo-40: rgb(129, 140, 248);
    --indigo-50: rgb(99, 102, 241);
    --indigo-60: rgb(79, 70, 229);

    --blue-40: rgb(96, 165, 250);
    --blue-60: rgb(37, 99, 235);

    --violet-40: rgb(167, 139, 250);
    --violet-60: rgb(124, 58, 237);
}

:root[data-theme='dark'] {
    --black-90: rgb(255, 255, 255);
    --black-80: rgb(244, 244, 245);
    --black-70: rgb(228, 228, 231);
    --black-60: rgb(212, 212, 216);
    --black-50: rgb(161, 161, 170);
    --black-40: rgb(113, 113, 122);
    --black-30: rgb(82, 82, 91);
    --black-20: rgb(63, 63, 70);
    --black-10: rgb(39, 39, 42);
    --black-0: rgb(24, 24, 27);

    --indigo-60: rgb(129, 140, 248);
    --indigo-50: rgb(99, 102, 241);
    --indigo-40: rgb(79, 70, 229);

    --blue-60: rgb(96, 165, 250);
    --blue-40: rgb(37, 99, 235);

    --violet-60: rgb(167, 139, 250);
    --violet-40: rgb(124, 58, 237);
}

:root {
    --color-background: var(--black-0);
    --color-text: var(--black-90);
    --primary-color: var(--indigo-60);
}

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    
    color: var(--color-text);
    font-family: 'Inter', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

body {
    background-color: var(--color-background);
}

h1, h2 {
    font-size: 2rem;
    letter-spacing: -0.02em;
}

p {
    line-height: 1.7;
}

b {
    font-weight: 600;
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
    padding: 0.75em 0.9375em;
}

.btn-secondary {
    @extend %btn;
    border: 1px solid var(--black-30);
    color: var(--primary-color);
}

.btn-primary {
    @extend %btn;
    background-color: var(--primary-color);
    border: 1px solid var(--primary-color);
    color: var(--black-0);
}

#app {
    padding-left: 1.5rem;
    padding-right: 1.5rem;

    main {
        align-items: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        min-height: calc(100vh - 6.05rem);
        padding-bottom: 8rem;
        padding-top: 8rem;
    }
}
</style>
