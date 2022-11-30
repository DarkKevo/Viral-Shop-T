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
        async enviar(state) {
            let data = {
                nombre: state.formData.nombre,
                telefono: state.formData.telefono,
                correo: state.formData.correo,
            };

            let dataJSON = JSON.stringify(data);

            await fetch('http://localhost:3000/lead', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json;charset=UTF-8' },
                body: dataJSON,
            })
                .then((res) => {
                    console.log(res);
                    alert('Guardado Exitosamente');
                })
                .catch((err) => console.log(err));
            state.formData.nombre = '';
            state.formData.telefono = '';
            state.formData.correo = '';
        },
    },
    actions: {},
    modules: {},
});
