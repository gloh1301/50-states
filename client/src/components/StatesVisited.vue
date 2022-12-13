<template>
    <div>
        <h2>States Visited</h2>
        <ul>
            <li>{{  }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'StatesVisited',
    data () {
        return {
            visited: this.state.visited
        }
    },
    mounted() {
        // this.state.visited = this.$route.params.visited
        this.visitedStatus()
    },
    methods: {
        visitedStatus() {
            this.$stateService.getVisitedStatus(this.state.visited).then( state => {
                this.state = state
                if (state.visted == true) {
                    return state.name
                }
            })
        }
    }
}
</script>

<style scoped>

</style>