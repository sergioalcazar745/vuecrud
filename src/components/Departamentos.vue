<template>
    <div class="container">
       <h1 class="my-5">Departamentos</h1>
       <div v-if="!status" class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
       <table v-else class="table">
            <thead>
                <th>ID</th>
                <th>Nombre</th>
                <th>Localidad</th>
                <th>Accion</th>
                <th>Accion</th>
                <th>Accion</th>
            </thead>
            <tbody>
                <tr v-for="departamento in this.departamentos" :key="departamento">
                    <td>{{departamento.numero}}</td>
                    <td>{{departamento.nombre}}</td>
                    <td>{{departamento.localidad}}</td>
                    <td><router-link class="btn btn-primary" :to="'/detalles/' + departamento.numero + '/' + departamento.nombre + '/' + departamento.localidad">Detalles</router-link></td>
                    <td><router-link class="btn btn-warning" :to="'/update/' + departamento.numero">Update</router-link></td>
                    <td><router-link :to="'/delete/' + departamento.numero" class="btn btn-danger">Eliminar</router-link></td>
                </tr>
            </tbody>
       </table>
    </div>
</template>

<script>
import DepartamentosService from './../services/DepartamentosService';

const services = new DepartamentosService();

export default {
    name: 'DepartamentoComponent',

    data() {

        return {
            departamentos: [],
            status: false
        };

    },

    mounted() {

        services.getDepartamentos().then(response => {
            this.departamentos = response
            this.status = true
        });

    }
};
</script>

<style scoped>

</style>