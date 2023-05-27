<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import user from "./icons/user.vue";
import shoppingBag from "./icons/shoppingBag.vue";
import logoLong from "./icons/logoLong.vue";
import logo from "./icons/Logo.vue";
import { RouterLink } from 'vue-router'
import Logo from './icons/Logo.vue';

const activeMenu = ref(false)

function closeMenu() {
  activeMenu.value = false
}

</script>

<template>
  <header aria-label="Header"
    class="fixed z-10 flex items-stretch justify-between w-full px-6 py-2 transition-all duration-300 ease-in-out translate-y-0 bg-white min-h-[128px] lg:py-0">
    <div class="flex items-center">
      <RouterLink to="/index">
        <logoLong />
      </RouterLink>
    </div>
    <div class="flex items-center justify-end flex-1">
      <nav aria-label="Site Nav"
        class="fixed inset-0 invisible w-screen h-screen text-2xl transition-all duration-300 ease-in-out bg-white opacity-0 lg:bg-opacity-0 md:block lg:visible lg:relative lg:flex lg:h-auto lg:w-auto lg:items-center lg:opacity-100"
        :class="{ '!visible opacity-100': activeMenu }" v-scroll-lock="activeMenu">
        <ul class="items-center gap-[0.25vw] text-sm text-black lg:flex mt-[30%] text-center lg:m-0">
          <li class="menu-item">
            <RouterLink @click="closeMenu" class="menu-link" to="/"> Nos produits
            </RouterLink>
          </li>
          <li class="menu-item">
            <RouterLink @click="closeMenu" class="menu-link" to="/"> Nos cagettes
            </RouterLink>
          </li>
          <li class="menu-item">
            <RouterLink @click="closeMenu" class="menu-link" to="/">Déposer des produits
            </RouterLink>
          </li>
          <li class="menu-item">
            <RouterLink @click="closeMenu" class="menu-link" to="/"> À propos </RouterLink>
          </li>
          <li class="my-10 menu-item">
            <RouterLink @click="closeMenu"
              class="inline text-3xl border-2 border-solid rounded-full menu-link lg:hidden text-orange" to="/">S'inscrire
            </RouterLink>
          </li>
          <li class="my-10 menu-item">
            <RouterLink @click="closeMenu"
              class="inline text-3xl border-2 border-solid rounded-full menu-link lg:hidden text-orange" to="/">Se
              connecter
            </RouterLink>
          </li>
        </ul>
        <Logo class="m-auto mt-[4rem] lg:hidden" />
      </nav>

      <div class="flex items-center">
        <div class="md:flex">
          <li>
            <a class="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-indigo-600 transition hover:fill-lightgreen md:block"
              href="/">
              <user />
            </a>
          </li>
          <li>
            <a class="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-indigo-600 transition hover:text-indigo-600/75 md:block"
              href="/">
              <shoppingBag />
            </a>
          </li>
        </div>

        <button class="relative z-10 flex flex-col justify-between w-8 h-5 lg:hidden" @click="activeMenu = !activeMenu">
          <div class="ease h-[2px] w-full transform rounded-full bg-black transition duration-300"
            :class="{ 'translate-y-[9px] rotate-45 bg-black': activeMenu }"></div>
          <div class="ease h-[2px] w-full transform rounded-full bg-black transition duration-300"
            :class="{ 'bg-black opacity-0': activeMenu }"></div>
          <div class="ease h-[2px] w-full transform rounded-full bg-black transition duration-300"
            :class="{ '-translate-y-[9px] -rotate-45 bg-black': activeMenu }"></div>
        </button>

      </div>
    </div>

  </header>
</template>
