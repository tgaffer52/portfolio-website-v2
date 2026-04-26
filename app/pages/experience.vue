<template>
  <div>
    <div class="relative background-gradient z-10 p-4 md:p-20 md:pb-10">
      <h1 class="fade-in-element fade-in-1 pb-4">Project Experience</h1>
      <div
        v-for="(row, index) in parsedData"
        :key="index"
        class="case fade-in-element"
        :style="`animation-delay: ${(index + 1) * 0.3}s`"
      >
        <div class="md:flex w-full justify-between items-end border-b pb-2">
          <div>
            <h4 class="text-neutral-400">{{ row.role }}</h4>
            <h3>{{ row.title }}</h3>
          </div>
          <div class="flex gap-2">
            <h4 class="timeline">{{ row.from.toUpperCase() }}</h4>
            <span v-if="row.to" class="flex gap-2">
              <Icon name="tdesign:swap-right" class="self-center mt-2" />
              <h4 class="timeline">{{ row.to.toUpperCase() }}</h4>
            </span>
          </div>
        </div>
        <ul class="list-none p-5">
          <li
            v-for="(content, conIndex) in row.content"
            :key="conIndex"
            class="list-none flex items-start justify-start text-start gap-2"
          >
            <div class="">
              <Icon name="tdesign:swap-right" />
            </div>
            <p class="text-start">
              {{ content }}
            </p>
          </li>
        </ul>
        <div class="tag-list mb-10">
          <span v-for="tag in row.tags" :key="tag" class="tag">{{ tag }} </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import Papa from "papaparse";
// 1. Import the CSV as a raw text string using ?raw
import rawCsv from "~/assets/data/project-experience.csv?raw";

type CaseStudy = {
  title: string;
  role: string;
  from: string;
  to: string;
  content: string[];
  tags: string[];
};

const parsedData = ref([] as CaseStudy[]);

// 2. Parse the string into an array of JavaScript objects
const result = Papa.parse(rawCsv, {
  header: true, // Treats the first row as object keys (e.g., row.Title, row.Content)
  skipEmptyLines: true,
});

result.data.forEach(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (caseStudy: any) => {
    caseStudy.content = caseStudy.content.split("\n");
    caseStudy.tags = caseStudy.tags.split("\n");
  },
);

parsedData.value = result.data as CaseStudy[];
</script>
<style scoped lang="scss">
h1 {
  @apply text-4xl font-bold mb-4;
}
h2 {
  @apply text-2xl font-semibold mt-8 mb-6;
}
h3 {
  @apply text-xl font-semibold;
}
.timeline {
  @apply text-lg text-slate-300 mt-2;
}

p {
  @apply mb-4 whitespace-pre-wrap;
}

.tag {
  @apply inline-block border border-blue-400 bg-blue-950/50 text-blue-200 px-3 py-1 rounded-full text-sm mr-2 mb-2;
}

.link {
  @apply text-blue-200 hover:text-blue-400 transition-colors duration-200 mb-4;
}

.background-gradient {
  background: radial-gradient(
    circle at 40% 60%,
    rgba(102, 11, 85, 0.6) 0%,
    rgba(49, 5, 43, 0.5) 50%,
    rgba(5, 2, 23, 0.95) 100%
  );
  background-size: 200% 200%;
}
</style>
