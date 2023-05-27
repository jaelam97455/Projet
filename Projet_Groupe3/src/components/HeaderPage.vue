<script setup lang="ts">
import user from "./icons/user.vue";
import shoppingBag from "./icons/shoppingBag.vue";
import logoLong from "./icons/logoLong.vue";
import { RouterLink } from 'vue-router'
</script>

<template>
  <header aria-label="Header" class="mt-5 bg-white">
    <div class="flex items-center h-16 max-w-screen-xl gap-8 px-4 mx-auto md:px-6 lg:px-8">
      <logoLong />

      <div class="flex items-center justify-end flex-1 gap-10">
        <nav aria-label="Site Nav" class="hidden md:block">
          <ul class="items-center hidden gap-6 text-sm text-gray-500 lg:flex">
            <li>
              <a class="transition hover:text-gray-700" href="/"> Nos produits </a>
            </li>
            <li>
              <a class="transition hover:text-gray-700" href="/"> Nos cagettes </a>
            </li>
            <li>
              <a class="transition hover:text-gray-700" href="/"> Déposer des produits </a>
            </li>
            <li>
              <a class="transition hover:text-gray-700" href="/"> À propos </a>
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
          <button class="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden">
            <span class="sr-only">Toggle menu</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"
              stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </header>
</template>
