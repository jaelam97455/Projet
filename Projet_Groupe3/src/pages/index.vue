<script setup lang="ts">
import Hero from '@/components/Hero.vue'
import CagetteCard from '@/components/CagetteCard.vue';
</script>
<template>
    <Hero title="Prenez goût à l'anti-gaspi, 
    faites des économies ! " imgPath="../../public/img/hero-pic-mobile.webp" imgAlt="Fruits et légumes"
        class="md:hidden " />
    <Hero title="Prenez goût à l'anti-gaspi, 
    faites des économies ! " imgPath="../../public/img/hero-pic.webp" imgAlt="Fruits et légumes"
        class="hidden md:block " />
    <div class="flex flex-wrap justify-center">
        <CagetteCard title="Abonnement Light" imgPath="../../public/img/cagette-1.webp"
            imgAlt="Cagette remplie de fruits et légumes" price="20 €" name1="1kg | Pomme de terre" name2="0.2kg | Ail"
            name3="0.5kg | Abricots" name4="1kg | Tomates" name5="0.5kg | Fraises" name6="1kg | Pêches" name7="0.2kg | Noix"
            name8="1kg | Aubergines" name9="0.2kg | Framboises" />
        <CagetteCard title="Abonnement Giant" imgPath="../../public/img/cagette-3.webp"
            imgAlt="Cagette remplie de fruits et légumes" price="40 €" name1="4kg | Pomme de terre" name2="4kg | Artichaut"
            name3="1kg | Tomates" name4="2kg | Carottes" name5="3kg | Courgettes" name6="2kg | Poires"
            name7="0.5kg | Oignons" name8="2kg | Pommes" name9="2kg | Concombres" />
    </div>
</template>
