import Layout from '../components/Layout'
import Listado from '../components/Listado'

const Tienda = ({ guitarras }) => {
  
  return (
    <Layout
        pagina = 'Tienda Virtual'
    >
    <main className='contenedor'>
    <h1 className='heading'>Nuestra Colección</h1>
    <div>
  
            <Listado 
              guitarras={guitarras}
            />
    </div> 
    </main>  
    
    </Layout>
  )
}

export async function getServerSideProps() {
  const url = `http://localhost:1337/guitarras`
  const respuesta = await fetch(url)
  const guitarras = await respuesta.json()
  console.log(guitarras)
  return {
    props: {
        guitarras
    }
  }
}
export default Tienda