<template>
  <MenuDepartamentos/>
  <router-view></router-view>
</template>

<script>
import MenuDepartamentos from './components/MenuDepartamentos.vue'

export default {
  name: 'App',
  components: {
    MenuDepartamentos
  }
}
</script>

<style>

</style>
