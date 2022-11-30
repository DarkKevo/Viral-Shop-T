<template>
    <div id="vendidos" class="principal-div">
        <h1 class="m-3">Producto mas vendido del mes</h1>
        <div class="d-flex w-100 p-3 respon">
            <div class="p-3 d-flex flex-column align-items-center justify-content-center fs-4 div2">
                <h3>Samsung Notebook Flash</h3>
                <img class="p-3 m-2 border border-dark border-3 rounded imgRes" src="../assets/sams.jpg"
                    alt="computadora">
                <ul class="nav flex-column">
                    <li>Giga-bit Wifi</li>
                    <li> Memoria Flash/ MicroSD</li>
                    <li>Intel Celeron N400</li>
                    <li>4GB RAM</li>
                </ul>
            </div>
            <div class="p-3 video">
                <iframe class="rounded" width="600" height="400" src="https://www.youtube.com/embed/VWOZiwQ0VV4"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>
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
    color: #DFF6FF;
    background-color: #256D85;
    width: 100%;
    height: 100%;
    padding: 5%;
}
.div2 {
    width: 50%;
}

.imgRes{
    width: 50%;
}

.video{
    width: 50%;
}

@media(max-width:1024px){
    .video{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .video iframe{
        width: 80%;
        height: 80%;
    }
}

@media(max-width:820px){
    .respon{
        flex-direction: column;
        justify-content: cemter;
        align-items: center;
    }   
    .imgRes{
        width: 100% ;
    }
    .video iframe{
        height: 400px;
    }
}
@media (max-width: 414px) {
    .principal-div{
        padding: 3%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
    }
    .div2 {
        width: 100%;
    }

    .imgRes {
        width: 45%;
    }
    
    .respon {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: center;
    }

    .video{
        width: 100%;
        height: 50%;
    }
    .video iframe{
        height: 200px;
        width: 100%;
    }

}
</style>
