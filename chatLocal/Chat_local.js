const chatContainer = document.getElementById('chat-container');
const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');

// Función para mostrar mensaje de bienvenida
function showWelcomeMessage() {
    const welcomeMessage = '¡Bienvenido al chat de BiggersWeb! ¿En qué puedo ayudarte hoy?';
    addMessage('bot', welcomeMessage);
}


// Función para enviar mensaje del usuario
function sendMessage() {
    let userMessage = userInput.value.trim();
    if (userMessage !== '') {
        addMessage('user', userMessage);
        userInput.value = '';
        showTypingIndicator();
        setTimeout(() => handleResponse(userMessage), 1000); // Simula tiempo de respuesta del servidor
    }
}

// Función para manejar la respuesta del bot
function handleResponse(message) {
    let response = '';
    message = message.toLowerCase();

    if (message.includes('hola')) {
        response = '¡Hola! ¿Cómo podemos ayudarte? ¿Qué servicio estás buscando?';
    }
    else if (message.includes('servicio') || message.includes('servicios')) {
        response = 'Ofrecemos servicios de diseño UI/UX, desarrollo web, desarrollo móvil, artes graficas y más. ¿En qué estás interesado específicamente?';
    }
    else if (message.includes('informacion') || message.includes('info')) {
        response = 'Ofrecemos servicios completos de diseño gráfico, impresión de alta calidad, Desde la creación de logotipos, tarjetas de presentación, folletos, hasta el diseño de páginas web y e-commerce personalizados, te ayudamos a establecer una presencia sólida tanto en el mundo digital como en físico, con diseños impactantes y soluciones funcionales que impulsan tu negocio.';
    }
    else if (message.includes('precio') || message.includes('precios') || message.includes('valor') || message.includes('vale') || message.includes('costo') || message.includes('costos')) {
        response = 'Nuestros precios dependen del servicio que necesitas.';

        response = 'Aquí tienes nuestros precios aproximados en Latinoamérica (USD):\n\n' +
            '- Diseño UI/UX: $100 - $400\n' +
            '- Desarrollo web dinamico con administrador: $300 - $500\n' +
            '- Desarrollo web estatico: $100 - $250\n' +
            '- Desarrollo móvil: 200 - $500\n' +
            '- Modelado 3D: $100 - $1000\n' +
            '- Producción de video: $200 - $1500\n' +
            '- Diseño de logos: $20 - $100\n' +
            '- Creación de contenido: $100 - $1000\n' +
            '- Impresión: $20 - $200\n' +
            '- Diseño de tarjetas: $20 - $100\n' +
            '- Creación de volantes: $40 - $150\n' +
            '- Diseño de brochures: $30 - $100\n' +
            '- SEO: $200 - $1000\n' +
            '- Integraciones: $100 - $1000\n' +
            '- Seguridad: $100 - $500\n' +
            '- Soporte y mantenimiento: $10 - $100 por mes\n\n' +
            '- Chat bos entrenados para tu negocio: $40 - $300' +
            '¿Te interesa algún servicio en particular?';

    } else if (message.includes('proceso') || message.includes('procesos')) {
        response = 'Nuestro proceso comienza con una consulta inicial donde discutimos tus necesidades y objetivos. Luego, nuestro equipo se encarga del diseño, desarrollo, pruebas y lanzamiento.';
    }
    else if (message.includes('tiempo') || message.includes('tiempos') || message.includes('demora')) {
        response = 'El tiempo de desarrollo puede variar dependiendo de la complejidad del proyecto. Generalmente, una página web típica toma entre 1 y 2 semanas desde el inicio hasta el lanzamiento.';
    }
    else if (message.includes('mantenimiento') || message.includes('mantenimientos') || message.includes('soporte') || message.includes('tecnico')) {
        response = 'Sí, ofrecemos soporte y mantenimiento continuo para asegurar que tu sitio web o aplicación funcione de manera óptima después del lanzamiento.';
    }
    else if (message.includes('seo') || message.includes('posicionamiento') || message.includes('escalable')) {
        response = 'Implementamos estrategias de SEO para mejorar la visibilidad de tu sitio web en los motores de búsqueda.';
    }
    else if (message.includes('integración') || message.includes('integraciones')) {
        response = 'Podemos integrar diversas herramientas y sistemas en tu sitio web para mejorar su funcionalidad y rendimiento. ¿Hay alguna integración específica que necesites?';
    }
    else if (message.includes('seguridad') || message.includes('virus')) {
        response = 'La seguridad es una prioridad para nosotros. Implementamos medidas como certificados SSL y protección contra malware para proteger tu sitio web.';
    }
    else if (message.includes('frameworks') || message.includes('framework')) {
        response = 'Utilizamos tecnologías modernas como HTML5, CSS3, JavaScript, y frameworks como React.js o Vue.js para páginas dinámicas. Para páginas estáticas, nos enfocamos en HTML y CSS optimizados.';
    }

    else if (message.includes('plataforma') || message.includes('plataformas')) {
        response = 'Desarrollamos plataformas utilizando tecnologías modernas como:WordPress, Html, Css, JavaScript, React, Node Js, Php.';
    }
    else if (message.includes('chat') || message.includes('chats') || message.includes('bots') || message.includes('bot')) {
        response = 'Ofrecemos el diseño de sistemas de chat personalizados para cualquier tipo de negocio, optimizando la comunicación directa con tus clientes y mejorando su experiencia de servicio en tiempo real.';


        /* PREGUNTAS RELACIONADAS CON  DISEOÑO WEB*/
    }
    else if (message.includes('ventajas') || message.includes('beneficios')) {
        response = '"Contratar a BiggersWeb te garantiza soluciones digitales a medida, desde diseño web hasta desarrollo de e-commerce, con un enfoque en innovación, soporte continuo y resultados que impulsan el crecimiento de tu negocio.';
    }
    else if (message.includes('dinamica') || message.includes('dinamicas')) {
        response = 'Las páginas web dinámicas permiten interacción con los usuarios a través de formularios, comentarios, sistemas de registro, carritos de compra, entre otras funcionalidades. Son ideales para negocios que necesitan actualizar contenido regularmente y ofrecer servicios o productos';
    }
    else if (message.includes('estatica') || message.includes('estaticas')) {
        response = 'Un sitio web estatico es aque cuyas páginas son fijas y muestran el mismo contenido a todos los usuarios. Estas páginas no cambian ni se actualizan automáticamente, ya que están creadas con HTML, CSS y, en algunos casos, JavaScript, pero no interactúan con bases de datos ni generan contenido dinámico. Las webs estáticas son ideales para sitios simples con información que no necesita cambiar con frecuencia, como portafolios, blogs personales o sitios informativos.';
    }
    else if (message.includes('tecnologia') || message.includes('tecnologias')) {
        response = 'Para páginas web dinámicas, utilizamos tecnologías como PHP, Python, Ruby on Rails, ASP.NET, y bases de datos como MySQL, PostgreSQL o MongoDB, dependiendo de los requisitos del proyecto.';
    }
    else if (message.includes('personalizado') || message.includes('diseño personalizado')) {
        response = 'Sí, diseñamos páginas web personalizadas que reflejan la identidad de tu marca y optimizamos la experiencia del usuario para maximizar conversiones de prospectos a clientes.';
    }
    else if (message.includes('migrar') || message.includes('migración') || message.includes('trasladar')) {
        response = 'Sí, ofrecemos servicios de migración para transferir tu sitio web existente a una nueva plataforma, actualizar tecnologías obsoletas y mejorar la funcionalidad según tus necesidades actuales.';

    } else if (message.includes('pagina') || message.includes('web')) {
        response = ' "Creamos  páginas estáticas y dinámicas adaptadas a tus necesidades desde tan solo $100 dólares. Con un enfoque en la calidad y la eficiencia, garantizamos tiempos de entrega rápidos, con un promedio de 15 días para completar tu proyecto. Ya sea que necesites una presencia online sencilla pero efectiva con una página estática, o una plataforma dinámica que permita interacción constante con tus clientes, estamos aquí para ayudarte a alcanzar tus objetivos digitales.';
    }
    else if (message.includes('PCI-DSS') || message.includes('pci dss') || message.includes('pcidss')) {
        response = 'Conjunto de estándares de seguridad que buscan proteger la información sensible de las tarjetas de pago durante su procesamiento, almacenamiento y transmisión. Fue creado por las principales compañías de tarjetas de crédito (Visa, MasterCard, American Express, Discover y JCB) para reducir el fraude y las violaciones de datos. Cumplir con PCI-DSS es obligatorio para cualquier empresa que maneje, procese o almacene datos de tarjetas de crédito, garantizando así la seguridad de las transacciones electrónicas.';
    }
    else if (message.includes('ssl')) {
        response = 'Es un protocolo de seguridad que se utiliza para cifrar la comunicación entre un servidor web y un navegador, garantizando que los datos transmitidos, como información personal o detalles de pago, permanezcan privados y seguros. SSL protege la información sensible de posibles interceptaciones o ataques durante su transmisión a través de internet.';
    }
    else if (message.includes('hosting') || message.includes('hostin')) {
        response = 'Servicio que permite almacenar y publicar un sitio web en Internet. Es donde se guardan todos los archivos, imágenes, videos, bases de datos y otros elementos necesarios para que un sitio web funcione. ';
    }
    else if (message.includes('dominio') || message.includes('dominios')) {
        response = 'Esla direccion y nombre unico que tendar tu negocio en los buscadores dando exclisividad a tu marca';
    }

    /* TIENDAS DIGITALES */

    else if (message.includes('tienda') || message.includes('tiendas') || message.includes('ecomerce') || message.includes('ecommerce')) {
        response = 'Ofrecemos soluciones completas para eCommerce, incluyendo diseño, desarrollo, integración de pasarelas de pago, optimización SEO y más.';
    }
    else if (message.includes('tienda digital') || message.includes('ecommerce')) {
        response = 'Desarrollamos tiendas eCommerce personalizadas para tus necesidades, integrando funcionalidades como gestión de productos, carritos de compra y más.';
    }
    else if (message.includes('pasarela de pago') || message.includes('metodos de pago') || message.includes('formas de pago')) {
        response = 'Integramos pasarelas de pago seguras como PayPal, Stripe y MercadoPago, Nequi, para asegurar transacciones sin problemas. ¿Te gustaría explorar las opciones de pasarelas de pago disponibles y cómo podemos implementarlas en tu tienda?';
    }
    else if (message.includes('optimización') || message.includes('conversiones')) {
        response = 'Optimizamos sitios wb y tiendas digitales para mejorar la experiencia del usuario, velocidad de carga y conversiones';
    }
    else if (message.includes('soporte') || message.includes('mantenimiento') || message.includes('actualizacion')) {
        response = 'Ofrecemos soporte técnico y mantenimiento continuo para asegurar que tu sitio web o tienda funcione sin problemas.';
    }

    else if (message.includes('ssl') || message.includes('transacciones')) {
        response = 'Implementamos medidas robustas de seguridad como certificados SSL y cumplimiento PCI-DSS para asegurar transacciones seguras en tu tienda digital.';
    }
    else if (message.includes('reportes') || message.includes('análisis')) {
        response = 'Proporcionamos reportes detallados sobre ventas, inventario y comportamiento del cliente para ayudarte a tomar decisiones informadas.';
    }
    else if (message.includes('logistica') || message.includes('envíos')) {
        response = 'Colaboramos con servicios de logística para optimizar la gestión de pedidos y asegurar entregas eficientes para tu tienda digital.';
    }

    else if (message.includes('responsivo') || message.includes('responsivos') || message.includes('adaptables') || message.includes('adaptable')) {
        response = 'Todas nuestras páginas web son diseñadas y desarrolladas para ser responsivas, adaptándose automáticamente a diferentes dispositivos como smartphones, tablets y computadoras de escritorio.';
    }
    else if (message.includes('wordpress') || message.includes('WordPress')) {
        response = ' Somos esecialistas en el desarrollo y personalización de sitios web utilizando WordPress, la plataforma de gestión de contenidos más popular del mundo';
    }
    else if (message.includes('woocomerce') || message.includes('Woocommerce') || message.includes('WooCommerce') || message.includes('WooComerce')) {
        response = ' Ofrecemos soluciones de comercio electrónico integradas mediante WooComerce, permitiéndote gestionar tu tienda en línea de manera eficiente y personalizada para optimizar la experiencia de compra de tus clientes..';
    }



    /* OTROS SERVICIOS DE DISEÑO GRAFICO*/
    else if (message.includes('grafico') || message.includes('artes')) {
        response = 'Nos especializamos en diseño grafico atractivo y enfocado a experiencias visuales atractivas.';
    }
    else if (message.includes('modelado 3d') || message.includes('renderizado')) {
        response = 'Realizamos modelado 3D para una variedad de aplicaciones, desde visualizaciones arquitectónicas hasta animaciones detalladas.';
    }
    else if (message.includes('contenido') || message.includes('contenidos')) {
        response = 'Creamos contenido de calidad que incluye redacción, fotografía, videos y gráficos para fortalecer la identidad de tu marca.';
    }
    else if (message.includes('video') || message.includes('videos')) {
        response = 'Ofrecemos servicios de producción de videos creativos y profesionales que capturan la esencia de tu negocio.';
    }
    else if (message.includes('logo') || message.includes('logos')) {
        response = 'Diseñamos logos personalizados que reflejan la identidad única de tu marca.';
    }
    else if (message.includes('flyer') || message.includes('flyers')) {
        response = 'Creamos flyers impactantes y efectivos para promocionar tus eventos o productos.';
    }
    else if (message.includes('brochure') || message.includes('brochures')) {
        response = 'Diseñamos y producimos brochures informativos y atractivos que destacan los beneficios de tu negocio.';
    }
    else if (message.includes('impresion') || message.includes('impresiones')) {
        response = 'Ofrecemos servicios de impresión en una variedad de materiales como papel, tela y metal.';
    }
    else if (message.includes('tarjeta') || message.includes('tarjetas') || message.includes('tarjeteria')) {
        response = 'Diseñamos tarjetas de presentación personalizadas que transmiten una excelente primera impresión.';
    }
    else if (message.includes('volante') || message.includes('volantes')) {
        response = 'Creamos volantes llamativos y efectivos para tus campañas publicitarias.';
    }
    else if (message.includes('redes sociales') || message.includes('red social') || message.includes('socialmedia') || message.includes('social media')) {
        response = 'Desarrollamos contenido estratégico para redes sociales que incluye gráficos, videos y publicaciones para fortalecer tu presencia online.';



        /*RESPUESTAS POSITIVAS*/

    } else if (message.includes('ok') || message.includes('de acuerdo') || message.includes('gracias') || message.includes('dale')) {
        response = 'Disculpa me recuerdas, cual es tu actividad economica ? Gracias!';
    }
    else if (message.includes('si')) {
        response = 'Te invio a que diligencies el fromulario de contacto o clikea sobre el icono del asesor dentro de este chat!';


        /* ACTIVIDADES ECONOMICAS*/

    } else if (message.includes('panadería') || message.includes('panaderia')) {
        response = '¡Perfecto!tenemos experiencia en trabajar con panaderias y talleres de reposteria. Ofrecemos soluciones integrales que incluyen diseño y desarrollo web, así como servicios gráficos como logos, pendones, flayers, contenido visual para redes sociales, y más. ';

    }
    else if (message.includes('clinica') || message.includes('laboratorio')) {
        response = 'Ok perfecto me puedes decir que tipo de clinica o laboratorio es:';
    }
    else if (message.includes('restaurante') || message.includes('restaurantes')) {
        response = '¡Excelente elección! Contamos con amplia experiencia en el diseño y desarrollo de sitios web para restaurantes. También ofrecemos servicios gráficos como menús, logotipos, material publicitario, y contenido visual para redes sociales.';


    } else if (message.includes('estetica') || message.includes('spa')) {
        response = 'Claro, tenemos experiencia en trabajar con clínicas de estética y spas. Ofrecemos soluciones integrales que incluyen diseño y desarrollo web, así como servicios gráficos como diseño de logos, contenido visual para redes sociales, y más. ';
    }
    else if (message.includes('consultoría') || message.includes('asesoría')) {
        response = '¡Perfecto! Ofrecemos soluciones completas para empresas de consultoría, incluyendo desarrollo web, diseño de logotipos, y material gráfico profesional como informes y presentaciones. ¿Te interesa saber más o deseas contactarnos para una consulta?';

    } else if (message.includes('gimnasio') || message.includes('fitness')) {
        response = '¡Estupendo! Tenemos experiencia en el desarrollo de sitios web y material gráfico para gimnasios y centros de fitness. Ofrecemos diseño de páginas web, creación de logotipos, y contenido visual para promocionar tus servicios. ¿Te gustaría recibir más información o hablar con nosotros?';
    }
    else if (message.includes('abogado') || message.includes('bufete')) {
        response = '¡Excelente! Sabemos cómo ayudar a bufetes de abogados y profesionales legales con soluciones web y servicios gráficos. Desde el diseño de sitios web hasta material publicitario como tarjetas de presentación y contenido para redes sociales. ¿Deseas obtener más detalles o contactarnos?';
    }
    else if (message.includes('dentista') || message.includes('consultorio dental')) {
        response = '¡Perfecto! Tenemos experiencia en el diseño de sitios web y material gráfico para consultorios dentales. Ofrecemos soluciones que incluyen desarrollo web, diseño de logotipos, folletos informativos y contenido visual para redes sociales. ¿Te gustaría saber más o contactar con nosotros para una consulta?';
    }
    else if (message.includes('fotografía') || message.includes('fotógrafo')) {
        response = '¡Genial! Ofrecemos servicios especializados para fotógrafos, incluyendo el diseño de sitios web portafolio, logotipos personalizados, y material gráfico para promocionar tu trabajo. ¿Quieres obtener más información o ponerte en contacto con nosotros?';
    }
    else if (message.includes('eventos') || message.includes('organización de eventos')) {
        response = '¡Excelente elección! Contamos con amplia experiencia en el diseño de sitios web y material gráfico para la organización de eventos. Desde la creación de páginas web hasta el diseño de flyers, invitaciones y contenido visual para redes sociales. ¿Te gustaría conocer más detalles o hablar con nosotros?';
    }
    else if (message.includes('salon de belleza') || message.includes('estetica')) {
        response = '¡Perfecto! Sabemos cómo ayudar a salones de belleza y centros de estética con soluciones web y servicios gráficos. Ofrecemos diseño de sitios web, logotipos, material publicitario y contenido visual para redes sociales. ¿Deseas saber más o contactarnos para una consulta?';
    }

    else if (message.includes('medico') || message.includes('doctor')) {
        response = '¡Estupendo! Tenemos experiencia en el diseño de sitios web y material gráfico para clínicas médicas y consultorios. Ofrecemos soluciones que incluyen desarrollo web, diseño de logotipos, y material informativo. ¿Te interesa obtener más información o contactar con nosotros?';
    }

    else if (message.includes('escuela') || message.includes('instituto')) {
        response = '¡Excelente! Ofrecemos servicios especializados para escuelas e institutos, incluyendo el diseño de sitios web, logotipos, y material gráfico como folletos y contenido visual para redes sociales. ¿Te gustaría saber más o hablar con nosotros?';
    }

    else if (message.includes('arquitecto') || message.includes('arquitectura')) {
        response = '¡Excelente elección! Ofrecemos soluciones específicas para arquitectos y estudios de arquitectura, incluyendo diseño de sitios web, logotipos, y material gráfico para presentar proyectos. ¿Te gustaría obtener más detalles o contactar con nosotros para una consulta?';
    }

    else if (message.includes('artista') || message.includes('creador de contenido')) {
        response = '¡Genial! Sabemos cómo apoyar a artistas y creadores de contenido con soluciones web y gráficas personalizadas. Ofrecemos diseño de sitios web portafolio, logotipos, y material gráfico para promocionar tu trabajo. ¿Te gustaría recibir más información o contactarnos?';
    }
    else if (message.includes('hotel') || message.includes('alojamiento') || message.includes('hoteles')) {
        response = '¡Estupendo! Contamos con experiencia en el diseño de sitios web y material gráfico para hoteles y negocios de alojamiento. Ofrecemos desarrollo web, diseño de logotipos y material promocional para atraer a tus huéspedes. ¿Deseas obtener más detalles o contactar con nosotros?';
    }

    else if (message.includes('inmobiliaria') || message.includes('inmobiliarias') || message.includes('agencia inmobiliaria') || message.includes('agencia inmobiliarias')) {
        response = '¡Excelente! Ofrecemos soluciones para agencias inmobiliarias, incluyendo diseño de sitios web, logotipos, y material gráfico como folletos y anuncios para propiedades. ¿Te gustaría conocer más detalles o hablar con nosotros?';
    }
    else if (message.includes('tatuador') || message.includes('tatuadores') || message.includes('estudio de tatuajes') || message.includes('estudio de tatuaje')) {
        response = '¡Genial! Sabemos cómo ayudar a tatuadores y estudios de tatuajes con soluciones web y gráficas personalizadas. Ofrecemos diseño de sitios web, logotipos, y material gráfico para promocionar tu arte. ¿Te interesa obtener más información o ponerte en contacto con nosotros?';
    }
    else if (message.includes('farmacia') || message.includes('farmacias') || message.includes('drogueria') || message.includes('droguerias')) {
        response = '¡Perfecto! Contamos con experiencia en el diseño de sitios web y material gráfico para farmacias y droguerias. Ofrecemos desarrollo web, logotipos y material informativo para atraer a tus clientes. ¿Deseas saber más o contactarnos para una consulta?';
    }

    else if (message.includes('tecnico') || message.includes('tecnicos') || message.includes('servicio tecnico')) {
        response = '¡Estupendo! Ofrecemos soluciones para servicios técnicos, incluyendo el diseño de sitios web, logotipos, y material gráfico como folletos y anuncios para promocionar tus servicios. ¿Te gustaría recibir más información o hablar con nosotros?';
    }
    else if (message.includes('coaching') || message.includes('entrenador personal') || message.includes('entrenadores personales') || message.includes('entrenadores')) {
        response = '¡Genial! Sabemos cómo apoyar a entrenadores y coaches con soluciones web y gráficas personalizadas. Ofrecemos diseño de sitios web, logotipos, y material gráfico para promocionar tus servicios de coaching. ¿Te interesa obtener más detalles o contactarnos?';
    }
    else if (message.includes('jardineria') || message.includes('paisajismo') || message.includes('jardineros') || message.includes('jardinero')) {
        response = '¡Estupendo! Ofrecemos soluciones para negocios de jardinería y paisajismo, incluyendo diseño de sitios web, logotipos, y material gráfico como folletos y anuncios para promocionar tus servicios. ¿Deseas obtener más detalles o contactar con nosotros?';
    }
    else if (message.includes('musica') || message.includes('productor musical')) {
        response = '¡Genial! Sabemos cómo apoyar a músicos y productores musicales con soluciones web y gráficas personalizadas. Ofrecemos diseño de sitios web, logotipos, y material gráfico para promocionar tu música y eventos. ¿Te interesa obtener más información o hablar con nosotros?';
    }
    else if (message.includes('cerrajeria') || message.includes('servicio de cerrajeria') || message.includes('cerrajero')) {
        response = '¡Perfecto! Ofrecemos soluciones para servicios de cerrajería, incluyendo diseño de sitios web, logotipos y material gráfico para promocionar tus servicios. ¿Te gustaría recibir más información o contactarnos?';
    }

    else if (message.includes('reparacion de electrodomesticos') || message.includes('electrodomésticos')) {
        response = '¡Estupendo! Contamos con experiencia en el diseño de sitios web y material gráfico para empresas de reparación de electrodomésticos. Ofrecemos desarrollo web, logotipos, y material publicitario para atraer a tus clientes. ¿Deseas saber más o ponerte en contacto con nosotros?';
    }
    else if (message.includes('carpinteria') || message.includes('carpinterias') || message.includes('taller de carpinteria') || message.includes('taller de carpinterias')) {
        response = '¡Genial! Sabemos cómo apoyar a talleres de carpintería con soluciones web y gráficas personalizadas. Ofrecemos diseño de sitios web, logotipos, y material gráfico para promocionar tus productos y servicios. ¿Te interesa obtener más información o contactarnos?';
    }

    else if (message.includes('peluqueria') || message.includes('peluquerias') || message.includes('salon de peluqueria')) {
        response = '¡Perfecto! Ofrecemos soluciones para peluquerías y salones de belleza, incluyendo el diseño de sitios web, logotipos, y material gráfico para atraer a tus clientes. ¿Deseas obtener más detalles o hablar con nosotros?';
    }
    else if (message.includes('barberia') || message.includes('barberia') || message.includes('salon de barberia')) {
        response = '¡Perfecto! Ofrecemos soluciones para estudios de barberia, incluyendo el diseño de sitios web, logotipos, y material gráfico para atraer a tus clientes. ¿Deseas obtener más detalles o hablar con nosotros?';
    }
    else if (message.includes('decoracion') || message.includes('decoraciones') || message.includes('diseño de interiores')) {
        response = '¡Genial! Sabemos cómo apoyar a negocios de decoración y diseño de interiores con soluciones web y gráficas personalizadas. Ofrecemos diseño de sitios web, logotipos, y material gráfico para mostrar tus proyectos y atraer clientes. ¿Te interesa saber más o ponerte en contacto con nosotros?';
    }
    else if (message.includes('muebles') || message.includes('taller de muebles')) {
        response = '¡Estupendo! Sabemos cómo apoyar a talleres de muebles con soluciones web y gráficas personalizadas. Ofrecemos diseño de sitios web, logotipos, y material gráfico para promocionar tus productos y atraer clientes. ¿Te interesa saber más o ponerte en contacto con nosotros?';
    } 
    else if (message.includes('moda') || message.includes('boutique')) {
        response = '¡Genial! Ofrecemos soluciones para boutiques y negocios de moda, incluyendo el diseño de sitios web, logotipos, y material gráfico para promocionar tus productos y eventos. ¿Deseas obtener más detalles o contactar con nosotros?';
    }

    else if (message.includes('moda') || message.includes('boutique')) {
        response = '¡Genial! Ofrecemos soluciones para boutiques y negocios de moda, incluyendo el diseño de sitios web, logotipos, y material gráfico para promocionar tus productos y eventos. ¿Deseas obtener más detalles o contactar con nosotros?';
    }

    else if (message.includes('veterinaria') || message.includes('veterinarias') || message.includes('clinica veterinaria')) {
        response = '¡Perfecto! Contamos con experiencia en el diseño de sitios web y material gráfico para clínicas veterinarias. Ofrecemos desarrollo web, diseño de logotipos y material informativo para atraer a tus clientes. ¿Te gustaría saber más o hablar con nosotros?';
    }
    else if (message.includes('marketing') || message.includes('agencia de marketing')) {
        response = '¡Estupendo! Ofrecemos soluciones integrales para agencias de marketing, incluyendo diseño de sitios web, logotipos, y material gráfico para campañas publicitarias. ¿Te interesa obtener más información o contactar con nosotros para una consulta?';
    }
    else if (message.includes('seguridad') || message.includes('empresa de seguridad')) {
        response = '¡Genial! Sabemos cómo apoyar a empresas de seguridad con soluciones web y gráficas personalizadas. Ofrecemos diseño de sitios web, logotipos, y material gráfico para promocionar tus servicios de seguridad. ¿Te gustaría recibir más información o ponerte en contacto con nosotros?';
    }
    else if (message.includes('cursos') || message.includes('escuela de formacion')) {
        response = '¡Estupendo! Contamos con experiencia en el diseño de sitios web y material gráfico para escuelas y plataformas de formación. Ofrecemos desarrollo web, logotipos, y material informativo para atraer a tus estudiantes. ¿Te interesa saber más o contactar con nosotros?';
    }
    else if (message.includes('automotriz') || message.includes('taller de coches') || message.includes('mecanico') || message.includes('mecanicos')) {
        response = '¡Estupendo! Ofrecemos soluciones para talleres automotrices y negocios relacionados, incluyendo el diseño de sitios web, logotipos y material gráfico para promocionar tus servicios. ¿Te gustaría saber más o contactar con nosotros para una consulta?';
    }

    else if (message.includes('electronica') || message.includes('gadgets')) {
        response = '¡Perfecto! Sabemos cómo apoyar a tiendas de electrónica con soluciones web y gráficas personalizadas. Ofrecemos diseño de sitios web, logotipos, y material gráfico para promocionar tus productos tecnológicos. ¿Deseas obtener más información o ponerte en contacto con nosotros?';
    }
    else if (message.includes('transporte')|| message.includes('transportes') || message.includes('empresa de transporte')) {
        response = '¡Genial! Sabemos cómo apoyar a empresas de transporte con soluciones web y gráficas personalizadas. Ofrecemos diseño de sitios web, logotipos, y material gráfico para promocionar tus servicios de transporte. ¿Te gustaría obtener más información o contactarnos?';
    }
    else if (message.includes('ceramica')|| message.includes('ceramicas') || message.includes('taller de ceramica')) {
        response = '¡Genial! Sabemos cómo apoyar a talleres de cerámica con soluciones web y gráficas personalizadas. Ofrecemos diseño de sitios web, logotipos y material gráfico para promocionar tus creaciones y atraer clientes. ¿Te interesa obtener más información o ponerte en contacto con nosotros?';
    }
    else if (message.includes('impresion') || message.includes('servicio de impresion')) {
        response = '¡Genial! Sabemos cómo apoyar a negocios de impresión con soluciones web y gráficas personalizadas. Ofrecemos diseño de sitios web, logotipos y material gráfico para promocionar tus servicios de impresión. ¿Te interesa obtener más información o contactarnos?';
    }
    else if (message.includes('mestro') || message.includes('oficial')|| message.includes('obra civil')) {
        response = '¡Genial! Sabemos cómo apoyar a negocios de obra civil con soluciones web y gráficas personalizadas. Ofrecemos diseño de sitios web, logotipos y material gráfico para promocionar tus servicios de impresión. ¿Te interesa obtener más información o contactarnos?';
    }




    /* CHAT PARA CERRAR TRATO*/

    else if (message.includes('comenzar') || message.includes('empezar') || message.includes('empezamos') || message.includes('comenzamos') || message.includes('iniciar') || message.includes('iniciamos')) {
        response = 'Para comenzar, necesitamos entender tus objetivos, el tipo de página web que deseas, ejemplos de sitios que te gusten y cualquier funcionalidad específica que necesites, Te invito a que diligencies el formulario de contacto, o clikea sobre el icono del asesor';
    }


    else if (message.includes('optimización') || message.includes('SEO')) {
        response = 'Sí, optimizamos todas nuestras páginas web para SEO, mejorando su visibilidad en motores de búsqueda como Google para atraer más visitantes y clientes potenciales. ¿Te gustaría saber cómo podemos mejorar la presencia de tu página web en línea?';
    }

    else if (message.includes('garantia') || message.includes('garantias')) {
        response = 'Nuestro objetivo es asegurarnos de que estés completamente satisfecho/a con nuestro servicio. Ofrecemos garantía de calidad y soporte continuo después del lanzamiento de la página web.';
    }
    else if (message.includes('contrato') || message.includes('contratar') || message.includes('adquirir') || message.includes('recervo') || message.includes('cuerdo')) {
        response = 'Estamos listos para formalizar nuestro acuerdo y comenzar con tu proyecto. Podemos enviarle un contrato que detalla todos los términos acordados y proceder con el servicio tan pronto como estés listo/a.  Te invito a que diligencies el formulario de contacto, o clikea sobre el icono del asesor';
    }

    else {
        response = 'Disculpa, no entendí tu pregunta.';
    }


    setTimeout(() => {
        hideTypingIndicator();
        addMessage('bot', response);
    }, 700); // Simula tiempo de respuesta del servidor
}

