'use client';

import React from 'react';
import { Document, Page, Text, View, StyleSheet, pdf } from '@react-pdf/renderer';
import { ReportData } from '@/types/calculator';
import { formatCurrency, formatRunway } from '@/utils/calculations';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    padding: 30,
    fontFamily: 'Helvetica',
  },
  header: {
    marginBottom: 20,
    borderBottom: 2,
    borderBottomColor: '#2563eb',
    paddingBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 12,
    color: '#6b7280',
    marginBottom: 5,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 10,
    borderBottom: 1,
    borderBottomColor: '#e5e7eb',
    paddingBottom: 5,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  label: {
    fontSize: 12,
    color: '#374151',
    fontWeight: 'bold',
  },
  value: {
    fontSize: 12,
    color: '#1f2937',
  },
  statusContainer: {
    backgroundColor: '#f3f4f6',
    padding: 15,
    borderRadius: 5,
    marginBottom: 15,
  },
  statusText: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  statusGreen: {
    color: '#059669',
  },
  statusAmber: {
    color: '#d97706',
  },
  statusRed: {
    color: '#dc2626',
  },
  recommendationItem: {
    fontSize: 11,
    color: '#374151',
    marginBottom: 6,
    paddingLeft: 10,
  },
  footer: {
    position: 'absolute',
    bottom: 30,
    left: 30,
    right: 30,
    textAlign: 'center',
    fontSize: 10,
    color: '#6b7280',
    borderTop: 1,
    borderTopColor: '#e5e7eb',
    paddingTop: 10,
  },
});

interface PDFReportProps {
  reportData: ReportData;
}

export function PDFReport({ reportData }: PDFReportProps) {
  const { financialData, calculationResult, companyName, generatedDate } = reportData;

  const getStatusStyle = () => {
    switch (calculationResult.status) {
      case 'GREEN':
        return styles.statusGreen;
      case 'AMBER':
        return styles.statusAmber;
      case 'RED':
        return styles.statusRed;
      default:
        return styles.statusGreen;
    }
  };

  const getStatusText = () => {
    switch (calculationResult.status) {
      case 'GREEN':
        return 'HEALTHY - Strong Financial Position';
      case 'AMBER':
        return 'CAUTION - Monitor Cash Flow Closely';
      case 'RED':
        return 'CRITICAL - Immediate Action Required';
      default:
        return 'HEALTHY';
    }
  };

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Cash Runway Analysis Report</Text>
          <Text style={styles.subtitle}>Company: {companyName}</Text>
          <Text style={styles.subtitle}>
            Generated: {generatedDate.toLocaleDateString()} at {generatedDate.toLocaleTimeString()}
          </Text>
        </View>

        {/* Financial Data Summary */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Financial Data Summary</Text>
          <View style={styles.row}>
            <Text style={styles.label}>Monthly Revenue:</Text>
            <Text style={styles.value}>{formatCurrency(financialData.monthlyRevenue)}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Monthly Expenses:</Text>
            <Text style={styles.value}>{formatCurrency(financialData.monthlyExpenses)}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Current Cash Reserves:</Text>
            <Text style={styles.value}>{formatCurrency(financialData.cashReserves)}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Monthly Burn Rate:</Text>
            <Text style={styles.value}>
              {calculationResult.burnRate > 0 
                ? `-${formatCurrency(calculationResult.burnRate)}` 
                : calculationResult.burnRate < 0 
                ? `+${formatCurrency(Math.abs(calculationResult.burnRate))}` 
                : formatCurrency(0)
              }
            </Text>
          </View>
        </View>

        {/* Cash Runway Results */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Cash Runway Analysis</Text>
          <View style={styles.statusContainer}>
            <Text style={[styles.statusText, getStatusStyle()]}>
              {getStatusText()}
            </Text>
            <Text style={[styles.statusText, { marginTop: 5, fontSize: 18 }]}>
              {formatRunway(calculationResult.runway)}
            </Text>
          </View>
        </View>

        {/* Strategic Recommendations */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Strategic Recommendations</Text>
          {calculationResult.recommendations.map((recommendation, index) => (
            <Text key={index} style={styles.recommendationItem}>
              • {recommendation}
            </Text>
          ))}
        </View>

        {/* Footer */}
        <Text style={styles.footer}>
          Powered by Stratify - Financial Health Diagnostic Tool
          {'\n'}
          This report is generated for informational purposes only and should not be considered as financial advice.
        </Text>
      </Page>
    </Document>
  );
}

export async function generatePDFBlob(reportData: ReportData): Promise<Blob> {
  const doc = <PDFReport reportData={reportData} />;
  const asPdf = pdf(doc);
  const blob = await asPdf.toBlob();
  return blob;
}
