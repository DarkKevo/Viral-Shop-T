<template>
    <div class="principal mt-4 p-1">
        <div class="form bg-info p-4 rounded" style="--bs-bg-opacity: 0.15">
            <form @submit.prevent="onSubmit">
                <div class="mb-2">
                    <label for="titulo" class="form-label"
                        >Titulo | Computadoras</label
                    >
                    <input
                        type="text"
                        class="form-control"
                        id="text"
                        aria-describedby="titulo"
                        v-model="data_computadoras.titulo"
                    />
                    <label for="descripcion" class="form-label"
                        >Descripcion</label
                    >
                    <input
                        type="text"
                        class="form-control"
                        id="text"
                        aria-describedby="descripcion"
                        v-model="data_computadoras.description"
                    />
                    <label for="precio" class="form-label">Precio</label>
                    <input
                        type="text"
                        class="form-control"
                        id="text"
                        aria-describedby="precio"
                        placeholder="Incluir el $ en el precio"
                        v-model="data_computadoras.precio"
                    />
                    <label for="imagen" class="form-label"
                        >Url de la Imagen</label
                    >
                    <input
                        type="text"
                        class="form-control"
                        id="text"
                        aria-describedby="imagen"
                        v-model="data_computadoras.url"
                    />
                    <div id="imagenHelp" class="form-text">
                        En la Parte inferior vera su imagen
                    </div>
                </div>
                <div class="imagenContenedor mb-2 rounded">
                    <img :src="data_computadoras.url" alt="" />
                </div>
                <button type="submit" class="btn btn-primary" @click="enviarComputadora">Enviar</button>
            </form>
        </div>
        <div class="form bg-info p-4 rounded" style="--bs-bg-opacity: 0.15">
            <form @submit.prevent="onSubmit">
                <div class="mb-2">
                    <label for="titulo" class="form-label"
                        >Titulo | Telefonos</label
                    >
                    <input
                        type="text"
                        class="form-control"
                        id="text"
                        aria-describedby="titulo"
                        v-model="data_phones.titulo"
                    />
                    <label for="descripcion" class="form-label"
                        >Descripcion</label
                    >
                    <input
                        type="text"
                        class="form-control"
                        id="text"
                        aria-describedby="descripcion"
                        v-model="data_phones.description"
                    />
                    <label for="precio" class="form-label">Precio</label>
                    <input
                        type="text"
                        class="form-control"
                        id="text"
                        aria-describedby="precio"
                        placeholder="Incluir el $ en el precio"
                        v-model="data_phones.precio"
                    />
                    <label for="imagen" class="form-label"
                        >Url de la Imagen</label
                    >
                    <input
                        type="text"
                        class="form-control"
                        id="text"
                        aria-describedby="imagen"
                        v-model="data_phones.url"
                    />
                    <div id="imagenHelp" class="form-text">
                        En la Parte inferior vera su imagen
                    </div>
                </div>
                <div class="imagenContenedor mb-2 rounded">
                    <img :src="data_phones.url" alt="" />
                </div>
                <button
                    type="submit"
                    class="btn btn-primary"
                    @click="enviarTelefono"
                >
                    Enviar
                </button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: 'create',
    data() {
        return {
            data_phones: {
                titulo: '',
                description: '',
                precio: '',
                url: '',
            },
            data_computadoras: {
                titulo: '',
                description: '',
                precio: '',
                url: '',
            },
        };
    },
    created() {},
    methods: {
        async enviarTelefono() {
            let data = {
                titulo: this.data_phones.titulo,
                description: this.data_phones.description,
                precio: this.data_phones.precio,
                url: this.data_phones.url,
            };
            let dataJSON = JSON.stringify(data);
            await fetch('http://localhost:3000/telefonoAdd', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json;charset=UTF-8' },
                body: dataJSON,
            })
                .then((res) => {
                    console.log(res)
                    alert("Guardado Exitosamente")
                })
                .catch((err) => console.log(err));
            this.data_phones.titulo = '',
            this.data_phones.description = '',
            this.data_phones.precio = '',
            this.data_phones.url = ''
        },
        async enviarComputadora() {
            let data = {
                titulo: this.data_computadoras.titulo,
                description: this.data_computadoras.description,
                precio: this.data_computadoras.precio,
                url: this.data_computadoras.url,
            };
            let dataJSON = JSON.stringify(data);
            await fetch('http://localhost:3000/computadoraAdd', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json;charset=UTF-8' },
                body: dataJSON,
            })
                .then((res) => {
                    console.log(res)
                    alert("Guardado Exitosamente")
                })
                .catch((err) => console.log(err));
            this.data_computadoras.titulo = '',
            this.data_computadoras.description = '',
            this.data_computadoras.precio = '',
            this.data_computadoras.url = ''
        },
    },
};
</script>

<style scoped>
.principal {
    display: flex;
    text-align: left;
    width: 100%;
    justify-content: space-evenly;
    background-color: rgba(141, 209, 241, 0.377);
    height: 100vh;
}
.form {
    align-self: center;
    width: 38%;
}
.imagenContenedor {
    max-height: 8rem;
    max-width: 100%;
}
input {
    margin-bottom: 0.2rem;
}
img {
    object-fit: contain;
    width: 100%;
    height: 8rem;
}
</style>
