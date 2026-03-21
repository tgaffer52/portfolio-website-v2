<template>
  <footer
    class="absolute bottom-0 w-full py-6 text-center text-gray-400 text-sm"
  >
    <div class="flex gap-6 justify-center items-center">
      <a
        href="https://github.com"
        target="_blank"
        rel="noopener noreferrer"
        class="hover:text-white transition"
      >
        <Icon name="github" />
      </a>
      <button
        class="hover:text-white transition cursor-pointer"
        @click="revealEmail"
      >
        <Icon name="envelope" />
      </button>
    </div>
  </footer>
</template>

<script setup lang="ts">
const emailDisplay = ref("Email");

// Obfuscated email (ROT13 encoded)
const obfuscatedEmail = "grirbe@rknzcyr.pbz"; // Example: trevor@example.com

function rot13(str: string): string {
  return str.replace(/[a-zA-Z]/g, (c) => {
    return String.fromCharCode(
      (c <= "Z" ? 90 : 122) >= (c = c.charCodeAt(0) + 13) ? c : c - 26,
    );
  });
}

function revealEmail() {
  const email = rot13(obfuscatedEmail);
  window.location.href = `mailto:${email}`;
}
</script>

<style scoped></style>
