export const mockIncidents = [
  {
    id: 1,
    title: "Biased Recommendation Algorithm",
    description:
      "Job recommendation engine exhibited systematic bias with 23% higher recommendation rates for certain demographics, traced to 78% skewed training data. Impact affected 15,000 job seekers over 3 months with 8% reduction in match efficiency. Immediate action included switching to backup system and initiating comprehensive audit. Long-term solution involves retraining with balanced dataset, implementing fairness constraints, and establishing regular diversity audits with third-party assessments.",
    severity: "Medium",
    reported_at: "2025-03-15T10:00:00Z",
  },
  {
    id: 2,
    title: "LLM Hallucination in Critical Info",
    description:
      "Large Language Model provided fabricated medical procedure information with unusually high confidence score (0.92), posing potential patient safety risks. Similar patterns detected in 3% of medical queries. Emergency rollback implemented, followed by manual review of 24-hour medical advice and healthcare facility notifications. Root cause identified as insufficient medical expertise in training data, leading to implementation of triple-verification system and specialized medical knowledge validation.",
    severity: "High",
    reported_at: "2025-03-20T14:30:00Z",
  },
  {
    id: 3,
    title: "AI Model Performance Degradation",
    description:
      "Two-week progressive decline in model performance: accuracy dropped from 94.8% to 87.3%, F1 score decreased from 0.92 to 0.84, affecting 12% of user recommendations. Root causes include production data drift and seasonal variations in user behavior, resulting in 15% decrease in processing efficiency and 4.2% drop in customer satisfaction. Immediate actions included enhanced monitoring, threshold adjustments, and initiation of model retraining pipeline.",
    severity: "Low",
    reported_at: "2025-03-25T09:15:00Z",
  },
  {
    id: 4,
    title: "Minor Data Leak via Chatbot",
    description:
      "47-minute data exposure incident affecting 89 users where chatbot exposed non-sensitive session metadata and general preferences due to incorrect handling of nested JSON objects and accidentally enabled debug mode. No PII or sensitive information was compromised. Quick response included disabling affected fields, implementing emergency patch, and conducting security audit. Enhanced data masking algorithms and real-time monitoring implemented to prevent future occurrences.",
    severity: "Low",
    reported_at: "2025-03-20T09:15:00Z",
  },
  {
    id: 5,
    title: "Autonomous System Override Failure",
    description:
      "Emergency override controls experienced 3.5-minute unresponsiveness during testing due to race condition and network latency spikes. Backup systems activated within 2.8 seconds, with tertiary systems executing all safety protocols as designed. No production systems were impacted. Response included emergency shutdown, system isolation, and comprehensive audit. Long-term improvements focus on enhanced override mechanisms, redundant control paths, and predictive failure detection.",
    severity: "High",
    reported_at: "2025-03-25T16:45:00Z",
  },
  {
    id: 6,
    title: "Facial Recognition False Positives",
    description:
      "Security system's facial recognition experienced increased false positive rates from 0.1% to 2.8% in low-light conditions, affecting 23 checkpoints and resulting in 142 false identifications with 12-minute average delays. Issues traced to IR sensor calibration drift and hardware aging. Immediate measures included disabling night-time recognition and implementing manual verification. Long-term solutions involve hardware upgrades, algorithm retraining with low-light data, and automated calibration systems.",
    severity: "High",
    reported_at: "2025-04-02T08:00:00Z",
  },
  {
    id: 7,
    title: "AI Language Model Bias Detection",
    description:
      "Detected 27% gender-role correlation bias in professional role language generation, stemming from 68% male-dominated training datasets and historical bias in job descriptions. Impact includes skewed career recommendations and potential discrimination concerns. Immediate response involved forming dedicated task force, implementing bias detection tools, and enhancing monitoring. Long-term strategy focuses on data rebalancing, automated bias detection, and regular fairness assessments with stakeholder feedback.",
    severity: "Medium",
    reported_at: "2025-03-28T13:45:00Z",
  },
  {
    id: 8,
    title: "Automated Decision System Timeout",
    description:
      "Customer service AI system experienced multiple timeouts during peak load, with response times increasing from 2.1s to 12.3s and affecting 2,800 users. System load reached 187% of normal capacity, with CPU at 94% and memory at 87%. Root causes included query optimization issues and connection pool exhaustion. Immediate actions involved scaling resources, optimizing queries, and implementing request queuing. Long-term solutions include auto-scaling and enhanced load testing protocols.",
    severity: "Low",
    reported_at: "2025-03-22T15:30:00Z",
  },
  {
    id: 9,
    title: "Deep Fake Detection Bypass",
    description:
      "Advanced deep fake generation technique successfully evaded our detection system, achieving a 32% drop in detection confidence and 18% increase in false negatives. The bypass utilized sophisticated GAN architecture with novel artifact concealment and improved temporal consistency. Impact: 47 undetected deep fakes passed through the system, raising significant platform integrity concerns. Immediate response includes enhanced monitoring, manual content review, and implementation of multi-modal verification alongside industry collaboration for improved detection methods.",
    severity: "High",
    reported_at: "2025-04-03T11:20:00Z",
  },
  {
    id: 10,
    title: "Training Data Privacy Concern",
    description:
      "Routine audit discovered potentially sensitive information in model training dataset, including 0.02% personal identifiers, 0.15% quasi-identifiers, and 0.08% sensitive attributes. While re-identification risk was assessed as low with limited exposure scope, immediate actions included data isolation, access restriction, and comprehensive impact assessment. Long-term solutions focus on enhanced screening protocols, automated detection systems, and implementation of privacy-by-design principles.",
    severity: "Medium",
    reported_at: "2025-03-18T09:00:00Z",
  },
  {
    id: 11,
    title: "AI System Resource Overconsumption",
    description:
      "ML pipeline showing unexpected resource usage patterns, leading to increased cloud costs. Performance optimization team investigating potential memory leaks.",
    severity: "Low",
    reported_at: "2025-03-30T16:15:00Z",
  },
  {
    id: 12,
    title: "Cross-Cultural AI Interaction Issue",
    description:
      "AI assistant displaying inconsistent behavior with non-English inputs. Cultural sensitivity review initiated. Expanding training data to improve multi-cultural understanding.",
    severity: "Medium",
    reported_at: "2025-04-04T10:45:00Z",
  },
  {
    id: 13,
    title: "Automated Content Moderation Failure",
    description:
      "Content moderation system failed to detect sophisticated policy violations. Several inappropriate items remained live for 2 hours. Emergency update deployed to recognition patterns.",
    severity: "High",
    reported_at: "2025-03-29T14:20:00Z",
  },
  {
    id: 14,
    title: "Model Versioning Conflict",
    description:
      "Production system briefly served predictions from outdated model version. Impact limited to non-critical recommendations. Implementing stricter version control protocols.",
    severity: "Low",
    reported_at: "2025-03-26T08:30:00Z",
  },
  {
    id: 15,
    title: "AI Ethics Boundary Case",
    description:
      "Edge case identified where AI decision-making conflicts with established ethical guidelines. Ethics board convened for review and policy update. Temporary manual review implemented for similar cases.",
    severity: "Medium",
    reported_at: "2025-04-05T09:10:00Z",
  },
];
