<template>
    <div style="background-color: #06283D" id="container-de-las-cards">
      <div class="text-center pt-5">
        <h1>El Titulo</h1>  
      </div>
      <div class="p-4 d-flex  justify-content-evenly" id="container-card">
        <!-- 1 -->
        <div class="card" style="width: 18rem;">
          <img class="card-img-top" src="https://www.65ymas.com/uploads/s1/40/63/3/bigstock-koh-samui-thailand-january-228584263_1_621x621.jpeg">
          <div class="card-body">
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
      <!-- 2 -->
      <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="https://www.65ymas.com/uploads/s1/40/63/3/bigstock-koh-samui-thailand-january-228584263_1_621x621.jpeg">
      <div class="card-body">
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
      </div>
      <!-- 3 -->
      <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="https://www.65ymas.com/uploads/s1/40/63/3/bigstock-koh-samui-thailand-january-228584263_1_621x621.jpeg">
      <div class="card-body">
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
      </div>
      </div>
    </div>
</template>

<script>

export default {
  name: 'some-cards',
}
</script>

<style scoped>
#container-card {
  flex-wrap: wrap;
}

img {
  object-fit: cover;
  object-position: center;
}

.card {
  margin-bottom: 4rem;
  margin-left: 1.5rem;
  margin-right: 1.5rem;
}

#container-de-las-cards {
  height: 100vh;
}

</style>