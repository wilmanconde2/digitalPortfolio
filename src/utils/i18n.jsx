import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      home: {
        title: 'Home',
      },
      about: {
        title: 'About',
        // description: 'Discover the developer behind this portfolio.',
        subtitle: 'Junior Web Developer',
        history:
          'My journey in web development is fueled by a genuine passion for creating meaningful digital experiences. With JavaScript at the heart of my toolkit, I enjoy building modern, responsive websites using frameworks like React.js and Next.js. I follow Jamstack principles to ensure fast, secure, and dynamic applications, always aiming for a thoughtful balance between functionality and design. I’m constantly learning and growing, excited to take on new challenges and contribute to innovative web solutions.',
        // clients: '1 client',
        experience: '2 Year Of Experience',
      },
      contact: {
        title: 'Contact',
        subtitle: 'Contact me!',
        history:
          "Enter the world of innovation, where your ideas drive change and foster collaboration. Whether you're building connections or showcasing your successes, your communication is key.",
        name: 'name',
        email: 'email',
        message: 'message',
        submit: 'Send your message',
      },
      projects: {
        title: 'Projects',
        header: 'Project',
        bootcampTitle: 'Bootcamp',
        bootcampDescription:
          'This web application is an interactive platform for managing products. It allows users to create, edit, and delete product listings while offering a user-friendly experience. Products can be organized by categories, tracked, and updated in real-time. The interface is responsive and works across various devices, making it a practical solution for businesses or individuals needing to manage inventories or product catalogs efficiently. It simplifies the process of handling and updating product information, ensuring smooth workflows and better organization.',
        bootcampFooter: 'October 2024',
        weatherTitle: 'Real Time Weather',
        weatherDescription:
          'This project is a Weather Application built with React, designed to provide users with real-time weather information based on their selected city. It features a clean and interactive user interface with components that enhance usability and functionality.',
        weatherFooter: 'October 2024',
        cordobaTitle: 'City Cordoba School',
        cordobaDescription:
          'This website is an interactive educational platform designed for Colegio Ciudad Córdoba. It provides students and the general community with a range of services and features that facilitate access to relevant academic information. Among its features are an image carousel, forms to retrieve student codes, and the ability to view academic reports and recovery activities.The site also boasts a clean and accessible design with a navigation menu that includes sections such as History, Modalities, Services, PQRS (Questions, Complaints, Claims, and Suggestions), and contact details. Additionally, social media links are integrated to enhance communication with the educational community. The website allows for secure online payments and provides quick links to important resources, such as informational circulars and recovery schedules.The functionality is optimized for a seamless user experience, with notifications and messages that guide visitors through their needs, improving interaction with the institution.',
        cordobaFooter: 'April 2025',
        portfolioTitle: 'Digital Portfolio',
        portfolioDescription:
          'A clean and modern digital portfolio website. The contact page allows visitors to reach out directly. The projects page showcases various works, each with detailed descriptions. The about page provides a personal and professional background. The website also includes links to LinkedIn, GitHub, X , and an option to download the CV in PDF format.',
        portfolioFooter: 'October 2024',
        palindromeTitle: 'Palindromes',
        palindromeDescription:
          'This project is an application built with React, designed to help users easily check if a word or phrase is a palindrome. It features a clean and interactive interface with real-time feedback and intuitive functionality to enhance the user experience.',
        palindromeFooter: 'January 2025',
        toDoListTitle: 'To-Do List',
        toDoListDescription:
          'This is a simple, interactive To-Do List application built with React. It allows users to add, delete, and update tasks, while also storing their tasks locally in the browser for persistence across sessions. Additionally, users can toggle between light and dark modes, and the current date and time are displayed in the header.',
        toDoListFooter: 'January 2025',
        repo: 'GitHub Repository',
        netlify: 'Website',
      },
      cv: {
        title: 'Resume',
      },
    },
  },
  es: {
    translation: {
      home: {
        title: 'Inicio',
      },
      about: {
        title: 'Acerca de',
        // description: 'Descubre al desarrollador detrás de este portafolio.',
        subtitle: 'Desarrollador Web Junior',
        history:
          'Mi camino en el desarrollo web está impulsado por una verdadera pasión por crear experiencias digitales significativas. Con JavaScript como base de mis herramientas, disfruto construyendo sitios web modernos y responsivos usando frameworks como React.js y Next.js. Sigo los principios de Jamstack para asegurar aplicaciones rápidas, seguras y dinámicas, siempre buscando un equilibrio entre funcionalidad y diseño. Estoy en constante aprendizaje y evolución, motivado por asumir nuevos retos y aportar a soluciones web innovadoras.',
        // clients: '1 Cliente',
        experience: '2 Años De Experiencia',
      },
      contact: {
        title: 'Contacto',
        subtitle: 'Contáctame!',
        history:
          'Ingresa al mundo de la innovación, donde tus ideas impulsan el cambio y fomentan la colaboración. Ya sea que estés construyendo relaciones o compartiendo tus logros, tu comunicación es clave.',
        name: 'nombre',
        email: 'correo',
        message: 'mensaje',
        submit: 'Envía tu mensaje!',
      },
      projects: {
        title: 'Proyectos',
        header: 'Proyecto',
        bootcampTitle: 'Bootcamp',
        bootcampDescription:
          'Esta aplicación web es una plataforma interactiva para la gestión de productos. Permite a los usuarios crear, editar y eliminar listados de productos, ofreciendo una experiencia fácil de usar. Los productos pueden organizarse por categorías, rastrearse y actualizarse en tiempo real. La interfaz es responsiva y funciona en diversos dispositivos, lo que la convierte en una solución práctica para empresas o individuos que necesiten gestionar inventarios o catálogos de productos de manera eficiente. Simplifica el proceso de manejo y actualización de información de productos, asegurando flujos de trabajo fluidos y una mejor organización.',
        bootcampFooter: 'Octubre 2024',

        weatherTitle: 'Clima en Tiempo Real',
        weatherDescription:
          'Este proyecto es una aplicación del clima construida con React, diseñada para proporcionar a los usuarios información meteorológica en tiempo real basada en la ciudad que seleccionen. Cuenta con una interfaz de usuario limpia e interactiva, con componentes que mejoran la usabilidad y funcionalidad.',
        weatherFooter: 'Octubre 2024',
        cordobaTitle: 'Colegio Ciudad de Córdoba',
        cordobaDescription:
          'Esta web es una plataforma educativa interactiva diseñada para el Colegio Ciudad Córdoba. Ofrece a los estudiantes y a la comunidad en general una serie de servicios y funcionalidades que facilitan el acceso a información relevante sobre el centro académico. Entre sus características, se encuentran un carrusel de imágenes, formularios para obtener códigos estudiantiles, y la posibilidad de consultar reportes académicos y actividades de recuperación. La página también cuenta con un diseño limpio y accesible, con un menú de navegación que incluye secciones como Historia, Modalidades, Servicios, PQRS (Preguntas, Quejas, Reclamos y Sugerencias), y contacto. Además, se integran redes sociales para facilitar la conexión con la comunidad educativa. La web permite realizar pagos en línea de manera segura y proporciona enlaces rápidos a recursos importantes, como circulares informativas y horarios de recuperación. La funcionalidad está optimizada para la experiencia del usuario, con notificaciones y mensajes que guían al visitante a través de sus necesidades, mejorando la interacción con la institución.',
        cordobaFooter: 'Abril 2025',
        portfolioTitle: 'Portfolio Digital',
        portfolioDescription:
          'Un portafolio digital moderno y limpio. La página de contacto permite a los visitantes comunicarse directamente. La página de proyectos muestra diversas obras, cada una con descripciones detalladas. La página "Acerca de" ofrece información sobre el perfil personal y profesional. El sitio web también incluye enlaces a LinkedIn, GitHub, X (anteriormente Twitter) y una opción para descargar el CV en formato PDF.',
        portfolioFooter: 'Octubre 2024',
        toDoListTitle: 'Lista de tareas',
        toDoListDescription:
          'Esta es una aplicación de lista de tareas sencilla e interactiva construida con React. Permite a los usuarios agregar, eliminar y actualizar tareas, mientras almacena las tareas localmente en el navegador para su persistencia entre sesiones. Además, los usuarios pueden alternar entre los modos claro y oscuro, y la fecha y hora actuales se muestran en el encabezado.',
        toDoListFooter: 'Enero 2025',
        palindromeTitle: 'Palíndromos',
        palindromeDescription:
          'Este proyecto es una aplicación construida con React, diseñada para ayudar a los usuarios a verificar fácilmente si una palabra o frase es un palíndromo. Cuenta con una interfaz limpia e interactiva, retroalimentación en tiempo real y una funcionalidad intuitiva para mejorar la experiencia del usuario.',
        palindromeFooter: 'Enero 2025',
        repo: 'Repositorio GitHub',
        netlify: 'Website',
      },
      cv: {
        title: 'Currículum ',
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
