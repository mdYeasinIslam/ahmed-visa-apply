import { MapPin, FileText, CreditCard } from "lucide-react"

export default function WorkSection() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-blue-600 mb-16">How It Works</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="bg-white rounded-2xl py-5 px-1 xl:p-8 shadow-sm border border-gray-100 text-center">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <MapPin className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Choose Your Destination</h3>
            <p className="text-gray-600 leading-relaxed">Select the country you wish to apply to.</p>
          </div>

          {/* Step 2 */}
          <div className="bg-white rounded-2xl py-5 px-1 xl:p-8 shadow-sm border border-gray-100 text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <FileText className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Fill Out Application</h3>
            <p className="text-gray-600 leading-relaxed">
              Enter your personal information and upload required documents.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-white rounded-2xl py-5 px-1 xl:p-8 shadow-sm border border-gray-100 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CreditCard className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Confirm & Pay</h3>
            <p className="text-gray-600 leading-relaxed">
              Submit the form and follow offline payment instructions via bank or Cashplus.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
