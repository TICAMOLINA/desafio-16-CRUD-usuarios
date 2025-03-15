import Formulario from "./components/Formulario"
import UserList from "./components/UserList"
import { useState } from "react"
import USUARIOS from "../constants/USUARIOS"

const App = () => {

  const [usuarios, setUsuarios] = useState(USUARIOS)

  return (
    <>
      <div className="container mx-auto">
        <h1 className="text-4xl my-5">CRUD Usuarios</h1>
        <hr />
        <Formulario />
        <UserList usuarios={usuarios}/>
      </div>
    </>
  )
}

export default App


