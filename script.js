
const lucide = window.lucide


document.addEventListener("DOMContentLoaded", () => {
  lucide.createIcons()

  
  document.getElementById("current-year").textContent = new Date().getFullYear()


  initTypingEffect()

 
  initProjectCards()


  initTechCards()


  initContactForm()

  
  initLanguageToggle()

 
  loadProfileImage()
})


function loadProfileImage() {
  const img = new Image()
  img.src =
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250311-WA0002.jpg-GYwvv2u6VLFyGYaUpvVICqff53WQwl.jpeg"
  img.onload = () => {
    const profileImg = document.querySelector(".profile-img")
    if (profileImg) {
      profileImg.src = img.src
    }
  }
  img.onerror = () => {
    const profileImg = document.querySelector(".profile-img")
    if (profileImg) {
      profileImg.classList.add("error")
    }
  }
}

// Navbar scroll effect
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar")
  if (window.scrollY > 10) {
    navbar.classList.add("scrolled")
  } else {
    navbar.classList.remove("scrolled")
  }
})

// Mobile menu toggle
function toggleMobileMenu() {
  const mobileMenu = document.getElementById("mobile-menu")
  const menuIcon = document.querySelector(".mobile-toggle i")

  mobileMenu.classList.toggle("active")

  if (mobileMenu.classList.contains("active")) {
    menuIcon.setAttribute("data-lucide", "x")
  } else {
    menuIcon.setAttribute("data-lucide", "menu")
  }

  lucide.createIcons()
}

// Smooth scroll to section
function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId)
  const mobileMenu = document.getElementById("mobile-menu")

  if (mobileMenu.classList.contains("active")) {
    toggleMobileMenu()
  }

  if (element) {
    const offsetTop = element.getBoundingClientRect().top + window.pageYOffset
    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    })
  }
}

// Typing effect
function initTypingEffect() {
  const texts = {
    es: "Desarrollador de Software",
    en: "Software Developer",
  }

  const typingElement = document.getElementById("typing-text")
  const currentLang = localStorage.getItem("language") || "es"
  const fullText = texts[currentLang]
  let i = 0

  typingElement.textContent = ""

  const typingInterval = setInterval(() => {
    if (i < fullText.length) {
      typingElement.textContent += fullText.charAt(i)
      i++
    } else {
      clearInterval(typingInterval)
    }
  }, 100)
}

// Project cards
function initProjectCards() {
  const projectCards = document.querySelectorAll(".project-card")

  projectCards.forEach((card) => {
    card.addEventListener("click", () => {
      const isExpanded = card.classList.contains("expanded")

      // Close all cards
      projectCards.forEach((c) => c.classList.remove("expanded"))

      // Toggle current card
      if (!isExpanded) {
        card.classList.add("expanded")
      }
    })
  })
}

// Tech cards
function initTechCards() {
  const techCards = document.querySelectorAll(".tech-card")

  techCards.forEach((card) => {
    card.addEventListener("click", () => {
      const category = card.getAttribute("data-category")
      const details = document.getElementById(`${category}-details`)

      if (details) {
        details.classList.toggle("active")
      }
    })
  })
}

