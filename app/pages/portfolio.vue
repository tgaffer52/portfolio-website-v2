<template>
  <div class="relative">
    <!-- Background gradient -->
    <div class="absolute inset-0" id="bubbleContainer" />
    <div class="content relative xl:p-10">
      <h1 class="text-center">Featured Projects</h1>
      <div class="xl:grid xl:grid-cols-2 gap-12">
        <div class="project-module">
          <h3 class="text-center">Coke's Investigations</h3>
          <img
            src=""
            alt="Coke's Investigations Preview Image"
            class="project-img"
          />
          <div class="tag-list">
            <span class="tag">Vue.js</span>
            <span class="tag">Nuxt.js</span>
            <span class="tag">Tailwind CSS</span>
          </div>
          <div class="timeline">NOVEMBER 2025 - PRESENT</div>
          <div class="link">
            <a
              href="https://cokesinvestigations.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit the Website
            </a>
          </div>
          <p>
            This is a personal side project that serves as a creative writing
            outlet. It's a collection of "blog posts" from a fictional "ghost
            whisperer."
          </p>
        </div>
        <div class="project-module">
          <h3 class="text-center">Darius Ebrahimi Official Site</h3>
          <a
            href="https://dariusebrahimi.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="~/assets/images/darius-site.png"
              alt="Darius Ebrahimi Official Website Preview"
              class="project-img"
            />
          </a>
          <div class="flex justify-between items-center mb-4">
            <div class="tag-list">
              <span class="tag">React.js</span>
              <span class="tag">TypeScript</span>
            </div>
            <div class="timeline text-slate-400">OCTOBER 2023 - PRESENT</div>
          </div>

          <p>
            I designed, created, and maintain the official website for author
            Darius Ebrahimi.
          </p>
          <div class="link">
            <a
              href="https://dariusebrahimi.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit the Website
            </a>
          </div>
        </div>
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
  @apply px-8 py-4 bg-teal-800/10 rounded-xl;

  .project-img {
    @apply w-full aspect-video rounded mb-4 hover:scale-105 transition-transform duration-1000;
  }
}

.tag {
  @apply inline-block border border-blue-400 bg-blue-950/50 text-blue-200 px-3 py-1 rounded-full text-sm mr-2 mb-2;
}

.link {
  @apply text-blue-200 hover:text-blue-400 transition-colors duration-200 mb-4;
}
</style>
