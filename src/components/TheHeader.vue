<script setup>
import { RouterLink } from 'vue-router';
import SocialsLinks from "./SocialsLinks.vue";
</script>

<template>
  <header class="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]">
    <div class="container mx-auto">
      <!-- logo -->
      <div class="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8">
        <router-link to="/">
          <h1 class="logo group">Nedjma <span class=" group-hover:text-accent transition-all duration-300 font-thin">Karfa</span></h1>
        </router-link>
        
        <!-- socials -->
        <SocialsLinks/>
      </div>
    </div>
  </header>
</template>

<style scoped></style>