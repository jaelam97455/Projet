<script setup lang="ts">
defineProps<{
    title: String
    imgPath: String
    imgAlt: String
    subTitle?: String
}>()
</script>

<template>
    <div class="relative">
        <img :src="imgPath" :alt="imgAlt" class="w-full h-auto">

        <div class="absolute top-0 left-0 flex flex-col items-center justify-center w-full h-full gap-[4vw]">
            <h1 class="text-5xl font-bold text-center text-darkgreen lg:text-7xl md:text-6xl mx-[8vw]">{{ title }}</h1>
            <RouterLink to="/"
                class="px-4 py-2 text-white mt-14 lg:mt-0 rounded-xl hover:bg-lightgreen hover:text-white active:border-darkgreen active:border-4 bg-orange lg:text-xl">
                FAIRE MES COURSES</RouterLink>
        </div>
    </div>
</template>