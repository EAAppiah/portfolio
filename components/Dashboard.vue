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



    <div class="w-full h-full">
      <div class="h-[50px] bg-gray-100 flex items-center shadow-sm px-[20px] w-full py-[10px] z-10 border-b ">
        <!-- Hambuger menu -->
        <div class="cursor-pointer w-[30px]" @click="toggleSideBar">
          <Icon name="i-material-symbols-keyboard-double-arrow-left" class="w-[25px] h-[25px] text-purple-900"></Icon>
        </div>

      </div>

    </div>
    <!-- Main  -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      showDropDown: false,
      showSide: true
    }
  },
  methods: {
    // hide show side bar
    toggleSideBar() {
      this.showSide = !this.showSide

    },
    // toggle user 
    toggleDrop() {
      this.showDropDown = !this.showDropDown

    }
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
}</style>