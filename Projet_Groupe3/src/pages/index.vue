<script setup lang="ts">
import Hero from '@/components/Hero.vue'
import CagetteCard from '@/components/CagetteCard.vue';
import CounterBox from '@/components/CounterBox.vue';
import CardEtape from '@/components/CardEtape.vue';
</script>
<template>
    <Hero title="Prenez goût à l'anti-gaspi, 
    faites des économies&nbsp;! " imgPath="../../public/img/hero-pic-mobile.webp" imgAlt="Fruits et légumes"
        class="md:hidden " />
    <Hero title="Prenez goût à l'anti-gaspi, 
    faites des économies&nbsp;! " imgPath="../../public/img/hero-pic.webp" imgAlt="Fruits et légumes"
        class="hidden md:block " />
    <section>
        <div class="flex flex-col justify-center gap-4 mx-4 my-8">
            <img src="../../public/img/illu-ble.webp" alt="épis de blé" class="max-w-[54px] m-auto">
            <h2 class="text-4xl font-bold text-center">Notre sélection de produits</h2>
            <p class="text-center">Découvrez nos abonnements pour recevoir chaque mois votre cagette de fruits et
                légumes&nbsp;!</p>
        </div>

        <div class="flex flex-wrap justify-center">
            <CagetteCard title="Abonnement Light" imgPath="../../public/img/cagette-1.webp"
                imgAlt="Cagette remplie de fruits et légumes" price="20 €" name1="1kg | Pomme de terre" name2="0.2kg | Ail"
                name3="0.5kg | Abricots" name4="1kg | Tomates" name5="0.5kg | Fraises" name6="1kg | Pêches"
                name7="0.2kg | Noix" name8="1kg | Aubergines" name9="0.2kg | Framboises" />
            <CagetteCard title="Abonnement Giant" imgPath="../../public/img/cagette-3.webp"
                imgAlt="Cagette remplie de fruits et légumes" price="40 €" name1="4kg | Pomme de terre"
                name2="4kg | Artichaut" name3="1kg | Tomates" name4="2kg | Carottes" name5="3kg | Courgettes"
                name6="2kg | Poires" name7="0.5kg | Oignons" name8="2kg | Pommes" name9="2kg | Concombres" />
        </div>
    </section>
    <CounterBox />
            <div class="flex flex-col justify-center gap-4 mx-4 my-8">
                <img src="../../public/img/illu-panier.webp" alt="panier de légumes" class="max-w-[54px] m-auto">
                <h2 class="text-4xl font-bold text-center">Composez votre cagette !</h2>
                <p class="text-center">Légumes de saison, fruits rouges... Vous souhaitez un produit bien particulier&nbsp;?</p>
            </div>
            
            <CardEtape/>
</template>
