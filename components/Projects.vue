<template>
  <!-- Latest Projects Section -->
  <section class="py-16">
    <div class="flex-1 mb-8 lg:mb-0">
      <header id="projects" class="msg mb-4 xl:mb-8">
        <h2 class="text-4xl font-bold text-gray-800 dark:text-white">Latest Projects</h2>
      </header>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-14">

        <!-- Xtralis -->
        <article class="relative overflow-hidden">
          <a href="https://xtralis.vercel.app" target="_blank" class="block">
            <img src="/assets/images/x-tralis.png" alt="X-tralis"
              class="w-96 h-52 xl:h-full rounded-md transition-all ease-in-out duration-1000 transform hover:scale-105">
          </a>
          <h3 class="text-lg font-semibold text-gray-800 dark:text-white my-5">X-tralis</h3>
          <p class="text-gray-600 dark:text-gray-400">Platform that highlights the day-to-day activities of a company or
            client, and help them manage their affairs</p>
          <ul class="mt-2 flex flex-wrap">
            <li v-for="tech in technologies" :key="tech"
              class="mr-2 mb-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 px-2 py-1 rounded-full text-sm">
              {{ tech }}
            </li>
          </ul>
          <div class="mt-4">
            <a href="https://xtralis.vercel.app" target="_blank"
              class="relative inline-flex items-center justify-center p-0.5 me-2 overflow-hidden text-sm font-medium text-purple-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
              <span
                class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">Visit</span>
            </a>
          </div>
          <div class="absolute inset-y-0 right-0 w-px bg-gray-300 dark:bg-gray-700"></div>

        </article>

        <!-- Regentems -->
        <article class="relative overflow-hidden">
          <a href="https://regentems.vercel.app" target="_blank" class="block">
            <img src="/assets/images/regentems.jpg" alt="Regentems"
              class="w-96 h-52 xl:h-full rounded-md transition-all ease-in-out duration-1000 transform hover:scale-105" />
          </a>
          <h3 class="text-lg font-semibold text-gray-800 dark:text-white my-5">Regentems</h3>
          <p class="text-gray-600 dark:text-gray-400">Employee management portal that allows employees to make requests
          </p>
          <ul class="mt-2 flex flex-wrap">
            <li v-for="tech in technologies" :key="tech"
              class="mr-2 mb-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 px-2 py-1 rounded-full text-sm">
              {{ tech }}
            </li>
          </ul>
          <div class="mt-4">
            <a href="https://regentems.vercel.app" target="_blank"
              class="relative inline-flex items-center justify-center p-0.5 me-2 overflow-hidden text-sm font-medium text-purple-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
              <span
                class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">Visit</span>
            </a>
          </div>
        </article>

        <!-- Fredox -->
        <article class="relative overflow-hidden">
          <a href="https://fredox.vercel.app" target="_blank" class="block">
            <img src="/assets/images/fredox.png" alt="Fredox"
              class="w-96 h-52 xl:h-full rounded-md transition-all ease-in-out duration-1000 transform hover:scale-105" />
          </a>
          <h3 class="text-lg font-semibold text-gray-800 dark:text-white my-5">Fredox</h3>
          <p class="text-gray-600 dark:text-gray-400">A configuration guide📖 application template, typically providing
            step-by-step instructions, best practices, and troubleshooting tips.</p>
          <ul class="mt-2 flex flex-wrap">
            <li v-for="tech in technologies" :key="tech"
              class="mr-2 mb-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 px-2 py-1 rounded-full text-sm">
              {{ tech }}
            </li>
          </ul>
          <div class="mt-4">
            <a href="https://fredox.vercel.app" target="_blank"
              class="relative inline-flex items-center justify-center p-0.5 me-2 overflow-hidden text-sm font-medium text-purple-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
              <span
                class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">Visit</span>
            </a>
          </div>
          <div class="absolute inset-y-0 right-0 w-px bg-gray-300 dark:bg-gray-700"></div>
        </article>

        <!-- Easybank -->
        <article class="relative overflow-hidden">
          <a href="https://banking-page-phi.vercel.app" target="_blank" class="block">
            <img src="/assets/images/easybank.png" alt="Easybank"
              class="w-96 h-52 xl:h-full rounded-md transition-all ease-in-out duration-1000 transform hover:scale-105" />
          </a>
          <h3 class="text-lg font-semibold text-gray-800 dark:text-white my-5">Easybank</h3>
          <p class="text-gray-600 dark:text-gray-400">A completed challenge from Frontend Mentor.</p>
          <ul class="mt-2 flex flex-wrap">
            <li v-for="tech in technologies" :key="tech"
              class="mr-2 mb-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 px-2 py-1 rounded-full text-sm">
              {{ tech }}
            </li>
          </ul>
          <div class="mt-4">
            <a href="https://banking-page-phi.vercel.app" target="_blank"
              class="relative inline-flex items-center justify-center p-0.5 me-2 overflow-hidden text-sm font-medium text-purple-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
              <span
                class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">Visit</span>
            </a>
          </div>
        </article>

        <!-- X-vendor -->
        <article class="relative overflow-hidden">
          <a href="https://vue-boot.vercel.app/" target="_blank" class="block">
            <img src="/assets/images/vendor.png" alt="X-vendor"
              class="w-96 h-52 xl:h-full rounded-md transition-all ease-in-out duration-1000 transform hover:scale-105" />
          </a>
          <h3 class="text-lg font-semibold text-gray-800 dark:text-white my-5">X-vendor</h3>
          <p class="text-gray-600 dark:text-gray-400">A web application that supports transactions between wholesalers
            and retailer</p>
          <ul class="mt-2 flex flex-wrap">
            <li v-for="tech in technologies" :key="tech"
              class="mr-2 mb-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 px-2 py-1 rounded-full text-sm">
              {{ tech }}
            </li>
          </ul>
          <div class="mt-4">
            <a href="https://vue-boot.vercel.app/" target="_blank"
              class="relative inline-flex items-center justify-center p-0.5 me-2 overflow-hidden text-sm font-medium text-purple-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
              <span
                class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">Visit</span>
            </a>
          </div>
          <div class="absolute inset-y-0 right-0 w-px bg-gray-300 dark:bg-gray-700"></div>
        </article>

        <!-- Manage Landing Page -->
        <article class="relative overflow-hidden">
          <a href="https://manage-landing-page-xi-five.vercel.app/" target="_blank" class="block">
            <img src="/assets/images/Manage.png" alt="Manage Landing page"
              class="w-96 h-52 xl:h-full rounded-md transition-all ease-in-out duration-1000 transform hover:scale-105" />
          </a>
          <h3 class="text-lg font-semibold text-gray-800 dark:text-white my-5">Manage Landing Page</h3>
          <p class="text-gray-600 dark:text-gray-400">A completed challenge from Frontend Mentor</p>
          <ul class="mt-2 flex flex-wrap">
            <li v-for="tech in technologies" :key="tech"
              class="mr-2 mb-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 px-2 py-1 rounded-full text-sm">
              {{ tech }}
            </li>
          </ul>
          <div class="mt-4">
            <a href="https://manage-landing-page-xi-five.vercel.app/" target="_blank"
              class="relative inline-flex items-center justify-center p-0.5 me-2 overflow-hidden text-sm font-medium text-purple-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
              <span
                class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">Visit</span>
            </a>
          </div>
        </article>

        <!-- Rigelis -->
        <article class="relative overflow-hidden">
          <a href="https://rigelis.co/" target="_blank" class="block">
            <img src="/assets/images/rigelis.jpg" alt="Rigelis"
              class="w-96 h-52 xl:h-full rounded-md transition-all ease-in-out duration-1000 transform hover:scale-105" />
          </a>
          <h3 class="text-lg font-semibold text-gray-800 dark:text-white my-5">Rigelis</h3>
          <p class="text-gray-600 dark:text-gray-400">The official website for Rigelis.Inc</p>
          <ul class="mt-2 flex flex-wrap">
            <li v-for="tech in technologies" :key="tech"
              class="mr-2 mb-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 px-2 py-1 rounded-full text-sm">
              {{ tech }}
            </li>
          </ul>
          <div class="mt-4">
            <a href="https://rigelis.co/" target="_blank"
              class="relative inline-flex items-center justify-center p-0.5 me-2 overflow-hidden text-sm font-medium text-purple-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
              <span
                class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">Visit</span>
            </a>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
const technologies = ['JavaScript', 'Nuxt.js', 'Typescript', 'Tailwind Css']
</script>
