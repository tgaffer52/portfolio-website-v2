<template>
  <MyNavbar />
  <div class="mt-[59px] min-h-[calc(100dvh-99px)]">
    <NuxtRouteAnnouncer />
    <NuxtPage :transition="{ name: transitionName, mode: 'out-in' }" />
  </div>
  <MyFooter />
</template>
<script setup lang="ts">
import MyNavbar from "~/components/MyNavbar.vue";
import MyFooter from "~/components/MyFooter.vue";
// 1. Create a reactive variable for the transition name
const transitionName = ref("slide-from-right");
const router = useRouter();

// 2. Define your spatial page order
const pageOrder = ["/", "/about", "/experience", "/portfolio"];

// 3. Intercept every route change BEFORE it happens
router.beforeEach((to, from) => {
  const toOrder = pageOrder.findIndex((path) => path === to.path) || 0;
  const fromOrder = pageOrder.findIndex((path) => path === from.path) || 0;

  // Prevent transition on initial load or same-page clicks
  if (to.path === from.path) return;

  // Change the animation direction dynamically
  if (toOrder < fromOrder) {
    transitionName.value = "slide-from-left";
  } else {
    transitionName.value = "slide-from-right";
  }
});
</script>

<style>
/* =========================================
   MOVING RIGHT (Next page comes from the right)
   ========================================= */
.slide-from-right-enter-active,
.slide-from-right-leave-active {
  transition: all 0.4s ease-in-out;
}
.slide-from-right-enter-from {
  opacity: 0;
  transform: translateX(50px);
}
.slide-from-right-leave-to {
  opacity: 0;
  transform: translateX(-50px);
}

/* =========================================
   MOVING LEFT (Next page comes from the left)
   ========================================= */
.slide-from-left-enter-active,
.slide-from-left-leave-active {
  transition: all 0.4s ease-in-out;
}
.slide-from-left-enter-from {
  opacity: 0;
  transform: translateX(-50px);
}
.slide-from-left-leave-to {
  opacity: 0;
  transform: translateX(50px);
}
</style>
