<template>
    <div class="container">
        <!-- <h1 class="my-5">¿Estas seguro de eliminar el departamento {{this.$route.params.id}}?</h1>
        <button class="btn btn-danger" @click="deleteDepartamento">Eliminar</button> -->
    </div>
</template>

<script>
import DepartamentosService from './../services/DepartamentosService';

const services = new DepartamentosService();

export default {
    name: 'DeleteComponent',

    data() {
        return {
            
        };
    },

    mounted(){
        services.deleteDepartamento(this.$route.params.id).then(() => {
            this.$router.push("/")
        })
    }
};
</script>

<style scoped>

</style>