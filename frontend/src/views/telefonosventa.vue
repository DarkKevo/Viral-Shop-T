<template>
    <div class="div_principal mt-5 d-flex">

        <div class="card mb-3" style="max-width: 300px;">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="../assets/logo.png" class="img-fluid rounded-start" alt="...">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.</p>
                        <p class="card-text"><a href="#" class="btn btn-primary">COMPRAR</a></p>
                    </div>
                </div>
            </div>
        </div>
        <div class="card mb-3" style="max-width: 300px;">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="../assets/logo.png" class="img-fluid rounded-start" alt="...">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.</p>
                        <p class="card-text"><a href="#" class="btn btn-primary">COMPRAR</a></p>
                    </div>
                </div>
            </div>
        </div>
        <div class="card mb-3" style="max-width: 300px;">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="../assets/logo.png" class="img-fluid rounded-start" alt="...">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.</p>
                        <p class="card-text"><a href="#" class="btn btn-primary">COMPRAR</a></p>
                    </div>
                </div>
            </div>
        </div>
        <div class="card mb-3" style="max-width: 300px;">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="../assets/logo.png" class="img-fluid rounded-start" alt="...">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.</p>
                        <p class="card-text"><a href="#" class="btn btn-primary">COMPRAR</a></p>
                    </div>
                </div>
            </div>
        </div>
        <div class="card mb-3" style="max-width: 300px;">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="../assets/logo.png" class="img-fluid rounded-start" alt="...">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.</p>
                        <p class="card-text"><a href="#" class="btn btn-primary">COMPRAR</a></p>
                    </div>
                </div>
            </div>
        </div>
        <div class="card mb-3" style="max-width: 300px;">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="../assets/logo.png" class="img-fluid rounded-start" alt="...">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.</p>
                        <p class="card-text"><a href="#" class="btn btn-primary">COMPRAR</a></p>
                    </div>
                </div>
            </div>
        </div>
        <!-- <p>lorem ipsum dolor sit amet</p>
        <ul v-for="i of articles" :key="i">
            <li>
                nombre: {{ i.titulo }} <br>
                 descripcion: {{ i.description }} <br> link:
                {{ i.img_url }}
            </li>
        </ul> -->
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'telefonos',
    data() {
        return {
            articles: [],
        };
    },
    created() {
        this.getPhones();
    },
    methods: {
        async getPhones() {
            const res = await axios.get('http://localhost:3000/telefonos');
            this.articles = res.data;
        },
    },
};
</script>
<style scoped>
.div_principal {
    background-color: #06283D;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding: 5%;
}
.card{
    margin:10px;
}
</style>
