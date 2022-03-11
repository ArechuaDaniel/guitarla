import Layout from '../components/Layout'
import Image from 'next/image'
import styles from '../styles/Nosotros.module.css'

const Nosotros = () => {
  return (
    <Layout
        pagina = 'Nosotros'
    >
    <main className='contenedor'>
      <h2 className='heading'>Nosotros</h2>
      <div className={styles.contenido}>
      <Image layout='responsive' width={600} height={450} src="/img/nosotros.jpg" alt="Imagen sobre Nosotros" />
      <div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut efficitur vel mauris vel ornare. Sed eu ultricies orci. Nulla euismod aliquam massa, eu ultrices risus cursus sit amet. Donec ultrices odio at facilisis tempus. Etiam sodales molestie arcu, non aliquam tellus condimentum eu. Aliquam erat volutpat. Donec nec tempus ipsum, et convallis dolor. Nunc consectetur urna arcu, in volutpat risus imperdiet a. Pellentesque vel molestie lacus. Fusce vitae mollis mauris, vel facilisis massa.</p>

        <p>Etiam eget tortor ipsum. Curabitur quis justo purus. Pellentesque semper lorem ex, sed feugiat purus egestas eget. Quisque pulvinar ac metus eu convallis. Pellentesque lacinia ipsum non ipsum posuere, in venenatis metus fermentum. Vivamus suscipit accumsan fermentum. Sed a luctus tortor, luctus viverra lacus. Praesent pellentesque enim sed eros pulvinar, ac tempus odio sollicitudin. Pellentesque lobortis dolor quis erat ultricies, sit amet scelerisque orci venenatis. Nam finibus ante quis quam aliquam, vitae blandit leo consequat. Praesent ac urna auctor, ultricies leo sed, bibendum felis.</p>  
      </div>
      </div>
    </main>
    </Layout>
  )
}

export default Nosotros
