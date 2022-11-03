<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <p>Pagina de ViralShop en proceso de Desarrollo</p>
        <h3>Desarrolladores a Cargo del Proyecto</h3>
        <ul class="mt-4">
            <li>
                <p>Kevin Araujo</p>
            </li>
            <li>
                <p>Victoria Quintero</p>
            </li>
            <li>
                <p>Raul Gonzalez</p>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'HelloWorld',
    props: {
        msg: String,
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
    margin: 40px 0 0;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
a {
    color: #42b983;
}
</style>
