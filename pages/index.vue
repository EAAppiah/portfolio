<template>
  <div>
    <section id="banner">
      <div class="content mx-16">
        <header class="block">
          <h1 class="text-6xl font-semibold leading-tight text-gray-700">Hi, I’m Elvis,<br> Your Next Software Engineer</h1>
          <p class="tracking-wider text-gray-600 md:text-sm dark:text-gray-400 uppercase mt-2 mb-4">Ready to Change The
            World?</p>
        </header>
        <button
          class="relative inline-flex items-center justify-center p-0.5 me-2 overflow-hidden text-sm font-medium text-purple-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
          <span
            class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            <Nuxt-link to="/about">MEET ME</Nuxt-link>
          </span>
        </button>
      </div>
      <span class="mr-16">
        <img src="assets/images/work.jpg" alt="Profile pic" width="700" height="400" class="rounded">
      </span>
    </section>
  </div>


</template>

<style>
body {
  font-family: 'Open Sans', sans-serif;
}

header.msg> :last-child {
  border-bottom: solid 3px purple;
  display: inline-block;
  margin: 0 0 2em 0;
  padding: 0 0.75em 0.5em 0;
}

.last-hr {
  border: 2px solid rgba(210, 215, 217, 0.75);
  margin-top: 40px;
}

#banner {
  padding: 73.333px 0 44px;
  display: flex;
  justify-content: space;
}

#banner h1 {
  margin-top: -0.125em;
}

</style>