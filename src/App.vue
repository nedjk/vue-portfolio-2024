<script setup>
import { RouterView } from 'vue-router'
import TheNav from "./components/TheNav.vue";
import TopLeftImg from "./components/TopLeftImg.vue";
import TheHeader from "./components/TheHeader.vue";

</script>

<template>

  <div class="w-full h-screen overflow-hidden text-white">
    <TopLeftImg />
    <TheNav />
    <TheHeader />


    <main class="w-full h-full">
      <RouterView v-slot="{ Component }">
        <Transition name="slide" mode="out-in">
          <div class="fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-[#2e2257]" :key="$route.path"></div>
        </Transition>

        <Transition name="second_slide" mode="out-in">
          <div class="fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-[#3b2d71]" :key="$route.path"></div>
        </Transition>

        <Transition name="third_slide" mode="out-in">
          <div class="fixed top-0 bottom-0 right-full w-screen h-screen z-10 bg-[#4b3792]" :key="$route.path"></div>
        </Transition>

        <component :is="Component" />

      </RouterView>
    </main>

    <div class=""></div>
    <div class=""></div>


  </div>


</template>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.4s;
  animation-delay: 0.6s;
}

.second_slide-enter-active,
.second_slide-leave-active {
  transition: all 0.5s;
  animation-delay: 0.6s;
}

.third_slide-enter-active,
.third_slide-leave-active {
  transition: all 0.6s;
  animation-delay: 0.6s;
}

.slide-enter-from,
.second_slide-enter-from,
.second_slide-leave-to,
.third_slide-enter-from,
.third_slide-leave-to,
.slide-leave-to {
  width: 100%;
  transform: translateX(100%)
}


</style>