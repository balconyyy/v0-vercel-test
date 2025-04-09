"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { CardWrapper } from "./ui/card-wrapper"
import { Button } from "./ui/button"
import { ExternalLink, Play, ChevronLeft, ChevronRight } from "lucide-react"

interface ProjectProps {
  title: string
  description: string
  image: string
  demoLink: string
}

function ProjectCard({ title, description, image, demoLink }: ProjectProps) {
  return (
    <CardWrapper className="overflow-hidden group h-full">
      <div className="relative h-48 mb-4">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover rounded-lg transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity">
          <Play size={48} className="text-white" />
        </div>
      </div>
      <h3 className="text-lg font-semibold group-hover:text-primary transition-colors mb-2">{title}</h3>
      <p className="text-gray-400 text-sm mb-4">{description}</p>
      <div className="flex gap-4 mt-auto">
        <Button
          variant="outline"
          size="sm"
          asChild
          className="text-primary border-primary hover:bg-primary hover:text-white active:bg-primary/90"
        >
          <a href={demoLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
            <ExternalLink size={16} /> Watch Video
          </a>
        </Button>
      </div>
    </CardWrapper>
  )
}

export function ProjectsCarousel() {
  const projects = [
    {
      title: "Emotional Portrait Series",
      description: "A visual exploration of human emotions through cinematic storytelling.",
      image: "https://img.youtube.com/vi/oYSQIeINO1I/maxresdefault.jpg",
      demoLink: "https://youtu.be/oYSQIeINO1I?si=6_bz1ZkO4eR3ubQk",
    },
    {
      title: "Urban Landscapes",
      description: "Capturing the beauty and complexity of modern city environments.",
      image: "https://img.youtube.com/vi/5AyAT9AMLVo/maxresdefault.jpg",
      demoLink: "https://youtu.be/5AyAT9AMLVo?si=uTFKpoXUmXXLCWlp",
    },
    {
      title: "Nature's Whispers",
      description: "An intimate look at the subtle details of natural environments.",
      image: "https://img.youtube.com/vi/H2PS3ptw8PU/maxresdefault.jpg",
      demoLink: "https://youtu.be/H2PS3ptw8PU?feature=shared",
    },
    {
      title: "Light & Shadow Study",
      description: "Exploring the interplay between light and shadow in visual storytelling.",
      image: "https://img.youtube.com/vi/PYXdQl_bz1g/maxresdefault.jpg",
      demoLink: "https://youtu.be/PYXdQl_bz1g?si=PuQQ42dMfdE2MfE-",
    },
    {
      title: "Movement in Stillness",
      description: "Finding dynamic energy in seemingly static moments.",
      image: "https://img.youtube.com/vi/yl48GFS5Qx8/maxresdefault.jpg",
      demoLink: "https://youtu.be/yl48GFS5Qx8?si=Y6ASG6gG2Jr1P3UL",
    },
    {
      title: "Visual Poetry",
      description: "Creating narrative through visual metaphors and symbolic imagery.",
      image: "https://img.youtube.com/vi/yl48GFS5Qx8/maxresdefault.jpg",
      demoLink: "https://youtu.be/yl48GFS5Qx8?si=Y6ASG6gG2Jr1P3UL",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [visibleCount, setVisibleCount] = useState(3)

  // Update visible count based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleCount(1)
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2)
      } else {
        setVisibleCount(3)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % (projects.length - visibleCount + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? projects.length - visibleCount : prevIndex - 1))
  }

  return (
    <section className="py-16" id="works">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Projects</h2>
      </div>

      <div className="relative px-4 md:px-12">
        {/* Carousel Navigation */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} />
        </button>

        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out gap-6"
            style={{
              transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
            }}
          >
            {projects.map((project, index) => (
              <div key={index} className="flex-shrink-0" style={{ minWidth: `${100 / visibleCount}%` }}>
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
          aria-label="Next slide"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Carousel Indicators */}
      <div className="flex justify-center mt-8 gap-2">
        {Array.from({ length: projects.length - visibleCount + 1 }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition-all ${
              currentIndex === index ? "w-8 bg-primary" : "w-2 bg-gray-600"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
