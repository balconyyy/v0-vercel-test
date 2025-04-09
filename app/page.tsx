import { Stats } from "@/components/stats"
import { Services } from "@/components/services"
import { ProjectsCarousel } from "@/components/projects-carousel"
import { Testimonials } from "@/components/testimonials"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Phone, Mail, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-2xl lg:text-4xl font-normal mb-4 font-montserrat">
              Hi, my name is Yana.
              <span className="block text-primary mt-2 font-normal">I'm a visual storyteller.</span>
            </h1>
            <p className="text-gray-400 mb-8">
              I explore the unseen depth of emotions, aesthetics, and fleeting moments that hold unspoken stories. And i
              tell them in my own genre.
            </p>
          </div>
          <div className="relative">
            <div className="relative aspect-square max-w-[400px] mx-auto">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_2024-07-13_12-51-11.jpg-g0EOtwBLgMKgGXLAT8BkznwGlWwgbL.jpeg"
                alt="Profile"
                fill
                className="rounded-2xl object-cover"
                priority
              />
            </div>
          </div>
        </div>

        <Stats />
      </section>

      {/* Other Sections */}
      <div className="container mx-auto px-4">
        <Services />
        <ProjectsCarousel />
        <Testimonials />

        {/* Contact Section */}
        <section className="py-16" id="contact">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Let's Get In Touch</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Have a project in mind or want to discuss potential opportunities? I'm just a message away.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                      <Phone className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold">Phone</h3>
                      <p className="text-gray-400">+90 530 412 1191</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                      <Mail className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold">Email</h3>
                      <p className="text-gray-400">yanapetruk.video@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                      <MapPin className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold">Address</h3>
                      <p className="text-gray-400">Istambul, Turkey</p>
                    </div>
                  </div>
                </div>
              </div>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="bg-card border border-primary/20 rounded-lg p-3 w-full focus:outline-none focus:border-primary"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="bg-card border border-primary/20 rounded-lg p-3 w-full focus:outline-none focus:border-primary"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email"
                  className="bg-card border border-primary/20 rounded-lg p-3 w-full focus:outline-none focus:border-primary"
                />
                <textarea
                  placeholder="Message"
                  rows={6}
                  className="bg-card border border-primary/20 rounded-lg p-3 w-full focus:outline-none focus:border-primary"
                />
                <Button size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-card mt-20 py-8">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>© 2024 Lukman. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}
