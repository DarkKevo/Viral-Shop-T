<template>
    <div class="principal-div d-flex align-items-center">
        <img  src="../assets/pexels-yan-krukov-8867474.jpg" alt="" />

        <form id="form-lead" class="d-flex flex-column p-2 formulario"
            @submit.prevent="onSubmit">
            <p class="fs-4">
                Registrate para estar al tanto de nuestras promociones y todo lo
                nuevo que tenemos para ti
            </p>
            <div class="mb-3">
                <input type="email" class="form-control text-dark p-3 fs-3" id="exampleInputEmail1"
                    placeholder="Correo Electonico" aria-describedby="emailHelp" v-model="formData.correo" />
            </div>
            <div class="mb-3">
                <input type="text" class="form-control p-3 fs-3" id="formGroupExampleInput" placeholder="Nombre"
                    v-model="formData.nombre" />
            </div>
            <div class="mb-3">
                <input type="text" class="form-control p-3 fs-3" id="formGroupExampleInput2"
                    placeholder="Numero de telefono" v-model="formData.telefono" />
            </div>
            <button type="submit" @click="enviar" class="btn btn-primary fs-3">
                Registrarme
            </button>
        </form>
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
    name: 'formulario',
    computed: {
        ...mapState(['formData']),
    },
    methods: {
        ...mapMutations(['enviar']),
    },
};
</script>

<style scoped>
.principal-div {
    justify-content: space-around;
    font-family: Ubuntu;
    color: #dff6ff;
    background-color: #06283d;
    width: 100%;
    height: 100vh;
}

img{
    height: 50%;
    width: 30%;
}

.formulario {
    justify-content: space-between;
    height: 50%;
    width: 50%;
}

@media(max-width:1024px){
    .formulario{
        height: 100%;
        justify-content: space-evenly;
    }
}
@media(max-width:820px){
    .principal-div{
        flex-direction: column;
        justify-content: space-evenly;
    }
    .formulario{
        height: 50%;
    }
    img{
        height: 30%;
        width: 50%;
    }
}
@media (max-width: 360px) {
    img {
        display: none;
    }

    .principal-div {
        flex-direction: column;
        justify-content: center;
    }

    .formulario{
        height: 100%;
        width: 90%;
        justify-content: space-evenly;
    }

}
</style>
