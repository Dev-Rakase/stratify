'use client';

import React, { useState } from 'react';
import { Calculator } from 'lucide-react';
import { FinancialData } from '@/types/calculator';

interface CalculatorFormProps {
  onCalculate: (data: FinancialData) => void;
  isLoading?: boolean;
}

export default function CalculatorForm({ onCalculate, isLoading = false }: CalculatorFormProps) {
  const [formData, setFormData] = useState<FinancialData>({
    monthlyRevenue: 0,
    monthlyExpenses: 0,
    cashReserves: 0,
  });

  const [errors, setErrors] = useState<Partial<Record<keyof FinancialData, string>>>({});

  const handleInputChange = (field: keyof FinancialData, value: string) => {
    const numValue = parseFloat(value) || 0;
    setFormData(prev => ({ ...prev, [field]: numValue }));
    
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof FinancialData, string>> = {};

    if (formData.monthlyRevenue < 0) {
      newErrors.monthlyRevenue = 'Revenue cannot be negative';
    }

    if (formData.monthlyExpenses <= 0) {
      newErrors.monthlyExpenses = 'Expenses must be greater than 0';
    }

    if (formData.cashReserves < 0) {
      newErrors.cashReserves = 'Cash reserves cannot be negative';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onCalculate(formData);
    }
  };

  const loadExampleData = () => {
    const exampleData: FinancialData = {
      monthlyRevenue: 50000,
      monthlyExpenses: 45000,
      cashReserves: 200000,
    };
    setFormData(exampleData);
    setErrors({});
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center space-x-3 mb-6">
        <Calculator className="w-6 h-6 text-blue-600" />
        <h2 className="text-2xl font-bold text-gray-900">Cash Runway Calculator</h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="monthlyRevenue" className="block text-sm font-medium text-gray-700 mb-2">
            Monthly Revenue ($)
          </label>
          <input
            type="number"
            id="monthlyRevenue"
            value={formData.monthlyRevenue || ''}
            onChange={(e) => handleInputChange('monthlyRevenue', e.target.value)}
            className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
              errors.monthlyRevenue ? 'border-red-300' : 'border-gray-300'
            }`}
            placeholder="e.g., 50000"
            min="0"
            step="1000"
          />
          {errors.monthlyRevenue && (
            <p className="mt-1 text-sm text-red-600">{errors.monthlyRevenue}</p>
          )}
          <p className="mt-1 text-xs text-gray-500">
            Total revenue your company generates per month
          </p>
        </div>

        <div>
          <label htmlFor="monthlyExpenses" className="block text-sm font-medium text-gray-700 mb-2">
            Monthly Expenses ($)
          </label>
          <input
            type="number"
            id="monthlyExpenses"
            value={formData.monthlyExpenses || ''}
            onChange={(e) => handleInputChange('monthlyExpenses', e.target.value)}
            className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
              errors.monthlyExpenses ? 'border-red-300' : 'border-gray-300'
            }`}
            placeholder="e.g., 45000"
            min="0"
            step="1000"
          />
          {errors.monthlyExpenses && (
            <p className="mt-1 text-sm text-red-600">{errors.monthlyExpenses}</p>
          )}
          <p className="mt-1 text-xs text-gray-500">
            Total operating expenses including salaries, rent, and other costs
          </p>
        </div>

        <div>
          <label htmlFor="cashReserves" className="block text-sm font-medium text-gray-700 mb-2">
            Current Cash Reserves ($)
          </label>
          <input
            type="number"
            id="cashReserves"
            value={formData.cashReserves || ''}
            onChange={(e) => handleInputChange('cashReserves', e.target.value)}
            className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
              errors.cashReserves ? 'border-red-300' : 'border-gray-300'
            }`}
            placeholder="e.g., 200000"
            min="0"
            step="10000"
          />
          {errors.cashReserves && (
            <p className="mt-1 text-sm text-red-600">{errors.cashReserves}</p>
          )}
          <p className="mt-1 text-xs text-gray-500">
            Available cash and liquid assets
          </p>
        </div>

        <div className="flex space-x-4">
          <button
            type="submit"
            disabled={isLoading}
            className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {isLoading ? 'Calculating...' : 'Calculate Runway'}
          </button>
          
          <button
            type="button"
            onClick={loadExampleData}
            className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
          >
            Try Example
          </button>
        </div>
      </form>
    </div>
  );
}
