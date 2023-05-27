<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import user from "./icons/user.vue";
import shoppingBag from "./icons/shoppingBag.vue";
import logoLong from "./icons/logoLong.vue";
import { RouterLink } from 'vue-router'

const activeMenu = ref(false)

function closeMenu() {
  activeMenu.value = false
}

</script>

<template>
  <header aria-label="Header"
    class="fixed z-10 flex items-stretch justify-between w-full px-6 py-2 transition-all duration-300 ease-in-out translate-y-0 bg-white min-h-[72px] lg:py-0">
    <div class="flex items-center">
      <RouterLink to="/index">
        <logoLong />
      </RouterLink>
    </div>
    <div class="flex items-center justify-end flex-1 gap-10">
      <nav aria-label="Site Nav"
        class="fixed inset-0 invisible hidden w-screen h-screen text-2xl transition-all duration-300 ease-in-out opacity-0 md:block bg-indigo"
        :class="{ '!visible opacity-100': activeMenu }" v-scroll-lock="activeMenu">
        <ul class="items-center hidden gap-6 text-sm text-gray-500 lg:flex mt-[25vh] ml-16">
          <li>
            <RouterLink @click="closeMenu" class="transition hover:text-gray-700" to="/"> Nos produits </RouterLink>
          </li>
          <li>
            <RouterLink @click="closeMenu" class="transition hover:text-gray-700" to="/"> Nos cagettes </RouterLink>
          </li>
          <li>
            <RouterLink @click="closeMenu" class="transition hover:text-gray-700" to="/">Déposer des produits</RouterLink>
          </li>
          <li>
            <RouterLink @click="closeMenu" class="transition hover:text-gray-700" to="/"> À propos </RouterLink>
          </li>
        </ul>
      </nav>

      <div class="flex items-center">
        <div class="md:flex md:gap-4">
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

        <button class="relative z-10 flex flex-col justify-between w-8 h-5" @click="activeMenu = !activeMenu">
          <div class="ease h-[2px] w-full transform rounded-full bg-black transition duration-300"
            :class="{ 'translate-y-[9px] rotate-45 bg-white': activeMenu }"></div>
          <div class="ease h-[2px] w-full transform rounded-full bg-black transition duration-300"
            :class="{ 'bg-black opacity-0': activeMenu }"></div>
          <div class="ease h-[2px] w-full transform rounded-full bg-black transition duration-300"
            :class="{ '-translate-y-[9px] -rotate-45 bg-white': activeMenu }"></div>
        </button>

      </div>
    </div>

  </header>
</template>
