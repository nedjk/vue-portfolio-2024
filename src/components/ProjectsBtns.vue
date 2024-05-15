<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <div class="project-btn xl:bg-transparent project-btn rounded-full mx-auto xl:mx-0">
        <RouterLink class=" z-10 relative group w-[215px] h-[215px] xl:w-[185px] xl:h-[185px] flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat" to="/work">
            <img class="animate-spin-slow w-full h-full max-w-[171px] max-h-[178px] xl:max-w-[141px] xl:max-h-[148px]" src="/img/rounded-text.png">

            <div class="absolute text-4xl group-hover:translate-x-2 transition-all duration-300">
                <i class="fa-solid fa-arrow-right"></i>
            </div>
        </RouterLink>
    </div>

</template>

<style scoped>



</style>