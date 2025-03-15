import Formulario from "./components/Formulario"
import UserList from "./components/UserList"
import { useState } from "react"
import USUARIOS from "./constants/USUARIOS"

const App = () => {

  const [usuarios, setUsuarios] = useState(USUARIOS)

  const agregarUsuario = (nuevoUsuario) => {
    nuevoUsuario.id = Date.now()
    const nuevoEstadoUsuarios = [...usuarios, nuevoUsuario]
    setUsuarios(nuevoEstadoUsuarios)
  }

  return (
    <>
      <div className="container mx-auto">
        <h1 className="text-4xl my-5">CRUD Usuarios</h1>
        <hr />
        <Formulario agregarUsuario={agregarUsuario}/>
        <UserList usuarios={usuarios}/>
      </div>
    </>
  )
}

export default App


