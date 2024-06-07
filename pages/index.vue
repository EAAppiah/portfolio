<template>
  <main class="dark:bg-slate-900 overflow-hidden px-4 ml-0 md:ml-[325px]">
    <div class="max-w-5xl xl:max-w-7xl w-full mx-auto flex flex-col mt-2 px-0 lg:px-8">

      <!-- Banner Section -->
      <section id="banner" class="flex flex-col-reverse lg:flex-row items-center justify-center py-16">
        <div class="flex-1 mb-8 lg:mb-0">
          <header class="block mt-4 lg:mt-0">
            <div class="flex flex-col h-full justify-center text-center md:text-left">
              <h1 class="text-2xl lg:text-6xl font-semibold leading-tight text-gray-700 dark:text-white">
                Hi, I'm Elvis,<br> Your Next Software Engineer
              </h1>
              <p class="tracking-wider text-gray-600 md:text-sm dark:text-slate-300 uppercase mt-4 mb-4">
                Ready to Change The World?
              </p>
            </div>
          </header>

          <div class="text-center md:text-left">
            <nuxt-link to="/about"
              class="relative inline-flex items-center justify-center p-0.5 me-2 overflow-hidden text-sm font-medium text-purple-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
              <span
                class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                MEET ME👋
              </span>
            </nuxt-link>
          </div>
        </div>
        <div class="lg:hidden">
          <img src="assets/images/work.jpg" alt="Profile pic" class="rounded w-full h-auto">
        </div>
        <div class="hidden lg:block lg:mr-16 xl:hidden">
          <img src="assets/images/work.jpg" alt="Profile pic" width="400" height="400" class="rounded">
        </div>
        <div class="hidden xl:block xl:mr-16">
          <img src="assets/images/work.jpg" alt="Profile pic" width="600" height="400" class="rounded">
        </div>
      </section>

      <!-- Latest Projects Section -->
      <section class="py-16">
        <div class="flex-1 mb-8 lg:mb-0">
          <header id="projects" class="msg mb-4 xl:mb-8">
            <h2 class="text-4xl font-bold text-gray-800 dark:text-white">Latest Projects</h2>
          </header>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-14">
            <article v-for="project in projects" :key="project.name"
              class=" dark:bg-gray-800 rounded-md overflow-hidden dark:border-gray-700">
              <a :href="project.link" target="_blank" class="block shadow-md dark:shadow-slate-700">
                <img :src="project.image" :alt="project.name" class="w-full h-64 xl:h-full">
              </a>
              <div class="py-2 px-2">
                <h3 class="text-lg font-semibold text-gray-800 dark:text-white">{{ project.name }}</h3>
                <p class="text-gray-600 dark:text-gray-400">{{ project.description }}</p>
                <ul class="mt-2 flex flex-wrap">
                  <li v-for="tech in project.technologies" :key="tech"
                    class="mr-2 mb-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 px-2 py-1 rounded-full text-sm">
                    {{ tech }}</li>
                </ul>
                <div class="mt-4">
                  <a :href="project.link" target="_blank"
                    class="relative inline-flex items-center justify-center p-0.5 me-2 overflow-hidden text-sm font-medium text-purple-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                    <span
                      class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">Visit</span></a>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          name: 'X-tralis',
          description: 'Platform that highlights the day-to-day activities of a company or client, and help them manage their affairs',
          technologies: ['JavaScript', 'Nuxt.js', 'Typescript', 'Tailwind Css'],
          link: 'https://xtralis.vercel.app',
          image: '/x-tralis.png',
        },
        {
          name: 'Fredox',
          description: 'A configuration guide📖 application template, typically providing step-by-step instructions, best practices, and troubleshooting tips.',
          technologies: ['Nuxt.js', 'Tailwind css'],
          link: 'https://fredox.vercel.app',
          image: '/fredox.png',
        },
        {
          name: 'Easybank',
          description: 'A completed challenge from Frontend Mentor',
          technologies: ['Html', 'Scss', 'Javascript'],
          link: 'https://banking-page-phi.vercel.app/',
          image: '/easybank.png',
        },
        {
          name: 'X-vendor',
          description: 'A web application that supports transactions between wholesalers and retailer',
          technologies: ['Bootstrap', 'Nuxt.js', 'jQuery'],
          link: 'https://vue-boot.vercel.app/',
          image: '/vendor.png',
        },
        {
          name: 'Manage Landing Page',
          description: 'A completed challenge from Frontend Mentor',
          technologies: ['Html', 'Tailwind css', 'Javascript'],
          link: 'https://manage-landing-page-xi-five.vercel.app/',
          image: '/Manage.png',
        },
        {
          name: 'Rigelis',
          description: 'The official website for Rigelis.Inc',
          technologies: ['Nuxt.js', 'Firebase', 'Tailwind Css', 'Swiper.js', 'Aos'],
          link: 'https://rigelis.co/',
          image: '/rigelis.jpg',
        },
      ],
    };
  },
};
</script>

<style>
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: 'Roboto Slab', sans-serif;
}

header.msg> :last-child {
  border-bottom: solid 3px purple;
  display: inline-block;
  margin: 0 0 5em 0;
  padding: 0 0.75em 0.5em 0;
}

#banner {
  padding: 73.333px 0 44px;
  display: flex;
  justify-content: space;
  align-items: center;
}

#banner h1 {
  margin-top: -0.125em;
}
</style>