// Función para mostrar el indicador de escritura
function showTypingIndicator() {
    const typingIndicator = document.createElement('div');
    typingIndicator.classList.add('bot-message', 'typing-indicator');
    typingIndicator.textContent = 'Escribiendo...';
    typingIndicator.id = 'typing-indicator';
    chatContainer.appendChild(typingIndicator);
    chatContainer.scrollTop = chatContainer.scrollHeight; // Desplaza hacia abajo
}

// Función para ocultar el indicador de escritura
function hideTypingIndicator() {
    const typingIndicator = document.getElementById('typing-indicator');
    if (typingIndicator) {
        chatContainer.removeChild(typingIndicator);
    }
}

// Función para agregar mensajes al chat
function addMessage(sender, message) {
    const messageElement = document.createElement('div');
    messageElement.classList.add(sender === 'bot' ? 'bot-message' : 'user-message');

    const messageContent = document.createElement('span');
    messageContent.textContent = message;
    messageElement.appendChild(messageContent);

    const messageMeta = document.createElement('div');
    messageMeta.classList.add('message-meta');

    const timestamp = document.createElement('span');
    timestamp.classList.add('timestamp');
    timestamp.textContent = getCurrentTime();

    messageMeta.appendChild(timestamp);

    // Solo agrega los chulitos a los mensajes del usuario
    if (sender === 'user') {
        const checkmarks = document.createElement('span');
        checkmarks.classList.add('checkmarks');
        checkmarks.innerHTML = '✓✓'; // Aquí puedes cambiar a los chulitos azules si quieres
        messageMeta.appendChild(checkmarks);
    }

    messageElement.appendChild(messageMeta);
    chatContainer.appendChild(messageElement);
    chatContainer.scrollTop = chatContainer.scrollHeight; // Desplaza hacia abajo
}

// Función para obtener la hora actual
function getCurrentTime() {
    const now = new Date();
    return now.getHours().toString().padStart(2, '0') + ':' + now.getMinutes().toString().padStart(2, '0');
}

// Ejecuta el mensaje de bienvenida al cargar el contenedor del chat
window.onload = function () {
    showWelcomeMessage();
};

// Vincula el botón de envío con la función sendMessage
sendButton.addEventListener('click', sendMessage);

// Permite enviar el mensaje presionando la tecla Enter
userInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Previene el comportamiento predeterminado del Enter en el input
        sendMessage();
    }
});
