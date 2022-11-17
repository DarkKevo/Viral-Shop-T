import axios from 'axios';
import { createStore } from 'vuex';

export default createStore({
    state: {
        formData: {
            nombre: '',
            telefono: '',
            correo: '',
        },
    },
    getters: {},
    mutations: {
        enviar(state) {
            axios
                .post('http://localhost:3000/lead', {
                    nombre: state.nombre,
                    correo: state.correo,
                    telefono: state.telefono,
                })
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
    },
    actions: {},
    modules: {},
});
