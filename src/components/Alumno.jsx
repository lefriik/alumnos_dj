import React from 'react'

const Alumno = ({alumno, setAlumno, eliminarAlumno}) => {

    const { nombre, instagram, email, curso, inicio, final, inscripcion, detalles, id } = alumno

    const handleEliminar = () => {
        const respuesta = confirm('Deseas eliminar este Alumno?');

        if(respuesta){
            eliminarAlumno(id)
        }
    }
  
    return (

        <div className="mx-3 my-10 bg-white text-black shadow-md px-5 py-10 rounded-xl">
            <p className="font-bold mb-3 text-gray-700 uppercase">
            Nombre: {''}
                <span className="font-normal normal-case">{nombre}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">
            Instagram: {''}
                <span className="font-normal normal-case">{instagram}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">
            Email: {''}
                <span className="font-normal normal-case">{email}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">
            Curso: {''}
                <span className="font-normal normal-case">{curso}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">
            Fecha de Inicio: {''}
                <span className="font-normal normal-case">{inicio}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">
            Fecha de Finalizacion: {''}
                <span className="font-normal normal-case">{final}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">
            Fecha de Inscripcion: {''}
                <span className="font-normal normal-case">{inscripcion}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">
            Detalles: {''}
                <span className="font-normal normal-case">{detalles}</span>
            </p>
            <div className='flex justify-between mt-10'>
                <button className='py-2 px-10 bg-yellow-300 hover:bg-yellow-400 font-bold uppercase rounded-lg' type="button" onClick={() => setAlumno(alumno)} >Editar</button>
                <button className='py-2 px-10 bg-red-600  hover:bg-red-700 font-bold uppercase rounded-lg text-white' type="button" onClick={handleEliminar} >Eliminar</button>
            </div>
        </div>
  )
}

export default Alumno