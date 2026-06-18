export const replacementSystems = ["HRMS", "Payroll", "ATS", "LMS", "CRM", "Helpdesk", "Collaboration", "AI", "Analytics"];

export const aiInsights = [
  { agent: "CEO AI", signal: "Revenue increased 18% while attrition risk rose in two delivery units.", action: "Review margin plan before adding headcount." },
  { agent: "HR AI", signal: "Retention risk is concentrated across 42 tenured employees.", action: "Launch manager check-ins for affected teams." },
  { agent: "Payroll AI", signal: "Overtime variance is 11% above the forecast for West operations.", action: "Approve exception review before payroll close." },
  { agent: "Recruitment AI", signal: "Engineering hiring demand increased for backend and platform roles.", action: "Open 3 backend positions and rebalance recruiter capacity." },
  { agent: "Workforce AI", signal: "Sales productivity dropped 6% after territory changes.", action: "Compare ramp time by region and manager." },
  { agent: "Analytics AI", signal: "Project margin improved after contractor utilization crossed 82%.", action: "Extend the capacity model to two more accounts." }
];

export const modules = ["People", "Payroll", "Attendance", "Recruiting", "Learning", "CRM", "Documents", "Helpdesk", "Expenses", "Assets", "Collaboration", "Analytics"];

export const dashboards = [
  { title: "CEO", metrics: ["Revenue", "Profit", "Growth", "Attrition"], values: ["$84.2M", "21.4%", "18%", "7.8%"] },
  { title: "CFO", metrics: ["Payroll", "Expenses", "Taxes", "Variance"], values: ["$12.8M", "$4.1M", "$920K", "2.3%"] },
  { title: "COO", metrics: ["Attendance", "Utilization", "Projects", "SLA"], values: ["96.4%", "82%", "148", "99.1%"] },
  { title: "CHRO", metrics: ["Hiring", "Retention", "Engagement", "Mobility"], values: ["64", "92%", "81", "14%"] }
];

export const industries = ["IT Services", "Healthcare", "Manufacturing", "Education", "Logistics", "Startups", "Enterprise Businesses"];
export const integrations = ["Google Workspace", "Microsoft 365", "WhatsApp", "Slack", "Teams", "Razorpay", "Calendars", "SSO"];

export const outcomes = [
  { company: "Multi-location services firm", result: "Payroll close moved from five days to one controlled operating review.", proof: "2,400 employees · 18 locations" },
  { company: "Healthcare network", result: "Leadership gained daily visibility into staffing, overtime, and hiring gaps.", proof: "7 hospitals · 11,800 monthly shifts" },
  { company: "Technology business", result: "Recruiting, onboarding, documents, and employee support moved into one system of record.", proof: "420 hires planned · 6 countries" }
];

export const pricing = [
  { name: "Growth", price: "$12", copy: "For companies consolidating people, attendance, documents, and support." },
  { name: "Business", price: "$24", copy: "For operating teams adding payroll, recruiting, analytics, and approvals." },
  { name: "Enterprise OS", price: "Custom", copy: "For multi-entity companies that need governance, AI controls, SSO, and custom rollout." }
];

export const faqs = [
  { question: "Is BAMS an HRMS or a company operating system?", answer: "BAMS is an Enterprise Workforce Operating System. HRMS, payroll, attendance, ATS, LMS, CRM, helpdesk, collaboration, analytics, and AI are modules inside one operating platform.", proof: "One employee graph, one permission model, one executive reporting layer." },
  { question: "Can BAMS replace our current payroll and attendance tools?", answer: "Yes. Companies can start with a focused rollout and expand module by module without creating another isolated tool.", proof: "Payroll, attendance, leave, expenses, and workforce analytics share the same workforce data." },
  { question: "How does BAMS support enterprise buyers?", answer: "BAMS is designed for role-based access, multi-location operations, approval governance, audit history, SSO, and executive reporting.", proof: "The platform model supports HR, finance, operations, and leadership from the same source of truth." },
  { question: "Does the AI respect data permissions?", answer: "Yes. AI answers and recommendations are scoped to the user, role, and data access rules configured in BAMS.", proof: "CEO AI, HR AI, Payroll AI, and Workforce AI operate on governed company context." }
];
