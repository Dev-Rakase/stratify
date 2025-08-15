import { FinancialData, CalculationResult, TrafficLightStatus } from '@/types/calculator';

export function calculateCashRunway(data: FinancialData): CalculationResult {
  const burnRate = data.monthlyExpenses - data.monthlyRevenue;
  
  let runway: number;
  if (burnRate <= 0) {
    runway = Infinity;
  } else {
    runway = data.cashReserves / burnRate;
  }

  const status = getTrafficLightStatus(runway);
  const recommendations = generateRecommendations(runway, burnRate, data);

  return {
    runway,
    status,
    recommendations,
    burnRate
  };
}

export function getTrafficLightStatus(runway: number): TrafficLightStatus {
  if (runway === Infinity || runway > 12) {
    return TrafficLightStatus.GREEN;
  } else if (runway >= 6) {
    return TrafficLightStatus.AMBER;
  } else {
    return TrafficLightStatus.RED;
  }
}

export function generateRecommendations(runway: number, burnRate: number, data: FinancialData): string[] {
  const recommendations: string[] = [];

  if (runway === Infinity) {
    recommendations.push("Excellent! Your company is profitable or break-even.");
    recommendations.push("Consider investing excess cash in growth opportunities.");
    recommendations.push("Build additional cash reserves for future expansion.");
  } else if (runway > 12) {
    recommendations.push("Strong financial position with over 12 months of runway.");
    recommendations.push("Consider strategic investments to accelerate growth.");
    recommendations.push("Monitor cash flow trends regularly.");
  } else if (runway >= 6) {
    recommendations.push("Moderate runway - focus on improving cash flow.");
    recommendations.push("Explore revenue optimization opportunities.");
    recommendations.push("Review and optimize operational expenses.");
    recommendations.push("Consider securing additional funding if growth plans require it.");
  } else {
    recommendations.push("Critical: Less than 6 months runway remaining.");
    recommendations.push("Immediate action required to reduce expenses or increase revenue.");
    recommendations.push("Prioritize cash flow positive activities.");
    recommendations.push("Consider emergency funding options.");
    recommendations.push("Review all non-essential expenses for immediate cuts.");
  }

  if (burnRate > data.monthlyRevenue * 0.5) {
    recommendations.push("High burn rate detected - review expense structure.");
  }

  return recommendations;
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatRunway(runway: number): string {
  if (runway === Infinity) {
    return "Infinite (Profitable)";
  }
  return `${runway.toFixed(1)} months`;
}
