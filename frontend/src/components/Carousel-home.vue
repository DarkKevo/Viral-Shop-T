<template>

  <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2" class="active" aria-current="true"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item">
          <img src="../assets/image_2022-11-10_13-25-35.png" class="d-block w-100">
          <div class="carousel-caption d-none d-md-block">
            <h1>Los Mejores Smartphones
al Mejor Precio</h1>
          </div>
        </div>
        <div class="carousel-item active">
          <img src="https://primicia.com.ve/wp-content/uploads/2022/07/los-10-sonidos-principales-del-perro.jpg" class="d-block w-100">
    
          <div class="carousel-caption d-none d-md-block">
            <h1>Visitanos en la sucursal mas cercana</h1>

          </div>
        </div>
        <div class="carousel-item">
          <img src="https://estaticos.muyinteresante.es/uploads/images/article/62cfb46c5cafe8b3a50cffb6/perros.populares.jpg" class="d-block w-100">
    
          <div class="carousel-caption d-none d-md-block">
            <h1>!Te esperamos¡</h1>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>

</template>

<script>

export default {
  name: 'carousel',
}
</script>
<style scoped>
.carousel-item img {
  height: 93vh;
  object-fit: cover;
  object-position: center;
}

h1 {
  margin-bottom: 2rem;
  background-color: #dff6ff77;
  border-radius: 10px;
  font-family: Ubuntu ;
}

</style>

