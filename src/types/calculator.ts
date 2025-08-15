export interface FinancialData {
  monthlyRevenue: number;
  monthlyExpenses: number;
  cashReserves: number;
  arAging?: {
    days30: number;
    days60: number;
    days90Plus: number;
  };
}

export interface CalculationResult {
  runway: number;
  status: TrafficLightStatus;
  recommendations: string[];
  burnRate: number;
}

export enum TrafficLightStatus {
  GREEN = 'GREEN',
  AMBER = 'AMBER',
  RED = 'RED'
}

export interface ReportData {
  companyName: string;
  financialData: FinancialData;
  calculationResult: CalculationResult;
  generatedDate: Date;
}
