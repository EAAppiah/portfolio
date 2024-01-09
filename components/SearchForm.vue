<template>
  <div class="alt">
    <form class="py-6 px-4 flex items-center">
      <label class="sr-only">Search</label>
      <div class="relative w-full">
        <input type="text" id="table-search" placeholder="Search..."
          class="block py-2 ps-5 bg-gray-50 rounded-md w-full border border-gray-300 text-gray-900 focus:ring-purple-500 focus:border-purple-500 dark:text-white dark:focus:ring-purple-500">
        <span class="absolute right-2 top-1/2 transform -translate-y-1/2 text-xl text-gray-400">
          <Icon name="i-emojione-monotone-magnifying-glass-tilted-right"></Icon>
        </span>
      </div>
    </form>
  </div>
</template>

<style>
.alt{
  background-color: #eff1f2;
}
</style>
