import Link from "next/link"
import Image from "next/image"
import { BarChart3 } from "lucide-react"

const services = [
  {
    title: "Revenue Cycle Management",
    description: "End-to-end revenue cycle management to optimize your financial performance and cash flow.",
    icon: BarChart3,
    href: "/services/revenue-cycle-management",
    image: "/placeholder.svg?height=300&width=400&text=Revenue+Cycle+Management",
  }
]

export default function ServicesPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="bg-primary py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="heading-1 text-white">Our Services</h1>
            <p className="mt-6 text-xl text-white/80">
              Comprehensive medical billing and revenue cycle management solutions tailored to your practice's needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 gap-12 md:gap-16">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`grid grid-cols-1 gap-8 lg:grid-cols-2 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    width={400}
                    height={300}
                    className="rounded-lg shadow-lg"
                  />
                </div>
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <h2 className="mt-4 heading-3 text-neutral-900">{service.title}</h2>
                  <p className="mt-4 text-lg text-neutral-600">{service.description}</p>
                  <div className="mt-6">
                    <Link href={service.href} className="btn btn-primary">
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-neutral-50">
        <div className="container">
          <div className="mx-auto max-w-3xl rounded-2xl bg-white p-8 shadow-lg md:p-12">
            <div className="text-center">
              <h2 className="heading-3 text-neutral-900">Not Sure Which Service You Need?</h2>
              <p className="mt-4 text-lg text-neutral-600">
                Our team of experts can help you determine the best solution for your practice's unique needs.
              </p>
              <div className="mt-8">
                <Link href="/get-started" className="btn btn-primary">
                  Schedule a Free Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
