<script setup lang="ts">
import Logo from '@/components/icons/Logo.vue'
import facebook from '@/components/icons/facebook.vue'
import instagram from '@/components/icons/instagram.vue'

</script>

<template>
    <footer>
        <div class="flex flex-col items-center justify-center w-full gap-5 bg-brown">
            <div class="flex flex-row">
                <Logo />
                <div class="flex flex-col">
                    <p>6 rue du château</p>
                    <p>Montbéliard 25200</p>
                    <p>FRANCE</p>
                </div>
            </div>
            <nav>
                <h4>Menu</h4>
                <ul>
                    <li><a href="#">Mentions légales</a></li>
                    <li><a href="#">Archives</a></li>
                    <li><a href="#">Contact et accès</a></li>
                </ul>
            </nav>

            <div>
                <h4>Contact</h4>
                <address>
                    1 rue Paul Koepfler<br />90000 Belfort<br />
                    <a href="tel:0384542727">03 84 54 27 27</a><br />
                    <a href="mailto:conservatoire@agglo-belfort.fr">conservatoire@agglo-belfort.fr</a>
                </address>
            </div>

            <div>
                <LogoGBIcon />
            </div>

            <div>
                <h4>Nous suivre</h4>
                <ul>
                    <li>
                        <a href="https://facebook.com" aria-label="facebook">
                            <FacebookIcon />
                        </a>
                    </li>
                    <li>
                        <a href="https://instagram.com" aria-label="instagram">
                            <InstagramIcon />
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com" aria-label="twitter">
                            <TwitterIcon />
                        </a>
                    </li>
                    <li>
                        <a href="https://youtube.com" aria-label="youtube">
                            <YoutubeIcon />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <p>SEPARATEUR</p>

        <div class="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 gap-[30px]">
            <div class="flex-grow-0 flex-shrink-0 w-[152px] h-[139px]">
                <div class="flex flex-col justify-start items-center  left-[26.5px] top-0 gap-5">
                    <p class="flex-grow-0 flex-shrink-0 text-2xl font-bold text-center text-white">
                        La Cagette Fermière
                    </p>
                    <div class="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 relative gap-[15px]">
                        <p class="flex-grow-0 flex-shrink-0 text-sm text-center text-[#f0f0f0]">Nos produits</p>
                        <p class="flex-grow-0 flex-shrink-0 text-sm text-center text-[#f0f0f0]">Nos cagettes</p>
                        <p class="flex-grow-0 flex-shrink-0 w-[152px] h-[33px] text-sm text-center text-[#f0f0f0]">
                            Faire un don de produits
                        </p>
                    </div>
                </div>
            </div>
            <div class="flex-grow-0 flex-shrink-0 w-[174px] h-[121px]">
                <div class="flex flex-col justify-start items-center  left-[15.5px] top-[169px] gap-5">
                    <p class="flex-grow-0 flex-shrink-0 w-[76.72px] text-2xl font-bold text-center text-white">
                        à Propos
                    </p>
                    <div class="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 relative gap-[15px]">
                        <p class="flex-grow-0 flex-shrink-0 w-[174px] text-sm text-center text-[#f0f0f0]">
                            Qui sommes nous ?
                        </p>
                        <p class="flex-grow-0 flex-shrink-0 w-[142.49px] text-sm text-center text-[#f0f0f0]">
                            Nos Partenaires
                        </p>
                        <p class="flex-grow-0 flex-shrink-0 w-[147.97px] text-sm text-center text-[#f0f0f0]">
                            Nos Producteurs
                        </p>
                    </div>
                </div>
            </div>
            <div class="flex-grow-0 flex-shrink-0 w-[158px] h-[151px]">
                <div class="flex flex-col justify-start items-center  left-[23.5px] top-80 gap-5">
                    <p class="flex-grow-0 flex-shrink-0 text-2xl font-bold text-center text-white">
                        Informations
                    </p>
                    <div class="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 relative gap-[15px]">
                        <p class="flex-grow-0 flex-shrink-0 w-[158px] text-sm text-center text-[#f0f0f0]">
                            Politique de confidentalité
                        </p>
                        <p class="flex-grow-0 flex-shrink-0 w-[123px] text-sm text-center text-[#f0f0f0]">
                            Utilisation des cookies
                        </p>
                        <p class="flex-grow-0 flex-shrink-0 text-sm text-center text-[#f0f0f0]">
                            Mentions légales
                        </p>
                    </div>
                </div>
            </div>
            <div class="flex-grow-0 flex-shrink-0 w-[205px] h-[121px]">
                <div class="flex flex-col justify-start items-center  left-0 top-[501px] gap-5">
                    <p class="flex-grow-0 flex-shrink-0 w-[122.77px] text-2xl font-bold text-center text-white">
                        Nous Contacter
                    </p>
                    <div class="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 relative gap-[15px]">
                        <p class="flex-grow-0 flex-shrink-0 w-[59.07px] text-sm text-left text-[#f0f0f0]">
                            Contact
                        </p>
                        <p class="flex-grow-0 flex-shrink-0 w-[114.66px] text-sm text-left text-[#f0f0f0]">
                            07 69 40 83 55
                        </p>
                        <p class="flex-grow-0 flex-shrink-0 w-[205px] text-sm text-left text-[#f0f0f0]">
                            lacagettefermiere@gmail.com
                        </p>
                    </div>
                </div>
            </div>
        </div>


    </footer>
</template>


