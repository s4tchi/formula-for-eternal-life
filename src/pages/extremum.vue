<script setup>
    import FunctionPrint from  '../components/graph.vue'
</script>

<template>
    <FunctionPrint 
        :xStart="-5" 
        :xEnd="5"  
        :yStart="-5" 
        :yEnd="5"
        :e="1"
    />
</template>

<style>

</style>