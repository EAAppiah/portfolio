<template>
  <div v-if="showSide === 'open'">
  <div :class="{'w-[325px]': showSide === 'open', 'w-[75px]': showSide === 'closed'} min-h-screen bg-gray-100 fixed z-50" v-show="showSide !== 'closed'">
    <!-- Search Form -->
    <div class="alt">
      <form class="py-6 px-4 flex items-center">
        <label class="sr-only">Search</label>
        <div class="relative w-full">
          <input type="text" id="table-search" placeholder="Search..."
            class="block py-2 ps-5 rounded-md w-10/12 border border-gray-300 text-gray-900 focus:ring-purple-500 focus:border-purple-500 dark:text-white dark:focus:ring-purple-500">
          <span class="absolute right-14 top-1/2 transform -translate-y-1/2 text-xl text-gray-400 pr-1">
            <Icon name="i-emojione-monotone-magnifying-glass-tilted-right"></Icon>
          </span>
        </div>
      </form>
    </div>
    <span class="absolute right-2 top-2 transform translate-y-1/2 text-xl text-gray-400 pr-1">
      <Icon name="i-material-symbols-keyboard-double-arrow-left" class="w-[40px] h-[40px] text-purple-900 cursor-pointer"
        @click="toggleSideBar">
      </Icon>
    </span>

          <!-- SideBar links -->
            <div class=" py-8 px-4">
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
              class="ml-3 text-gray-500 tracking-tight text-sm border-dashed border-b border-gray-500 hover:border-purple-900 hover:text-purple-900">
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
</div>
</template>

<script>
export default {
  data() {
    return {
      showSide: 'open',
    }
  },
  methods: {
    // hide show side bar
    toggleSideBar() {
      this.showSide = this.showSide === 'open' ? 'closed' : 'open';

    },
  }

}
</script>

<style scoped>
/* .sidebar {
  min-height: 100vh;
  width: 70px;
  padding: 6px 14px;
  z-index: 99;
  background-color: hsl(220, 14%, 96%);
  transition: all .5s ease;
  position: fixed;
  top: 0;
  left: 0;
}
*/
.sidebar.closed {
	width: 78px;
} 
.rotate-arrow {
  transform: rotateY(180deg); /* Rotate the arrow icon when in the closed state */
}

.alt {
  background-color: #eff1f2;
}
</style>