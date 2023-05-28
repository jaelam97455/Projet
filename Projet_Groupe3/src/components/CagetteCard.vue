<script setup lang="ts">
import shoppingBag from './icons/shoppingBag.vue';
defineProps<{
    title: String
    imgPath: String
    imgAlt: String
    price: String
}>()
</script>

<template>
    <div class="flex flex-col items-center overflow-hidden bg-white rounded-xl shadow-1 px-[2vh] gap-4">
        <div
            class="relative flex flex-col items-center self-stretch justify-start overflow-hidden rounded-t-xl bg-darkgreen">
            <p class="font-serif text-2xl font-bold text-center text-white">{{ title }}
            </p>
        </div>
        <div class="relative flex flex-col items-start self-stretch justify-start overflow-hidden bg-white rounded-xl px-[2vh]">
            <img :src="imgPath" :alt="imgAlt" class="self-stretch object-cover rounded-xl" />
        </div>

        <div class="flex flex-wrap items-center px-[2vh]">

            <div class="relative flex items-center justify-center m-1 rounded-lg bg-darkgreen">
                <p class="text-base text-center text-white btn-cagette-card">4kg | Pomme de terre</p>
            </div>

            <div class="relative flex items-center justify-center m-1 rounded-lg bg-darkgreen">
                <p class="text-base text-center text-white btn-cagette-card">4kg | Artichaut</p>
            </div>

            <div class="relative flex items-center justify-center m-1 rounded-lg bg-darkgreen">
                <p class="text-base text-center text-white btn-cagette-card">1kg | Tomates</p>
            </div>

            <div class="relative flex items-center justify-center m-1 rounded-lg bg-darkgreen">
                <p class="text-base text-center text-white btn-cagette-card">2kg | Carottes</p>
            </div>

            <div class="relative flex items-center justify-center m-1 rounded-lg bg-darkgreen">
                <p class="text-base text-center text-white btn-cagette-card">3kg | Courgettes</p>
            </div>

            <div class="relative flex items-center justify-center m-1 rounded-lg bg-darkgreen">
                <p class="text-base text-center text-white btn-cagette-card">2kg | Poires</p>
            </div>

            <div class="relative flex items-center justify-center m-1 rounded-lg bg-darkgreen">
                <p class="text-base text-center text-white btn-cagette-card">0.5kg | Oignons</p>
            </div>

            <div class="relative flex items-center justify-center m-1 rounded-xl bg-darkgreen">
                <p class="text-base text-center text-white btn-cagette-card">2kg | Pommes</p>
            </div>

            <div class="relative flex items-center justify-center m-1 rounded-xl bg-orange">
                <p class="text-base text-center text-white btn-cagette-card">2kg | Concombres</p>
            </div>

        </div>

        <div class="relative flex items-center self-stretch justify-between px-[3vh]">
            <p class="font-serif text-2xl font-bold text-center text-black">
                {{ price }}
            </p>
            <shoppingBag />
        </div>
    </div>
</template>