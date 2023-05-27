<script setup lang="ts">
defineProps<{
    title: String
    imgPath: String
    imgAlt: String
    subTitle?: String
}>()
</script>

<template>
    <div>
        <div>
            <h1>{{ title }}</h1>
            <h2 v-if="subTitle">{{ subTitle }}</h2>
        </div>

        <div>
            Texte constituant le chapo de la page.
        </div>
        <img :src="imgPath" :alt="imgAlt" />
    </div>
</template>