<template>
  <nav class="navbar navbar-expand-lg navbar-dark p-0" style="background-color: #256D85;">
    <div class="container-fluid">
      <a class="navbar-brand" href="/">
        <img src="./assets/pngegg.png" alt="Logo" width="60" height="60" class="d-inline-block align-text-center">
        ViralShop
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link to="/" class="nav-link active" aria-current="page">Inicio</router-link> 
          <a class="nav-link" href="#">¿Quienes Somos?</a>
          <router-link class="nav-link" to="/computadoras">Computadoras</router-link>
          <router-link class="nav-link" to="/telefonos">Telefonos</router-link>
          <a class="nav-link" href="#">Mas Vendido</a>
          <a class="nav-link" href="#">Sucursales</a>
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
