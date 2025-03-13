import Formulario from "./components/Formulario"
import UserList from "./components/UserList"

const App = () => {
  return (
    <>
      <div className="container mx-auto">
        <h1 className="text-4xl my-5">CRUD Usuarios</h1>
        <hr />
        <Formulario />
        <UserList />
      </div>
    </>
  )
}

export default App


