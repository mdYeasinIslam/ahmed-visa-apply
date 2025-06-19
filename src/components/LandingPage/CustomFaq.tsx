"use client"

import { useState } from "react"
import { Plus, X } from "lucide-react"

const faqData = [
  {
    id: 1,
    question: "Lorem ipsum dolor sit amet consectetur",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Mollis at in suscipit est morbi. Eget cras vitae imperdiet a felis et massa lorem. Enim nec tincidunt vehicula elit in leo vestibulum egestas blandit. Sapien sed ullamcorper est sit morbi nam.",
  },
  {
    id: 2,
    question: "Lorem ipsum dolor sit amet consectetur",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Mollis at in suscipit est morbi. Eget cras vitae imperdiet a felis et massa lorem. Enim nec tincidunt vehicula elit in leo vestibulum egestas blandit.",
  },
  {
    id: 3,
    question: "Lorem ipsum dolor sit amet consectetur",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Mollis at in suscipit est morbi. Eget cras vitae imperdiet a felis et massa lorem.",
  },
  {
    id: 4,
    question: "Lorem ipsum dolor sit amet consectetur",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Mollis at in suscipit est morbi. Eget cras vitae imperdiet a felis et massa lorem. Enim nec tincidunt vehicula elit in leo vestibulum egestas blandit. Sapien sed ullamcorper est sit morbi nam.",
  },
  {
    id: 5,
    question: "Lorem ipsum dolor sit amet consectetur",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Mollis at in suscipit est morbi. Eget cras vitae imperdiet a felis et massa lorem.",
  },
]

export default function CustomFaq() {
  const [openItem, setOpenItem] = useState<number | null>(null) // First item open by default

  const toggleItem = (id: number) => {
    setOpenItem(openItem === id ? null : id)
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-blue-600 mb-12">Frequently Asked Questions</h2>

        <div className="space-y-4">
          {faqData.map((faq) => (
            <div
              key={faq.id}
              className={`bg-gray-100 rounded-lg transition-all duration-200 ${
                openItem === faq.id ? "border-2 border-blue-200" : "border border-gray-200"
              }`}
            >
              <button
                onClick={() => toggleItem(faq.id)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 rounded-lg transition-colors duration-200"
              >
                <span className="font-semibold text-xl text-gray-800 pr-4">{faq.question}</span>
                <div className="flex-shrink-0">
                  {openItem === faq.id ? (
                    <X className="h-5 w-5 text-blue-600" />
                  ) : (
                    <Plus className="h-5 w-5 text-blue-600" />
                  )}
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openItem === faq.id ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-4">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 ">
          <p className="text-gray-600">
            Have more questions?{" "}
            <a href="#" className="text-blue-600 underline hover:text-blue-800 transition-colors">
              visit our Help Center
            </a>{" "}
            to find answers to all your questions.
          </p>
        </div>
      </div>
    </section>
  )
}
