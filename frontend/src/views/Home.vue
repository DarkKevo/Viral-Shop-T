<template>
  <section id="carousel-home">
    <carousel/>
  </section>
  <section id="some-cards">
    <cards/>
  </section>
</template>

<script>
import carousel from '@/components/Carousel-home.vue'
import cards from '@/components/Some-cards.vue'

export default{
  name: 'Home',
  components: {
    carousel,
    cards,
  }
}
</script>
