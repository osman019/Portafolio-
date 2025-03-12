"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
<<<<<<< HEAD
import { ArrowRight, Github, Linkedin, Twitter, User } from "lucide-react"
=======
import { ArrowRight, Github, Linkedin, Twitter } from "lucide-react"
>>>>>>> 259c63f05b1927fb7ae608c89267cf9e972086b8
import { motion } from "framer-motion"

export default function Hero() {
  const [text, setText] = useState("")
  const fullText = "Software Developer"
<<<<<<< HEAD
  const [imageLoaded, setImageLoaded] = useState(false)
=======
>>>>>>> 259c63f05b1927fb7ae608c89267cf9e972086b8

  useEffect(() => {
    let i = 0
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.substring(0, i + 1))
        i++
      } else {
        clearInterval(typingInterval)
      }
    }, 100)

<<<<<<< HEAD
    // Preload the image
    const img = new Image()
    img.src =
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250311-WA0002.jpg-GYwvv2u6VLFyGYaUpvVICqff53WQwl.jpeg"
    img.onload = () => setImageLoaded(true)
    img.onerror = () => setImageLoaded(false)

=======
>>>>>>> 259c63f05b1927fb7ae608c89267cf9e972086b8
    return () => clearInterval(typingInterval)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      })
    }
  }

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-32">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
<<<<<<< HEAD
              Hi, I'm <span className="text-white">Osman Johandry</span>
=======
              Hi, I'm <span className="text-primary">Osman Johandry</span>
>>>>>>> 259c63f05b1927fb7ae608c89267cf9e972086b8
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium text-muted-foreground mb-6">
              <span className="text-foreground">{text}</span>
              <span className="animate-blink">|</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-lg">
              I build exceptional digital experiences with clean code and modern technologies. Turning complex problems
              into elegant solutions is what I do best.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group" onClick={() => scrollToSection("projects")}>
                View My Work
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollToSection("contact")}>
                Contact Me
              </Button>
            </div>

            <div className="flex gap-4 mt-8">
              <Button variant="ghost" size="icon" className="rounded-full" asChild>
<<<<<<< HEAD
                <a href="https://github.com/osman019" target="_blank" rel="noopener noreferrer">
=======
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
>>>>>>> 259c63f05b1927fb7ae608c89267cf9e972086b8
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full" asChild>
<<<<<<< HEAD
                <a
                  href="https://www.linkedin.com/in/osman-ortiz-rolon-08a142353?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
=======
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
>>>>>>> 259c63f05b1927fb7ae608c89267cf9e972086b8
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full" asChild>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <Twitter className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative aspect-square max-w-md mx-auto"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full"></div>
<<<<<<< HEAD
            <div className="absolute inset-4 bg-muted rounded-full overflow-hidden flex items-center justify-center">
              {imageLoaded ? (
                <div
                  className="w-full h-full bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage:
                      'url("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250311-WA0002.jpg-GYwvv2u6VLFyGYaUpvVICqff53WQwl.jpeg")',
                  }}
                ></div>
              ) : (
                <div className="flex flex-col items-center justify-center h-full w-full">
                  <User className="h-24 w-24 text-primary/50" />
                  <p className="text-xl font-bold mt-2 text-primary/70">OJ</p>
                </div>
              )}
=======
            <div className="absolute inset-4 bg-muted rounded-full overflow-hidden">
              <img
                src="/placeholder.svg?height=400&width=400"
                alt="Osman Johandry"
                className="w-full h-full object-cover"
              />
>>>>>>> 259c63f05b1927fb7ae608c89267cf9e972086b8
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block">
        <button onClick={() => scrollToSection("about")} className="animate-bounce">
          <ArrowRight className="h-6 w-6 transform rotate-90" />
        </button>
      </div>
    </section>
  )
}

