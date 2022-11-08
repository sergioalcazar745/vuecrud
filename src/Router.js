import { createRouter, createWebHistory } from "vue-router";
import DepartamentosComponent from './components/Departamentos.vue';
import NuevoDepartamento from './components/NuevoDepartamento.vue';
import DetallesDepartamento from './components/DetallesDepartamento.vue';
import UpdateDepartamento from './components/UpdateDepartamento.vue';
import DeleteComponent from './components/DeleteComponent.vue'

const routes = [
    {
        path: "/", component: DepartamentosComponent
    },

    {
        path: "/nuevo", component: NuevoDepartamento
    },

    {
        path: "/detalles/:numero/:nombre/:localidad", component: DetallesDepartamento
    },
    
    {
        path: "/update/:id", component: UpdateDepartamento
    },

    {
        path: "/delete/:id", component: DeleteComponent
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router;