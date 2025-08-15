### Stratify: Technical Blueprint – Phase 1 (MVP Diagnostic Tool)
1. User Access & Roles
- FA (Financial Advisor): Input SME data, view analysis/report. - Admin: Manage users,
subscriptions, and benchmark data. - SME (Optional, future): May access read-only view of their
data.
2. Data Input Module
Tier 1 (Basic): Revenue, Expenses, Salaries Paid, Rental, Loans, AR Aging (30/60/90+ days). Tier
2+: Top 3 Customer Sales %, Product/Channel Diversity, Founder Salary, Industry Input.
3. Risk Engine & Analysis Logic
Generates risk flags based on: - Cash Runway - Liquidity - Founder Risk - Sales Channel
Concentration - Employee Retention Proxy Benchmarks pulled from IRAS, ACRA, and public
datasets.
4. Report Generator
Auto-generated summary includes: - Key Risk Indicators - Visual Scores (RAG) - Strategic
Recommendations (based on tier) - Branded as “Powered by Stratify”
5. Subscription & Tiering Logic
- Free: Basic fields + basic risk report - Pro: Advanced fields + benchmark analysis - Premium: All
features + detailed insights and recommendations
6. Database Structure
- Users: ID, Role, Email, Subscription Tier - SMEs: Company Info, Sector - FinancialData:
Revenue, Expenses, Salaries, etc. - Reports: Risk scores, generated files
7. Security & Privacy
- Encrypted data storage and transmission - Role-based access control - MAS/ISO-ready design for
compliance
8. Future-Ready Hooks
- Lending engine/API integration - SME dashboards (login-based) - Financial product offer
compatibility


### First Module to build:
###### Cash Runway Calculator
Inputs Required:
- Monthly revenue
- Monthly expenses
- Current cash reserves
- Accounts receivable aging (optional for v1)

###### Outputs:
- Cash runway in months
- Visual traffic light status (Green >12 months, Amber 6–12, Red <6)
- PDF report for FA to send to client

###### Why This First:
- Easiest to build, instantly valuable to FAs.
- Low compliance risk.
- Foundation for future modules.