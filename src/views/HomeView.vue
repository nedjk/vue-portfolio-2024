<script setup>
import ParticlesContainer from "./../components/ParticlesContainer.vue";
import ProjectsBtns from "./../components/ProjectsBtns.vue";
</script>

<template>
    <div class="bg-primary/10 h-full pt-8 bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <!-- text -->
        <div class="w-full h-full">
            <div
                class="gap-20 xl:gap-0 text-center flex flex-col justify-center xl:pt-36 md:pt-5 xl:text-left h-full container mx-auto">
                <!-- title -->
                <Transition appear mode="out-in" name="appear-title">

                    <h1 class="h1">
                        Développeuse web à la <br />recherche d'une
                        <br>
                        <span class="text-accent">Alternance</span>
                    </h1>
                </Transition>

                <!-- Subtitle -->
                <Transition appear mode="out-in" name="appear-text">

                    <p
                        class="leading-[1.8] text-white/60 font-normal max-w-lg xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-4">
                        Forte d'une formation initiale en développement web, je cherche à évoluer et suivre une
                        alternance
                        en conception d'application.
                    </p>
                </Transition>

                <!-- btn -->
                <Transition appear mode="out-in">

                    <div class="flex justify-center xl:hidden relative">
                        <ProjectsBtns/>
                    </div>
                </Transition>

                <Transition appear mode="out-in">
                    <ProjectsBtns class="hidden xl:flex"></ProjectsBtns>
                </Transition>
            </div>
        </div>

        <!-- image -->
        <div class="w-[1200px] h-full absolute right-0 bottom-0">
            <!-- bg img -->
            <div
                class="opacity-85 bg-[center_bottom_75px] bg-explosion xl:opacity-100 xl:bg-cover xl:bg-right bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0">

            </div>
            <!-- particles -->
            <ParticlesContainer />
        </div>
    </div>
</template>

<style scoped>



.v-enter-active,
.v-leave-active {
    transition: all 4.5s;
}


.appear-text-enter-active,
.appear-text-leave-active {
    transition: all 4s;
}

.appear-title-enter-active,
.appear-title-leave-active {
    transition: all 3s;
}



.v-enter-from,
.appear-text-enter-from,
.appear-title-enter-from {
    opacity: 0;
    transform: translateY(-50%);
}

.v-leave-to,
.appear-text-leave-to,
.appear-title-leave-to {
    transform: translateY(50%);
    opacity: 1;
}
</style>
