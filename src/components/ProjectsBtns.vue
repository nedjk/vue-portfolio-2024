<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <div class="mx-auto xl:mx-0">
        <RouterLink class=" z-10 relative group w-[185px] h-[185px] flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat" to="/work">
            <img class="animate-spin-slow w-full h-full max-w-[141px] max-h-[148px]" src="/img/rounded-text.png">

            <div class="absolute text-4xl group-hover:translate-x-2 transition-all duration-300">
                <i class="fa-solid fa-arrow-right"></i>
            </div>
        </RouterLink>
    </div>

</template>

<style scoped></style>