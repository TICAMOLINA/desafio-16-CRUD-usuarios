
const Fila = ({ usuario, borrarUsuario, setUsuarioAEditar }) => {

  const handleEliminar = (id) => {
    borrarUsuario(id)
  }

  const handleEditar = (usuario) => {
    setUsuarioAEditar(usuario)
  }

  return (
    <tr className="bg-white border-b border-gray-200">
      <td className="px-6 py-4">{usuario.nombre}</td>
      <td className="px-6 py-4">{usuario.apellido}</td>
      <td className="px-6 py-4">{usuario.edad}</td>
      <td className="px-6 py-4">{usuario.puesto}</td>
      <td className="px-6 py-4">{usuario.foto}</td>
      <td className="px-6 py-4">
        <button
          className="px-4 py-2 bg-green-400 text-white rounded-lg hover:bg-green-700 cursor-pointer mr-2">
          Ver</button>
        <button
          onClick={() => handleEditar(usuario)}
          className="px-4 py-2 bg-yellow-400 text-white rounded-lg hover:bg-yellow-700 cursor-pointer mr-2">
          Editar</button>
        <button
          onClick={() => handleEliminar(usuario.id)}
          className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 cursor-pointer mr-2">
          Borrar</button>
      </td>
    </tr>
  )
}

export default Fila