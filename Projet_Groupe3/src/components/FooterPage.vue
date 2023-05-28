<script setup lang="ts">
import Logo from '@/components/icons/Logo.vue'
import facebook from '@/components/icons/facebook.vue'
import instagram from '@/components/icons/instagram.vue'

</script>

<template>
    <footer>
        <div class="w-full gap-5 py-8 bg-brown md:grid md:grid-cols-principal">
            <div class="flex flex-row justify-center col-span-2 col-start-2 gap-4 md:flex-col md:gap-0">
                <Logo />
                <div class="gap-4 md:flex-col md:flex">
                    <div>
                        <ul>
                            <li class="font-sans text-sm text-white">6 rue du château</li>
                            <li class="font-sans text-sm text-white">Montbéliard 25200</li>
                            <li class="font-sans text-sm text-white">FRANCE</li>
                        </ul>
                    </div>
                    <div class="flex gap-4 mt-2">
                        <a href="#">
                            <facebook />
                        </a>
                        <a href="#">
                            <instagram />
                        </a>
                    </div>
                </div>
            </div>
            <nav class="my-6 md:grid md:col-span-2 md:col-start-4">
                <h4 class="font-serif text-2xl text-center text-white md:text-left">La cagette fermière</h4>
                <p class="font-sans text-sm text-center text-white md:text-left">Nos produits</p>
                <p class="font-sans text-sm text-center text-white md:text-left">Nos cagettes</p>
                <p class="font-sans text-sm text-center text-white md:text-left">Faire un don de produits</p>
            </nav>

            <nav class="my-6 md:grid md:col-span-2 md:col-start-6">
                <h4 class="font-serif text-2xl text-center text-white md:text-left">À propos</h4>
                <p class="font-sans text-sm text-center text-white md:text-left">Qui sommes-nous</p>
                <p class="font-sans text-sm text-center text-white md:text-left">Nos partenaires</p>
                <p class="font-sans text-sm text-center text-white md:text-left">Nos producteurs</p>
            </nav>

            <nav class="my-6 md:grid md:col-span-2 md:col-start-8">
                <h4 class="font-serif text-2xl text-center text-white md:text-left">Informations</h4>
                <p class="font-sans text-sm text-center text-white md:text-left">Politique de confidentalité</p>
                <p class="font-sans text-sm text-center text-white md:text-left">Utilisation des cookies</p>
                <p class="font-sans text-sm text-center text-white md:text-left">Mentions légales</p>
            </nav>

            <div class="my-6 md:grid md:col-span-2 md:col-start-10">
                <h4 class="font-serif text-2xl text-center text-white md:text-left">Nous contacter</h4>
                <p class="font-sans text-sm text-center text-white md:text-left">Téléphone ou mail</p>
                <p class="font-sans text-sm text-center text-white md:text-left">07 69 40 83 55</p>
                <p class="font-sans text-sm text-center text-white md:text-left">lacagettefermiere@gmail.com</p>
            </div>
        </div>
    </footer>
</template>


