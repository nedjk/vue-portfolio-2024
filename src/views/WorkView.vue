<script setup>
import TheCircles from "@/components/TheCircles.vue";
import WorkSlider from "./../components/WorkSlider.vue";
import TheBulb from "./../components/TheBulb.vue";
</script>

<template>
    <div class="h-full bg-primary/30 py-36 flex items-center">
        <TheCircles />
        <div class="container mx-auto">

            <div class="flex flex-col xl:flex-row gap-x-8 md:gap-9">
                <!-- text -->

                <Transition appear mode="out-in" name="appear">

                    <div class="text-center gap-16 lg:gap-8 md:gap-4 flex xl:w-[30vw] flex-col xl:text-left mb-4  xl:h-1/2 xl:m-auto
            ">
                        <h2 class=" pt-0 h2 mb-0 mt-0">
                            Mes projets
                        </h2>

                        <p class="max-w-[800px] mx-auto xl:mx-0 xl:mb-12 px-2 xl:px-0">
                            Découvrez une sélection de mes projets les plus récents afin d'avoir un aperçu de mon
                            travail.
                        </p>
                    </div>
                </Transition>

                <!-- Slider -->
                <Transition appear mode="out-in">
                    <div class="w-full xl:max-w-[65%]">
                        <WorkSlider />
                    </div>
                </Transition>
            </div>
        </div>

        <TheBulb />
    </div>
</template>

<style scoped>
.v-enter-active,
.v-leave-active,
.appear-leave-active,
.appear-enter-active {
    transition: all 2.5s;
}

.v-enter-from {
    opacity: 0;
    transform: translateY(-50%);
}

.appear-enter-from {
    opacity: 0;
    transform: translateY(50%);
}

.appear-leave-to {
    transform: translateY(-50%);
    opacity: 1;
}

.v-leave-to {
    transform: translateY(50%);
    opacity: 1;
}
</style>