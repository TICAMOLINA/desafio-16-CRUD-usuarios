import Formulario from "./components/Formulario"
import UserList from "./components/UserList"
import { useEffect, useState } from "react"
import USUARIOS from "./constants/USUARIOS"

const App = () => {

  const [usuarios, setUsuarios] = useState(null)
  const [usuarioAEditar, setUsuarioAEditar] = useState(null)

  useEffect(() => {
    getAllUsuarios()
  }, [])
  
  const getAllUsuarios = async () => {

    try {
      const res = await fetch(import.meta.env.VITE_BACKEND)

      if (!res.ok) {
        throw new Error ('No pudo hacerse la petición')
      }
      const data = await res.json()
      setUsuarios(data);
    } catch (error) {
      console.error(error.message)
    }
  }

  const agregarUsuario = async (nuevoUsuario) => {
    delete nuevoUsuario.id

    try {
      const res = await fetch(import.meta.env.VITE_BACKEND, {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(nuevoUsuario)
      })

      if (!res.ok) {
        throw new Error ('No se pudo hacer la petición')
      }

      const usuarioAgregadoEnBackend = await res.json()
      const nuevoEstadoUsuarios = [...usuarios, usuarioAgregadoEnBackend]
      setUsuarios(nuevoEstadoUsuarios)
    } catch (error) {
      console.error(error.message)
    }


  }

  const borrarUsuario = async (id) => {

    const urlBorrado = import.meta.env.VITE_BACKEND + id

    try {
      const res = await fetch(urlBorrado, {
        method: 'DELETE'
      })

      if (!res.ok) {
        throw new Error ('No se pudo hacer la petición')
      }

      const usuarioEliminadoDelBackend = await res.json()

    } catch (error) {
      console.error(error.message);
    }

    const nuevoEstadoUsuarios = usuarios.filter( user => user.id !== id)
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


