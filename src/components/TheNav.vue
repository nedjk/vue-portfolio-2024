<script setup>
import { RouterLink } from "vue-router";
const navLinks = [
    {
        page: "home",
        icon: "fa-solid fa-house"
    },
    {
        page: "about",
        icon: "fa-solid fa-user"
    },
    {
        page: "work",
        icon: "fa-solid fa-briefcase"
    },
    // {
    //     page: "contact",
    //     icon: "fa-solid fa-envelope"
    // },
]

</script>

<template>
    <nav class="flex flex-col items-center xl:justify-center gap-y-4 fixed h-max
    bottom-0 mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen">
        <ul class="flex w-full xl:flex-col items-center justify-between
        xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 h-[80px] xl:h-max py-8
        bg-white/20 backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full">
            <li class="relative flex items-center group hover:text-accenttransition-all duration-300 "
                v-for="link in navLinks" :key="link.page">

                <!-- icon -->
                <RouterLink :to="{ name: link.page }">
                    <i :class="link.icon"></i>
                </RouterLink>


                <!-- tooltip -->
                <div class="absolute pr-14 right-0 hidden xl:group-hover:flex">
                    <div class="bg-white relative flex text-primary items-center p-[6px] rounded-[3px]">
                        <div class="text-[12px] leading-none font-semibold capitalize">
                            {{ link.page }}
                        </div>
                        <!-- Triangle -->
                        <div class="border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2"></div>
                    </div>
                </div>


            </li>

        </ul>
    </nav>
</template>

<style scoped>
.router-link-exact-active {
    color: red
}

a {
    display: inline-block;
    position: relative;
    z-index: 1;
    padding: 5px;
}

svg {
    display: inline-block
}

path {
    position: relative;
    z-index: -1
}
</style>