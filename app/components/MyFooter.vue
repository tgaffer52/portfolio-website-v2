<template>
  <footer class="w-full bg-zinc-800 py-2 text-center text-gray-400 text-sm">
    <div class="flex w-full justify-between items-center px-4">
      <p>© 2026 Trevor Gaffney. All rights reserved.</p>
      <div class="flex gap-4 justify-center items-center">
        <a
          href="https://github.com/tgaffer52"
          target="_blank"
          rel="noopener noreferrer"
          class="hover:text-white transition text-xl"
        >
          <Icon name="uil:github" />
        </a>
        <button
          class="hover:text-white transition cursor-pointer text-xl"
          @click="sendEmail"
        >
          <Icon name="uil:envelope" />
        </button>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
// Obfuscated email (ROT13 encoded)
const obfuscatedEmail = "gtnssre52@tznvy.pbz";

function rot13(str: string): string {
  return str.replace(/[a-zA-Z]/g, (c) => {
    const code = c.charCodeAt(0);
    const base = code <= 90 ? 65 : 97;
    return String.fromCharCode(base + ((code - base + 13) % 26));
  });
}

function sendEmail() {
  const email = rot13(obfuscatedEmail);
  window.location.href = `mailto:${email}`;
}
</script>

<style scoped></style>
