<template>
  <div class="w-screen h-screen flex overflow-x-hidden">

    <!-- SIDE BAR -->
    <div id="bar" class="hidden lg:block" v-show="showSide">
      <!-- Search Form -->
      <div class="alt">
        <form class="p-5 flex items-center">
          <label class="sr-only text-gray-100">Search</label>
          <div class="relative w-full">
            <input type="text" id="table-search" placeholder="Search..."
              class="block ps-3 rounded-md w-full border border-gray-300 text-gray-900 focus:ring-purple-500 focus:border-purple-500 dark:text-white dark:focus:ring-purple-500">
            <span class="absolute right-2 top-1/2 transform -translate-y-1/2 text-lg text-gray-400">
              <Icon name="i-emojione-monotone-magnifying-glass-tilted-right"></Icon>
            </span>
          </div>
        </form>
      </div>

      <!-- Side Bar Links -->

      <div class="py-8 px-4">
        <header class="msg">
          <h2 class="text-lg font-semibold pl-2">
            Get in touch
          </h2>
        </header>
        <p class="p-1 text-sm text-gray-500 tracking-wide">Reach out and let's start a conversation!</p>
        <ul class="mt-4">
          <li class="p-4">
            <span>
              <Icon name="i-bi-envelope-at-fill" class="text-xl text-purple-900 mr-4"></Icon>
            </span>
            <a name="Email" target="_blank" href="mailto:kageappiah@outlook.com"
              class="text-gray-500 text-sm underline underline-offset-4 decoration-dotted tracking-wide hover:text-purple-900">
              ElvisAppiah@Outlook.com
            </a>
          </li>
          <hr class="mt-2">
          <li class="p-4">
            <span>
              <Icon name="i-ri-twitter-x-line" class="text-xl text-purple-900 mr-4"></Icon>
            </span>
            <a name="Twitter" target="_blank" href="https://twitter.com/dev_kage"
              class="text-gray-500 text-sm underline underline-offset-4 decoration-dotted tracking-wide hover:text-purple-900">
              ElvisAppiah.com/Twitter
            </a>
          </li>
          <hr class="mt-2">
          <li class="p-4">
            <span>
              <Icon name="i-akar-icons-linkedinv2-fill" class="text-purple-900 text-xl mr-4"></Icon>
            </span>
            <a name="Linked-In" target="_blank" href="https://www.linkedin.com/in/ek-appiah"
              class="text-gray-500 text-sm underline underline-offset-4 decoration-dotted tracking-wide hover:text-purple-500">
              ElvisAppiah.com/LinkedIn
            </a>
          </li>
          <hr class="mt-2">
          <li class="p-4">
            <span>
              <Icon name="i-pajamas-github" class="text-xl text-purple-900 mr-4"></Icon>
            </span>
            <a name="Github" target="_blank" href="https://github.com/EAAppiah"
              class="text-gray-500 text-sm underline underline-offset-4 decoration-dotted tracking-wide hover:text-purple-900">
              ElvisAppiah.com/Github
            </a>
          </li>
        </ul>
        <hr class="last-hr mx-2">
        <!-- footer -->
        <footer id="footer" class="mt-10 mx-6 tracking-wide">
          <p class="text-xs text-gray-400 "><em>© KageDevContent</em>. All rights reserved.</p>
        </footer>
      </div>
    </div>

    <!-- HEADER SECTION LG SCREENS -->
    <div class="w-full h-full p-4 custom">
      <div class="z-10">

        <!-- HAMBURGER MENU-->
        <div class="flex justify-between items-center">
          <div class="cursor-pointer w-[30px]">
            <Icon name="i-material-symbols-keyboard-double-arrow-left" class="w-[40px] h-[40px] text-purple-900"></Icon>
          </div>

          <div class="md:hidden">
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
                  <Icon name="i-pajamas-github" class="text-xl text-gray-500 cursor-pointer hover:text-purple-900">
                  </Icon>
                </span>
                <a name="Github" target="_blank" href="https://github.com/EAAppiah">
                </a>
              </li>
            </ul>
          </div>
        </div>

        <!--  HEADER LINKS/MSG -->
        <header class="sm:mx-2 lg:mx-16 mt-4">
          <div class="flex justify-between items-center">
            <a class="text-gray-500 hover:text-purple-900" href="/">Changing the World <strong class="">1 line of
                Code</strong> at a time</a>
            <div class="hidden md:block">
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
                    <Icon name="i-brandico-twitter-bird"
                      class="text-xl text-gray-500 cursor-pointer hover:text-purple-900">
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
                    <Icon name="i-pajamas-github" class="text-xl text-gray-500 cursor-pointer hover:text-purple-900">
                    </Icon>
                  </span>
                  <a name="Github" target="_blank" href="https://github.com/EAAppiah">
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <hr style="border: 2px solid #4A1D96; margin-top: 20px">
        </header>
      </div>
      <slot />
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
  
<style scoped>
body {
  font-family: 'Open Sans', sans-serif;
  font-weight: 400;
}

#bar {
  position: fixed;
  background-color: #f5f6f7;
  top: 0;
  left: 0;
  width: 325px;
  height: 100%;
  transition: background 750ms ease-in-out;
}
.alt {
  background-color: #eff1f2;
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

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: 'Roboto Slab', sans-serif;
}

.custom {
  margin-left: 325px;
}

@media (max-width: 768px) {
  .custom {
    margin-left: 0;
  }
}
</style>
