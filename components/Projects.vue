<template>
  <!-- Latest Projects Section -->
  <section class="py-16">
    <div class="flex-1 mb-8 lg:mb-0">
      <header id="projects" class="msg mb-4 xl:mb-8">
        <h2 class="text-4xl font-bold dark:text-gray-800 text-white">Latest Projects</h2>
      </header>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-14">

        <!-- Xtralis -->
        <article class="relative overflow-hidden">
          <a href="https://xtralis.vercel.app" target="_blank" class="block">
            <img src="/assets/images/x-tralis.png" alt="X-tralis"
              class="w-96 h-52 xl:h-full rounded-md transition-all ease-in-out duration-1000 transform hover:scale-105">
          </a>
          <h3 class="text-lg font-semibold dark:text-gray-800 text-white my-5">X-tralis</h3>
          <p class="dark:text-gray-600 text-gray-400">Platform that highlights the day-to-day activities of a company or
            client, and help them manage their affairs</p>
          <ul class="mt-2 flex flex-wrap">
            <li v-for="tech in xtralis" :key="tech"
              class="mr-2 mb-2 dark:bg-gray-200 bg-gray-700 dark:text-gray-800 text-gray-300 px-2 py-1 rounded-full text-sm">
              {{ tech }}
            </li>
          </ul>
          <p class="text-slate-300 dark:text-black"><strong>Demo Email:</strong> test@test.com <span
              class="space-x-6"><strong>Password: </strong>123</span>
          </p>
          <div class="mt-4">
            <a href="https://xtralis.vercel.app" target="_blank"
              class="relative inline-flex items-center justify-center p-0.5 me-2 overflow-hidden text-sm font-medium dark:text-purple-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white text-white focus:ring-4 focus:outline-none dark:focus:ring-blue-300 focus:ring-blue-800">
              <span
                class="relative px-5 py-2.5 transition-all ease-in duration-75 dark:bg-white bg-gray-900 rounded-md group-hover:bg-opacity-0">Visit</span>
            </a>
          </div>
          <div class="hidden lg:block absolute inset-y-0 right-0 w-px dark:bg-gray-300 bg-gray-700"></div>

        </article>

        <!-- Regentems -->
        <article class="relative overflow-hidden">
          <a href="https://regentems.vercel.app" target="_blank" class="block">
            <img src="/assets/images/regentems.jpg" alt="Regentems"
              class="w-96 h-52 xl:h-full rounded-md transition-all ease-in-out duration-1000 transform hover:scale-105" />
          </a>
          <h3 class="text-lg font-semibold dark:text-gray-800 text-white my-5">Regentems</h3>
          <p class="dark:text-gray-600 text-gray-400">Employee management portal that allows employees to make requests
          </p>
          <ul class="mt-2 flex flex-wrap">
            <li v-for="tech in regentems" :key="tech"
              class="mr-2 mb-2 dark:bg-gray-200 bg-gray-700 dark:text-gray-800 text-gray-300 px-2 py-1 rounded-full text-sm">
              {{ tech }}
            </li>
          </ul>
          <p class="dark:text-black text-slate-300"><strong>Demo Email:</strong> test@test.com <span
              class="space-x-6"><strong>Password: </strong>123abc</span>
          </p>
          <div class="mt-4">
            <a href="https://regentems.vercel.app" target="_blank"
              class="relative inline-flex items-center justify-center p-0.5 me-2 overflow-hidden text-sm font-medium dark:text-purple-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white text-white focus:ring-4 focus:outline-none dark:focus:ring-blue-300 focus:ring-blue-800">
              <span
                class="relative px-5 py-2.5 transition-all ease-in duration-75 dark:bg-white bg-gray-900 rounded-md group-hover:bg-opacity-0">Visit</span>
            </a>
          </div>
        </article>

        <!-- Fredox -->
        <article class="relative overflow-hidden">
          <a href="https://fredox.vercel.app" target="_blank" class="block">
            <img src="/assets/images/fredox.png" alt="Fredox"
              class="w-96 h-52 xl:h-full rounded-md transition-all ease-in-out duration-1000 transform hover:scale-105" />
          </a>
          <h3 class="text-lg font-semibold dark:text-gray-800 text-white my-5">Fredox</h3>
          <p class="dark:text-gray-600 text-gray-400">A configuration guide📖 application template, typically providing
            step-by-step instructions, best practices, and troubleshooting tips.</p>
          <ul class="mt-2 flex flex-wrap">
            <li v-for="tech in fredox" :key="tech"
              class="mr-2 mb-2 dark:bg-gray-200 bg-gray-700 dark:text-gray-800 text-gray-300 px-2 py-1 rounded-full text-sm">
              {{ tech }}
            </li>
          </ul>
          <div class="mt-4">
            <a href="https://fredox.vercel.app" target="_blank"
              class="relative inline-flex items-center justify-center p-0.5 me-2 overflow-hidden text-sm font-medium dark:text-purple-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white text-white focus:ring-4 focus:outline-none dark:focus:ring-blue-300 focus:ring-blue-800">
              <span
                class="relative px-5 py-2.5 transition-all ease-in duration-75 dark:bg-white bg-gray-900 rounded-md group-hover:bg-opacity-0">Visit</span>
            </a>
          </div>
          <div class="hidden lg:block absolute inset-y-0 right-0 w-px dark:bg-gray-300 bg-gray-700"></div>
        </article>

        <!-- Easybank -->
        <article class="relative overflow-hidden">
          <a href="https://banking-page-phi.vercel.app" target="_blank" class="block">
            <img src="/assets/images/easybank.png" alt="Easybank"
              class="w-96 h-52 xl:h-full rounded-md transition-all ease-in-out duration-1000 transform hover:scale-105" />
          </a>
          <h3 class="text-lg font-semibold dark:text-gray-800 text-white my-5">Easybank</h3>
          <p class="dark:text-gray-600 text-gray-400">A completed challenge from Frontend Mentor.</p>
          <ul class="mt-2 flex flex-wrap">
            <li v-for="tech in easybank" :key="tech"
              class="mr-2 mb-2 dark:bg-gray-200 bg-gray-700 dark:text-gray-800 text-gray-300 px-2 py-1 rounded-full text-sm">
              {{ tech }}
            </li>
          </ul>
          <div class="mt-4">
            <a href="https://banking-page-phi.vercel.app" target="_blank"
              class="relative inline-flex items-center justify-center p-0.5 me-2 overflow-hidden text-sm font-medium dark:text-purple-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white text-white focus:ring-4 focus:outline-none dark:focus:ring-blue-300 focus:ring-blue-800">
              <span
                class="relative px-5 py-2.5 transition-all ease-in duration-75 dark:bg-white bg-gray-900 rounded-md group-hover:bg-opacity-0">Visit</span>
            </a>
          </div>
        </article>

        <!-- X-vendor -->
        <article class="relative overflow-hidden">
          <a href="https://vue-boot.vercel.app/" target="_blank" class="block">
            <img src="/assets/images/vendor.png" alt="X-vendor"
              class="w-96 h-52 xl:h-full rounded-md transition-all ease-in-out duration-1000 transform hover:scale-105" />
          </a>
          <h3 class="text-lg font-semibold dark:text-gray-800 text-white my-5">X-vendor</h3>
          <p class="dark:text-gray-600 text-gray-400">A web application that supports transactions between wholesalers
            and retailer</p>
          <ul class="mt-2 flex flex-wrap">
            <li v-for="tech in vendor" :key="tech"
              class="mr-2 mb-2 dark:bg-gray-200 bg-gray-700 dark:text-gray-800 text-gray-300 px-2 py-1 rounded-full text-sm">
              {{ tech }}
            </li>
          </ul>
          <div class="mt-4">
            <a href="https://vue-boot.vercel.app/" target="_blank"
              class=" relative inline-flex items-center justify-center p-0.5 me-2 overflow-hidden text-sm font-medium dark:text-purple-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white text-white focus:ring-4 focus:outline-none dark:focus:ring-blue-300 focus:ring-blue-800">
              <span
                class="relative px-5 py-2.5 transition-all ease-in duration-75 dark:bg-white bg-gray-900 rounded-md group-hover:bg-opacity-0">Visit</span>
            </a>
          </div>
          <div class="hidden lg:block absolute inset-y-0 right-0 w-px dark:bg-gray-300 bg-gray-700"></div>
        </article>

        <!-- Manage Landing Page -->
        <article class="relative overflow-hidden">
          <a href="https://manage-landing-page-xi-five.vercel.app/" target="_blank" class="block">
            <img src="/assets/images/Manage.png" alt="Manage Landing page"
              class="w-96 h-52 xl:h-full rounded-md transition-all ease-in-out duration-1000 transform hover:scale-105" />
          </a>
          <h3 class="text-lg font-semibold dark:text-gray-800 text-white my-5">Manage Landing Page</h3>
          <p class="dark:text-gray-600 text-gray-400">A completed challenge from Frontend Mentor</p>
          <ul class="mt-2 flex flex-wrap">
            <li v-for="tech in manage" :key="tech"
              class="mr-2 mb-2 dark:bg-gray-200 bg-gray-700 dark:text-gray-800 text-gray-300 px-2 py-1 rounded-full text-sm">
              {{ tech }}
            </li>
          </ul>
          <div class="mt-4">
            <a href="https://manage-landing-page-xi-five.vercel.app/" target="_blank"
              class="relative inline-flex items-center justify-center p-0.5 me-2 overflow-hidden text-sm font-medium dark:text-purple-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white text-white focus:ring-4 focus:outline-none dark:focus:ring-blue-300 focus:ring-blue-800">
              <span
                class="relative px-5 py-2.5 transition-all ease-in duration-75 dark:bg-white bg-gray-900 rounded-md group-hover:bg-opacity-0">Visit</span>
            </a>
          </div>
        </article>

        <!-- Rigelis -->
        <article class="relative overflow-hidden">
          <a href="https://rigelis.co/" target="_blank" class="block">
            <img src="/assets/images/rigelis.jpg" alt="Rigelis"
              class="w-96 h-52 xl:h-full rounded-md transition-all ease-in-out duration-1000 transform hover:scale-105" />
          </a>
          <h3 class="text-lg font-semibold dark:text-gray-800 text-white my-5">Rigelis</h3>
          <p class="dark:text-gray-600 text-gray-400">The official website for Rigelis.Inc</p>
          <ul class="mt-2 flex flex-wrap">
            <li v-for="tech in rigelis" :key="tech"
              class="mr-2 mb-2 dark:bg-gray-200 bg-gray-700 dark:text-gray-800 text-gray-300 px-2 py-1 rounded-full text-sm">
              {{ tech }}
            </li>
          </ul>
          <div class="mt-4">
            <a href="https://rigelis.co/" target="_blank"
              class="relative inline-flex items-center justify-center p-0.5 me-2 overflow-hidden text-sm font-medium dark:text-purple-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white text-white focus:ring-4 focus:outline-none dark:focus:ring-blue-300 focus:ring-blue-800">
              <span
                class="relative px-5 py-2.5 transition-all ease-in duration-75 dark:bg-white bg-gray-900 rounded-md group-hover:bg-opacity-0">Visit</span>
            </a>
          </div>
          <div class="hidden lg:block absolute inset-y-0 right-0 w-px dark:bg-gray-300 bg-gray-700"></div>
        </article>

                <!-- New Chapter -->
                <article class="relative overflow-hidden">
          <a href="https://myiahousewarmingparty.com/" target="_blank" class="block">
            <img src="/assets/images/myia.jpeg" alt="New Chapter"
              class="w-96 h-52 xl:h-full rounded-md transition-all ease-in-out duration-1000 transform hover:scale-105" />
          </a>
          <h3 class="text-lg font-semibold dark:text-gray-800 text-white my-5">New Chapter</h3>
          <p class="dark:text-gray-600 text-gray-400">Join Myia's New Chapter</p>
          <ul class="mt-2 flex flex-wrap">
            <li v-for="tech in newChapter" :key="tech"
              class="mr-2 mb-2 dark:bg-gray-200 bg-gray-700 dark:text-gray-800 text-gray-300 px-2 py-1 rounded-full text-sm">
              {{ tech }}
            </li>
          </ul>
          <div class="mt-4">
            <a href="https://myiahousewarmingparty.com/" target="_blank"
              class="relative inline-flex items-center justify-center p-0.5 me-2 overflow-hidden text-sm font-medium dark:text-purple-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white text-white focus:ring-4 focus:outline-none dark:focus:ring-blue-300 focus:ring-blue-800">
              <span
                class="relative px-5 py-2.5 transition-all ease-in duration-75 dark:bg-white bg-gray-900 rounded-md group-hover:bg-opacity-0">Visit</span>
            </a>
          </div>
        </article>

         <!-- Boss Network -->
         <article class="relative overflow-hidden">
          <a href="https://bossnetworkteam.com" target="_blank" class="block">
            <img src="/assets/images/boss.jpeg" alt="Boss Network Team"
              class="w-96 h-52 xl:h-full rounded-md transition-all ease-in-out duration-1000 transform hover:scale-105" />
          </a>
          <h3 class="text-lg font-semibold dark:text-gray-800 text-white my-5">Boss Network Team</h3>
          <p class="dark:text-gray-600 text-gray-400">The official website for Boss Network Team</p>
          <ul class="mt-2 flex flex-wrap">
            <li v-for="tech in wordPress" :key="tech"
              class="mr-2 mb-2 dark:bg-gray-200 bg-gray-700 dark:text-gray-800 text-gray-300 px-2 py-1 rounded-full text-sm">
              {{ tech }}
            </li>
          </ul>
          <div class="mt-4">
            <a href="https://bossnetworkteam.com/" target="_blank"
              class="relative inline-flex items-center justify-center p-0.5 me-2 overflow-hidden text-sm font-medium dark:text-purple-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white text-white focus:ring-4 focus:outline-none dark:focus:ring-blue-300 focus:ring-blue-800">
              <span
                class="relative px-5 py-2.5 transition-all ease-in duration-75 dark:bg-white bg-gray-900 rounded-md group-hover:bg-opacity-0">Visit</span>
            </a>
          </div>
          <div class="hidden lg:block absolute inset-y-0 right-0 w-px dark:bg-gray-300 bg-gray-700"></div>
        </article>

                 <!-- YIB -->
                 <article class="relative overflow-hidden">
                  <a href="https://yib.vercel.app/" target="_blank" class="block">
                    <img src="/assets/images/yib.png" alt="YIB Community"
                      class="w-96 h-52 xl:h-full rounded-md transition-all ease-in-out duration-1000 transform hover:scale-105" />
                  </a>
                  <h3 class="text-lg font-semibold dark:text-gray-800 text-white my-5">Youth In Business</h3>
                  <p class="dark:text-gray-600 text-gray-400">The official website for Y.I.B Community</p>
                  <ul class="mt-2 flex flex-wrap">
                    <li v-for="tech in yib" :key="tech"
                      class="mr-2 mb-2 dark:bg-gray-200 bg-gray-700 dark:text-gray-800 text-gray-300 px-2 py-1 rounded-full text-sm">
                      {{ tech }}
                    </li>
                  </ul>
                  <div class="mt-4">
                    <a href="https://yib.vercel.app/" target="_blank"
                      class="relative inline-flex items-center justify-center p-0.5 me-2 overflow-hidden text-sm font-medium dark:text-purple-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white text-white focus:ring-4 focus:outline-none dark:focus:ring-blue-300 focus:ring-blue-800">
                      <span
                        class="relative px-5 py-2.5 transition-all ease-in duration-75 dark:bg-white bg-gray-900 rounded-md group-hover:bg-opacity-0">Visit</span>
                    </a>
                  </div>
                </article>

                         <!-- IMF -->
         <article class="relative overflow-hidden">
          <a href="https://imf-three.vercel.app/" target="_blank" class="block">
            <img src="/assets/images/IMF.png" alt="IMF"
              class="w-96 h-52 xl:h-full rounded-md transition-all ease-in-out duration-1000 transform hover:scale-105" />
          </a>
          <h3 class="text-lg font-semibold dark:text-gray-800 text-white my-5">Economic Governance Platform (EGP)</h3>
          <p class="dark:text-gray-600 text-gray-400">An Overview of The IMF Bailout Programme in Ghana</p>
          <ul class="mt-2 flex flex-wrap">
            <li v-for="tech in imf" :key="tech"
              class="mr-2 mb-2 dark:bg-gray-200 bg-gray-700 dark:text-gray-800 text-gray-300 px-2 py-1 rounded-full text-sm">
              {{ tech }}
            </li>
          </ul>
          <div class="mt-4">
            <a href="https://bossnetworkteam.com/" target="_blank"
              class="relative inline-flex items-center justify-center p-0.5 me-2 overflow-hidden text-sm font-medium dark:text-purple-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white text-white focus:ring-4 focus:outline-none dark:focus:ring-blue-300 focus:ring-blue-800">
              <span
                class="relative px-5 py-2.5 transition-all ease-in duration-75 dark:bg-white bg-gray-900 rounded-md group-hover:bg-opacity-0">Visit</span>
            </a>
          </div>
          <div class="hidden lg:block absolute inset-y-0 right-0 w-px dark:bg-gray-300 bg-gray-700"></div>
        </article>

