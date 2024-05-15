<script setup>

async function particlesInit(engine) {
    await loadFull(engine);
}
</script>

<template>
    <vue-particles id="tsparticles" class="h-full w-full absolute translate-z-0" :options="{
        fullScreen:{enable:false},
        background:{color:{value:''}},
        fpsLimit: 30,
        interactivity: {
            events: {
                onClick: {
                    enable: false,
                    mode: 'push'
                },
                onHover: {
                    enable: true,
                    mode: 'repulse'
                },
                resize:true,
            },
            modes: {
                push: {
                    quantity: 90
                },
                repulse: {
                    distance: 200,
                    duration: 0.4
                }
            }
        },
        particles: {
            color: {
                value: '#e68e2e'
            },
            links: {
                color: '#f5d393',
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1
            },
            collisions:{
                enable:true
            },
            move: {
                direction: 'none',
                enable: true,
                outModes: 'bounce',
                random: false,
                speed: 1,
                straight: false
            },
            number: {
                density: {
                    enable: true,
                    area:800,
                },
                value: 100
            },
            opacity: {
                value: 0.5
            },
            shape: {
                type: 'circle'
            },
            size: {
                value: { min: 1, max: 5 }
            }
        },
        detectRetina: true
    }" @particles-loaded="particlesLoaded" />

</template>

<style scoped>

</style>
