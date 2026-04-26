<template>
  <nav
    class="fixed top-0 w-screen h-[60px] bg-zinc-950/95 backdrop-blur border-b border-zinc-800 z-50"
  >
    <div class="px-4 h-full flex items-center justify-between">
      <!-- Logo/Brand -->
      <NuxtLink
        to="/"
        class="text-emerald-600 font-bold text-lg hover:text-emerald-300 transition macondo"
      >
        TG
      </NuxtLink>

      <!-- Desktop Navigation -->
      <div ref="navRef" class="relative hidden md:flex h-full">
        <div class="sliding-indicator" :style="indicatorStyle" />
        <NuxtLink to="/about" class="nav-group relative group">
          <div class="nav-background" />
          <div class="nav-link">About</div>
        </NuxtLink>
        <NuxtLink to="/experience" class="nav-group relative group">
          <div class="nav-background" />
          <div class="nav-link">Experience</div>
        </NuxtLink>
        <NuxtLink to="/portfolio" class="nav-group relative group">
          <div class="nav-background" />
          <div class="nav-link">Portfolio</div>
        </NuxtLink>
      </div>

      <!-- Mobile Hamburger Menu -->
      <button
        class="md:hidden flex items-center justify-center w-10 h-10 relative"
        aria-label="Toggle menu"
        @click="isMenuOpen = !isMenuOpen"
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
        class="fixed inset-0 bg-black/50 z-40 md:hidden"
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
        class="fixed top-[60px] right-0 w-32 bg-zinc-950/95 backdrop-blur border-l border-zinc-800 z-40 md:hidden flex flex-col"
      >
        <NuxtLink
          to="/about"
          class="hamburger-nav-link"
          @click="isMenuOpen = false"
        >
          About
        </NuxtLink>
        <NuxtLink
          to="/experience"
          class="hamburger-nav-link"
          @click="isMenuOpen = false"
        >
          Experience
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
import { useWindowSize } from "@vueuse/core";

const isMenuOpen = ref(false);
const route = useRoute();
const { width, height } = useWindowSize();
const navRef: Ref<HTMLDivElement | null> = ref(null);

// State to hold the position and width of the slider
const indicatorStyle = ref({
  left: "0px",
  width: "0px",
  opacity: 0, // Starts hidden to prevent jumping on first load
});

// The function that calculates where the slider should go
const updateIndicator = () => {
  if (!navRef.value) return;

  // Nuxt automatically adds the 'router-link-active' class to the current page's link
  const activeLink: HTMLDivElement | null = navRef.value.querySelector(
    ".router-link-active",
  );

  if (activeLink) {
    indicatorStyle.value = {
      left: `${activeLink.offsetLeft}px`,
      width: `${activeLink.offsetWidth}px`,
      opacity: 1,
    };
  } else {
    // If no active link (e.g., on a non-nav page), hide the indicator
    indicatorStyle.value.opacity = 0;
  }
};

// 1. Run once the component mounts
onMounted(() => {
  if (width.value < 768) return; // Skip on mobile to avoid unnecessary calculations
  // nextTick ensures the fonts/DOM have finished rendering before we measure
  nextTick(() => {
    updateIndicator();

    // Optional but recommended: Recalculate if the user resizes their browser window
    window.addEventListener("resize", updateIndicator);
  });
});

// 2. Run every time the page route changes
watch(
  () => route.path,
  () => {
    nextTick(updateIndicator);
  },
);
</script>

<style scoped lang="scss">
.nav-link {
  @apply w-28 h-full px-2 flex justify-center items-center text-gray-300 group-hover:text-white transition-all duration-300;
}

.nav-background {
  @apply absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100;
  background: radial-gradient(
    circle,
    rgba(52, 211, 153, 0.1) 0%,
    rgba(52, 211, 153, 0) 90%
  );
}

.hamburger-nav-link {
  @apply text-gray-300 hover:text-white transition-colors duration-200 p-4 text-lg;
  &.router-link-active {
    background: radial-gradient(
      circle,
      rgba(52, 211, 153, 0) 0%,
      rgba(52, 211, 153, 0.1) 90%
    );
  }
  &:active {
    @apply bg-emerald-600/10;
  }
}

.sliding-indicator {
  position: absolute;
  top: 0; /* Matches the padding of the nav-container */
  bottom: 0;
  z-index: 0; /* Keeps it behind the text */

  /* The smooth slide animation */
  transition: all 0.4s cubic-bezier(0.25, 1, 0.5, 1);

  /* Your requested visuals: Box Shadow & Filter */
  background: radial-gradient(
    circle,
    rgba(52, 211, 153, 0) 0%,
    rgba(52, 211, 153, 0.1) 90%
  );
  backdrop-filter: blur(8px); /* The frosted glass filter effect */
  box-shadow: 0 8px 6px -6px rgba(52, 211, 153, 0.5);
}
</style>
