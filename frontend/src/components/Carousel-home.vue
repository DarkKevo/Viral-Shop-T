<template>
    <div
        id="carouselExampleCaptions"
        class="carousel slide"
        data-bs-ride="false"
    >
        <div class="carousel-indicators">
            <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="0"
                class=""
                aria-label="Slide 1"
            ></button>
            <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="1"
                aria-label="Slide 2"
                class="active"
                aria-current="true"
            ></button>
            <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="2"
                aria-label="Slide 3"
            ></button>
        </div>
        <div class="carousel-inner">
            <div class="carousel-item">
                <img
                    src="../assets/photo_2022-11-13_22-42-27.jpg"
                    class="d-block w-100"
                />
                <div class="carousel-caption d-none d-md-block">
                    <h1>Los Mejores Smartphones al Mejor Precio</h1>
                </div>
            </div>
            <div class="carousel-item active">
                <img
                    src="../assets/photo_2022-11-13_22-44-40.jpg"
                    class="d-block w-100"
                />

                <div class="carousel-caption d-none d-md-block">
                    <h1>Visitanos en la sucursal mas cercana</h1>
                </div>
            </div>
            <div class="carousel-item">
                <img
                    src="../assets/photo_2022-11-13_22-46-13.jpg"
                    class="d-block w-100"
                />

                <div class="carousel-caption d-none d-md-block">
                    <h1>¡Te esperamos!</h1>
                </div>
            </div>
        </div>
        <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
        >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
        >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
</template>

<script>
export default {
    name: 'carousel',
};
</script>

<style scoped>
.carousel-item img {
    height: 100vh;
    object-fit: cover;
    object-position: center;
}

h1 {
    margin-bottom: 2rem;
    background-color: #dff6ff77;
    border-radius: 10px;
    font-family: Ubuntu;
}
</style>
