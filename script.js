
const lucide = window.lucide;

document.addEventListener("DOMContentLoaded", () => {
  lucide.createIcons();

  // Establecer el año actual
  document.getElementById("current-year").textContent = new Date().getFullYear();

  // Efecto de escritura
  initTypingEffect();

  // Inicializar tarjetas de proyectos
  initProjectCards();

  // Inicializar tarjetas de tecnologías
  initTechCards();

  // Inicializar formulario de contacto
  initContactForm();

  // Inicializar botón de cambio de idioma
  initLanguageToggle();

  // Cargar imagen de perfil
  loadProfileImage();
});

function loadProfileImage() {
  const img = new Image();
  img.src = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250311-WA0002.jpg-GYwvv2u6VLFyGYaUpvVICqff53WQwl.jpeg";
  img.onload = () => {
    const profileImg = document.querySelector(".profile-img");
    if (profileImg) {
      profileImg.src = img.src;
    }
  };
  img.onerror = () => {
    const profileImg = document.querySelector(".profile-img");
    if (profileImg) {
      profileImg.classList.add("error");
    }
  };
}

// Efecto de barra de navegación al hacer scroll
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 10) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Función para alternar el menú móvil
function toggleMobileMenu() {
  const mobileMenu = document.getElementById("mobile-menu");
  const menuIcon = document.querySelector(".mobile-toggle i");

  mobileMenu.classList.toggle("active");

  if (mobileMenu.classList.contains("active")) {
    menuIcon.setAttribute("data-lucide", "x");
  } else {
    menuIcon.setAttribute("data-lucide", "menu");
  }

  lucide.createIcons();
}

// Función de desplazamiento suave hacia una sección
function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  const mobileMenu = document.getElementById("mobile-menu");

  if (mobileMenu.classList.contains("active")) {
    toggleMobileMenu();
  }

  if (element) {
    const offsetTop = element.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    });
  }
}

// Efecto de escritura
function initTypingEffect() {
  const texts = {
    es: "Desarrollador de Software",
    en: "Software Developer",
  };

  const typingElement = document.getElementById("typing-text");
  const currentLang = localStorage.getItem("language") || "es";
  const fullText = texts[currentLang];
  let i = 0;

  typingElement.textContent = "";

  const typingInterval = setInterval(() => {
    if (i < fullText.length) {
      typingElement.textContent += fullText.charAt(i);
      i++;
    } else {
      clearInterval(typingInterval);
    }
  }, 100);
}

// Tarjetas de proyectos
function initProjectCards() {
  const projectCards = document.querySelectorAll(".project-card");

  projectCards.forEach((card) => {
    card.addEventListener("click", () => {
      const isExpanded = card.classList.contains("expanded");

      // Cerrar todas las tarjetas
      projectCards.forEach((c) => c.classList.remove("expanded"));

      // Alternar la tarjeta actual
      if (!isExpanded) {
        card.classList.add("expanded");
      }
    });
  });
}

// Tarjetas de tecnologías
function initTechCards() {
  const techCards = document.querySelectorAll(".tech-card");

  techCards.forEach((card) => {
    card.addEventListener("click", () => {
      const category = card.getAttribute("data-category");
      const details = document.getElementById(`${category}-details`);

      if (details) {
        details.classList.toggle("active");
      }
    });
  });
}

