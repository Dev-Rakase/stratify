'use client';

import React from 'react';
import { Download, TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { CalculationResult } from '@/types/calculator';
import { formatCurrency, formatRunway } from '@/utils/calculations';
import TrafficLightIndicator from './TrafficLightIndicator';

interface ResultsDisplayProps {
  result: CalculationResult;
  onDownloadPDF: () => void;
  isGeneratingPDF?: boolean;
}

export default function ResultsDisplay({ result, onDownloadPDF, isGeneratingPDF = false }: ResultsDisplayProps) {
  const getBurnRateIcon = () => {
    if (result.burnRate > 0) {
      return <TrendingDown className="w-5 h-5 text-red-500" />;
    } else if (result.burnRate < 0) {
      return <TrendingUp className="w-5 h-5 text-green-500" />;
    } else {
      return <Minus className="w-5 h-5 text-gray-500" />;
    }
  };

  const getBurnRateText = () => {
    if (result.burnRate > 0) {
      return `Burning ${formatCurrency(result.burnRate)} per month`;
    } else if (result.burnRate < 0) {
      return `Generating ${formatCurrency(Math.abs(result.burnRate))} per month`;
    } else {
      return 'Breaking even';
    }
  };

  return (
    <div className="space-y-6">
      {/* Main Results */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Cash Runway Analysis</h3>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <TrafficLightIndicator status={result.status} runway={result.runway} />
          </div>
          
          <div className="space-y-4">
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-2">
                <span className="text-sm font-medium text-gray-600">Cash Runway</span>
              </div>
              <p className="text-2xl font-bold text-gray-900">
                {formatRunway(result.runway)}
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-2">
                {getBurnRateIcon()}
                <span className="text-sm font-medium text-gray-600">Monthly Burn Rate</span>
              </div>
              <p className="text-lg font-semibold text-gray-900">
                {getBurnRateText()}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Recommendations */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h4 className="text-lg font-bold text-gray-900 mb-4">Strategic Recommendations</h4>
        <ul className="space-y-3">
          {result.recommendations.map((recommendation, index) => (
            <li key={index} className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-700">{recommendation}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* PDF Download */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-lg font-bold text-gray-900">Professional Report</h4>
            <p className="text-gray-600">Download a comprehensive PDF report for your records or to share with stakeholders.</p>
          </div>
          <button
            onClick={onDownloadPDF}
            disabled={isGeneratingPDF}
            className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <Download className="w-4 h-4" />
            <span>{isGeneratingPDF ? 'Generating...' : 'Download PDF'}</span>
          </button>
        </div>
        <p className="text-xs text-gray-500 mt-2">
          Powered by Stratify - Financial Health Diagnostic Tool
        </p>
      </div>
    </div>
  );
}
