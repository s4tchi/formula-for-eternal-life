<script setup>
    import { arrayFromLine } from '../utils';

    const { xStart, xEnd, funcs } = defineProps({
        xStart: Number,
        xEnd: Number,
        yStart: Number,
        yEnd: Number,
        e: Number,
        funcs: Array,
    })

    const xAxis = arrayFromLine(xStart, xEnd);

</script>

<template>
    <h1>DEBUG VERSION</h1>
    <div class='graph-wrapper'>
        <div class='center-item'>
            <div class="graph-axis-x">

                <div class='graph-axis-line'/>
            </div>
        </div>

        <div class='center-item'>
            <div class="graph-axis-y">
                <div class='graph-axis-line'/>
            </div>
        </div>

        <div class='center-item'>
            <div class="graph-axis-coord-x">
                <p v-for="value of xAxis" class='graph-axis-coord-1'>{{ value }}</p>
            </div>
        </div>

        <div class='center-item'>
            <div class="graph-axis-coord-y">
                <p v-for="value of xAxis" class='graph-axis-coord-1'>{{ value }}</p>
            </div>
        </div>

        <div class='center-item'>
            <div class="graph-axis-lines-y">
                <div v-for="value of xAxis" class='graph-line-y' />
            </div>
        </div>

        <div class='center-item'>
            <div class="graph-axis-lines-x">
                <div v-for="value of xAxis" class='graph-line-x' />
            </div>
        </div>

        <div class='center-item'>
            <div class="graph-center"/>
        </div>
    </div>
</template>

<style>
    .graph-wrapper {
        background: #111;
        border: 1px solid gray;
        width: 700px;
        height: 500px;
        position: relative;
        box-sizing: border-box;

    }

    .graph-line-y {
        border-top: 1px dashed white;
        width: 100%;
    }

    .graph-line-x {
        border-left: 1px dashed white;
        height: 100%;
    }

    .graph-center {
        border: 2px solid white;
        width: 20px;
        height: 20px;
        border-radius: 100%;
        box-sizing: border-box;
    }

    .graph-axis-x {
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        width: 100%;
    }

    .graph-axis-y {
        display: flex;
        flex-direction: row;
        box-sizing: border-box;
        height: 100%;
    }
    

    .graph-axis-line {
        border: 1px solid white;
    }

    .graph-axis-coord-x {
        display: flex;
        flex-direction: row;
        width: 100%;
        margin-bottom: 20px;
    }

    .graph-axis-coord-y {
        display: flex;
        flex-direction: column;
        height: 100%;
        margin-left: 20px;
    }

    .graph-axis-lines-y {
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 100%;
        justify-content: space-around;
    }

    .graph-axis-lines-x {
        display: flex;
        flex-direction: row;
        height: 100%;
        width: 100%;
        justify-content: space-around;
    }

    .graph-axis-coord-1 {
        flex: 1;
        margin: 0;
        text-align: center;
        align-items: center;
        font-size: 14px;
    }
</style>