// Modal de proyectos
function updateContent(projectId) {
  event.stopPropagation();

  const projects = [
    {
      title: "Sitio Web Informativo de SpaceX",
      titleEn: "SpaceX Informative Website",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/space.jpg-aTmuuUxwHRC1Dp86xPnyf64sd91JWT.jpeg",
      tags: ["JavaScript", "CSS", "HTML", "Desarrollo Web"],
      tagsEn: ["JavaScript", "CSS", "HTML", "Web Development"],
      description:
        "Este repositorio contiene el código fuente de una página web informativa sobre el programa SpaceX. Fundada en 2002 por Elon Musk (también cofundador de Tesla Motors), SpaceX es una empresa de transporte espacial con objetivos ambiciosos.",
      descriptionEn:
        "This repository contains the source code for an informative web page about the SpaceX program. Founded in 2002 by Elon Musk (also co-founder of Tesla Motors), SpaceX is a space transport company with ambitious goals.",
      features: [
        "Interfaz de usuario interactiva",
        "Información de la compañía SpaceX",
        "Exhibición de cápsulas espaciales",
        "Especificaciones de cohetes",
        "Servicios de turismo espacial",
      ],
      featuresEn: [
        "Interactive UI",
        "SpaceX company information",
        "Space capsules showcase",
        "Rocket specifications",
        "Space tourism services",
      ],
      githubLink: "https://github.com/osman019/PROYECTO-FILTRO_JS_ORTIZOSMAN-NILSONCARVAJAL.git",
      demoLink: "#",
    },
    // Agrega más proyectos aquí
  ];

  const project = projects[projectId];
  const currentLang = localStorage.getItem("language") || "es";
  const modal = document.getElementById("project-modal");
  const modalTitle = document.getElementById("modal-title");
  const modalTags = document.getElementById("modal-tags");
  const modalImage = document.getElementById("modal-image");
  const modalDescription = document.getElementById("modal-description");
  const modalFeatures = document.getElementById("modal-features");
  const modalGithub = document.getElementById("modal-github");
  const modalDemo = document.getElementById("modal-demo");

  // Limpiar contenido anterior
  modalTags.innerHTML = "";
  modalFeatures.innerHTML = "";

  // Establecer contenido del modal según el idioma
  modalTitle.textContent = currentLang === "es" ? project.title : project.titleEn;
  modalImage.src = project.image;
  modalImage.alt = currentLang === "es" ? project.title : project.titleEn;
  modalDescription.textContent = currentLang === "es" ? project.description : project.descriptionEn;

  // Agregar etiquetas
  const tags = currentLang === "es" ? project.tags : project.tagsEn;
  tags.forEach((tag) => {
    const tagElement = document.createElement("span");
    tagElement.className = "project-tag";
    tagElement.textContent = tag;
    modalTags.appendChild(tagElement);
  });

  // Agregar características
  const features = currentLang === "es" ? project.features : project.featuresEn;
  features.forEach((feature) => {
    const li = document.createElement("li");
    li.textContent = feature;
    modalFeatures.appendChild(li);
  });

  // Establecer enlaces
  modalGithub.href = project.githubLink;
  modalDemo.href = project.demoLink;

  // Mostrar modal
  modal.classList.add("active");

  // Cerrar modal al hacer clic fuera
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("active");
    }
  });
}

// Formulario de contacto
function initContactForm() {
  const form = document.getElementById("contact-form");
  const currentLang = localStorage.getItem("language") || "es";

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Simulación del envío del formulario
    const submitButton = form.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;

    submitButton.disabled = true;
    submitButton.textContent = currentLang === "es" ? "Enviando..." : "Sending...";

    setTimeout(() => {
      // Mostrar mensaje de éxito
      alert(
        currentLang === "es"
          ? "¡Mensaje enviado! Gracias por tu mensaje. Me pondré en contacto contigo pronto."
          : "Message sent! Thank you for your message. I'll get back to you soon."
      );

      // Resetear formulario
      form.reset();

      // Resetear botón
      submitButton.disabled = false;
      submitButton.textContent = originalText;
    }, 1500);
  });
}

// Función para inicializar el cambio de idioma
function initLanguageToggle() {
  const languageToggle = document.getElementById("language-toggle");
  const mobileLanguageToggle = document.getElementById("mobile-language-toggle");
  const currentLang = localStorage.getItem("language") || "es";

  // Establecer idioma inicial
  setLanguage(currentLang);

  // Actualizar el texto del botón de cambio de idioma
  languageToggle.textContent = currentLang === "es" ? "EN" : "ES";
  mobileLanguageToggle.textContent = currentLang === "es" ? "EN" : "ES";

  // Agregar eventos para alternar el idioma
  languageToggle.addEventListener("click", toggleLanguage);
  mobileLanguageToggle.addEventListener("click", toggleLanguage);
}

function toggleLanguage() {
  const currentLang = localStorage.getItem("language") || "es";
  const newLang = currentLang === "es" ? "en" : "es";

  setLanguage(newLang);

  // Actualizar el texto del botón de cambio de idioma
  document.getElementById("language-toggle").textContent = newLang === "es" ? "EN" : "ES";
  document.getElementById("mobile-language-toggle").textContent = newLang === "es" ? "EN" : "ES";

  // Recargar la página para aplicar los cambios
  window.location.reload();
}

function setLanguage(lang) {
  localStorage.setItem("language", lang);

  // Aquí se implementaría el sistema completo de traducción
  // Esta es una versión simplificada que se expandiría con un sistema de traducción completo.
}
