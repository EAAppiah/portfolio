<template>
  <main
    class="dark:bg-white bg-[#080808] transition-colors duration-1000 ease-in-out overflow-hidden px-4 ml-0 lg:ml-[325px]"
  >
    <div
      class="max-w-5xl xl:max-w-7xl w-full mx-auto flex flex-col mt-2 px-0 lg:px-8"
    >
      <!-- Banner Section -->
      <section
        id="banner"
        class="flex flex-col-reverse md:flex-row items-center justify-center py-16"
      >
        <div class="flex-1 mb-8 lg:mb-0">
          <header class="block mt-4 lg:mt-0">
            <div
              class="flex flex-col h-full justify-center text-center md:text-left"
            >
              <h1
                class="text-2xl md:text-4xl lg:text-6xl font-semibold leading-tight dark:text-gray-700 text-white"
              >
                Hi, I'm Elvis,<br />
                Your Next Software Engineer
              </h1>
              <p
                class="tracking-wider dark:text-gray-600 md:text-sm text-slate-300 uppercase mt-4 mb-4"
              >
                Ready to Change The World?
              </p>
            </div>
          </header>

          <div class="text-center md:text-left">
            <a
              href="/about"
              class="animate-pulse text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex items-center"
            >
              MEET ME 👋
            </a>
          </div>
        </div>
        <div class="md:hidden">
          <img
            src="assets/images/work.jpg"
            alt="Profile pic"
            class="rounded w-full -mt-10"
          />
        </div>
        <div class="hidden md:block lg:mr-16 xl:hidden">
          <img
            src="assets/images/work.jpg"
            alt="Profile pic"
            width="400"
            height="400"
            class="rounded"
          />
        </div>
        <div class="hidden xl:block xl:mr-16">
          <img
            src="assets/images/work.jpg"
            alt="Profile pic"
            width="600"
            height="400"
            class="rounded"
          />
        </div>
      </section>

      <!-- Latest Projects -->
      <Projects />
    </div>
  </main>
</template>

<style>
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Roboto Slab", sans-serif;
}

header.msg > :last-child {
  border-bottom: solid 3px purple;
  display: inline-block;
  margin: 0 0 5em 0;
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