// Project modal
function showProjectModal(projectId) {
  event.stopPropagation()

  const projects = [
    {
      title: "Sitio Web Informativo de SpaceX",
      titleEn: "SpaceX Informative Website",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/space.jpg-aTmuuUxwHRC1Dp86xPnyf64sd91JWT.jpeg",
      tags: ["JavaScript", "CSS", "HTML", "Desarrollo Web"],
      tagsEn: ["JavaScript", "CSS", "HTML", "Web Development"],
      description:
        "Este repositorio contiene el código fuente de una página web informativa sobre el programa SpaceX. Fundada en 2002 por Elon Musk (también cofundador de Tesla Motors), SpaceX es una empresa de transporte espacial con objetivos ambiciosos. El proyecto simula una empresa aeroespacial que recibe ofertas públicas para realizar investigaciones centradas en el turismo intergaláctico para los ciudadanos del planeta Tierra. El sitio web muestra información sobre la empresa, sus cohetes, cápsulas y servicios de turismo espacial.",
      descriptionEn:
        "This repository contains the source code for an informative web page about the SpaceX program. Founded in 2002 by Elon Musk (also co-founder of Tesla Motors), SpaceX is a space transport company with ambitious goals. The project simulates an aerospace company that receives public bids to conduct research focused on intergalactic tourism for citizens of planet Earth. The website showcases information about the company, its rockets, capsules, and space tourism services.",
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
    {
      title: "Viajes Por Colombia",
      titleEn: "Travels Through Colombia",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/JFRZQ4JICREXZCO4GQPC36LMSQ.jpg-qSJ7iGvieRcgrZ5jjNI8N59vAm6Fdc.jpeg",
      tags: ["HTML", "CSS", "Turismo", "Desarrollo Web"],
      tagsEn: ["HTML", "CSS", "Tourism", "Web Development"],
      description:
        "Este proyecto ofrece la oportunidad de visualizar lugares de Colombia, sus puntos turísticos y gastronomía. Presenta una tabla de ubicaciones disponibles que incluye ciudades como Arauca, Atlántico, Guaviare, Sincelejo y Vichada. El sitio web fue desarrollado utilizando HTML y CSS, centrándose en crear una guía informativa y visualmente atractiva del turismo colombiano.",
      descriptionEn:
        "This project provides an opportunity to visualize places in Colombia and its tourist spots and gastronomy. It features a table of available locations including cities like Arauca, Atlantico, Guaviare, Sincelejo, and Vichada. The website was developed using HTML and CSS, focusing on creating an informative and visually appealing guide to Colombian tourism.",
      descriptionEn:
        "This project provides an opportunity to visualize places in Colombia and its tourist spots and gastronomy. It features a table of available locations including cities like Arauca, Atlantico, Guaviare, Sincelejo, and Vichada. The website was developed using HTML and CSS, focusing on creating an informative and visually appealing guide to Colombian tourism.",
      features: [
        "Guía interactiva de ciudades",
        "Lugares turísticos de Colombia",
        "Información gastronómica",
        "Detalles e información de ciudades",
        "Diseño responsivo",
      ],
      featuresEn: [
        "Interactive city guide",
        "Colombian tourist locations",
        "Gastronomy information",
        "City details and information",
        "Responsive design",
      ],
      githubLink: "https://github.com/osman019/turismo-colombia",
      demoLink: "#",
    },
    {
      title: "Centro Médico - Sistema de Gestión",
      titleEn: "Medical Center - Management System",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Python", "CRUD", "JSON", "Aplicación de Escritorio"],
      tagsEn: ["Python", "CRUD", "JSON", "Desktop Application"],
      description:
        "Este es un sistema de gestión para centros médicos desarrollado en Python, utilizando modularidad y operaciones CRUD (Crear, Leer, Actualizar, Eliminar). Permite a los administradores gestionar pacientes y especialistas médicos de manera eficiente. La aplicación cuenta con un diseño modular para mantener un código limpio y escalable, con almacenamiento de datos en formato JSON. El sistema está diseñado para ser fácil de usar a la vez que proporciona una funcionalidad robusta para la administración de centros médicos.",
      descriptionEn:
        "This is a management system for medical centers developed in Python, utilizing modularity and CRUD operations (Create, Read, Update, Delete). It allows administrators to manage patients and medical specialists efficiently. The application features a modular design for maintaining clean and scalable code, with data storage in JSON format. The system is designed to be user-friendly while providing robust functionality for medical center administration.",
      features: [
        "Gestión de pacientes",
        "Gestión de especialistas médicos",
        "Arquitectura modular",
        "Almacenamiento de datos en JSON",
        "Código limpio y escalable",
      ],
      featuresEn: [
        "Patient management",
        "Medical specialist management",
        "Modular architecture",
        "JSON data storage",
        "Clean and scalable code",
      ],
      githubLink: "https://github.com/osman019/proyecto",
      demoLink: "#",
    },
  ]

  const project = projects[projectId]
  const currentLang = localStorage.getItem("language") || "es"
  const modal = document.getElementById("project-modal")
  const modalTitle = document.getElementById("modal-title")
  const modalTags = document.getElementById("modal-tags")
  const modalImage = document.getElementById("modal-image")
  const modalDescription = document.getElementById("modal-description")
  const modalFeatures = document.getElementById("modal-features")
  const modalGithub = document.getElementById("modal-github")
  const modalDemo = document.getElementById("modal-demo")

  // Clear previous content
  modalTags.innerHTML = ""
  modalFeatures.innerHTML = ""

  // Set modal content based on language
  modalTitle.textContent = currentLang === "es" ? project.title : project.titleEn
  modalImage.src = project.image
  modalImage.alt = currentLang === "es" ? project.title : project.titleEn
  modalDescription.textContent = currentLang === "es" ? project.description : project.descriptionEn

  // Add tags
  const tags = currentLang === "es" ? project.tags : project.tagsEn
  tags.forEach((tag) => {
    const tagElement = document.createElement("span")
    tagElement.className = "project-tag"
    tagElement.textContent = tag
    modalTags.appendChild(tagElement)
  })

  // Add features
  const features = currentLang === "es" ? project.features : project.featuresEn
  features.forEach((feature) => {
    const li = document.createElement("li")
    li.textContent = feature
    modalFeatures.appendChild(li)
  })

  // Set links
  modalGithub.href = project.githubLink
  modalDemo.href = project.demoLink

  // Show modal
  modal.classList.add("active")

  // Close modal when clicking outside
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("active")
    }
  })
}

