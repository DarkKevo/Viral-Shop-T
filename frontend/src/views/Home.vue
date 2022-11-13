<template>
    <section id="carousel-home">
        <carousel />
    </section>
    <section id="some-cards">
        <cards />
    </section>
    <section id="productos">
        <productos />
    </section>
    <section>
        <masvendido />
    </section>
    <section>
        <sucursales />
    </section>
    <section>
        <formulario />
    </section>
    <footer>
        <footervue />
    </footer>
</template>

<script>
import carousel from '@/components/Carousel-home.vue';
import cards from '@/components/Some-cards.vue';
import productos from '@/components/Productos.vue';
import masvendido from '@/components/masvendido.vue';
import sucursales from '@/components/sucursales.vue';
import formulario from '@/components/formulario.vue';
import footervue from '@/components/footervue.vue';

export default {
    name: 'Home',
    components: {
        carousel,
        cards,
        productos,
        masvendido,
        sucursales,
        formulario,
        footervue,
    },
};
</script>
