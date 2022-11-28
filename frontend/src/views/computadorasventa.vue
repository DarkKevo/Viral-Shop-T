<template>
    <div class="div_principal mt-5 d-flex">
        <div
            class="card mb-3"
            style="max-width: 300px"
            v-for="i of articles"
            :key="i"
        >
            <div class="row g-0">
                <div class="col-md-4">
                    <img
                        :src="i.img_url"
                        class="img-fluid rounded-start"
                        alt="..."
                    />
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">{{ i.titulo }}</h5>
                        <p class="card-text">
                            {{i.description}}
                        </p>
                        <p class="card-text">
                            {{i.precio}}
                        </p>
                        <p class="card-text">
                            <a href="#" class="btn btn-primary">COMPRAR</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
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
            const res = await axios.get('http://localhost:3000/computadoras');
            this.articles = res.data;
        },
    },
};
</script>
<style scoped>
.div_principal {
    background-color: #06283d;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding: 5%;
}
.card {
    margin: 10px;
}
</style>
