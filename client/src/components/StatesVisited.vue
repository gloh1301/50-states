<template>
    <div>
        <h2>States Visited</h2>
        
        <p v-for="state in visited">{{ state.name }}</p>
    </div>
</template>

<script>
export default {
    name: 'StatesVisited',
    data () {
        return {
            visited: []
        }
    },
    mounted() {
        // this.state.visited = this.$route.params.visited
        this.visitedStates()
    },
    methods: {
        visitedStates() {
            this.$stateService.getVisitedStates().then( states => {
                this.visited = states
            })
        }
    }
}
</script>

<style scoped>

</style>