<!-- MEDSGH -->
<article class="relative overflow-hidden">
                  <a href="https://medsgh.com/" target="_blank" class="block">
                    <img src="/assets/images/ajv.png" alt="Meds GH"
                      class="w-96 h-52 xl:h-full rounded-md transition-all ease-in-out duration-1000 transform hover:scale-105" />
                  </a>
                  <h3 class="text-lg font-semibold dark:text-gray-800 text-white my-5">AJV Pharmacy Wholesale</h3>
                  <p class="dark:text-gray-600 text-gray-400">An e-commerce website for Arzthena Pharmacy</p>
                  <ul class="mt-2 flex flex-wrap">
                    <li v-for="tech in ajv" :key="tech"
                      class="mr-2 mb-2 dark:bg-gray-200 bg-gray-700 dark:text-gray-800 text-gray-300 px-2 py-1 rounded-full text-sm">
                      {{ tech }}
                    </li>
                  </ul>
                  <div class="mt-4">
                    <a href="https://yib.vercel.app/" target="_blank"
                      class="relative inline-flex items-center justify-center p-0.5 me-2 overflow-hidden text-sm font-medium dark:text-purple-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white text-white focus:ring-4 focus:outline-none dark:focus:ring-blue-300 focus:ring-blue-800">
                      <span
                        class="relative px-5 py-2.5 transition-all ease-in duration-75 dark:bg-white bg-gray-900 rounded-md group-hover:bg-opacity-0">Visit</span>
                    </a>
                  </div>
                </article>

      </div>
    </div>
  </section>
</template>

<script setup>
const xtralis = ['JavaScript', 'Nuxt.js 3', 'Typescript', 'Tailwind Css'];
const regentems = ['JavaScript', 'Nuxt.js 3', 'Firebase', 'Tailwind Css'];
const easybank = ['Html', 'Scss', 'Javascript'];
const manage = ['Html', 'Tailwind Css', 'Javascript'];
const rigelis = ['Nuxt.js 3', 'Javascript', 'Firebase', 'Tailwind Css'];
const fredox = ['JavaScript', 'Nuxt.js', 'Tailwind Css'];
const vendor = ['Nuxt.js 3', 'Bootstrap', 'Javascript'];
const newChapter = ['Squarespace'];
const wordPress = ['Wordpress'];
const yib = ['JavaScript', 'Next.js', 'Tailwind Css'];
const imf = ['JavaScript', 'Nuxt.js', 'Tailwind Css', 'Flowbite', 'Chart.js'];
const ajv = ['JavaScript', 'Nuxt.js', 'Tailwind Css', 'Pinia', 'Firebase'];



</script>
