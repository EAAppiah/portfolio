<template>
  <div>
    <section id="banner">
      <div class="content">
        <header>
          <h1>About Me</h1>
          <span>I love answers!<br><br>
            Previously an Amazon Software Engineer and I am always thinking about code and this passion often leads me to
            solve my coding problem, while I’m jogging, playing guitar, watching physics documentaries, or cooking fajitas
            for breakfast. I'll figure out the answer then rush to my computer to see it work. <br><br>
            My name is Shawn Charles. I’m a passionate child of parents who emigrated from Guyana, passionate about
            creating community within the tech space, And a passionate software engineer who will do whatever it takes to
            find an answer. <br><br>

            Get in touch to find the next answer together!</span><br><br>
        </header>
        <!-- <p>Mini Del-Blurb saying why anyone would want to click on that button below and learn more about me.</p> -->
        <ul class="actions">
          <li><a href="/Resume" download="ShawnCharles-Resume" class="button primary icon solid fa-download">Resume</a>
          </li>
        </ul>
      </div>
      <span class="image object">
        <!-- <img src="images/headshot.jpg" alt=""> -->
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