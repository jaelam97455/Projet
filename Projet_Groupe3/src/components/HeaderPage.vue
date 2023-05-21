<script setup lang="ts">
</script>

<template>
  <header aria-label="Site Header" class="bg-white">
    <div class="flex items-center h-16 max-w-screen-xl gap-8 px-4 mx-auto sm:px-6 lg:px-8">
      <a class="flex items-center justify-center w-12 h-12 text-sm text-white bg-indigo-600 rounded-full" href="/">Logo</a>

      <div class="flex items-center justify-end flex-1 md:justify-between">
        <nav aria-label="Site Nav" class="hidden md:block">
          <ul class="flex items-center gap-6 text-sm text-gray-500">
            <li>
              <a class="transition hover:text-gray-700" href="/"> About </a>
            </li>
            <li>
              <a class="transition hover:text-gray-700" href="/"> Careers </a>
            </li>
            <li>
              <a class="transition hover:text-gray-700" href="/"> History </a>
            </li>
            <li>
              <a class="transition hover:text-gray-700" href="/"> Services </a>
            </li>
            <li>
              <a class="transition hover:text-gray-700" href="/"> Projects </a>
            </li>
          </ul>
        </nav>

        <div class="flex items-center gap-4">
          <div class="sm:flex sm:gap-4">
            <a class="block rounded-md bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-indigo-700" href="/"> Login </a>

            <a class="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-indigo-600 transition hover:text-indigo-600/75 sm:block" href="/"> Register </a>
          </div>

          <button class="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden">
            <span class="sr-only">Toggle menu</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </header>

</template>
