<script setup>
    import { ref, onMounted } from 'vue';
    import { arrayFromLine, functionResult, coodToPostion } from '../utils';

    const { xStart, xEnd, yStart, yEnd, funcs, e } = defineProps({
        xStart: Number,
        xEnd: Number,
        yStart: Number,
        yEnd: Number,
        e: Number,
        funcs: Array,
    })

    const canvas = ref(null)

    const coords = functionResult([0, 1, 1, 0.1], xStart, xEnd, e)
    const positions = coords.map((c) => coodToPostion(c.x, c.y, xStart, xEnd, yStart, yEnd, false))

    onMounted(() => {
        if (canvas.value) {
            const ctx = canvas.value.getContext('2d');
            canvas.value.width = 700;
            canvas.value.height = 500;
            
            const { width, height } = canvas.value;

            ctx.rect(0, 0, width, height)
            ctx.fillStyle = '#111'
            ctx.fill();

            ctx.beginPath();
            ctx.moveTo(0, height / 2);
            ctx.lineTo(width, height / 2);
            ctx.moveTo(width / 2, 0);
            ctx.lineTo(width / 2, height);
            ctx.lineWidth = 1;
            ctx.strokeStyle = 'white';
            ctx.closePath()
            ctx.stroke();

            const canvasPos = positions.map(p => ({ x: p.x * width / 100, y: p.y * height / 100 }))
            console.log(positions, canvasPos)
            ctx.beginPath();
            ctx.moveTo(canvasPos[0].x, canvasPos[0].y);
            ctx.strokeStyle = 'red';
            canvasPos.forEach((p, i) => {
                if (i === 0) {
                    return;
                }
                ctx.lineTo(p.x, p.y);
            })
            ctx.stroke();

        }
    })


</script>

<template>
    <div>
        <h1>CANVAS VERSION</h1>
        <canvas ref="canvas" class='graph-canvas'>
            Browser not support Canvas
        </canvas>
    </div>
</template>

<style>
    .graph-canvas {
        height: 500px;
        width: 700px;
        border: 1px solid gray;
    }
</style>