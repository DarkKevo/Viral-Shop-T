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
            let data = {
                nombre: state.formData.nombre,
                telefono: state.formData.telefono,
                correo: state.formData.correo,
            };

            let dataJSON = JSON.stringify(data);

            fetch('http://localhost:3000/lead', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json;charset=UTF-8' },
                body: dataJSON,
            })
                .then((res) => console.log(res))
                .catch((err) => console.log(err));
        },
    },
    actions: {},
    modules: {},
});
