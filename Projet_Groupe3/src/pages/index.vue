<script setup lang="ts">
import Hero from '@/components/hero.vue'
</script>
<template>
    <Hero title="Prenez goût à l'anti-gaspi, 
    faites des économies ! " imgPath="../../public/img/hero-pic-mobile.webp" imgAlt="Fruits et légumes"
        class="lg:hidden " />
    <Hero title="Prenez goût à l'anti-gaspi, 
    faites des économies ! " imgPath="../../public/img/hero-pic.webp" imgAlt="Fruits et légumes"
        class="hidden lg:block " />
</template>
