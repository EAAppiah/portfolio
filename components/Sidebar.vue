<template>
  <div
    class="hidden lg:block fixed bg-[#f5f6f7] top-0 left-0 w-[325px] h-full dark:bg-slate-900 border-r dark:border-slate-800">
    <!-- Search Form -->
    <div class="bg-[#eff1f2] dark:bg-slate-800">
      <form class="p-5 flex items-center">
        <label class="sr-only text-gray-100">Search</label>
        <div class="relative w-full">
          <input type="text" id="table-search" placeholder="Search..."
            class="block ps-3 rounded-md w-full border border-gray-300 dark:bg-slate-700 text-gray-900 focus:ring-purple-500 focus:border-purple-500 dark:text-white dark:focus:ring-purple-500">
          <span class="absolute right-2 top-1/2 transform -translate-y-1/2 text-lg text-gray-400">
            <Icon name="i-emojione-monotone-magnifying-glass-tilted-right" class="dark:text-slate-300"></Icon>
          </span>
        </div>
      </form>
    </div>

    <!-- Side Bar Links -->
    <div class="py-8 px-4">
      <header class="msg">
        <h2 class="text-lg font-semibold pl-2 dark:text-white">
          Get in touch
        </h2>
      </header>
      <p class="p-1 text-sm text-gray-500 tracking-wide dark:text-slate-400">Reach out and let's start a conversation!
      </p>
      <ul class="mt-4">
        <li class="p-4">
          <span>
            <Icon name="i-bi-envelope-at-fill" class="text-xl text-purple-900 mr-4"></Icon>
          </span>
          <a name="Email" target="_blank" href="mailto:kageappiah@outlook.com"
            class="text-gray-500 text-sm underline underline-offset-4 decoration-dotted tracking-wide hover:text-purple-900 dark:text-slate-200">
            ElvisAppiah@Outlook.com
          </a>
        </li>
        <hr class="mt-2">
        <li class="p-4">
          <span>
            <Icon name="i-ri-twitter-x-line" class="text-xl text-purple-900 mr-4"></Icon>
          </span>
          <a name="Twitter" target="_blank" href="https://twitter.com/dev_kage"
            class="text-gray-500 text-sm underline underline-offset-4 decoration-dotted tracking-wide hover:text-purple-900 dark:text-slate-200">
            ElvisAppiah.com/Twitter
          </a>
        </li>
        <hr class="mt-2">
        <li class="p-4">
          <span>
            <Icon name="i-akar-icons-linkedinv2-fill" class="text-purple-900 text-xl mr-4"></Icon>
          </span>
          <a name="Linked-In" target="_blank" href="https://www.linkedin.com/in/ek-appiah"
            class="text-gray-500 text-sm underline underline-offset-4 decoration-dotted tracking-wide hover:text-purple-500 dark:text-slate-200">
            ElvisAppiah.com/LinkedIn
          </a>
        </li>
        <hr class="mt-2">
        <li class="p-4">
          <span>
            <Icon name="i-pajamas-github" class="text-xl text-purple-900 mr-4"></Icon>
          </span>
          <a name="Github" target="_blank" href="https://github.com/EAAppiah"
            class="text-gray-500 text-sm underline underline-offset-4 decoration-dotted tracking-wide hover:text-purple-900 dark:text-slate-200">
            ElvisAppiah.com/Github
          </a>
        </li>
      </ul>
      <hr class="border-2 border-[#d2d7d9bf] mt-[40px] mx-2 dark:border-slate-800">
      <!-- footer -->
      <footer id="footer" class="mt-10 mx-6 tracking-wide">
        <p class="text-xs text-gray-400 dark:text-slate-400"><em>© KageDevContent</em>. All rights reserved.</p>
      </footer>
    </div>
  </div>
</template>


<style scoped>
header.msg> :last-child {
  border-bottom: solid 3px purple;
  display: inline-block;
  margin: 0 0 2em 0;
  padding: 0 0.75em 0.5em 0;
}
</style>