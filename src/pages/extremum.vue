<script setup>
    import Graph from  '../components/graph.vue'
    import GraphCanvas from  '../components/graph-canvas.vue'

    const xStart = -15 
    const xEnd = 15  
    const yStart = -10 
    const yEnd = 10
    const e = 0.25
</script>

<template>
    <div class="extremum">
        <Graph 
            :xStart="xStart" 
            :xEnd="xEnd"  
            :yStart="yStart" 
            :yEnd="yEnd"
            :e="e"
        />
        <GraphCanvas 
            :xStart="xStart" 
            :xEnd="xEnd"  
            :yStart="yStart" 
            :yEnd="yEnd"
            :e="e"
        />
    </div>
</template>

<style>
    .extremum {
        display: flex;
        gap: 30px;
    }
</style>