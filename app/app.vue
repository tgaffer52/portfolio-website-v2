<template>
  <MyNavbar />
  <div class="mt-[59px] min-h-[calc(100dvh-44px)]">
    <NuxtRouteAnnouncer />
    <NuxtPage />
  </div>
  <MyFooter />
</template>
<script setup lang="ts">
import MyNavbar from "~/components/MyNavbar.vue";
import MyFooter from "~/components/MyFooter.vue";
</script>
