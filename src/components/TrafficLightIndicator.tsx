'use client';

import React from 'react';
import { TrafficLightStatus } from '@/types/calculator';

interface TrafficLightIndicatorProps {
  status: TrafficLightStatus;
  runway: number;
}

export default function TrafficLightIndicator({ status, runway }: TrafficLightIndicatorProps) {
  const getStatusConfig = () => {
    switch (status) {
      case TrafficLightStatus.GREEN:
        return {
          color: 'bg-green-500',
          textColor: 'text-green-700',
          bgColor: 'bg-green-50',
          borderColor: 'border-green-200',
          label: 'Healthy',
          description: 'Strong financial position'
        };
      case TrafficLightStatus.AMBER:
        return {
          color: 'bg-amber-500',
          textColor: 'text-amber-700',
          bgColor: 'bg-amber-50',
          borderColor: 'border-amber-200',
          label: 'Caution',
          description: 'Monitor cash flow closely'
        };
      case TrafficLightStatus.RED:
        return {
          color: 'bg-red-500',
          textColor: 'text-red-700',
          bgColor: 'bg-red-50',
          borderColor: 'border-red-200',
          label: 'Critical',
          description: 'Immediate action required'
        };
    }
  };

  const config = getStatusConfig();

  return (
    <div className={`p-6 rounded-lg border-2 ${config.bgColor} ${config.borderColor}`}>
      <div className="flex items-center space-x-4">
        <div className={`w-12 h-12 rounded-full ${config.color} flex items-center justify-center`}>
          <div className="w-6 h-6 bg-white rounded-full"></div>
        </div>
        <div>
          <h3 className={`text-lg font-semibold ${config.textColor}`}>
            {config.label}
          </h3>
          <p className={`text-sm ${config.textColor}`}>
            {config.description}
          </p>
          <p className={`text-xs mt-1 ${config.textColor}`}>
            {runway === Infinity ? 'Infinite runway (Profitable)' : `${runway.toFixed(1)} months remaining`}
          </p>
        </div>
      </div>
    </div>
  );
}
