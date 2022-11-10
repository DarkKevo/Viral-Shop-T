<template>
  <section id="carousel-home">
    <carousel/>
  </section>
  <section id="some-cards">
    <cards/>
  </section>
  <section id="productos">
    <productos/>
  </section>
</template>

<script>
import carousel from '@/components/Carousel-home.vue'
import cards from '@/components/Some-cards.vue'
import productos from '@/components/Productos.vue'

export default{
  name: 'Home',
  components: {
    carousel,
    cards,
    productos,
  }
}
</script>
