'use client';

import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import { Check } from 'lucide-react';

export default function Pricing() {
  const plans = [
    {
      name: 'Free',
      price: '$0',
      period: 'forever',
      description: 'Perfect for getting started with basic financial analysis',
      features: [
        'Basic Cash Runway Calculator',
        'Traffic Light Status Indicators',
        'Basic PDF Reports',
        'Up to 5 calculations per month',
        'Email support'
      ],
      limitations: [
        'Limited to basic financial fields',
        'No benchmark analysis',
        'Basic recommendations only'
      ],
      buttonText: 'Get Started Free',
      buttonStyle: 'border border-gray-300 text-gray-700 hover:bg-gray-50'
    },
    {
      name: 'Pro',
      price: '$49',
      period: 'per month',
      description: 'Advanced features for professional Financial Advisors',
      features: [
        'Everything in Free',
        'Advanced financial data fields',
        'Industry benchmark analysis',
        'Unlimited calculations',
        'Enhanced PDF reports with branding',
        'Strategic recommendations',
        'Priority email support',
        'Client dashboard access'
      ],
      limitations: [],
      buttonText: 'Start Pro Trial',
      buttonStyle: 'bg-blue-600 text-white hover:bg-blue-700',
      popular: true
    },
    {
      name: 'Premium',
      price: '$99',
      period: 'per month',
      description: 'Complete solution for financial advisory firms',
      features: [
        'Everything in Pro',
        'Multi-client management',
        'Advanced risk analysis modules',
        'Custom report templates',
        'API access for integrations',
        'Dedicated account manager',
        'Phone support',
        'Training and onboarding',
        'White-label options'
      ],
      limitations: [],
      buttonText: 'Contact Sales',
      buttonStyle: 'border border-gray-300 text-gray-700 hover:bg-gray-50'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Choose Your Plan
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Select the perfect plan for your financial advisory practice. 
            All plans include our core Cash Runway Calculator with different levels of features and support.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-lg shadow-lg overflow-hidden ${
                plan.popular ? 'ring-2 ring-blue-500 relative' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600 ml-2">/{plan.period}</span>
                </div>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                
                <button className={`w-full py-2 px-4 rounded-md font-medium transition-colors ${plan.buttonStyle}`}>
                  {plan.buttonText}
                </button>
              </div>
              
              <div className="px-6 pb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Features included:</h4>
                <ul className="space-y-2">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                {plan.limitations.length > 0 && (
                  <div className="mt-4">
                    <h5 className="font-medium text-gray-700 mb-2">Limitations:</h5>
                    <ul className="space-y-1">
                      {plan.limitations.map((limitation, limitIndex) => (
                        <li key={limitIndex} className="text-sm text-gray-500">
                          • {limitation}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Frequently Asked Questions
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Is there a free trial?</h3>
              <p className="text-gray-600 mb-4">
                Yes! Our Free plan is available forever with basic features. Pro and Premium plans 
                include a 14-day free trial with full access to all features.
              </p>
              
              <h3 className="font-semibold text-gray-900 mb-2">Can I change plans anytime?</h3>
              <p className="text-gray-600 mb-4">
                Absolutely. You can upgrade or downgrade your plan at any time. Changes take effect 
                immediately, and we&apos;ll prorate any billing adjustments.
              </p>
              
              <h3 className="font-semibold text-gray-900 mb-2">What payment methods do you accept?</h3>
              <p className="text-gray-600">
                We accept all major credit cards, PayPal, and bank transfers for annual plans. 
                All payments are processed securely through our payment partners.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Is my data secure?</h3>
              <p className="text-gray-600 mb-4">
                Yes, we take data security seriously. All data is encrypted in transit and at rest, 
                and we comply with industry-standard security practices and regulations.
              </p>
              
              <h3 className="font-semibold text-gray-900 mb-2">Do you offer custom solutions?</h3>
              <p className="text-gray-600 mb-4">
                Yes, our Premium plan includes custom solutions and white-label options. 
                Contact our sales team to discuss your specific requirements.
              </p>
              
              <h3 className="font-semibold text-gray-900 mb-2">What kind of support do you provide?</h3>
              <p className="text-gray-600">
                Support varies by plan: Free includes email support, Pro adds priority support, 
                and Premium includes dedicated account management and phone support.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <div className="bg-blue-600 rounded-lg p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">Ready to Transform Your Financial Advisory Practice?</h2>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Join hundreds of Financial Advisors who are already using Stratify to provide 
              better insights and reports to their SME clients.
            </p>
            <div className="space-x-4">
              <Link 
                href="/" 
                className="inline-block bg-white text-blue-600 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors"
              >
                Try Free Calculator
              </Link>
              <button className="inline-block border border-blue-300 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
