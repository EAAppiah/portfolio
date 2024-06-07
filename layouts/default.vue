<template>
  <!-- <div class="w-screen h-screen flex overflow-x-hidden dark:bg-slate-900"> -->

  <!-- SIDE BAR -->
  <Sidebar />

  <!-- NAVBAR -->
  <NavBar />

  <slot />
  <!-- </div> -->
</template>

<script setup lang="ts">

useHead({
  title: 'Elvis Appiah Portfolio',
  meta: [
    { name: 'description', content: 'Elvis Appiah Portfolio' }
  ],
})
</script>

<style scoped>
body {
  font-family: 'Open Sans', sans-serif;
  font-weight: 400;
}

header.msg> :last-child {
  border-bottom: solid 3px purple;
  display: inline-block;
  margin: 0 0 2em 0;
  padding: 0 0.75em 0.5em 0;
}

#banner {
  padding: 73.333px 0 44px;
  display: flex;
  justify-content: space;
}

#banner h1 {
  margin-top: -0.125em;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: 'Roboto Slab', sans-serif;
}
</style>