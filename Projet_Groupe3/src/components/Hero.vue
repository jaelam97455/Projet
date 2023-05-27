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
        </div>
    </div>
</template>





