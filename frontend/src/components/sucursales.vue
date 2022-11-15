<template>
    <div class="principal-div p-5">
        <h1>Sucursales</h1>
        <div class="w-100 h-100 d-flex justify-content-evenly align-items-center">
            <div class="card h-75 d-inline-block colores border border-dark border-4 p-3" style="width: 20rem;">
                <img src="../assets/photo_2022-11-14_11-44-46.jpg" class="card-img-top h-50 d-inline-block" alt="">
                <div class="card-body">
                    <h5 class="card-title fs-4">ViralShop Valera</h5>
                    <p class="card-text fs-5"> <i class="fa-solid fa-magnifying-glass-location"></i> Av 5, Ubicados en
                        Valera, Estado Trujilo.</p>
                </div>
            </div>
            <div class="card h-75 d-inline-block colores border border-dark border-4 p-3" style="width: 20rem;">
                <img src="../assets/photo_2022-11-13_22-46-13.jpg" class="card-img-top h-50 d-inline-block" alt="">
                <div class="card-body">
                    <h5 class="card-title fs-4">ViralShop Valera</h5>
                    <p class="card-text fs-5"> <i class="fa-solid fa-magnifying-glass-location"></i> Av 5, Ubicados en
                        Valera, Estado Trujilo.</p>
                </div>
            </div>
            <div class="card h-75 d-inline-block colores border border-dark border-4 p-3" style="width: 20rem;">
                <img src="../assets/photo_2022-11-13_22-44-40.jpg" class="card-img-top h-50 d-inline-block" alt="">
                <div class="card-body">
                    <h5 class="card-title fs-4">ViralShop Valera</h5>
                    <p class="card-text fs-5"> <i class="fa-solid fa-magnifying-glass-location"></i> Av 5, Ubicados en
                        Valera, Estado Trujillo.</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'sucursales',
};
</script>

<style scoped>
.colores {
    color: black;
    background-color: #D9D9D9;
}

.principal-div {
    font-family: Ubuntu;
    color: #DFF6FF;
    background-color: #06283D;
    width: 100%;
    height: 100vh;
}
</style>
