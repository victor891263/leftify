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
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Merriweather:wght@700&family=PT+Serif:wght@700&family=Playfair+Display:wght@700&display=swap');

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;

    font-family: "Inter", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

h1 {
    font-family: "PT Serif", serif;
}

p {
    line-height: 1.6;
}

button {
    background: none;
    border: none;
    font-size: 1rem;
    outline: none;
}

a {
    color: initial;
    text-underline-offset: 0.3em;
}

footer {
    color: darkgray;
    font-size: 0.875rem;
    height: 2.375rem;
    text-align: center;
    width: 100%;
}

%btn {
    cursor: pointer;
    display: block;
    padding: 0.75em 1em;
}

.btn-secondary {
    @extend %btn;
    border: 1px solid darkblue;
    color: darkblue;
}

.btn-primary {
    @extend %btn;
    background-color: darkblue;
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
