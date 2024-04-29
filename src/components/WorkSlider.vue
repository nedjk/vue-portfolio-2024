<script>


// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

const workSlides = {
  slides: [
    {
      images: [
        {
          title: 'title',
          path: '/img/thumb1.jpg',
        },
        {
          title: 'title',
          path: '/img/thumb2.jpg',
        },
        {
          title: 'title',
          path: '/img/thumb3.jpg',
        },
        {
          title: 'title',
          path: '/img/thumb4.jpg',
        },
      ],
    },
    {
      images: [
        {
          title: 'title',
          path: '/img/thumb4.jpg',
        },
        {
          title: 'title',
          path: '/img/thumb1.jpg',
        },
        {
          title: 'title',
          path: '/img/thumb2.jpg',
        },
        {
          title: 'title',
          path: '/img/thumb3.jpg',
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
      modules: [Pagination],
      workSlides
    };
  },
};
</script>

<template>
  <swiper class="h-[240px] sm:h-[340px]"
    spaceBetween:10
    :pagination="{
    clickable: true,
  }" :modules="modules" >
    <swiper-slide  v-for="(slide,index) in workSlides.slides" :key="index">
      <div class="h-full w-full grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
        <img v-for="(image,imgIndex) in slide.images" :key="imgIndex" :src="image.path" alt="" class="relative rounded-lg overflow-hidden  group">

      </div>
    </swiper-slide>
  </swiper>
</template>

<style scoped>
.grid img{
    object-fit: cover;
  width: 100%;
  max-height: 100%;
}
</style>
