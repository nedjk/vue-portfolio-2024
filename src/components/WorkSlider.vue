<script>


// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

const workSlides = {
  slides: [
    {
      images: [
        {
          title: 'title',
          path: 'img/thumb1.jpg',
        },
        {
          title: 'title',
          path: 'img/thumb2.jpg',
        },
        {
          title: 'title',
          path: 'img/thumb3.jpg',
        },
        {
          title: 'title',
          path: 'img/thumb4.jpg',
        },
      ],
    },
    {
      images: [
        {
          title: 'title',
          path: 'img/thumb4.jpg',
        },
        {
          title: 'title',
          path: 'img/thumb1.jpg',
        },
        {
          title: 'title',
          path: 'img/thumb2.jpg',
        },
        {
          title: 'title',
          path: 'img/thumb3.jpg',
        },
      ],
    },
  ],
};

console.log(workSlides.slides)

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination, Navigation, Autoplay],
      workSlides
    };
  },
};
</script>
<!-- 
     :autoplay="{
      delay: 6500,
    }"
 -->
<template>
  <swiper class="h-[1040px] md:h-[540px] lg:h-[740px] xl:h-[440px]" spaceBetween:50 
  :loop="true" 
  :centeredSlides="true"
    :navigation="true" :pagination="{
    type: 'fraction',
  }" :modules="modules">
    <swiper-slide v-for="(slide, index) in workSlides.slides" :key="index">
      <!-- <div class="h-full w-full grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer"> -->
      <div class="h-full rounded-lg w-11/12 mx-auto xl:w-full grid grid-rows-3 gap-4 lg:gap-2">
        <div class="flex flex-col gap-5">
          <h3 class="h3 text-center mx-auto w-full">Description</h3>
          <p class="max-w-screen-lg description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam,
            autem? Porro vel ab amet aliquid impedit praesentium odio, libero dolore ut exercitationem numquam aperiam
            aliquam! Suscipit quod harum odit tempore.</p>
        </div>
        <div class="row-span-2 relative rounded-lg  overflow-hidden flex items-center justify-center group">
          <!-- <img v-for="(image,imgIndex) in slide.images" :key="imgIndex" :src="image.path" alt="" class="relative rounded-lg overflow-hidden  group"> -->
          <img src="/img/thumb1.jpg" alt="" class="flex items-center justify-center relative overflow-hidden">

          <!-- Overlay -->
          <div
            class="overlay absolute  inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700 ">
          </div>
          <a href="/work"
            class="absolute cursor-pointer bottom-0 translate-y-full group-hover:-translate-y-60 group-hover:md:-translate-y-42 group-hover:lg:-translate-y-34 group-hover:xl:-translate-y-36 transition-all duration-300">
            <div class="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
              <!-- title part 1 -->
              <div class="text-3xl delay-100">LIVE</div>
              <!-- title part 2 -->
              <div class="text-3xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                PROJECT
              </div>
              <!-- icon -->
              <div class="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">

                <div class=" text-4xl group-hover:translate-x-2 transition-all duration-300">
                  <i class="fa-solid fa-arrow-right"></i>
                </div>
              </div>
            </div>
          </a>
        </div>


      </div>
    </swiper-slide>
  </swiper>
</template>

<style scoped >


:deep(.swiper-button-next:after), :deep(.swiper-button-prev:after)  {
  color:white;
  font-size: 50px;
  font-weight: 900;
}


.grid img {
  object-fit: cover;
  width: 100%;
  max-height: 100%;
}
</style>
