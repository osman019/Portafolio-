"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { ExternalLink, Github, ChevronDown } from "lucide-react"

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)
  const [expandedProject, setExpandedProject] = useState(null)

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const projects = [
    {
      id: 0,
      title: "SpaceX Informative Website",
      shortDescription: "An informative web page about SpaceX and space tourism.",
      description: "A collaborative project creating an informative website about SpaceX and space tourism.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/space.jpg-aTmuuUxwHRC1Dp86xPnyf64sd91JWT.jpeg",
      tags: ["JavaScript", "CSS", "HTML", "Web Development"],
      features: [
        "Interactive UI",
        "SpaceX company information",
        "Space capsules showcase",
        "Rocket specifications",
        "Space tourism services",
      ],
      demoLink: "#",
      githubLink: "https://github.com/osman019/PROYECTO-FILTRO_JS_ORTIZOSMAN-NILSONCARVAJAL.git",
      fullDescription:
        "This repository contains the source code for an informative web page about the SpaceX program. Founded in 2002 by Elon Musk (also co-founder of Tesla Motors), SpaceX is a space transport company with ambitious goals. The project simulates an aerospace company that receives public bids to conduct research focused on intergalactic tourism for citizens of planet Earth. The website showcases information about the company, its rockets, capsules, and space tourism services.",
    },
    {
      id: 1,
      title: "Viajes Por Colombia",
      shortDescription: "A tourism website showcasing Colombian cities and attractions.",
      description:
        "A web project that allows users to visualize places in Colombia, including tourist spots and gastronomy.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/JFRZQ4JICREXZCO4GQPC36LMSQ.jpg-qSJ7iGvieRcgrZ5jjNI8N59vAm6Fdc.jpeg",
      tags: ["HTML", "CSS", "Tourism", "Web Development"],
      features: [
        "Interactive city guide",
        "Colombian tourist locations",
        "Gastronomy information",
        "City details and information",
        "Responsive design",
      ],
      demoLink: "#",
      githubLink: "https://github.com/osman019/turismo-colombia",
      fullDescription:
        "This project provides an opportunity to visualize places in Colombia and its tourist spots and gastronomy. It features a table of available locations including cities like Arauca, Atlantico, Guaviare, Sincelejo, and Vichada. The website was developed using HTML and CSS, focusing on creating an informative and visually appealing guide to Colombian tourism.",
    },
    {
      id: 2,
      title: "Centro Médico - Sistema de Gestión",
      shortDescription: "A medical center management system built with Python.",
      description: "A modular CRUD application for managing patients and medical specialists.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Python", "CRUD", "JSON", "Desktop Application"],
      features: [
        "Patient management",
        "Medical specialist management",
        "Modular architecture",
        "JSON data storage",
        "Clean and scalable code",
      ],
      demoLink: "#",
      githubLink: "https://github.com/osman019/proyecto",
      fullDescription:
        "This is a management system for medical centers developed in Python, utilizing modularity and CRUD operations (Create, Read, Update, Delete). It allows administrators to manage patients and medical specialists efficiently. The application features a modular design for maintaining clean and scalable code, with data storage in JSON format. The system is designed to be user-friendly while providing robust functionality for medical center administration.",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4">
            Portfolio
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              variants={fadeIn}
            >
              <Card
                className={`group h-full cursor-pointer transition-all duration-300 hover:shadow-lg ${
                  expandedProject === project.id ? "ring-2 ring-primary" : ""
                }`}
                onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full aspect-video object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-background/20 p-6 flex flex-col justify-end">
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <p className="text-muted-foreground text-sm">{project.shortDescription}</p>
                    </div>
                  </div>

                  <AnimatePresence>
                    {expandedProject === project.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="p-6 border-t"
                      >
                        <div className="space-y-4">
                          <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag, i) => (
                              <Badge key={i} variant="secondary">
                                {tag}
                              </Badge>
                            ))}
                          </div>

                          <div className="space-y-2">
                            <h4 className="font-semibold">Key Features:</h4>
                            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                              {project.features.map((feature, i) => (
                                <li key={i}>{feature}</li>
                              ))}
                            </ul>
                          </div>

                          <div className="flex gap-4 pt-2">
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={(e) => {
                                e.stopPropagation()
                                window.open(project.githubLink, "_blank")
                              }}
                            >
                              <Github className="h-4 w-4 mr-2" />
                              Code
                            </Button>
                            <Button
                              size="sm"
                              onClick={(e) => {
                                e.stopPropagation()
                                window.open(project.demoLink, "_blank")
                              }}
                            >
                              <ExternalLink className="h-4 w-4 mr-2" />
                              Demo
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={(e) => {
                                e.stopPropagation()
                                setSelectedProject(project)
                              }}
                            >
                              Learn More
                            </Button>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="p-4 text-center">
                    <ChevronDown
                      className={`w-6 h-6 mx-auto transition-transform duration-300 ${
                        expandedProject === project.id ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-3xl">
            <DialogHeader>
              <DialogTitle>{selectedProject.title}</DialogTitle>
              <DialogDescription>
                <div className="flex flex-wrap gap-2 mt-2 mb-4">
                  {selectedProject.tags.map((tag, i) => (
                    <Badge key={i} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <img
                src={selectedProject.image || "/placeholder.svg"}
                alt={selectedProject.title}
                className="w-full rounded-md object-cover aspect-video"
              />
              <p className="text-muted-foreground">{selectedProject.fullDescription}</p>
              <div className="space-y-4">
                <h4 className="font-semibold">Key Features:</h4>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  {selectedProject.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>
              <div className="flex justify-end gap-4 mt-4">
                <Button variant="outline" asChild>
                  <a href={selectedProject.githubLink} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" />
                    View Code
                  </a>
                </Button>
                <Button asChild>
                  <a href={selectedProject.demoLink} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </a>
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </section>
  )
}

