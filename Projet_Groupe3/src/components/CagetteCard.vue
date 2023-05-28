<script setup lang="ts">
import shoppingBag from './icons/shoppingBag.vue';
defineProps<{
    title: String
    imgPath: String
    imgAlt: String
    price: String
    name1: String
    name2: String
    name3: String
    name4: String
    name5: String
    name6: String
    name7: String
    name8: String
    name9: String
}>()

function containsFruit(name: string): boolean {
    const fruits = ['Pommes', 'Poires', 'Abricot', 'Tomates', 'Pêches', 'Fraises', 'Framboises', 'Noix'];
    return fruits.some(fruit => name.toLowerCase().includes(fruit.toLowerCase()));
}
</script>

<template>
    <div class="flex flex-col items-center overflow-hidden bg-white rounded-xl shadow-1 gap-4 m-[5vw] max-w-[330px]">
        <div class="relative flex flex-col items-center self-stretch justify-start overflow-hidden rounded-t-xl bg-darkgreen"
            :class="{ 'bg-darkgreen': title !== 'Abonnement Light', 'bg-orange': title === 'Abonnement Light' }">
            <p class="font-serif text-2xl font-bold text-center text-white lg:text-3xl">{{ title }}
            </p>
        </div>
        <div
            class="relative flex flex-col items-start self-stretch justify-start overflow-hidden bg-white rounded-xl px-[2vh]">
            <img :src="imgPath" :alt="imgAlt" class="self-stretch object-cover rounded-xl" />
        </div>

        <div class="flex flex-wrap items-center px-[2vh]">
            <div v-for="name in [name1, name2, name3, name4, name5, name6, name7, name8, name9]" :key="name"
                class="relative flex items-center justify-center m-1 rounded-lg"
                :class="{ 'bg-darkgreen': !containsFruit(name), 'bg-orange': containsFruit(name) }">
                <p class="text-sm text-center text-white lg:text-base btn-cagette-card">{{ name }}</p>
            </div>
        </div>

        <div class="relative flex items-center self-stretch justify-between px-[3vh] mb-4">
            <p class="font-serif text-2xl font-bold text-center text-black lg:text-3xl">
                {{ price }}
            </p>
            <shoppingBag class="hover:stroke-lightgreen"/>
        </div>
    </div>
</template>