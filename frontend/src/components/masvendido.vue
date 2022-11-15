<template>
    <div class="principal-div p-5">
        <h1 class="m-3">Producto mas vendido del mes</h1>
        <div class="d-flex w-100 p-3">
            <div class="w-50 p-3 d-flex flex-column align-items-center justify-content-center fs-4">
                <h3>Samsung Notebook Flash</h3>
                <img class="w-50 p-3 m-2 border border-dark border-3 rounded" src="../assets/sams.jpg" alt="computadora">
                <ul class="nav flex-column">
                    <li>Giga-bit Wifi</li>
                    <li> Memoria Flash/ MicroSD</li>
                    <li>Intel Celeron N400</li>
                    <li>4GB RAM</li>
                </ul>
            </div>
            <div class="w-50 p-3">
                <iframe class="rounded" width="600" height="400" src="https://www.youtube.com/embed/VWOZiwQ0VV4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'masvendido',
};
</script>

<style scoped>
.principal-div {
    font-family: Ubuntu;
    color:#DFF6FF;
    background-color: #256D85;
    width: 100%;
    height: 100vh;
}
</style>
