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
    title: 'experience',
    info: [
      {
        title: 'Stage de fin de formation',
        stage: '2 mois',
      },
      {
        title: 'Formation developpement web',
        stage: '2023 - 2024',
      },
    ],
  },
  {
    title: 'Diplômes',
    info: [
      {
        title: 'Developpement web - Chambre du commerce et de l\'indusrie',
        stage: '2023',
      },
      {
        title: 'Bac science de l\'ingénieur spé maths - Oullins',
        stage: '2020',
      },
    ],
  },
  {
    title: 'compétences',
    info: [
      {
        title: "Autonome",
      },
      {
        title: "Tavaille d'équipe",
      },
      {
        title: 'Dynamique',
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
  <div class="h-full bg-primary/30 py-36 text-center xl:text-left">
    <TheCircles />
    <div
      class="justify-center gap-20 md:gap-12 xl:gap-14 container mx-auto h-full flex flex-col items-center xl:pt-36 md:pt-5 xl:flex-row gap-x-6 z-10 relative">
      <!-- text -->
      <div class=" flex flex-col justify-center gap-6  md:gap-10 lg:gap-14  xl:gap-0">
        <Transition appear mode="out-in">
          <h2 class="h2 px-3 xl:px-0">
            Découvrez mon parcours et mes <span class="text-accent">compétences.</span>
          </h2>
        </Transition>
        <Transition appear mode="out-in">
          <p class="max-w-[800px] mx-auto text-4xl md:text-2xl lg:text-3xl tracking-wide !leading-[1.4] xl:text-xl  xl:mx-0 mb-6 xl:mb-12 px-3 xl:px-0">
            <!-- 10 years ago, I began freelancing as a developer. Since then, I've
          done remote work for agnecies, consulted for startups, and
          collaborated on digital products for business ans consumer use. -->

            Du front au back,
            du HTML/CSS au projet Symfony en passant par VueJs ou encore Wordpress, j'aime me lancer de nouveau défis
            qu'importe le domaine ou la technologie.
            <br>
            <br>
            Travailler en équipe, partager et apprendre auprès des autres afin de s'améliorer sont des valeurs qui me
            tiennent à coeur.
          </p>
        </Transition>

        <Transition appear mode="out-in">
          <!-- counters -->
          <div class="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8">
            <div class="flex xl:gap-x-7">
              <!-- experience -->
              <div class="relative flex-1 after:w-[3px] after:h-full
            after:bg-white/10 after:absolute after:top-0 after:-right-3.5 xl:-after:right-1.5">
                <div class="CountUp text-4xl  font-extrabold text-accent mb-2">
                  5
                </div>
                <div class=" text-xl uppercase tracking-[2px] leading-[1.5] max-w-[200px]">Langages & frameworks</div>
              </div>
              <!-- Projects -->
              <div class="relative flex-1">
                <div class="CountUp text-4xl  font-extrabold text-accent mb-2">
                  + 15
                </div>
                <div class="text-xl uppercase tracking-[2px] leading-[1.5] max-w-[150px]">Projets finis</div>
              </div>
            </div>
          </div>
        </Transition>

      </div>
      <!-- infos -->
      <Transition name="appear-info" appear mode="out-in">
        <div class="flex flex-col gap-16 md:gap-10 w-full xl:max-w-[48%] h-[480px]">
          <div class="flex space-x-10 xl:space-x-0 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            <div v-for="(item, index) in aboutData" :key="index" @click="changeSlide(index)" class="text-2xl font-medium tracking-[2px] uppercase after:transition-all after:duration-300 cursor-pointer  
            xl:text-lg relative after:h-[2px] after:w-8 after:bg-white after:absolute after:-bottom-1 after:left-0"
              :class="{ 'after:w-[100%] text-accent after:bg-red-600': index == onglet }">
              {{ item.title }}
            </div>
          </div>

          <div class="py-2 xl:py-6 flex flex-col gap-y-16 md:gap-y-11 lg:gap-y-10 xl:gap-y-4
        items-center xl:items-start">
            <div class="flex-1 flex flex-col md:flex-row max-w-max gap-x-3
          items-center text-white/60" v-for="data in aboutData[onglet].info" :key="data">
              <!-- title -->
              <div class="font-light text-3xl xl:text-xl mb-2 md:mb-0 max-w-lg">{{ data.title }}</div>
              <div class=" h-full w-0.5 bg-slate-400 md:flex text-3xl xl:text-xl" v-if="data.stage || data.icons"></div>
              <div class="text-3xl xl:text-xl">{{ data?.stage }}</div>
              <div class="flex gap-x-6 ">
                <div v-for="icon in data?.icons" :key="icon" class="flex  gap-x-4">
                  <!-- icons -->
                  <div class="text-5xl xl:text-2xl text-white">
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

.appear-info-enter-from {
  opacity: 0;
  transform: translateX(50%);
}

.v-enter-from {
  opacity: 0;
  transform: translateX(-50%);
}

.appear-info-leave-to {
  opacity: 0;
  transform: translateX(-50%);
}


.v-leave-to {
  transform: translateX(50%);
  opacity: 1;
}
</style>
