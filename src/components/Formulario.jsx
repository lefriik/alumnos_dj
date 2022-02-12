import{ useState, useEffect } from 'react';
import Error from './Error';

const Formulario = ({ alumnos, setAlumnos, alumno, setAlumno }) => {

  const[nombre, setNombre] = useState('');
  const[instagram, setInstagram] = useState('');
  const[email, setEmail] = useState('');
  const[curso, setCurso] = useState('');
  const[inicio, setInicio] = useState('');
  const[final, setFinal] = useState('');
  const[inscripcion, setInscripcion] = useState('');
  const[detalles, setDetalles] = useState('');

  const[error, setError] = useState(false)

  useEffect(() => {
    if( Object.keys(alumno).length > 0 ){
      setNombre(alumno.nombre)
      setInstagram(alumno.instagram)
      setEmail(alumno.email)
      setCurso(alumno.curso)
      setInicio(alumno.inicio)
      setFinal(alumno.final)
      setInscripcion(alumno.inscripcion)
      setDetalles(alumno.detalles)
    }
  }, [alumno])

  const generarId = ()=> {
    const random = Math.random().toString(36)
    const fecha = Date.now().toString(36)

    return random + fecha
  }


  const handleSubmit = (e) => {
    e.preventDefault();

    //validacion del formulario
    if([nombre, instagram, email, curso, inicio, final, inscripcion, detalles].includes('') ){
      console.log('Hay al menos un campo vacio')
      setError(true)
      return;
    }

    setError(false);

    //Objeto de alumno
    const objetoAlumno = {
      nombre, 
      instagram, 
      email, 
      curso, 
      inicio, 
      final, 
      inscripcion, 
      detalles,
      id: generarId()
    }

    if(alumno.id) {
      //editando el registro
      objetoAlumno.id= alumno.id
      const alumnosActualizados = alumnos.map( alumnoState => alumnoState.id === alumno.id ? objetoAlumno : alumnoState )
      
      setAlumnos(alumnosActualizados)
      setAlumno({})
    
    }else {
      //nuevo registro
      objetoAlumno.id= generarId()
      setAlumnos([...alumnos, objetoAlumno]);
      
    }

    

    

    //reiniciar el form
    setNombre('')
    setInstagram('')
    setEmail('')
    setCurso('')
    setInicio('')
    setFinal('')
    setInscripcion('')
    setDetalles('')


 
  }

  return (
    <div className="md:w-1/2 lg:w-2/5 px-6 " >   
      <h2 className='text-white font-black text-3xl text-center'>Seguimiento Alumnos</h2>
    
      <p className='text-white text-lg mt-5 text-center mb-10 '>Añade alumnos y {''} <span className='text-yellow-300 font-bold'>Administralos</span> </p>

      <form className='bg-white rounded-lg py-10 px-5 mb-10' onSubmit={handleSubmit} >
        
        {error && <Error><p>Todos los campos son obligatorios</p></Error>}
        <div className='mb-5'>
          <label className='text-gray-700 uppercase font-bold block' htmlFor="alumno" >Nombre Alumno</label>
          <input className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' id="alumno" type="text" placeholder='Nombre del Alumno' value={nombre} onChange={(e) => setNombre(e.target.value)} />
        </div>
        <div className='mb-5'>
          <label className='text-gray-700 uppercase font-bold block' htmlFor="instagram" >Instagram</label>
          <input className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' id="instagram" type="text" placeholder='Instagram del Alumno' value={instagram} onChange={(e) => setInstagram(e.target.value)} />
        </div>
        <div className='mb-5'>
          <label className='text-gray-700 uppercase font-bold block' htmlFor="email" >Email</label>
          <input className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' id="email" type="email" placeholder='Email del Alumno' value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className='mb-5'>
          <label className='text-gray-700 uppercase font-bold block' htmlFor="curso" >Curso</label>
          <input className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' id="curso" type="text" placeholder='Curso' value={curso} onChange={(e) => setCurso(e.target.value)} />
        </div>
        <div className='mb-5'>
          <label className='text-gray-700 uppercase font-bold block' htmlFor="inicio" >Fecha de Inicio</label>
          <input className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' id="inicio" type="date" value={inicio} onChange={(e) => setInicio(e.target.value)} />
        </div>
        <div className='mb-5'>
          <label className='text-gray-700 uppercase font-bold block' htmlFor="final" >Fecha de Finalizacion</label>
          <input className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' id="final" type="date" value={final} onChange={(e) => setFinal(e.target.value)} />
        </div>
        <div className='mb-5'>
          <label className='text-gray-700 uppercase font-bold block' htmlFor="inscripcion" >Fecha de Inscripcion</label>
          <input className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' id="inscripcion" type="date" value={inscripcion} onChange={(e) => setInscripcion(e.target.value)} />
        </div>
        <div className='mb-5'>
          <label className='text-gray-700 uppercase font-bold block' htmlFor="detalles" >Detalles</label>
          <textarea className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' id="detalles" placeholder="Notas extras" value={detalles} onChange={(e) => setDetalles(e.target.value)}/>
        </div>

        <input type="submit" className="bg-yellow-300 w-full p-3 uppercase font-bold hover:bg-yellow-400 cursor-pointer transition-all rounded-lg" value={ alumno.id ? 'Editar Alumno' : 'Agregar Alumno' } />



      </form>
   
    </div>
  )
}

export default Formulario