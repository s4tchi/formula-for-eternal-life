<script setup>

</script>

<template>
    <div class='header'>
        <div class='header-logo'>
            <div class='header-l'/>
            <p>Foel</p>
        </div>
        <div>

        </div>
        <div>

        </div>
    </div>
</template>

<style>
    .header {
        width: 100vw;
        height: 50px;
        border-bottom: 1px solid white;
        box-shadow: 0 4px 8px -4px black;
        background: black;
        box-sizing: border-box;
        padding: 5px 30px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .header-logo {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        gap: 10px;
    }

    .header-l {
        width: 30px;
        height: 30px;
        border-bottom: 3px solid red;
        border-top: 3px solid red;
        border-radius: 100%
    }
</style>