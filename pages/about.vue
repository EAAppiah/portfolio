<template>
  <div>
    <section id="banner">
      <div class="content mx-16">
        <header>
          <h1 class="text-5xl font-semibold leading-tight text-gray-700 mb-4">About Me</h1>
          <span class="text dark:text-gray-400 my-4">I love answers!<br><br>
            A multifaceted, hands-on front-end engineer with experience in managing a variety of projects. I am always thinking about code and this passion often leads me to
            solve my coding problem, while I’m jogging, watching physics documentaries, or preparing
            breakfast. I'll figure out the answer then rush to my computer to see it work. <br><br>
            My name is Elvis Appiah. I’m a passionate child of Ghanaian parents, passionate about
            creating community within the tech space, And a passionate software engineer who will do whatever it takes to
            find an answer. <br><br>

            Get in touch to find the next answer together!</span><br><br>
        </header>

        <ul class="actions">
          <li><button href="/assets/resume.pdf" download="resume.pdf"
            class="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
              <span>
                <Icon name="i-pixelarticons-download" class="text-lg mr-2"></Icon>RESUME
              </span>
            </button>
          </li>
        </ul>
      </div>
      <span class="mr-16">
        <img src="assets/images/work.jpg" alt="Profile pic" class="rounded">
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

.text {}
</style>