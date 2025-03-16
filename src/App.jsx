import Formulario from "./components/Formulario"
import UserList from "./components/UserList"
import { useState } from "react"
import USUARIOS from "./constants/USUARIOS"

const App = () => {

  const [usuarios, setUsuarios] = useState(USUARIOS)
  const [usuarioAEditar, setUsuarioAEditar] = useState(null)

  const agregarUsuario = (nuevoUsuario) => {
    nuevoUsuario.id = Date.now()
    const nuevoEstadoUsuarios = [...usuarios, nuevoUsuario]
    setUsuarios(nuevoEstadoUsuarios)
  }

  const borrarUsuario = (id) => {
    const nuevoEstadoUsuarios = usuarios.filter(user => user.id !== id)
    setUsuarios(nuevoEstadoUsuarios)
  }

  const editarUsuario = (usuarioEditado) => {
    usuarioEditado.edad = Number(usuarioEditado.edad)
    const nuevoEstadoUsuarios = usuarios.map(user => user.id === usuarioEditado.id ? usuarioEditado : user)
    setUsuarios(nuevoEstadoUsuarios)
  }

  return (
    <>
      <div className="container mx-auto">
        <h1 className="text-4xl my-5">CRUD Usuarios</h1>
        <hr />
        <Formulario
          agregarUsuario={agregarUsuario}
          usuarioAEditar={usuarioAEditar}
          setUsuarioAEditar={setUsuarioAEditar}
          editarUsuario={editarUsuario} />
        <UserList
          usuarios={usuarios}
          borrarUsuario={borrarUsuario}
          setUsuarioAEditar={setUsuarioAEditar} />
      </div>
    </>
  )
}

export default App


