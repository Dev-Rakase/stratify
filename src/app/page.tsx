'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import CalculatorForm from '@/components/CalculatorForm';
import ResultsDisplay from '@/components/ResultsDisplay';
import { generatePDFBlob } from '@/components/PDFReport';
import { FinancialData, CalculationResult, ReportData } from '@/types/calculator';
import { calculateCashRunway } from '@/utils/calculations';

export default function Home() {
  const [calculationResult, setCalculationResult] = useState<CalculationResult | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);
  const [financialData, setFinancialData] = useState<FinancialData | null>(null);

  const handleCalculate = async (data: FinancialData) => {
    setIsCalculating(true);
    setFinancialData(data);
    
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const result = calculateCashRunway(data);
    setCalculationResult(result);
    setIsCalculating(false);
  };

  const handleDownloadPDF = async () => {
    if (!calculationResult || !financialData) return;

    setIsGeneratingPDF(true);
    
    try {
      const reportData: ReportData = {
        companyName: 'Sample Company', // Mock company name
        financialData,
        calculationResult,
        generatedDate: new Date(),
      };

      const blob = await generatePDFBlob(reportData);
      
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `cash-runway-report-${new Date().toISOString().split('T')[0]}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Error generating PDF. Please try again.');
    } finally {
      setIsGeneratingPDF(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Financial Health Diagnostic Tool
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Assess your SME&apos;s financial health with our Cash Runway Calculator. 
            Get instant insights into your company&apos;s financial runway and receive
            professional recommendations to improve your cash flow position.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Calculator Form */}
          <div>
            <CalculatorForm 
              onCalculate={handleCalculate} 
              isLoading={isCalculating}
            />
          </div>

          {/* Results Display */}
          <div>
            {calculationResult ? (
              <ResultsDisplay 
                result={calculationResult}
                onDownloadPDF={handleDownloadPDF}
                isGeneratingPDF={isGeneratingPDF}
              />
            ) : (
              <div className="bg-white rounded-lg shadow-lg p-6 h-full flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    Ready to Calculate
                  </h3>
                  <p className="text-sm">
                    Enter your financial data to get started with your cash runway analysis.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-4 bg-blue-100 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Instant Analysis</h3>
            <p className="text-gray-600">Get immediate insights into your cash runway with our traffic light system.</p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-4 bg-green-100 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Professional Reports</h3>
            <p className="text-gray-600">Generate branded PDF reports to share with stakeholders and investors.</p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-4 bg-purple-100 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Strategic Insights</h3>
            <p className="text-gray-600">Receive tailored recommendations to improve your financial position.</p>
          </div>
        </div>
      </main>
    </div>
  );
}
