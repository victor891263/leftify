<template>
    <div id="mobile-nav">
        <div class="links">
            <router-link to="/about">About</router-link>
            <router-link to="/glossary">Glossary</router-link>
            <router-link to="/test" class="btn-primary">Take the test</router-link>
        </div>
    </div>
</template>

<style lang="scss">
#mobile-nav {
    position: fixed;
    z-index: 1;
    top: 2.425rem;
    left: 0;

    background-color: var(--color-background);
    height: calc(100% - 2.425rem);
    padding: 0 1.5rem 2.425rem 1.5rem;
    width: 100%;

    .links {
        align-content: center;
        display: grid;
        grid-row-gap: 1rem;
        height: 100%;
        margin: auto;
        justify-content: center;
        text-align: center;

        a:not(.btn-primary) {
            color: var(--color-text);
            font-weight: 500;
        }

        a.btn-primary {
            font-size: 0.9375rem;
        }
    }
}
</style>