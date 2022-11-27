<template>
    <div class="d-flex justify-content-around align-items-center">
        <img src="../assets/definitivo.png" alt="">
        <a class="text-dark text-decoration-none" href="www.facebook.com"><p><i class="fa-brands fa-facebook"></i> Facebook</p></a>
        <a class="text-dark text-decoration-none" href="www.instagram.com"><p><i class="fa-brands fa-instagram"></i> Instagram</p></a>
        <a class="text-dark text-decoration-none" href="www.twitter.com"><p><i class="fa-brands fa-twitter"></i> Twitter</p></a>
        <p>Copyright 2022</p>
    </div>
</template>

<script>
export default {
    name: 'footervue',
};
</script>

<style scoped>
div {
    background-color: #256D85;
    padding: 1%;
}
img{
    width: 10%;
}

@media(max-width:430px){

    img{
        width: 10%;
    }
    p{
        font-size: 10px;
    }
}
@media(max-width:290px){
    p{
        font-size: 7px;
    }
}
</style>
