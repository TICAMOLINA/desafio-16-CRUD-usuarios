import { useRoutes } from "react-router"
import Inicio from "../pages/Inicio"
import Contacto from "../pages/Contacto"
import Nosotros from "../pages/Nosotros"
import CrudUsuarios from "../pages/CrudUsuarios"
import NoEncontrado from "../pages/NoEncontrado"

const Rutas = () => {
 
    const rutasApp = useRoutes (
        [
            {
                path: '/',
                element: <Inicio />
            },
            {
                path: '/contacto',
                element: <Contacto />
            },
            {
                path: '/nosotros',
                element: <Nosotros />
            },
            {
                path: '/crudusuarios',
                element: <CrudUsuarios />
            },
            {
                path: '*',
                element: <NoEncontrado />
            },
        ]
    )

    return rutasApp
}

export default Rutas