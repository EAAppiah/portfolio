<template>
  <div class="w-screen h-screen flex">

    <!-- SIDE BAR -->
    <div class="w-[420px] h-full bg-gray-100" v-show="showSide">

      <!-- Search Form -->
      <SearchForm />

      <!-- Side Bar Links -->

      <div class="py-8 px-4">
        <header class="msg">
          <h2 class="text-lg font-semibold">
            Get in touch
          </h2>
        </header>
        <p class="ml-1 text-sm text-gray-500">Reach out and let's start a conversation!</p>
        <ul class="mt-2">
          <li class="py-4 px-4">
            <span>
              <Icon name="i-bi-envelope-at-fill" class="text-xl text-purple-900"></Icon>
            </span>
            <a name="Email" target="_blank" href="mailto:kageappiah@outlook.com"
              class="ml-3 text-gray-500 text-sm border-dashed border-b border-gray-500 hover:border-purple-900 hover:text-purple-900">
              ElvisAppiah@Outlook.com
            </a>
          </li>
          <hr class="mt-2">
          <li class="py-4 px-4">
            <span>
              <Icon name="i-ri-twitter-x-line" class="text-xl text-purple-900"></Icon>
            </span>
            <a name="Twitter" target="_blank" href="https://twitter.com/dev_kage"
              class="ml-3 text-gray-500 text-sm border-dashed border-b border-gray-500 hover:border-purple-900 hover:text-purple-900">
              ElvisAppiah.com/Twitter
            </a>
          </li>
          <hr class="mt-2">
          <li class="py-4 px-4">
            <span>
              <Icon name="i-akar-icons-linkedinv2-fill" class="text-purple-900 text-xl"></Icon>
            </span>
            <a name="Linked-In" target="_blank" href="https://www.linkedin.com/in/ek-appiah"
              class="ml-3 text-gray-500 text-sm border-dashed border-b border-gray-500 hover:border-purple-900 hover:text-purple-500">
              ElvisAppiah.com/LinkedIn
            </a>
          </li>
          <hr class="mt-2">
          <li class="py-4 px-4">
            <span>
              <Icon name="i-pajamas-github" class="text-xl text-purple-900"></Icon>
            </span>
            <a name="Github" target="_blank" href="https://github.com/EAAppiah"
              class="ml-3 text-gray-500 text-sm border-dashed border-b border-gray-500 hover:border-purple-900 hover:text-purple-900">
              ElvisAppiah.com/Github
            </a>
          </li>
        </ul>
        <hr class="last-hr">
        <!-- footer -->
        <footer id="footer" class="mt-6 text-xs text-gray-500 ml-3">
          <p class="copyright"><em>© KageDevContent</em>. All rights reserved.</p>
        </footer>
      </div>
    </div>


    <!-- Main Page -->
    <div class="w-full h-full p-4">
      <div class="mt-3 z-10">
        <!-- Hambuger menu -->
        <div class="cursor-pointer w-[30px]" @click="toggleSideBar">
          <Icon name="i-material-symbols-keyboard-double-arrow-left" class="w-[40px] h-[40px] text-purple-900"></Icon>
        </div>
      </div>

      <!--   -->
      <header class="mx-14 mt-4">
        <div class="flex justify-between items-center">
          <a class="text-gray-500 hover:text-purple-900" href="/">Changing the World <strong class="">1 line of
              Code</strong> at a time</a>
          <div>
            <ul class="icons flex">
              <li class="mr-2">
                <span>
                  <Icon name="i-material-symbols-dark-mode-outline"
                    class="text-xl text-gray-500 cursor-pointer hover:text-purple-900"></Icon>
                </span>
                <a name="Email" target="_blank" href="mailto:kageappiah@outlook.com">
                </a>
              </li>
              <li class="ml-2">
                <span>
                  <Icon name="i-material-symbols-mail-outline"
                    class="text-xl text-gray-500 cursor-pointer hover:text-purple-900"></Icon>
                </span>
                <a name="Email" target="_blank" href="mailto:kageappiah@outlook.com">
                </a>
              </li>
              <li class="ml-4">
                <span>
                  <Icon name="i-brandico-twitter-bird" class="text-xl text-gray-500 cursor-pointer hover:text-purple-900">
                  </Icon>
                </span>
                <a name="Twitter" target="_blank" href="https://twitter.com/dev_kage">
                </a>
              </li>
              <li class="ml-4">
                <span>
                  <Icon name="i-akar-icons-linkedinv2-fill"
                    class="text-gray-500 text-xl cursor-pointer hover:text-purple-900"></Icon>
                </span>
                <a name="Linked-In" target="_blank" href="https://www.linkedin.com/in/ek-appiah"></a>
              </li>
              <li class="ml-4">
                <span>
                  <Icon name="i-pajamas-github" class="text-xl text-gray-500 cursor-pointer hover:text-purple-900"></Icon>
                </span>
                <a name="Github" target="_blank" href="https://github.com/EAAppiah">
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr style="border: 2px solid #4A1D96; margin-top: 20px">
      </header>


      <section id="banner">
        <div class="content mx-14">
          <header class="block">
            <h1 class="text-5xl">Hi, I’m Elvis,<br> Your Next Software Engineer</h1>
            <p class="tracking-wider text-gray-500 md:text-md dark:text-gray-400 uppercase">Ready to Change The World?</p>
          </header>
          <button
            class="relative inline-flex items-center justify-center p-0.5 mt-5 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
            <span
              class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              MEET ME
            </span>
          </button>
        </div>
        <span class="image object">
          <!-- <img src="images/headshot.jpg" alt=""> -->
        </span>
      </section>
    </div>



  </div>
</template>
<script>
export default {
  data() {
    return {
      showSide: true
    }
  },
  methods: {
    // hide show side bar
    toggleSideBar() {
      this.showSide = !this.showSide

    },
  }

}
</script>

<style>
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
}

#banner .content {
  flex-grow: 1;
  flex-shrink: 1;
  width: 50%;
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
  color: #3d4449;
  font-family: 'Roboto Slab', sans-serif;
  font-weight: 700;
  line-height: 1.5;
  margin: 0 0 1em 0;
  display: block;
}
</style>