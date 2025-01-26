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
        description: 'Discover the developer behind this portfolio.',
        subtitle: 'Web Developer Junior',
        history:
          'My journey in web development is driven by a deep mastery of the tools and languages I use, with JavaScript at the core of my approach to tackling complex challenges. I leverage frameworks such as React.js and Next.js to build high-performance, scalable websites that deliver seamless user experiences. Guided by the principles of the Jamstack, I create fast, secure, and dynamic applications, while maintaining a keen focus on balancing functionality and design. I am continuously evolving my skills to meet new challenges and contribute to the advancement of web development.',
        clients: '1 client',
        experience: '1 Year Experience',
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
        header: 'Projects',
        bootcampTitle: 'Bootcamp',
        bootcampDescription:
          'This web application is an interactive platform for managing products. It allows users to create, edit, and delete product listings while offering a user-friendly experience. Products can be organized by categories, tracked, and updated in real-time. The interface is responsive and works across various devices, making it a practical solution for businesses or individuals needing to manage inventories or product catalogs efficiently. It simplifies the process of handling and updating product information, ensuring smooth workflows and better organization.',
        weatherTitle: 'Real Time Weather',
        weatherDescription:
          'This project is a Weather Application built with React, designed to provide users with real-time weather information based on their selected city. It features a clean and interactive user interface with components that enhance usability and functionality.',
        cordobaTitle: 'City Cordoba School',
        cordobaDescription: 'Website under construction',
        portfolioTitle: 'Digital Portfolio',
        portfolioDescription:
          'A clean and modern digital portfolio website. The contact page allows visitors to reach out directly. The projects page showcases various works, each with detailed descriptions. The about page provides a personal and professional background. The website also includes links to LinkedIn, GitHub, X , and an option to download the CV in PDF format.',
        polindromeTitle: 'Polindromes',
        polindromeDescription:
          'This project is an application built with React, designed to help users easily check if a word or phrase is a palindrome. It features a clean and interactive interface with real-time feedback and intuitive functionality to enhance the user experience.',
        toDoListTitle: 'To-Do List',
        toDoListDescription:
          'This is a simple, interactive To-Do List application built with React. It allows users to add, delete, and update tasks, while also storing their tasks locally in the browser for persistence across sessions. Additionally, users can toggle between light and dark modes, and the current date and time are displayed in the header.',
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
        description: 'Descubre al desarrollador detrás de este portafolio.',
        subtitle: 'Desarrollador Web Junior',
        history:
          'Mi trayectoria en el desarrollo web está impulsada por un profundo dominio de las herramientas y lenguajes que utilizo, con JavaScript en el núcleo de mi enfoque para resolver desafíos complejos. Aprovecho frameworks como React.js y Next.js para construir sitios web de alto rendimiento y escalables que ofrecen experiencias de usuario fluidas. Guiado por los principios de Jamstack, creo aplicaciones rápidas, seguras y dinámicas, manteniendo un enfoque constante en equilibrar funcionalidad y diseño. Estoy en constante evolución de mis habilidades para enfrentar nuevos retos y contribuir al avance del desarrollo web.',
        clients: '1 Cliente',
        experience: '1 Año de Experiencia',
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
        weatherTitle: 'Clima en Tiempo Real',
        weatherDescription:
          'Este proyecto es una aplicación del clima construida con React, diseñada para proporcionar a los usuarios información meteorológica en tiempo real basada en la ciudad que seleccionen. Cuenta con una interfaz de usuario limpia e interactiva, con componentes que mejoran la usabilidad y funcionalidad.',
        cordobaTitle: 'Colegio Ciudad de Córdoba',
        cordobaDescription: 'Sitio web en construcción',
        portfolioTitle: 'Portfolio Digital',
        portfolioDescription:
          'Un portafolio digital moderno y limpio. La página de contacto permite a los visitantes comunicarse directamente. La página de proyectos muestra diversas obras, cada una con descripciones detalladas. La página "Acerca de" ofrece información sobre el perfil personal y profesional. El sitio web también incluye enlaces a LinkedIn, GitHub, X (anteriormente Twitter) y una opción para descargar el CV en formato PDF.',
        toDoListTitle: 'Lista de tareas',
        toDoListDescription:
          'Esta es una aplicación de lista de tareas sencilla e interactiva construida con React. Permite a los usuarios agregar, eliminar y actualizar tareas, mientras almacena las tareas localmente en el navegador para su persistencia entre sesiones. Además, los usuarios pueden alternar entre los modos claro y oscuro, y la fecha y hora actuales se muestran en el encabezado.',
          polindromeTitle: 'Palíndromos',
        polindromeDescription:
          'Este proyecto es una aplicación construida con React, diseñada para ayudar a los usuarios a verificar fácilmente si una palabra o frase es un palíndromo. Cuenta con una interfaz limpia e interactiva, retroalimentación en tiempo real y una funcionalidad intuitiva para mejorar la experiencia del usuario.',
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
