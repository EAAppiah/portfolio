<template>
  <div>
    <section id="banner" class="flex flex-col-reverse lg:flex-row items-center justify-center">
      <div class="content sm:mx-6 lg:mx-16 flex-1">
        <header class="block mt-4 lg:mt-0">
          <div class="flex flex-col h-full justify-center">
            <h1 class="sm:text-2xl lg:hidden font-semibold leading-tight text-gray-700">Hi, I’m Elvis, Your Next Software Engineer</h1>
            <h1 class="hidden lg:flex text-6xl font-semibold leading-tight text-gray-700 text-balance">Hi, I’m Elvis,<br> Your Next Software Engineer</h1>
              <p class="tracking-wider text-gray-600 md:text-sm dark:text-gray-400 uppercase mt-4 mb-4">Ready to Change The
                World?
              </p>
          </div>
        </header>

        <button
          class="relative inline-flex items-center justify-center p-0.5 me-2 overflow-hidden text-sm font-medium text-purple-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
          <span
            class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            <Nuxt-link to="/about">MEET ME👋</Nuxt-link>
          </span>
        </button>
      </div>
      <span class="lg:hidden">
        <img src="assets/images/work.jpg" alt="Profile pic" class="rounded w-full h-auto">
      </span>
      <span class="mr-16 hidden xl:hidden lg:flex">
        <img src="assets/images/work.jpg" alt="Profile pic" width="400px" height="400px" class="rounded">
      </span>
      <span class="mr-16 hidden xl:block">
        <img src="assets/images/work.jpg" alt="Profile pic" width="600px" height="400px" class="rounded">
      </span>
    </section>
  </div>
</template>

<style>
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: 'Roboto Slab', sans-serif;
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
  align-items: center;
}

#banner h1 {
  margin-top: -0.125em;
}
</style>
