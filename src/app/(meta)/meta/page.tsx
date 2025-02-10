'use client';

import { PageContentContext } from '../layout';
import { useContext, useEffect } from 'react';

export const dynamic = 'force-static';

export default function InicioPage() {
  const { setContent } = useContext(PageContentContext);

  // 1. Definir los elementos dinámicos
  const contenido = {
    titulo: <h2>Nuestro Viaje de Amor</h2>,
    mensaje: (
      <>
        <p className='text-start' style={{ textAlign: 'justify' }}>
          Mi vida,<br />
          Este mini viaje dentro del viaje que acabás de hacer fue una pequeña aventura para recordarte algo inmenso: todas las vivencias y recuerdos que nos hacen tan únicos y especiales. <br/>
          Cada pista, cada rincón, cada detalle, está lleno de fragmentos de nuestra historia, de quienes somos y de cómo hemos llegado hasta aquí pero aunque todo eso sea hermoso, quiero que sepas algo más importante: lo que hace que esta relación sea tan mágica, tan increíblemente hermosa, sos vos. <br/>
          Vos con tu risa, con esa forma de iluminar cualquier espacio al entrar, vos con tu paciencia cuando me pongo insoportable, con tu ternura que me derrite, con ese amor que me das y que a veces siento que no merezco, pero que me llena la vida de maneras que ni siquiera puedo explicar. Sos mi magia, mi motor, mi refugio, mi todo.
          Mi norte siempre apunta hacia vos. Es como si todo en mi vida estuviera diseñado para conducirme hasta donde estás, como si el universo supiera exactamente que mi lugar es a tu lado. No importa cuántos caminos tomemos, cuántos días pasen o qué desafíos enfrentemos, siempre voy a querer encontrarme en tus brazos, porque ahí es donde realmente pertenezco. <br/>
          Te miro y pienso en todas las cosas maravillosas que hemos vivido juntos, cada risa, cada viaje, cada plan improvisado que termina siendo perfecto solo porque estoy con vos. Pienso en las noches en las que charlamos hasta tarde, en los días en los que simplemente estar juntos se siente como la mejor decisión que hemos tomado y pienso en todas las cosas que todavía nos quedan por vivir, como el viaje a Italia, a nuestra Sicilia natal, nuestra primera casa propia, nuestro vehiculo rutero que no tengo idea cual será pero si que lo tendremos, porque vos sos más que mi pareja, sos mi cómplice, mi compañera, mi sol y mis estrellas. <br/>
          Cada pequeño detalle, cada plan que hago, está pensado con vos en mente, en tu felicidad, en tu sonrisa, en la manera en la que tus ojos brillan cuando algo realmente te emociona. Vos sos la razón detrás de todo lo que hago, y me hace feliz saber que puedo compartir mi vida con alguien tan increíble como vos bb. <br/>
          No sé si te lo digo lo suficiente, pero te amo, no de una forma simple o pasajera, sino de una manera que me llena el alma, de esas formas que se sienten tan grandes que a veces me quedo sin palabras. Te amo por lo que sos, por lo que me haces ser, y por todo lo que juntos hemos construido. <br/>
          Hoy, mientras hacías este pequeño viaje, quería que recordaras algo importante: nuestra relación está hecha de pequeños momentos que se suman hasta formar algo inmenso. Algo que no cambiaría por nada en el mundo. Pero también quería recordarte que, más allá de todas esas memorias, el verdadero tesoro sos vos. Vos con tu esencia, tu corazón, tu magia. <br/>
          Gracias por ser vos, por estar conmigo, por hacerme la persona más feliz del mundo. <br/></p>
      </>
    ),
    pista: null
  };

  // 2. Actualizar el contexto al cargar la página
  useEffect(() => {
    setContent(contenido);
  }, [setContent]);

  // 3. La página no renderiza contenido directamente
  return null;
}