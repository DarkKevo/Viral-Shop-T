<template>
    <div class="principal-div p-5">
        <h1>Sucursales</h1>
        <div class="w-100 h-100 d-flex align-items-center divR">
            <div class="card d-inline-block colores border border-dark border-4 p-3">
                <img src="../assets/photo_2022-11-14_11-44-46.jpg" class="card-img-top " style="max-height:210px;" alt="">
                <div class="card-body">
                    <h5 class="card-title fs-4">ViralShop Valera</h5>
                    <p class="card-text fs-5"> <i class="fa-solid fa-magnifying-glass-location"></i> Av 5, Ubicados en
                        Valera, Estado Trujilo.</p>
                </div>
            </div>
            <div class="card d-inline-block colores border border-dark border-4 p-3">
                <img src="../assets/photo_2022-11-13_22-46-13.jpg" class="card-img-top" style="max-height:210px;" alt="">
                <div class="card-body">
                    <h5 class="card-title fs-4">ViralShop Valera</h5>
                    <p class="card-text fs-5"> <i class="fa-solid fa-magnifying-glass-location"></i> Av 5, Ubicados en
                        Valera, Estado Trujilo.</p>
                </div>
            </div>
            <div class="card d-inline-block colores border border-dark border-4 p-3">
                <img src="../assets/photo_2022-11-13_22-44-40.jpg" class="card-img-top" alt="">
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
.principal-div {
    font-family: Ubuntu;
    color: #DFF6FF;
    background-color: #06283D;
    width: 100%;
    height: 100%;
}
.colores {
    color: black;
    background-color: #D9D9D9;
}
.divR{
    flex-wrap: wrap;
    justify-content: space-evenly;
}
.card{
    height: 75%;
    width: 20rem;
}

img{
    height: 50%;
}
@media(max-width:1024px){
    .card{
        width: 15rem;
    }
}
@media(max-width:820px){
    .card{
        width: 20rem;
        height: 40%;
    }
}
@media (max-width:414px) {
    
    .divR{
        flex-direction: column;
    }
    .card{
        height: 25%;
        width:15rem;
    }

    img{
        width:100%;
        height: 70%;
    }
    p{
        display: none;
    }
}

@media(max-width:290px){
    .card{
        width: 13rem;
    }
}
</style>
