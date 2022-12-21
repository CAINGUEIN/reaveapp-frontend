<template>
    <div class="my-14">
        <div class="w-1/2 mx-auto flex">
            <div class="w-1/2">
                <h2>Descritpion</h2>
                <p>{{ data.description }}</p>
            </div>
            <div class="w-1/2 aspect-2 rounded-2xl bg-slate-400">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['data'],
    }
</script>

<style lang="scss" scoped>

</style>