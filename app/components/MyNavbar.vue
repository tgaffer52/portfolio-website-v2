<template>
  <nav
    class="fixed top-0 w-full h-[60px] bg-zinc-950/95 backdrop-blur border-b border-zinc-800 z-50"
  >
    <div class="px-4 h-full flex items-center justify-between">
      <!-- Logo/Brand -->
      <NuxtLink
        to="/"
        class="text-white font-bold text-lg hover:text-gray-300 transition macondo"
      >
        TG
      </NuxtLink>

      <!-- Desktop Navigation -->
      <div class="hidden md:flex h-full">
        <NuxtLink to="/about" class="nav-link"> About </NuxtLink>
        <NuxtLink to="/case-studies" class="nav-link"> Case Studies </NuxtLink>
        <NuxtLink to="/portfolio" class="nav-link"> Portfolio </NuxtLink>
      </div>

      <!-- Mobile Hamburger Menu -->
      <button
        class="md:hidden flex items-center justify-center w-10 h-10 relative"
        @click="isMenuOpen = !isMenuOpen"
        aria-label="Toggle menu"
      >
        <div class="w-6 flex flex-col gap-1.5">
          <span
            class="w-full h-0.5 bg-white rounded transition-all duration-300"
            :class="{ 'transform rotate-45 translate-y-2': isMenuOpen }"
          />
          <span
            class="w-full h-0.5 bg-white rounded transition-all duration-300"
            :class="{ 'opacity-0': isMenuOpen }"
          />
          <span
            class="w-full h-0.5 bg-white rounded transition-all duration-300"
            :class="{ 'transform -rotate-45 -translate-y-2': isMenuOpen }"
          />
        </div>
      </button>
    </div>

    <!-- Mobile Menu Sidebar -->
    <transition
      enter-active-class="transition-all duration-300"
      leave-active-class="transition-all duration-300"
      enter-from-class="opacity-0"
      leave-to-class="opacity-0"
    >
      <div
        v-if="isMenuOpen"
        class="fixed inset-0 bg-black/50 backdrop-blur z-40 md:hidden"
        @click="isMenuOpen = false"
      />
    </transition>

    <transition
      enter-active-class="transition-all duration-300"
      leave-active-class="transition-all duration-300"
      enter-from-class="translate-x-full"
      leave-to-class="translate-x-full"
    >
      <div
        v-if="isMenuOpen"
        class="fixed top-[60px] right-0 w-64 h-[calc(100vh-60px)] bg-black/95 backdrop-blur border-l border-zinc-800 z-40 md:hidden flex flex-col p-6 gap-4"
      >
        <NuxtLink
          to="/about"
          class="hamburger-nav-link"
          @click="isMenuOpen = false"
        >
          About
        </NuxtLink>
        <NuxtLink
          to="/case-studies"
          class="hamburger-nav-link"
          @click="isMenuOpen = false"
        >
          Case Studies
        </NuxtLink>
        <NuxtLink
          to="/portfolio"
          class="hamburger-nav-link"
          @click="isMenuOpen = false"
        >
          Portfolio
        </NuxtLink>
      </div>
    </transition>
  </nav>
</template>

<script setup lang="ts">
import { ref } from "vue";

const isMenuOpen = ref(false);
</script>

<style scoped>
/* Smooth transitions for hamburger menu */
.nav-link {
  @apply w-28 h-full px-2 flex justify-center items-center text-gray-300 hover:text-white hover:bg-fuchsia-800 transition-colors duration-300;
}

.hamburger-nav-link {
  @apply text-gray-300 hover:text-white transition-colors duration-200 py-2 text-lg;
}
</style>
