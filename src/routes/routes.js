import Ventas from "../components/Ventas.vue"
import Compras from "../components/Compras.vue"
import Productos from "../components/Productos.vue"
import {createRouter, createWebHashHistory} from "vue-router"

const routes = [
    {path:"/",component:Ventas},
    {path:"/Compras",component:Compras},
    {path:"/Productos",component:Productos}
]

export const router = createRouter({
    history:createWebHashHistory(),
    routes
})