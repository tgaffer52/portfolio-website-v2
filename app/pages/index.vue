<template>
  <div class="relative w-full h-screen overflow-hidden bg-black">
    <!-- Background canvas for swirls -->
    <canvas ref="canvas" class="absolute inset-0 w-full h-full" />

    <!-- Content -->
    <div class="hero-container">
      <div class="hero-content">
        <h1 class="hero-title mb-4">Trevor Gaffney</h1>
        <p class="hero-subtitle mb-8">Full Stack Software Engineer</p>
        <div class="p-8 bg-zinc-900/80 rounded-lg">
          <table class="mx-auto text-gray-200">
            <thead>
              <tr>
                <th>Design</th>
                <th>Front-End</th>
                <th>Back-End</th>
                <th>Database</th>
                <th>Cloud Computing</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <!-- Design -->
                <td>Figma</td>
                <!-- Front-End -->
                <td>Vue.js / Nuxt.js</td>
                <!-- Back-End -->
                <td>Node.js</td>
                <!-- Database -->
                <td>PostgreSQL</td>
                <!-- Cloud Computing -->
                <td>AWS</td>
              </tr>
              <tr>
                <!-- Design -->
                <td />
                <!-- Front-End -->
                <td>React.js / Next.js</td>
                <!-- Back-End -->
                <td>Python</td>
                <!-- Database -->
                <td>MySQL</td>
                <!-- Cloud Computing -->
                <td>Azure</td>
              </tr>
              <tr>
                <!-- Design -->
                <td />
                <!-- Front-End -->
                <td>Tailwind CSS</td>
                <!-- Back-End -->
                <td>FastAPI</td>
                <!-- Database -->
                <td>DyanmoDB</td>
                <!-- Cloud Computing -->
                <td>Terraform</td>
              </tr>
              <tr>
                <!-- Design -->
                <td />
                <!-- Front-End -->
                <td>Material UI</td>
                <!-- Back-End -->
                <td>MySQLAlchemy</td>
                <!-- Database -->
                <td />
                <!-- Cloud Computing -->
                <td />
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Footer -->
      <Footer />
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

canvas {
  animation: fadeIn 5.5s;
}

.hero-title {
  @apply text-6xl font-bold text-white drop-shadow-lg;
}

.hero-subtitle {
  @apply text-2xl text-gray-200 drop-shadow-md;
}

.hero-container {
  @apply relative inset-0 flex items-center justify-center pointer-events-none;
}

.hero-content {
  @apply text-center;
  animation: fadeIn 1.5s ease-in;
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
</style>
