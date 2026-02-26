'use client'

import { useState } from 'react'

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    contactReason: [] as string[],
    message: '',
    file: null as File | null
  })

  const contactReasons = [
    'New Resident Help',
    'HOA Board',
    'Architectural Change Requests',
    'Accounting & Dues',
    'Website Related Help',
    'None of the Above',
    'Other'
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic would go here
    console.log('Form submitted:', formData)
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact</h1>
        
        <h3 className="text-2xl font-semibold text-gray-800 mb-8">
          Questions? Comments? Need assistance?
        </h3>
        
        <p className="text-lg text-gray-700 mb-12">
          We&apos;re here to help - whether you&apos;re considering moving here or have lived here for years. 
          Let us know what you need, and we&apos;ll make sure that your question reaches the right person to receive a prompt response.
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <h4 className="text-xl font-semibold text-gray-900 mb-4">
              Personal Information (Not Needed If Signed In)
            </h4>
            
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="First Name, Last Name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Name@Domain.com"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="123-456-7980"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>
              
              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Address
                </label>
                <input
                  type="text"
                  id="address"
                  placeholder="Street Address"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={formData.address}
                  onChange={(e) => setFormData({...formData, address: e.target.value})}
                />
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold text-gray-900 mb-4">
              Reason For Outreach
            </h4>
            
            <div className="space-y-3">
              <p className="text-sm font-medium text-gray-700 mb-3">Who would you like to contact?</p>
              
              {contactReasons.map((reason) => (
                <div key={reason} className="flex items-center">
                  <input
                    type="checkbox"
                    id={reason}
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    checked={formData.contactReason.includes(reason)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setFormData({
                          ...formData,
                          contactReason: [...formData.contactReason, reason]
                        })
                      } else {
                        setFormData({
                          ...formData,
                          contactReason: formData.contactReason.filter(r => r !== reason)
                        })
                      }
                    }}
                  />
                  <label htmlFor={reason} className="ml-2 text-sm text-gray-700">
                    {reason}
                  </label>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
              Message:
            </label>
            <textarea
              id="message"
              rows={6}
              placeholder="Please let us know how we can assist!"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Provide any supporting documentation here.
            </label>
            <input
              type="file"
              className="w-full"
              onChange={(e) => setFormData({...formData, file: e.target.files?.[0] || null})}
            />
          </div>
          
          <div className="flex gap-4">
            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={() => setFormData({
                name: '',
                email: '',
                phone: '',
                address: '',
                contactReason: [],
                message: '',
                file: null
              })}
              className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition font-semibold"
            >
              Clear
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}