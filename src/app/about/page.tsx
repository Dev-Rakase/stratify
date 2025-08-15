'use client';

import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">About Stratify</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              Stratify is a comprehensive financial health diagnostic tool designed specifically for 
              Small and Medium Enterprises (SMEs). Our platform helps Financial Advisors assess 
              the financial health of their SME clients through automated risk analysis and 
              professional reporting.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-600 mb-6">
              We believe that every SME deserves access to professional-grade financial analysis. 
              Our mission is to democratize financial health assessment by providing Financial 
              Advisors with the tools they need to deliver immediate, actionable insights to their clients.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Key Features</h2>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li><strong>Cash Runway Calculator:</strong> Instantly calculate how long your business can operate with current cash reserves</li>
              <li><strong>Traffic Light System:</strong> Visual indicators showing financial health status at a glance</li>
              <li><strong>Professional Reports:</strong> Generate branded PDF reports for stakeholders and investors</li>
              <li><strong>Strategic Recommendations:</strong> Receive tailored advice based on your financial position</li>
              <li><strong>Risk Analysis:</strong> Comprehensive assessment of liquidity, founder risk, and operational factors</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">How It Works</h2>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-3 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold">1</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Input Data</h3>
                <p className="text-sm text-gray-600">Enter basic financial information including revenue, expenses, and cash reserves</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-3 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-bold">2</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Analyze</h3>
                <p className="text-sm text-gray-600">Our algorithms process your data and generate comprehensive risk assessments</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-3 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-purple-600 font-bold">3</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Report</h3>
                <p className="text-sm text-gray-600">Receive instant insights and download professional reports</p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Traffic Light System</h2>
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-6 h-6 bg-green-500 rounded-full"></div>
                  <div>
                    <span className="font-semibold text-green-700">Green (Healthy):</span>
                    <span className="text-gray-600 ml-2">More than 12 months of cash runway</span>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-6 h-6 bg-amber-500 rounded-full"></div>
                  <div>
                    <span className="font-semibold text-amber-700">Amber (Caution):</span>
                    <span className="text-gray-600 ml-2">6-12 months of cash runway</span>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-6 h-6 bg-red-500 rounded-full"></div>
                  <div>
                    <span className="font-semibold text-red-700">Red (Critical):</span>
                    <span className="text-gray-600 ml-2">Less than 6 months of cash runway</span>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">For Financial Advisors</h2>
            <p className="text-gray-600 mb-4">
              Stratify empowers Financial Advisors to provide immediate value to their SME clients. 
              With our platform, you can:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-1">
              <li>Quickly assess client financial health during meetings</li>
              <li>Generate professional reports for client presentations</li>
              <li>Provide data-driven recommendations</li>
              <li>Track client progress over time</li>
              <li>Identify potential risks before they become critical</li>
            </ul>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-8">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">Ready to Get Started?</h3>
              <p className="text-blue-700 mb-4">
                Try our Cash Runway Calculator today and see how Stratify can help you provide 
                better financial insights to your SME clients.
              </p>
              <Link 
                href="/" 
                className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
              >
                Start Calculator
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
