<script setup lang="ts">
import Hero from '@/components/Hero.vue'
import CagetteCard from '@/components/CagetteCard.vue';
</script>
<template>
    <Hero title="Prenez goût à l'anti-gaspi, 
    faites des économies ! " imgPath="../../public/img/hero-pic-mobile.webp" imgAlt="Fruits et légumes"
        class="lg:hidden " />
    <Hero title="Prenez goût à l'anti-gaspi, 
    faites des économies ! " imgPath="../../public/img/hero-pic.webp" imgAlt="Fruits et légumes"
        class="hidden lg:block " />
    <CagetteCard title="Abonnement Light" imgPath="../../public/img/cagette-1.webp" imgAlt="Cagette remplie de fruits et légumes" price="20 €" />
</template>
