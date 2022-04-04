import Image from 'next/image';
import Layout from '../components/Layout'
import styles from '../styles/About.module.css'

const About = () => {
  return (
    <Layout
      pageTitle='About'
    >
      <main className='container'>
        <h2 className='heading'>About us</h2>
        <div className={ styles.content }>
          <Image layout="responsive" width={600} height={450} src="/img/about.jpg"></Image>
          <div>
            <p>Ut sit amet pretium odio, ultrices ultrices tortor.
              Etiam eu rutrum dolor, sed pharetra ligula. Nam ac
              sem bibendum, vehicula sem eget, eleifend risus.
              Duis fermentum enim a eleifend rutrum. Etiam sagittis
              commodo congue. Mauris dui risus, finibus nec lacus
              nec, laoreet tristique lorem. Quisque mollis suscipit massa et iaculis.</p>
            <p>Ut sit amet pretium odio, ultrices ultrices tortor.
              Etiam eu rutrum dolor, sed pharetra ligula. Nam ac
              sem bibendum, vehicula sem eget, eleifend risus.
              Duis fermentum enim a eleifend rutrum. Etiam sagittis
              commodo congue. Mauris dui risus, finibus nec lacus
              nec, laoreet tristique lorem. Quisque mollis suscipit massa et iaculis.</p>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default About;
