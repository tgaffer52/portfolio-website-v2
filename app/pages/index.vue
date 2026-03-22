<template>
  <div
    class="relative w-full min-h-[calc(100dvh-44px)] overflow-hidden bg-black"
  >
    <!-- Background canvas for swirls -->
    <canvas ref="canvas" class="absolute inset-0 w-full h-full" />

    <!-- Content -->
    <div class="hero-container">
      <div class="hero-content">
        <h1 class="hero-title mb-4 macondo">Trevor Gaffney</h1>
        <p class="hero-subtitle mb-8">Full Stack Software Engineer</p>
        <div class="skills-row grid grid-cols-5 gap-4 px-10">
          <!-- Front-end -->
          <div class="skill-module col-span-3 skill-module-1">
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
          <div class="skill-module col-span-2 skill-module-2">
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
          <div class="skill-module skill-module-3">
            <h2 class="skill-module-header">Design</h2>
            <div class="skill-list">
              <div class="skill-item">
                <Icon name="logos:figma" />
                figma
              </div>
            </div>
          </div>
          <!-- Database -->
          <div class="skill-module col-span-2 skill-module-4">
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
          <div class="skill-module col-span-2 skill-module-5">
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
        <div class="action-row">
          <button>Learn more about me</button>
          <button>View my works</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
// import "~/assets/styles/index.css";

const canvas = ref<HTMLCanvasElement | null>(null);

onMounted(async () => {
  if (!canvas.value) return;

  // Import the fluid simulation
  const { default: initFluidSim } = await import("~/utils/webgl-fluid.js");

  // Initialize it (the library expects to find a canvas element)
  // @ts-expect-error This expression is not callable, but it is.
  initFluidSim();
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
  @apply text-2xl text-gray-200 drop-shadow-md;
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
