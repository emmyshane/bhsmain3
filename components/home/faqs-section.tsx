"use client"

import { useState } from "react"
import { ChevronRight } from "lucide-react"

interface FAQ {
  question: string
  answer: string
}

const faqs: FAQ[] = [
  {
    question: "Is outsourcing Revenue Cycle Management better than managing it in-house?",
    answer: "Outsourcing Revenue Cycle Management (RCM) allows healthcare providers to focus on patient care while professionals handle complex billing tasks. It often results in faster reimbursements, fewer claim denials, and lower administrative costs compared to managing it internally, especially for small to mid-sized practices."
  },
  {
    question: "How can GreenSense Billing help?",
    answer: "GreenSense Billing offers end-to-end RCM services, including insurance verification, claims submission, denial management, and payment posting. Our goal is to increase your revenue while reducing overhead by optimizing every step of your billing process."
  },
  {
    question: "Is GreenSense Billing HIPAA Compliant?",
    answer: "Yes. GreenSense Billing is fully HIPAA compliant. We implement strict data protection policies, secure communication protocols, and regular staff training to ensure that all patient health information (PHI) is handled with the highest level of security and confidentiality."
  },
  {
    question: "How does GreenSense Billing determine its prices?",
    answer: "Our pricing is flexible and depends on factors like practice size, specialty, claim volume, and required services. We offer transparent, customized pricing models—usually as a percentage of monthly collections or a flat-rate—ensuring affordability and value."
  },
  {
    question: "What is the initial investment for a healthcare provider?",
    answer: "There is minimal upfront investment. Most of our plans are performance-based, meaning we get paid as you get paid. We also offer a free consultation and setup assistance to ensure a smooth and risk-free transition to our services."
  }
]

function FAQItem({ question, answer, isOpen, onToggle }: { 
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <div className="border-b border-gray-200 last:border-none">
      <button
        onClick={onToggle}
        className="w-full flex items-start justify-between gap-4 py-6 text-left"
      >
        <span className="font-medium text-[#002E3D]">{question}</span>
        <ChevronRight 
          className={`flex-shrink-0 w-5 h-5 mt-1 text-primary transition-transform duration-200
                     ${isOpen ? 'rotate-90' : ''}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-200 ease-in-out
                   ${isOpen ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <p className="text-[#002E3D] leading-relaxed pr-8">
          {answer}
        </p>
      </div>
    </div>
  )
}

export default function FAQsSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container max-w-3xl mx-auto">
        <h2 className="heading-2 text-center mb-12">FAQs</h2>
        <div className="divide-y divide-gray-200">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => toggleFAQ(index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}