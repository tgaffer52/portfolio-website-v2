<template>
  <div class="content">
    <h1>Professional Case Studies</h1>
    <p>
      These are projects I have worked on in my professional capacity at Ferix
      Inc.
    </p>
    <h3>
      Improve and Create Features for a Automotive Parts Stock Order Management
      System
    </h3>
    <div class="tag-list">
      <span class="tag">PHP</span>
      <span class="tag">HTML</span>
      <span class="tag">JavaScript</span>
    </div>
    <div class="timeline">JANUARY 2026 - FEBRUARY 2026</div>
    <p>
      As the project leader, I led a team of 3 on a project to improve the
      outdated automotive parts ordering system, including adding a feature to
      save past orders, enhancing the security features by restricting admin
      priviliges behind designated ip addresses, and fixing various bugs related
      to the outdated cookie-based data storage features.
    </p>
    <p>
      I solidified requirements, created a project schedule, assigned tasks, and
      met regularly with the client to ensure creative direction was aligned.
    </p>
    <p>
      I created the environment and infrastructure to view and test the php
      website, including spinning up an Amazon EC2 instance and dockerized
      container that supported PHP 7.
    </p>
  </div>
</template>
<style scoped>
h1 {
  @apply text-4xl font-bold mb-4;
}
h2 {
  @apply text-2xl font-semibold mt-8 mb-6;
}
h3 {
  @apply text-xl font-semibold mt-6 mb-2;
}

p {
  @apply mb-4;
}

.tag {
  @apply inline-block border border-blue-400 bg-blue-950/50 text-blue-200 px-3 py-1 rounded-full text-sm mr-2 mb-2;
}

.link {
  @apply text-blue-200 hover:text-blue-400 transition-colors duration-200 mb-4;
}
</style>
