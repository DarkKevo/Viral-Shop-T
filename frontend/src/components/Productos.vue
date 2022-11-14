<template>
    <div class="contenedor-de-productos d-flex flex-row">
        <div class="d-flex align-items-center justify-content-center">
            <h1 class="">Computadoras</h1>
            <img src="" alt="" />
        </div>
        <div class="d-flex align-items-center justify-content-center">
            <h1>Celulares</h1>
            <img src="" alt="" />
        </div>
    </div>
</template>

<script>
export default {
    name: 'productos',
};
</script>

<style scoped>

.contenedor-de-productos div{
    width: 50%;
    height: 100vh;
    background-color: beige;
    border: 3px solid black;
}

h1{
    color: #dff6ff;
    font-family: Ubuntu;
}
</style>
