<template>
  <!-- HEADER SECTION LG SCREENS -->
  <nav class="p-4 lg:ml-[325px] overflow-hidden dark:bg-white bg-[#080808] transition-colors duration-1000 ease-in-out">
    <div class="z-10 w-full max-w-5xl mx-auto">

      <!-- MOBILE HEADER-->
      <div class="flex justify-between items-center">
        <nuxt-link to="/" class="cursor-pointer w-[30px]">
          <Icon name="i-material-symbols-keyboard-double-arrow-left" class="w-[40px] h-[40px] text-purple-900"></Icon>
        </nuxt-link>
        <div class="md:hidden">
          <ul class="flex">
            <li class="mr-2">
              <span>
                <ModeSwitch />
              </span>
            </li>
            <li class="ml-2">
              <span>
                <a name="Email" target="_blank" href="mailto:kageappiah@outlook.com">
                  <Icon name="i-material-symbols-mail-outline"
                    class="text-xl text-gray-500 cursor-pointer hover:text-purple-900 dark:text-slate-400"></Icon>
                </a>
              </span>
            </li>
            <li class="ml-4">
              <span>
                <a name="Twitter" target="_blank" href="https://twitter.com/dev_kage">
                  <Icon name="i-brandico-twitter-bird"
                    class="text-xl text-gray-500 cursor-pointer hover:text-purple-900 dark:text-slate-400">
                  </Icon>
                </a>
              </span>

            </li>
            <li class="ml-4">
              <span>
                <a name="LinkedIn" target="_blank" href="https://www.linkedin.com/in/ek-appiah">
                  <Icon name="i-akar-icons-linkedinv2-fill"
                    class="text-gray-500 text-xl cursor-pointer hover:text-purple-900 dark:text-slate-400"></Icon>
                </a>
              </span>
            </li>
            <li class="ml-4">
              <span>
                <a name="Github" target="_blank" href="https://github.com/EAAppiah">
                  <Icon name="i-pajamas-github"
                    class="text-xl text-gray-500 cursor-pointer dark:text-slate-400 hover:text-purple-900">
                  </Icon>
                </a>
              </span>
            </li>
          </ul>
        </div>
      </div>


      <!-- LARGE SCREEN HEADER LINKS/MSG -->
      <header class="mx-2 lg:mx-16 mt-4">
        <div class="flex justify-between items-center">
          <a class="dark:text-gray-500 hover:text-purple-900 text-slate-300" href="/">Changing the World <strong
              class="">1 line of
              Code</strong> at a time
          </a>
          <div class="hidden md:block">
            <ul class="flex">
              <li class="mr-2">
                <span>
                  <ModeSwitch />
                </span>
              </li>
              <li class="ml-2">
                <span>
                  <a name="Email" target="_blank" href="mailto:kageappiah@outlook.com">
                    <Icon name="i-material-symbols-mail-outline"
                      class="text-xl text-gray-500 cursor-pointer hover:text-purple-900"></Icon>
                  </a>
                </span>
              </li>
              <li class="ml-4">
                <span>
                  <a name="Twitter" target="_blank" href="https://twitter.com/dev_kage">
                    <Icon name="i-brandico-twitter-bird"
                      class="text-xl text-gray-500 cursor-pointer hover:text-purple-900">
                    </Icon>
                  </a>
                </span>
              </li>
              <li class="ml-4">
                <span>
                  <a name="LinkedIn" target="_blank" href="https://www.linkedin.com/in/ek-appiah">
                    <Icon name="i-akar-icons-linkedinv2-fill"
                      class="text-gray-500 text-xl cursor-pointer hover:text-purple-900"></Icon>
                  </a>
                </span>
              </li>
              <li class="ml-4">
                <span>
                  <a name="Github" target="_blank" href="https://github.com/EAAppiah">
                    <Icon name="i-pajamas-github" class="text-xl text-gray-500 cursor-pointer hover:text-purple-900">
                    </Icon>
                  </a>
                </span>
              </li>
            </ul>
          </div>
        </div>
        <hr style="border: 2px solid #4A1D96; margin-top: 20px">
      </header>

    </div>
  </nav>
</template>
