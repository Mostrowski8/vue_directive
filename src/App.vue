<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Directives Exercise</h1>
                <button v-myon:click="logMethod"> Log Method </button>
                <button v-myon:click="()=>console.log('log from exprression')"> Log Expression </button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            logMethod() {
                console.log('log from method');
            }
        }
    }
    
</script>

<style>
</style>
