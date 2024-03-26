<template>
  <div>
    <section id="banner" class="flex flex-col-reverse lg:flex-row items-center justify-center">
      <div class="content sm:mx-6 lg:mx-16">
        <header class="block mt-4 lg:mt-0">
          <div class="flex flex-col h-full justify-center">
            <h1 class="sm:text-2xl hidden text-5xl font-semibold leading-tight text-gray-700 mb-4 text-center">About Me</h1>
            <h1 class="hidden lg:flex text-5xl font-semibold leading-tight text-gray-700 mb-4">About Me</h1>
            <span class="text dark:text-gray-400 my-4 max-w-2xl text-balance"><strong>I love answers!</strong><br><br>
              My name is Elvis Appiah. I build with React & Vue.js, and do whatever it takes to
              find an answer with them. <br><br>
              I love things for the web and learning about new ideas and techniques for productivity and workflows. <br><br>
              <strong>Domain Experience so far:</strong> <span class="text-purple-600"><strong>Health Tech</strong></span> <br><br>
              Get in touch to find the next answer together!</span><br><br>
          </div>
        </header>

          <div>
            <a href="/Elvis Appiah-Resume.pdf" download="Resume.pdf"
              class="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-3.5 text-center me-2 mb-2">
              <span>
                <Icon name="i-pixelarticons-download" class="text-lg mr-2"></Icon>RESUME
              </span>
            </a>
          </div>
      </div>
        <span class="lg:hidden sm:-mt-16">
          <img src="assets/images/work.jpg" alt="Profile pic" class="rounded-full w-32 h-32">
        </span>
        <span class="hidden lg:flex mr-16">
          <img src="assets/images/vue-react.jpeg" alt="Profile pic" width="800px" class="rounded">
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
  align-items: center;
}

#banner h1 {
  margin-top: -0.125em;
}

/* .text {} */
</style>
