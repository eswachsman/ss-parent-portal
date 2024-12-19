import { useState } from 'react'

const steps = [
  { id: 1, name: 'Family' },
  { id: 2, name: 'Parents' },
  { id: 3, name: 'Students' },
  { id: 4, name: 'Emergency Contacts' },
  { id: 5, name: 'Review' }
]

export default function WizardLayout({ currentStep, children }) {
  return (
    <div className="max-w-3xl mx-auto">
      {/* Progress Steps */}
      <nav aria-label="Progress" className="mb-8">
        <ol className="flex items-center justify-between">
          {steps.map((step) => (
            <li key={step.id} className="flex items-center">
              <div className={`
                flex items-center justify-center w-8 h-8 rounded-full
                ${currentStep === step.id
                  ? 'bg-blue-600 text-white'
                  : currentStep > step.id
                    ? 'bg-blue-100 text-blue-600'
                    : 'bg-gray-100 text-gray-500'}
              `}>
                {step.id}
              </div>
              <span className={`ml-2 text-sm font-medium
                ${currentStep === step.id
                  ? 'text-blue-600'
                  : 'text-gray-500'}
              `}>
                {step.name}
              </span>
            </li>
          ))}
        </ol>
      </nav>

      {/* Content */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        {children}
      </div>
    </div>
  )
}
