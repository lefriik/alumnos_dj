
import Alumno from './Alumno';

const ListadoAlumnos = ({alumnos, setAlumno, eliminarAlumno}) => {



  
  return (
    <div className='text-white md:w-1/2 lg:w-3/5 md:h-screen md:overflow-y-scroll px-4 '>
      
      {alumnos && alumnos.length ? (

        <>     
          <h2 className="font-black text-3xl text-center">Listado Alumnos</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Administra tus {''}
            <span className="text-yellow-300 font-bold ">Alumnos y Clases</span>
          </p>

          { alumnos.map((alumno) => ( 

              <Alumno
                key={alumno.id} 
                alumno={alumno}
                setAlumno={setAlumno}
                eliminarAlumno={eliminarAlumno}
              />
            
          )) } 

        </>


      )  : (
        <>
            <h2 className="font-black text-3xl text-center">No hay Alumnos</h2>
            <p className="text-xl mt-5 mb-10 text-center">
              Comienza agregando alumnos, {''}
              <span className="text-yellow-300 font-bold "> apareceran en esta seccion</span>
            </p>
        
        </>

      ) }
     

      


    </div>
  )
}

export default ListadoAlumnos