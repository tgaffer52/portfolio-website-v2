<template>
  <div class="relative">
    <!-- Background gradient -->
    <div id="bubbleContainer" class="absolute inset-0" />
    <div class="content relative xl:p-10">
      <h1 class="text-center">Featured Projects</h1>
      <div class="xl:grid xl:grid-cols-2 gap-12">
        <a
          href="https://orange-mushroom-0a61fdc00.7.azurestaticapps.net/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div class="project-module">
            <h3 class="text-center">Koke Investigations</h3>
            <img
              src="~/assets/images/kokes-investigations.webp"
              alt="Koke's Investigations Preview Image"
              class="project-img"
            />

            <div class="timeline">NOVEMBER 2025 - PRESENT</div>

            <p>
              This is a personal side project that serves as a creative writing
              outlet. It's a collection of "case log" posts from a fictional
              ghost whisperer. Hosted on Azure Static Web Apps.
            </p>
            <div class="tag-list">
              <span class="tag">Vue.js</span>
              <span class="tag">Nuxt.js</span>
              <span class="tag">Tailwind CSS</span>
              <span class="tag">TypeScript</span>
              <span class="tag">Azure</span>
            </div>
          </div>
        </a>
        <a
          href="https://dariusebrahimi.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div class="project-module">
            <h3 class="text-center">Darius Ebrahimi Official Site</h3>
            <img
              src="~/assets/images/darius-site.webp"
              alt="Darius Ebrahimi Official Website Preview"
              class="project-img"
            />

            <div class="timeline">OCTOBER 2023 - PRESENT</div>

            <p>
              I designed, created, and maintain the official website for author
              Darius Ebrahimi. Hosted on Netlify with custom domain integration.
            </p>
            <br />
            <div class="tag-list">
              <span class="tag">React.js</span>
              <span class="tag">TypeScript</span>
              <span class="tag">Netlify</span>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import "~/assets/styles/movingbubbles.css";

onMounted(async () => {
  // Import the fluid simulation
  const { default: initBubbles } = await import("~/utils/movingbubbles.js");

  // Initialize it (the library expects to find a canvas element)
  // @ts-expect-error This expression is not callable, but it is.
  initBubbles();
});
</script>
<style scoped lang="scss">
h1 {
  @apply text-4xl font-bold mb-4;
}
h2 {
  @apply text-2xl font-semibold mb-6;
}
h3 {
  @apply text-xl font-semibold mb-2;
}

p {
  @apply mb-4;
}

.project-module {
  @apply px-8 py-4 bg-teal-800/10 rounded-xl hover:bg-teal-800 transition-colors duration-1000;

  &:hover .project-img {
    @apply border-white/50;
  }

  .project-img {
    @apply w-full aspect-video border border-2 border-teal-800/10 rounded mb-4 transition-colors duration-1000 object-cover;
  }
}

.tag {
  @apply inline-block border border-blue-400 bg-blue-950/50 text-blue-300 px-3 py-1 rounded-full text-sm mr-2 mb-2;
}

.link {
  @apply text-blue-200 hover:text-blue-400 transition-colors duration-200 mb-4;
}

.timeline {
  @apply text-slate-400 mb-4;
}
</style>
