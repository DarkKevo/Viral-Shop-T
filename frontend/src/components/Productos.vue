<template>
    <div class="contenedor-de-productos d-flex">
        <div class="d-flex flex-column align-items-center justify-content-center">
            <h1 class="">Computadoras</h1>
            <img src="../assets/WhatsApp_Image_2022-11-14_at_8.05.37_PM-removebg-preview.png" alt="" />
        </div>
        <div class="d-flex flex-column align-items-center justify-content-center">
            <h1>Celulares</h1>
            <img src="../assets/WhatsApp_Image_2022-11-14_at_8.05.38_PM-removebg-preview.png" alt="" />
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
    background-color: #256D85;
    border: 3px solid black;
}

h1{
    color: #dff6ff;
    font-family: Ubuntu;
}

@media(max-width:360px){
    .contenedor-de-productos{
        flex-direction: column;
        height: 100vh;
    }
    .contenedor-de-productos div{
        width: 100%;
        height: 50%;
    }
    .contenedor-de-productos div img{
        width: 70%;
    }
}

</style>
