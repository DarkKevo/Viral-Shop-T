<template>
  <nav class="navbar fixed-top navbar-expand-lg navbar-dark p-0" style="background-color: #256D85;">
    <div class="container-fluid">
      <a class="navbar-brand" href="/">
        <img src="./assets/definitivo.png" alt="Logo" width="90" height="40" class="d-inline-block align-text-center">
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link to="/" class="nav-link active" aria-current="page">Inicio</router-link> 
          <a class="nav-link" href="#container-de-las-cards">¿Quienes Somos?</a>
          <a class="nav-link" href="#catalogo">Nuestros Productos</a>
          <a class="nav-link" href="#vendidos">Mas Vendido</a>
          <a class="nav-link" href="#sucursales">Sucursales</a>
        </div>
      </div>
    </div>
  </nav>
    <router-view />
</template>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
}

nav a.router-link-exact-active {
    color: #ffffff;
}
</style>