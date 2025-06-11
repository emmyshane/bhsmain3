import Link from "next/link"
import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-b from-primary/5 to-primary/10 overflow-hidden">
      <div className="container relative z-10 py-16 md:py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          <div>
            <h1 className="heading-1">
              Streamline Your <span className="text-primary">Medical Billing</span> <br />
              <span className="text-primary">Process</span> With Expertise
            </h1>
            <p className="mt-6 text-lg body-text max-w-2xl">
              Maximize your practice's revenue with our comprehensive medical billing services. We handle the paperwork
              so you can focus on patient care.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link href="/get-started" className="btn btn-primary">
                Schedule a Consultation
              </Link>
              <Link href="/services" className="btn btn-secondary">
                Explore Our Services
              </Link>
            </div>
            <div className="mt-8 flex items-center">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <Image
                    key={i}
                    src={`/placeholder.svg?height=40&width=40&text=${i}`}
                    alt={`Customer ${i}`}
                    width={40}
                    height={40}
                    className="h-10 w-10 rounded-full border-2 border-white"
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/placeholder.svg?height=500&width=600&text=Medical+Billing+Image"
              alt="Medical Billing"
              width={600}
              height={500}
              className="rounded-lg shadow-xl"
              priority
            />
            <div className="absolute -bottom-6 -left-6 rounded-lg bg-white p-4 shadow-card md:p-6">
              <div className="flex items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="text-sm body-text">Average Revenue Increase</p>
                  <p className="text-2xl font-serif font-bold text-primary">+27%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 z-0 opacity-[0.07]">
        <svg className="h-full w-full" viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
    </section>
  )
}
