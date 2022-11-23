<template>
    <div style="background-color: #06283d" id="container-de-las-cards">
        <div class="text-center pt-5">
            <h1>¿Quienes Somos?</h1>
        </div>
        <div class="p-4 d-flex justify-content-evenly" id="container-card">
            <!-- 1 -->
            <div class="card bg-dark">
                <img class="card-img-top"
                    src="https://www.65ymas.com/uploads/s1/40/63/3/bigstock-koh-samui-thailand-january-228584263_1_621x621.jpeg" />
                <div class="card-body body">
                    <p class="card-text">Compartimos nuevas tecnologias</p>
                </div>
            </div>
            <!-- 2 -->
            <div class="card bg-dark">
                <img class="card-img-top"
                    src="https://www.65ymas.com/uploads/s1/40/63/3/bigstock-koh-samui-thailand-january-228584263_1_621x621.jpeg" />
                <div class="card-body body">
                    <p class="card-text">
                        Desde celuares hasta computadoras de todas las marcas
                    </p>
                </div>
            </div>
            <!-- 3 -->
            <div class="card bg-dark">
                <img class="card-img-top"
                    src="https://www.65ymas.com/uploads/s1/40/63/3/bigstock-koh-samui-thailand-january-228584263_1_621x621.jpeg" />
                <div class="card-body body">
                    <p class="card-text">Con los mejores precios del mercado</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'some-cards',
};
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
    width: 18rem;
    margin-bottom: 4rem;
    margin-left: 1.5rem;
    margin-right: 1.5rem;
}

#container-de-las-cards {
    height: 100vh;
}

h1,
p {
    color: #dff6ff;
    font-family: Ubuntu;
}

h1 {
    margin-bottom: 2rem;
}

p {
    font-size: 1.5rem;
}

@media (max-width:1024px) {
    .card {
        width: 15rem;
    }

}
@media (max-width:360px) {
    h1 {
        margin: 0;
    }

    .card {
        width: 12rem;
        margin: 0;
        margin-top: 10px;
    }

    img {
        margin-top: 5px;
        height: 100px;
        object-fit: contain;
    }

    p {
        font-size: 1rem;
    }
}
</style>
