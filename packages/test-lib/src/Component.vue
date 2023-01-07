<template>
    <button @click="click()">SOOQA BLYAT!!!</button>
</template>

<script lang="ts" setup>

const click = () => {
    console.log('Hello? 🥹')
}
</script>

<style lang="sass" scoped>
button
    cursor: pointer
    border: none
    background-color: salmon
    color: white
    padding: 20px
</style>