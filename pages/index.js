import Layout from '../components/Layout'
import Listado from '../components/Listado'
import Curso from '../components/Curso'
import ListadoBlog from '../components/ListadoBlog'

export default function Home({guitarras, curso, entradas}) {
  return (
      <Layout
        pagina = 'Inicio'
        guitarra = {guitarras[1]}
      >
      <main className='contenedor'>
        <h1 className='heading'>Nuestra Colección</h1>
        <div>
            <Listado 
              guitarras={guitarras}
            />
        </div> 
      </main>
      <Curso 
            curso={curso}
      />
      <section className='contenedor'>
      <ListadoBlog
            entradas={entradas}
      />
      </section>
      
      </Layout>
  )
}
export async function getServerSideProps() {
  const urlGuitarras = `http://localhost:1337/guitarras`
  const urlCursos = `http://localhost:1337/cursos`
  const urlBlog = `http://localhost:1337/blogs?_limit=3&_sort=created_at_desc`

  const [resGuitarras, resCursos, resBlog] = await Promise.all([
    fetch(urlGuitarras),
    fetch(urlCursos),
    fetch(urlBlog)
  ])

  const [guitarras, curso, entradas] = await Promise.all([
    resGuitarras.json(),
    resCursos.json(),
    resBlog.json()
  ])

  return {
    props: {
        guitarras,
        curso,
        entradas
    }
  }
}