<template>
    <div class="mt-5">
        <p>lorem ipsum dolor sit amet</p>
        <ul v-for="i of articles" :key="i">
            <li>
                nombre: {{ i.titulo }} <br>
                 descripcion: {{ i.description }} <br> link:
                {{ i.img_url }}
            </li>
        </ul>
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