// Contact form
function initContactForm() {
  const form = document.getElementById("contact-form")
  const currentLang = localStorage.getItem("language") || "es"

  form.addEventListener("submit", (e) => {
    e.preventDefault()

    // Simulate form submission
    const submitButton = form.querySelector('button[type="submit"]')
    const originalText = submitButton.textContent

    submitButton.disabled = true
    submitButton.textContent = currentLang === "es" ? "Enviando..." : "Sending..."

    setTimeout(() => {
      // Show success message
      alert(
        currentLang === "es"
          ? "¡Mensaje enviado! Gracias por tu mensaje. Me pondré en contacto contigo pronto."
          : "Message sent! Thank you for your message. I'll get back to you soon.",
      )

      // Reset form
      form.reset()

      // Reset button
      submitButton.disabled = false
      submitButton.textContent = originalText
    }, 1500)
  })
}

// Language toggle
function initLanguageToggle() {
  const languageToggle = document.getElementById("language-toggle")
  const mobileLanguageToggle = document.getElementById("mobile-language-toggle")
  const currentLang = localStorage.getItem("language") || "es"

  // Set initial language
  setLanguage(currentLang)

  // Update toggle button text
  languageToggle.textContent = currentLang === "es" ? "EN" : "ES"
  mobileLanguageToggle.textContent = currentLang === "es" ? "EN" : "ES"

  // Add event listeners
  languageToggle.addEventListener("click", toggleLanguage)
  mobileLanguageToggle.addEventListener("click", toggleLanguage)
}

function toggleLanguage() {
  const currentLang = localStorage.getItem("language") || "es"
  const newLang = currentLang === "es" ? "en" : "es"

  setLanguage(newLang)

  // Update toggle button text
  document.getElementById("language-toggle").textContent = newLang === "es" ? "EN" : "ES"
  document.getElementById("mobile-language-toggle").textContent = newLang === "es" ? "EN" : "ES"

  // Reload page to apply changes
  window.location.reload()
}

function setLanguage(lang) {
  localStorage.setItem("language", lang)

  // Translation would be implemented here for all text elements
  // This is a simplified version that would be expanded with a full translation system
}

