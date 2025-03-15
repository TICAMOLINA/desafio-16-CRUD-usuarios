import { useState } from "react"

const Formulario = ({agregarUsuario}) => {

    const [dataFormulario, setDataFormulario] = useState({
        id: null,
        nombre: '',
        apellido: '',
        edad: '',
        puesto: '',
        foto: '',
    })

    const handleChange = (e) => {
        const dataActualizada = {
            ...dataFormulario,
            [e.target.name]: e.target.value
        }

        setDataFormulario(dataActualizada)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        agregarUsuario(dataFormulario)
    }

  return (
    <>
    <h2 className="text-2xl font-semibold my-4">
        Formulario de carga/edición de usuarios
    </h2>

    <div className="max-w-lg mb-4">
        <form
        onSubmit={handleSubmit} 
        className="bg-white border rounded-lg p-6">

            {/* NOMBRE */}
            <label htmlFor="lbl-nombre" className="block mb-2 text-sm font-medium text-gray-700">
                Nombre
            </label>
            <input 
            type="text"
            id="lbl-nombre"
            placeholder="Ingresa el nombre del usuario"
            className="w-full p-2 mb-4 border rounded-lg foucs:outline-none focus:ring-2 focus:ring-blue-500"
            name="nombre"
            onChange={handleChange}
            value={dataFormulario.nombre}/>

            {/* APELLIDO */}
            <label htmlFor="lbl-apellido" className="block mb-2 text-sm font-medium text-gray-700">
                Apellido
            </label>
            <input 
            type="text"
            id="lbl-apellido"
            placeholder="Ingresa el apellido del usuario"
            className="w-full p-2 mb-4 border rounded-lg foucs:outline-none focus:ring-2 focus:ring-blue-500"
            name="apellido"
            onChange={handleChange}
            value={dataFormulario.apellido}/>

            {/* EDAD */}
            <label htmlFor="lbl-edad" className="block mb-2 text-sm font-medium text-gray-700">
                Edad
            </label>
            <input 
            type="text"
            id="lbl-edad"
            placeholder="Ingresa la edad del usuario"
            className="w-full p-2 mb-4 border rounded-lg foucs:outline-none focus:ring-2 focus:ring-blue-500"
            name="edad"
            onChange={handleChange}
            value={dataFormulario.edad}/>

            {/* PUESTO */}
            <label htmlFor="lbl-puesto" className="block mb-2 text-sm font-medium text-gray-700">
                Puesto
            </label>
            <input 
            type="text"
            id="lbl-puesto"
            placeholder="Ingresa el puesto del usuario"
            className="w-full p-2 mb-4 border rounded-lg foucs:outline-none focus:ring-2 focus:ring-blue-500"
            name="puesto"
            onChange={handleChange}
            value={dataFormulario.puesto}/>

            {/* FOTO */}
            <label htmlFor="lbl-foto" className="block mb-2 text-sm font-medium text-gray-700">
                Foto
            </label>
            <input 
            type="text"
            id="lbl-foto"
            placeholder="Ingresa la foto del usuario"
            className="w-full p-2 mb-4 border rounded-lg foucs:outline-none focus:ring-2 focus:ring-blue-500"
            name="foto"
            onChange={handleChange}
            value={dataFormulario.foto}/>

            <div className="flex justify-between">
                <button
                type="submit"
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 cursor-pointer">
                    Crear/Editar
                </button>
                <button
                type="reset"
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 cursor-pointer">
                    Resetear
                </button>
            </div>
        </form>
    </div>
    </>
  )
}

export default Formulario