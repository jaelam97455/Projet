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
            <img src="/img/illu-ble.webp" alt="épis de blé" class="max-w-[54px] m-auto">
            <h2 class="text-4xl font-bold text-center">Notre sélection de produits</h2>
            <p class="text-center">Découvrez nos abonnements pour recevoir chaque mois votre cagette de fruits et
                légumes&nbsp;!</p>
        </div>

        <div class="flex flex-wrap justify-center">
            <CagetteCard title="Abonnement Light" imgPath="../../public/img/cagette-1.webp"
                imgAlt="Cagette remplie de fruits et légumes" price="20 €" name1="1kg | Pomme de terre" name2="0.2kg | Ail"
                name3="0.5kg | Abricots" name4="1kg | Tomates" name5="0.5kg | Fraises" name6="1kg | Pêches"
                name7="0.2kg | Noix" name8="1kg | Aubergines" name9="0.2kg | Framboises" />
            <CagetteCard title="Abonnement Giant" imgPath="../../public/img/cagette-2.webp"
                imgAlt="Cagette remplie de fruits et légumes" price="40 €" name1="4kg | Pomme de terre"
                name2="4kg | Artichaut" name3="1kg | Tomates" name4="2kg | Carottes" name5="3kg | Courgettes"
                name6="2kg | Poires" name7="0.5kg | Oignons" name8="2kg | Pommes" name9="2kg | Concombres" />
        </div>
    </section>

    <CounterBox />

    <section>
        <div class="flex flex-col justify-center gap-4 mx-4 my-8">
            <img src="/img/illu-panier.webp" alt="panier de légumes" class="max-w-[54px] m-auto">
            <h2 class="text-4xl font-bold text-center">Composez votre cagette&nbsp;!</h2>
            <p class="text-center">Légumes de saison, fruits rouges... Vous souhaitez un produit bien particulier&nbsp;?</p>
        </div>

        <CardEtape />
    </section>

    <div class="flex flex-col justify-center gap-4 mx-4 my-8">
        <img src="/img/illu-eco.webp" alt="panier de légumes" class="max-w-[54px] m-auto">
        <h2 class="text-4xl font-bold text-center">Sauver des produits&nbsp;?! <br>Comment ça marche&nbsp;?</h2>
                <img src="/img/deco-poire-banane.webp" alt="panier de légumes" class="m-auto">
        <p class="text-center">Vous avez un potager, des invendus, des produits en trop&nbsp;? <br>
            Donnez-les pour bénéficier de nombreuses réductions&nbsp;!</p>
                    <img src="/img/deco-avocat-poivron.webp" alt="panier de légumes" class="m-auto">
                    <p class="text-center">Nous récupérons les produits trop <span class="uppercase text-orange">PETITS</span>, trop <span class="uppercase text-orange">TORDUS</span>, trop <span class="uppercase text-orange">DIFFORMES</span>.
    </p>
    <h3 class="text-3xl font-bold text-center text-lightgreen">Mais toujours aussi savoureux&nbsp;!</h3>
                <RouterLink to="/"
                    class="px-4 py-2 m-auto my-8 text-center text-white rounded-xl hover:bg-lightgreen hover:text-white active:border-lightgreen active:border-4 bg-orange lg:text-xl w-fit">
                    FAIRE UN DON</RouterLink>
    </div>
</template>
