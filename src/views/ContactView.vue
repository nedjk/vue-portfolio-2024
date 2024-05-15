<script setup>
import TheCircles from "@/components/TheCircles.vue";
</script>

<template>

    <div class="h-full bg-primary/30 py-36 flex items-center">
        <TheCircles />

        <div class="container mx-auto py-32 text-center xl:text-left flex items-center justify-center">
            <!-- text & form -->
            <Transition appear mode="out-in">
                <div class="flex gap-10 xl:gap-0 flex-col w-full max-w-[800px]">
                    <!-- text -->
                    <h2 class="h2 mb-12 text-center px-3 xl:px-0">Contactez <span class="text-accent">moi</span></h2>
                    <!-- form -->
                    <form action="" class="flex-1 text-xl flex flex-col gap-10 xl:gap-5 w-full mx-auto">
                        <!-- input group -->
                        <div class="flex gap-x-6 w-full">
                            <input class="input" placeholder="Name" type="text">
                            <input class="input" placeholder="Email" type="text">
                        </div>
                        <input type="text" placeholder="Subject" class="input">
                        <textarea placeholder="Message" class="textarea"></textarea>
                        <button class="bg-gradient-to-r 
                    from-[#ca7879]/35
                    via-[#7611a6]/35
                    to-[#1c0056]/35

                    btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center
                    justify-center overflow-hidden hover:border-[#ca7879]/30 group">
                            <span
                                class="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">Envoyer</span>
                            <div class="-translate-y-[55%] opacity-0 group-hover:flex
                        group-hover:-translate-y-0 group-hover:opacity-100 transition-all
                        duration-300 absolute text-[22px]">
                                <i class="fa-solid fa-arrow-right"></i>
                            </div>
                        </button>
                    </form>
                </div>
            </Transition>
        </div>
    </div>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
    transition: all 2s;
}

.v-enter-from {
    opacity: 0;
    transform: translateY(50%);
}

.v-leave-to {
    transform: translateY(-50%);
    opacity: 1;
}
</style>