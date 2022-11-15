<template>
    <div class="principal-div d-flex justify-content-around align-items-center">

        <img class="w-30 h-50" src="../assets/pexels-yan-krukov-8867474.jpg" alt="">

        <form class="d-flex flex-column w-50 h-50 justify-content-between p-2">
            <p class="fs-4">Registrate para estar al tanto de nuestras promociones y todo lo nuevo que tenemos para ti </p>
            <div class="mb-3">
                <input type="email" class="form-control  text-dark p-3 fs-3" id="exampleInputEmail1" placeholder="Correo Electonico"
                    aria-describedby="emailHelp">
            </div>
            <div class="mb-3">
                <input type="text" class="form-control  p-3 fs-3" id="formGroupExampleInput"
                    placeholder="Nombre">
            </div>
            <div class="mb-3">
                <input type="text" class="form-control  p-3 fs-3" id="formGroupExampleInput2"
                    placeholder="Numero de telefono">
            </div>
            <button type="submit" class="btn btn-primary fs-3">Registrarme</button>
        </form>

    </div>
</template>

<script>
export default {
    name: 'formulario',
};
</script>

<style scoped>
.principal-div {
    font-family: Ubuntu;
    color: #DFF6FF;
    background-color: #06283D;
    width: 100%;
    height: 100vh;
}
</style>
