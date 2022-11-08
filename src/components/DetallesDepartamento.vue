<template>
    <div class="container">
        <h1>Detalles</h1>
        <h2>{{this.$route.params.numero}}</h2>
        <h2>{{this.$route.params.nombre}}</h2>
        <h2>{{this.$route.params.localidad}}</h2>
        <router-link to="/" class="btn btn-warning">Volver al home</router-link>
    </div>
</template>

<script>
export default {
    name: 'DetallesDepartamento',
    data() {
        return {
            
        };
    },

    mounted() {

    }
};
</script>

<style scoped>

</style>