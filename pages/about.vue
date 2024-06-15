<template>
  <main
    class="dark:bg-white bg-[#080808] transition-colors duration-1000 ease-in-out overflow-hidden h-screen px-4 ml-0 md:ml-[325px]">
    <div class="max-w-5xl xl:max-w-6xl w-full mx-auto flex flex-col mt-2 px-0 lg:px-8">
      <section id="banner" class="flex flex-col-reverse lg:flex-row items-center justify-center">
        <div>
          <header class="block mt-4 lg:mt-0">
            <div class="flex flex-col h-full justify-center">
              <h1
                class="text-2xl hidden md:text-5xl font-semibold leading-tight dark:text-gray-700 mb-4 text-center text-white">
                About
                Me
              </h1>
              <h1 class="hidden lg:flex text-5xl font-semibold leading-tight dark:text-gray-700 mb-4 text-white">About
                Me
              </h1>
              <span class="dark:text-black text-slate-300 my-4 max-w-2xl text-balance"><strong
                  class="text-white dark:text-black">I love
                  answers!</strong><br><br>
                I build my applications with React & Vue.js. I prioritize in meeting client requirements, and
                do whatever it takes to
                find an answer with them.<br><br>
                I love things for the web and learning about new ideas and techniques for productivity and workflows.
                <br><br>
                <strong class="text-white dark:text-black">Domain Experience so far:</strong> <span
                  class="text-purple-600"><strong>Health
                    & Freelancing</strong></span> <br><br>
                Get in touch to find the next answer together!</span><br><br>
            </div>
          </header>

          <div class="text-center md:text-left">
            <a href="/Resume.pdf" download="Resume.pdf"
              class="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-3.5 text-center me-2 mb-2">
              <Icon name="ri:download-cloud-2-line" class="mr-2" /> RESUME
            </a>
          </div>
        </div>
        <span class="lg:hidden sm:-mt-14">
          <img src="assets/images/work.jpg" alt="Profile pic" class="rounded-full w-32 h-32">
        </span>
        <span class="hidden lg:flex mr-16">
          <img src="assets/images/vue-react.jpeg" alt="Profile pic" width="800px" class="rounded">
        </span>
      </section>
    </div>
  </main>
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
  align-items: center;
}

#banner h1 {
  margin-top: -0.125em;
}

/* .text {} */
</style>
