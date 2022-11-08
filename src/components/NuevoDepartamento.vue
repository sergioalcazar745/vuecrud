<template>
    <div class="container">
        <h1 class="my-5">Nuevo Departamento</h1>
        <form method="post" v-on:submit.prevent="crearDepartamento">
            <label class="form-label">Numero: </label>
            <input type="text" class="form-control" v-model="departamento.numero"/>
            <label class="form-label">Nombre: </label>
            <input type="text" class="form-control" v-model="departamento.nombre"/>
            <label class="form-label">Localidad: </label>
            <input type="text" class="form-control" v-model="departamento.localidad"/>
            <button class="btn btn-success my-3">Crear departamento</button>
        </form>
    </div>
</template>

<script>
import DepartamentosService from './../services/DepartamentosService';

const service = new DepartamentosService();

export default {
    name: 'NuevoDepartamento',

    data() {

        return {
            // departamento: {
            //     numero: 0,
            //     nombre: null, 
            //     localidad: null
            // },
            departamento: {}
        };
    },

    methods: {

        crearDepartamento(){
            this.departamento.numero = parseInt(this.departamento.numero)
            console.log(this.departamento)
            service.postDepartamento(this.departamento).then(response =>  {
                console.log(response)
                this.$router.push("/")
            });
        }

    }
};
</script>

<style scoped>

</style>