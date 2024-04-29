<script setup>
import TheCircles from "@/components/TheCircles.vue";
import WorkSlider from "./../components/WorkSlider.vue";
import TheBulb from "./../components/TheBulb.vue";
</script>

<template>
    <div class="h-full bg-primary/30 py-36 flex items-center">
        <TheCircles />
        <div class="container mx-auto">

            <div class="flex flex-col xl:flex-row gap-x-8">
                <!-- text -->

                <div class="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4
            xl:mb-0">
                    <Transition appear mode="out-in">
                        <h2 class=" pt-0 md:pt-20 xl: h2 xl:mt-8">
                            My Work
                        </h2>
                    </Transition>

                    <Transition appear mode="out-in">
                        <p class="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0">
                            10 years ago, I began freelancing as a developer. Since then, I've
                            done remote work for agnecies, consulted for startups, and
                            collaborated on digital products for business ans consumer use.
                        </p>
                    </Transition>
                </div>
                
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

<style scoped></style>