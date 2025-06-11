import Image from "next/image"
import Link from "next/link"
import HeroBanner from "./components/HeroBanner"
import ValuesShowcase from "./components/ValuesShowcase"
import AdvantagesShowcase from "./components/AdvantagesShowcase"

const team = [
  {
    name: "Dr. Jennifer Green",
    role: "Founder & CEO",
    image: "/placeholder.svg?height=300&width=300&text=JG",
    bio: "Former physician with 15+ years of experience in healthcare administration and medical billing.",
  },
  {
    name: "Michael Rodriguez",
    role: "Chief Operations Officer",
    image: "/placeholder.svg?height=300&width=300&text=MR",
    bio: "Healthcare operations expert with a background in process optimization and team management.",
  },
  {
    name: "Sarah Thompson",
    role: "Director of Billing Services",
    image: "/placeholder.svg?height=300&width=300&text=ST",
    bio: "Certified medical coder with extensive experience in revenue cycle management.",
  },
  {
    name: "David Chen",
    role: "Chief Technology Officer",
    image: "/placeholder.svg?height=300&width=300&text=DC",
    bio: "Technology leader specializing in healthcare software and secure payment systems.",
  },
]

const values = [
  {
    title: "Integrity",
    description: "We operate with complete transparency and honesty in all our dealings.",
    icon: "🛡️",
  },
  {
    title: "Excellence",
    description: "We strive for excellence in every aspect of our service delivery.",
    icon: "⭐",
  },
  {
    title: "Innovation",
    description: "We continuously seek innovative solutions to improve our services.",
    icon: "💡",
  },
  {
    title: "Partnership",
    description: "We view ourselves as partners in our clients' success, not just service providers.",
    icon: "🤝",
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero Banner - Using client component for advanced animations */}
      <HeroBanner />

      {/* Mission Section - Enhanced with better layout */}
      <section className="py-20 bg-neutral-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block px-4 py-1 bg-primary/10 text-primary font-medium rounded-full mb-4">Our Mission</div>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">Simplifying Healthcare Billing for a Better Future</h2>
              <p className="text-lg text-neutral-600 mb-6">
                At GreenSense Billing, our mission is to simplify the complex world of healthcare billing, allowing providers to focus on what matters most – patient care. We believe that efficient, transparent, and accurate billing processes are essential for the sustainability of healthcare practices and the overall healthcare system.
              </p>
              <p className="text-lg text-neutral-600">
                Through our innovative solutions and dedicated service, we aim to reduce administrative burden, increase revenue capture, and improve the financial health of healthcare providers across the country.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/5 rounded-3xl transform rotate-3"></div>
              <div className="absolute -inset-4 bg-primary/5 rounded-3xl transform -rotate-3"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/placeholder.svg?height=600&width=800&text=Mission+Image"
                  alt="Our mission"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section - Ultra-modern interactive showcase with 3D effects and animations */}
      <ValuesShowcase values={values} />
      
      {/* Why Choose Us - Extraordinary interactive experience with immersive mode */}
      <AdvantagesShowcase 
        advantages={[
          {
            title: "Healthcare Expertise",
            icon: "🏥",
            description:
              "Our team includes certified medical billers, former practice managers, and healthcare administrators who understand the unique challenges of medical billing.",
          },
          {
            title: "Proven Results",
            icon: "📈",
            description:
              "We have a track record of increasing collections by an average of 27% for our clients within the first six months of service.",
          },
          {
            title: "Transparent Reporting",
            icon: "📊",
            description:
              "Our detailed reporting gives you complete visibility into your practice's financial performance and our billing activities.",
          },
          {
            title: "Dedicated Support",
            icon: "👥",
            description:
              "Each client is assigned a dedicated account manager who serves as your single point of contact for all billing matters.",
          },
          {
            title: "Advanced Technology",
            icon: "💻",
            description:
              "We leverage cutting-edge billing software and secure payment systems to streamline processes and maximize efficiency.",
          },
          {
            title: "Compliance Focus",
            icon: "✅",
            description:
              "Our team stays up-to-date with changing healthcare regulations to ensure your billing practices remain compliant.",
          },
        ]}
      />

      {/* CTA Section - Enhanced with gradient and better button */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="mx-auto max-w-4xl rounded-2xl bg-gradient-to-r from-primary/90 to-primary-dark p-12 shadow-xl relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=1200&text=')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
            <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute -top-8 -right-8 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>
            <div className="text-center relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white">Ready to Transform Your Medical Billing?</h2>
              <p className="mt-4 text-xl text-white/90 max-w-2xl mx-auto">
                Join hundreds of healthcare providers who trust GreenSense Billing with their revenue cycle management.
              </p>
              <div className="mt-10">
                <Link 
                  href="/get-started" 
                  className="px-8 py-4 bg-white text-primary font-medium rounded-lg hover:bg-neutral-100 transition-colors inline-flex items-center gap-2 shadow-lg"
                >
                  Schedule a Consultation
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}