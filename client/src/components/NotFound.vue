<template>
    <div>
        <h2>Page not found</h2>

        <router-link v-bind:to="{ name: 'StateList' }">Return to home page</router-link>
    </div>
</template>

<script>
export default {
    name: 'NotFound',
}
</script>