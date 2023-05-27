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

        <div class="absolute top-0 left-0 flex flex-col items-center justify-center w-full h-full">
            <h1 class="px-5 text-5xl font-bold text-center text-darkgreen">{{ title }}</h1>
            <RouterLink to="/"
                class="px-4 py-2 text-white mt-14 rounded-xl hover:bg-lightgreen hover:text-white active:border-darkgreen active:border-4 bg-orange">
                FAIRE MES COURSES</RouterLink>
        </div>
    </div>
</template>