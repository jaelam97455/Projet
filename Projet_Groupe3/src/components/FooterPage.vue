<script setup lang="ts">
import Logo from '@/components/icons/Logo.vue'
import facebook from '@/components/icons/facebook.vue'
import instagram from '@/components/icons/instagram.vue'

</script>

<template>
    <footer>
        <div class="flex flex-col items-center justify-center w-full gap-5 py-8 bg-brown">
            <div class="flex flex-row justify-center gap-8">
                <Logo />
                <div class="flex flex-col gap-4">
                    <div>
                        <ul>
                            <li class="font-sans text-sm text-white">6 rue du château</li>
                            <li class="font-sans text-sm text-white">Montbéliard 25200</li>
                            <li class="font-sans text-sm text-white">FRANCE</li>
                        </ul>
                    </div>
                    <div class="flex gap-4">
                        <a href="#"><facebook /></a>
                        <a href="#"><instagram /></a>
                    </div>
                </div>
            </div>
            <nav>
                <div class="my-6">
                    <h4 class="font-serif text-2xl text-center text-white">La cagette fermière</h4>
                    <p class="font-sans text-sm text-center text-white">Nos produits</p>
                    <p class="font-sans text-sm text-center text-white">Nos cagettes</p>
                    <p class="font-sans text-sm text-center text-white">Faire un don de produits</p>
                </div>

                <div class="my-6">
                    <h4 class="font-serif text-2xl text-center text-white">À propos</h4>
                    <p class="font-sans text-sm text-center text-white">Qui sommes-nous</p>
                    <p class="font-sans text-sm text-center text-white">Nos partenaires</p>
                    <p class="font-sans text-sm text-center text-white">Nos producteurs</p>
                </div>

                <div class="my-6">
                    <h4 class="font-serif text-2xl text-center text-white">Informations</h4>
                    <p class="font-sans text-sm text-center text-white">Politique de confidentalité</p>
                    <p class="font-sans text-sm text-center text-white">Utilisation des cookies</p>
                    <p class="font-sans text-sm text-center text-white">Mentions légales</p>
                </div>

                <div class="my-6">
                    <h4 class="font-serif text-2xl text-center text-white">Nous contacter</h4>
                    <p class="font-sans text-sm text-center text-white">07 69 40 83 55</p>
                    <p class="font-sans text-sm text-center text-white">lacagettefermiere@gmail.com</p>
                </div>

            </nav>
        </div>

    </footer>
</template>


