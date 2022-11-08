<template>
    <div class="container">  
        <h1 class="my-5">Update departamento: {{this.$route.params.id}}</h1>      
        <form method="post" @submit.prevent="updateDepartamento" v-if="departamento">
            <label class="form-label">Numero: </label>
            <input type="/" class="form-control" v-model="departamento.numero">
            <label class="form-label">Nombre: </label>
            <input type="/" class="form-control" v-model="departamento.nombre">
            <label class="form-label">Localidad: </label>
            <input type="/" class="form-control" v-model="departamento.localidad">
            <button class="btn btn-warning mt-3">Actualizar departamento</button>
            <router-link to="/" class="btn btn-danger mt-3 ms-3">Volver</router-link>
        </form>  
    </div>
</template>

<script>
import DepartamentosService from './../services/DepartamentosService';

const service = new DepartamentosService();

export default {
    name: 'UpdateDepartamento',
    data() {
        return {
            departamento: null
        };
    },

    mounted() {
        service.findByOne(this.$route.params.id).then(response => {
            this.departamento = response
        })
    },

    methods: {
        updateDepartamento() {
            this.departamento.numero = parseInt(this.departamento.numero)
            service.putDepartamento(this.departamento).then(() => {
                this.$router.push("/")
            })
        }
    }
};
</script>

<style scoped>

</style>