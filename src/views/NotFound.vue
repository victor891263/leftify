<template>
    <div id="not-found">
        <h1>Page not found.</h1>
        <p>We searched but couldn’t find what you’re looking for. Let’s find a better place for you to continue your journey.</p>
        <router-link to="/" class="btn-secondary">Back to home</router-link>
    </div>
</template>

<style lang="scss">
#not-found {
    display: grid;
    grid-row-gap: 1.5rem;
    max-width: 540px;

    a {
        font-size: 0.9375rem;
        width: fit-content;
    }
}
</style>