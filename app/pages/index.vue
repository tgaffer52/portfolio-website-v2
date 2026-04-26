<template>
  <div
    class="relative p-10 w-full min-h-[calc(100dvh-44px)] overflow-hidden bg-black"
  >
    <!-- Background canvas for swirls -->
    <canvas ref="fluidCanvas" class="absolute inset-0 w-full h-full" />

    <!-- Content -->
    <div class="hero-container">
      <div
        class="fixed w-screen top-[120px] macondo text-[20rem] text-amber-400/10 text-center"
      >
        TG
      </div>
      <div class="hero-content">
        <h1 class="hero-title mb-4">Trevor Gaffney</h1>
        <p class="hero-subtitle mb-8 text-white/50">
          Full Stack Software Engineer
        </p>
        <!-- <div class="action-row">
          <button>About</button>
          <button>Experience</button>
          <button>Portfolio</button>
        </div> -->
        <div class="skills-row grid grid-cols-12 gap-4">
          <!-- Front-end -->
          <div class="skill-module col-span-6 skill-module-1">
            <h2 class="skill-module-header">Front-End</h2>
            <div class="skill-list">
              <div class="skill-item">
                <Icon name="devicon:vuejs" />
                Vue.js
              </div>
              <div class="skill-item">
                <Icon name="devicon:nuxt" />
                Nuxt.js
              </div>
              <div class="skill-item">
                <Icon name="devicon:react" />
                React
              </div>
              <div class="skill-item">
                <Icon name="devicon:nextjs" />
                Next.js
              </div>
              <div class="skill-item">
                <Icon name="devicon:tailwindcss" />
                Tailwind CSS
              </div>
            </div>
          </div>
          <!-- Back-end -->
          <div class="skill-module col-span-6 skill-module-2">
            <h2 class="skill-module-header">Back-End</h2>
            <div class="skill-list">
              <div class="skill-item">
                <Icon name="devicon:nodejs" />
                Node.js
              </div>
              <div class="skill-item">
                <Icon name="devicon:python" />
                Python
              </div>
              <div class="skill-item">
                <Icon name="devicon:fastapi" />
                FastAPI
              </div>
              <div class="skill-item">
                <Icon name="devicon:php" />
                PHP
              </div>
            </div>
          </div>
          <!-- Design -->
          <div class="skill-module col-span-4 skill-module-3">
            <h2 class="skill-module-header">Design</h2>
            <div class="skill-list">
              <div class="skill-item">
                <Icon name="logos:figma" />
                figma
              </div>
              <div class="skill-item">
                <Icon name="logos:adobe-icon" />
                Adobe
              </div>
            </div>
          </div>
          <!-- Database -->
          <div class="skill-module col-span-4 skill-module-4">
            <h2 class="skill-module-header">Database</h2>
            <div class="skill-list">
              <div class="skill-item">
                <Icon name="devicon:mysql" />
                MySQL
              </div>
              <div class="skill-item">
                <Icon name="devicon:postgresql" />
                PostgreSQL
              </div>
            </div>
          </div>
          <!-- Cloud -->
          <div class="skill-module col-span-4 skill-module-5">
            <h2 class="skill-module-header">Cloud</h2>
            <div class="skill-list">
              <div class="skill-item">
                <Icon name="skill-icons:aws-light" />
                AWS
              </div>
              <div class="skill-item">
                <Icon name="devicon:azure" />
                Azure
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";

const fluidCanvas = ref(null);
let stopFluid: (() => void) | null = null;
let observer: ResizeObserver | null = null;

onMounted(async () => {
  // Import the refactored script
  const { default: initFluid } = await import("~/utils/webgl-fluid.js");

  // 2. Create a ResizeObserver to watch the canvas
  observer = new ResizeObserver((entries) => {
    if (entries[0]) {
      const { width, height } = entries[0].contentRect;

      // 3. Only initialize if the canvas actually has a physical size > 0
      if (width > 0 && height > 0 && !stopFluid) {
        stopFluid = initFluid(fluidCanvas.value);

        // Once it successfully starts, we don't need to observe initialization anymore
        if (observer) {
          observer.disconnect();
        }
      }
    }
  });

  // Start watching the canvas!
  if (fluidCanvas.value) {
    observer.observe(fluidCanvas.value);
  }
});

onBeforeUnmount(() => {
  // Cleanup WebGL
  if (stopFluid) {
    stopFluid();
  }
  // Cleanup the observer if the user leaves before the canvas even loads
  if (observer) {
    observer.disconnect();
  }
});
</script>

<style lang="scss" scoped>
/* stylelint-disable */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes flashBlue {
  0%,
  100% {
    box-shadow:
      0 0 10px rgba(255, 165, 0, 0),
      inset 0 0 10px rgba(0, 144, 151, 0);
  }
  50% {
    box-shadow:
      0 0 20px rgba(0, 140, 150, 0.8),
      inset 0 0 20px rgba(140, 150, 0, 0.4);
  }
}

canvas {
  animation: fadeIn 5s ease-in forwards;
}

.skill-module {
  @apply px-8 py-4 bg-zinc-900/80 rounded-lg;
  animation: fadeIn 1.5s ease-in forwards;
  opacity: 0;
}

.skill-module-1 {
  animation-delay: 0s;
}

.skill-module-2 {
  animation-delay: 0.3s;
}

.skill-module-3 {
  animation-delay: 0.6s;
}

.skill-module-4 {
  animation-delay: 0.9s;
}

.skill-module-5 {
  animation-delay: 1.2s;
}

.skill-module-header {
  @apply text-xl font-bold mb-4;
}

.skill-list {
  @apply flex flex-wrap justify-center gap-4;
}

.skill-item {
  @apply p-2 rounded-lg border border-zinc-700;
  box-shadow: inset 0 -1px 5px rgba(198, 198, 198, 0.4);
}

.hero-title {
  @apply text-6xl font-bold drop-shadow-lg;
}

.hero-subtitle {
  @apply text-2xl text-gray-400 drop-shadow-md;
}

.hero-container {
  @apply relative inset-0 flex items-center justify-center pointer-events-none;
}

.hero-content {
  @apply text-center;
  animation: fadeIn 1.5s ease-in forwards;
}

th {
  @apply px-6 py-2 text-center font-semibold border-b border-gray-400;
}

td {
  @apply px-6 py-2;
}

canvas {
  @apply absolute inset-0 w-full h-full;
}

.action-row {
  @apply flex gap-4 justify-center my-8 pointer-events-auto;
}

.action-row button {
  @apply px-6 py-3 border border-blue-300 rounded-lg font-medium transition-colors duration-200 hover:bg-blue-500 hover:text-white;
  animation: flashBlue 0.6s ease-in-out 2;
  animation-delay: 3s;
}
</style>
