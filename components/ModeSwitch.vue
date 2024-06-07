<template>
  <Icon :name="currentIcon" class="text-xl text-gray-500 cursor-pointer hover:text-purple-900"
    aria-label="Toggle dark mode" @click="toggleTheme" />
</template>

<script setup lang="ts">
const currentIcon = ref('material-symbols:light-mode');

useHead({
  script: [
    {
      children: `
        const isDarkMode = localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
        if (isDarkMode) {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      `,
    },
  ],
});

function toggleTheme() {
  const isDarkMode = document.documentElement.classList.contains('dark');
  if (isDarkMode) {
    document.documentElement.classList.remove('dark');
    localStorage.theme = 'light';
    currentIcon.value = 'material-symbols:light-mode';
  } else {
    document.documentElement.classList.add('dark');
    localStorage.theme = 'dark';
    currentIcon.value = 'material-symbols:dark-mode';
  }
}
</script>