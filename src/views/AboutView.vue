<script setup>
import TheCircles from "./../components/TheCircles.vue"
import { ref } from "vue";

//  data
const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Web Development',
        icons: [
          "fa-html5",
          "fa-css3-alt",
          "fa-vuejs",
          "fa-js",
          "fa-php",
          "fa-symfony",
          "fa-wordpress"
        ],
      },
      {
        title: 'UI/UX Design',
        icons: [
          "fa-figma"
        ],
      },
    ],
  },
  {
    title: 'awards',
    info: [
      {
        title: 'Webby Awards - Honoree',
        stage: '2011 - 2012',
      },
      {
        title: 'Adobe Design Achievement Awards - Finalist',
        stage: '2009 - 2010',
      },
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'UX/UI Designer - XYZ Company',
        stage: '2012 - 2023',
      },
      {
        title: 'Web Developer - ABC Agency',
        stage: '2010 - 2012',
      },
      {
        title: 'Intern - DEF Corporation',
        stage: '2008 - 2010',
      },
    ],
  },
  {
    title: 'credentials',
    info: [
      {
        title: 'Web Development - ABC University, LA, CA',
        stage: '2011',
      },
      {
        title: 'Computer Science Diploma - AV Technical Institute',
        stage: '2009',
      },
      {
        title: 'Certified Graphic Designer - ABC Institute, Los Angeles, CA',
        stage: '2006',
      },
    ],
  },
];
// aboutData.map((item,itempIndex) =>{
// })

const onglet = ref('0')

function changeSlide(index) {
  onglet.value = index
}

</script>

<template>
  <div class="h-full bg-primary/30 py-32 text-center xl:text-left">
    <TheCircles />
    <div class="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6 z-10 relative">
      <!-- text -->
      <div class="flex-1 flex flex-col justify-center">
        <Transition appear mode="out-in">
        <h2 class="h2">
          Captivating <span class="text-accent">stories</span> birth
          magnificent designs
        </h2>
      </Transition>

      <Transition appear mode="out-in">
        <p class="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0">
          10 years ago, I began freelancing as a developer. Since then, I've
          done remote work for agnecies, consulted for startups, and
          collaborated on digital products for business ans consumer use.
        </p>
      </Transition>

      <Transition appear mode="out-in">
        <!-- counters -->
        <div class="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8">
          <div class="flex flex-1 xl:gap-x-6">
            <!-- experience -->
            <div class="relative flex-1 after:w-[1px] after:h-full
            after:bg-white/10 after:absolute after:top-0 after:right-0">
              <div class="CountUp text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                10 +
              </div>
              <div class="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">Years of experience</div>
            </div>
            <!-- Projects -->
            <div class="relative flex-1 after:w-[1px] after:h-full
            after:bg-white/10 after:absolute after:top-0 after:right-0">
              <div class="CountUp text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                + 50
              </div>
              <div class="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">Finished projects</div>
            </div>
          </div>
        </div>
    </Transition>

      </div>
      <!-- infos -->
      <Transition name="appear-info" appear mode="out-in">
      <div class="flex flex-col w-full xl:max-w-[48%] h-[480px]">
        <div class="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
          <div v-for="(item, index) in aboutData" :key="index" @click="changeSlide(index)" class=" after:transition-all after:duration-300 cursor-pointer capitalize 
            xl:text-lg relative after:h-[2px] after:w-8 after:bg-white after:absolute after:-bottom-1 after:left-0"
            :class="{ 'after:w-[100%] text-accent after:bg-accent ': index == onglet }">
            {{ item.title }}
          </div>
        </div>

        <div class="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4
        items-center xl:items-start">
          <div class="flex-1 flex flex-col md:flex-row max-w-max gap-x-2
          items-center text-white/60" v-for="data in aboutData[onglet].info" :key="data">
            <!-- title -->
            <div class="font-light mb-2 md:mb-0">{{ data.title }}</div>
            <div class="hidden md:flex">-</div>
            <div>{{ data?.stage }}</div>
            <div class="flex gap-x-3 ">
              <div v-for="icon in data?.icons" :key="icon" class="flex  gap-x-4">
                <!-- icons -->
                <div class="text-2xl text-white">
                  <i class="fa-brands" :class="icon"></i>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </Transition>

    </div>
  </div>
</template>

<style scoped>
.v-enter-active,
.v-leave-active,
.appear-info-leave-active,
.appear-info-enter-active {
    transition: all 2s;
}

.appear-info-enter-from
{
    opacity: 0;
    transform: translateX(50%);
}
.v-enter-from
{
    opacity: 0;
    transform: translateX(-50%);
}

.appear-info-leave-to
{
    opacity: 0;
    transform: translateX(-50%);
}


.v-leave-to{
    transform: translateX(50%);
    opacity: 1;
}
</style>
