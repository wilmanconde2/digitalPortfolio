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
        description: 'Meet the warrior behind this portfolio',
        subtitle: 'Guardian of Code',
        history:
          '  My journey in web development is fueled by the raw power of the tools and languages I master, with JavaScript as the energy I harness in every challenge. I push frameworks like React.js and Next.js to their peak, building powerful, resilient sites that serve as strongholds for users in the digital world. The principles of the Jamstack help me create fast, secure, and dynamic experiences, while my design instincts ensure that each project is a balanced fusion of functionality and craftsmanship. Join me as I continue to face new challenges, evolving with each one, shaping the future of the web like a true warrior.',
        clients: '1 client',
        experience: '1 Year Experience',
      },
      contact: {
        title: 'Contact',
        subtitle: 'Summon the warrior!',
        history:
          'Step into the battlefield of innovation, where your words hold the power to initiate change and create new alliances. Whether you´re seeking to forge partnerships or share tales of your victories, your messages are like sacred scrolls in this domain.',
        name: 'name',
        email: 'email',
        message: 'message',
        submit: 'Unleash Your Message!',
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
        repo: 'GitHub Repository',
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
        description: 'Conoce al guerrero detrás de este portafolio',
        subtitle: 'Guardián del Código',
        history:
          'Mi viaje en el desarrollo web está impulsado por el poder puro de las herramientas y lenguajes que domino, con JavaScript como la energía que aprovecho en cada desafío. Llevo frameworks como React.js y Next.js a su máximo potencial, construyendo sitios poderosos y resistentes que sirven como fortalezas para los usuarios en el mundo digital. Los principios de Jamstack me permiten crear experiencias rápidas, seguras y dinámicas, mientras que mi instinto de diseño garantiza que cada proyecto sea una fusión equilibrada de funcionalidad y artesanía. Únete a mí mientras sigo enfrentando nuevos desafíos, evolucionando con cada uno y moldeando el futuro de la web como un verdadero guerrero.',
        clients: '1 Cliente',
        experience: '1 Año de Experiencia',
      },
      contact: {
        title: 'Contacto',
        subtitle: '¡Invoca al guerrero!',
        history:
          '¡Adéntrate en el campo de batalla de la innovación, donde tus palabras tienen el poder de iniciar cambios y crear nuevas alianzas! Ya sea que busques forjar asociaciones o compartir historias de tus victorias, tus mensajes son como pergaminos sagrados en este dominio.',
        name: 'nombre',
        email: 'correo',
        message: 'mensaje',
        submit: '¡Desata tu mensaje!',
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
        repo: 'Repositorio GitHub',
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
