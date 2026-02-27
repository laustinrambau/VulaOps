import { Shield, Eye, Brain, Network, Lock, Radar, Terminal, Zap } from "lucide-react";

export const features = [
  {
    icon: Radar,
    title: "Threat Intelligence",
    description:
      "Real-time aggregation and analysis of global threat feeds, dark web monitoring, and adversary tracking across 150+ sources.",
    tag: "INTEL",
    stats: "2.4B+ IOCs processed daily",
  },
  {
    icon: Brain,
    title: "AI-Powered Analysis",
    description:
      "Machine learning models trained on decades of attack data to predict emerging threats and automate indicator enrichment.",
    tag: "ML/AI",
    stats: "98.7% detection accuracy",
  },
  {
    icon: Eye,
    title: "Attack Surface Mapping",
    description:
      "Continuous reconnaissance and asset discovery across your digital footprint. Identify exposures before adversaries do.",
    tag: "RECON",
    stats: "< 60s scan time",
  },
  {
    icon: Network,
    title: "Adversary Infrastructure",
    description:
      "Track threat actor infrastructure in real-time. Map C2 servers, phishing domains, and malicious networks globally.",
    tag: "TRACK",
    stats: "14M+ nodes mapped",
  },
  {
    icon: Lock,
    title: "Zero-Day Research",
    description:
      "Dedicated vulnerability research team discovering and responsibly disclosing critical zero-day vulnerabilities.",
    tag: "0DAY",
    stats: "340+ CVEs disclosed",
  },
  {
    icon: Terminal,
    title: "Malware Reverse Engineering",
    description:
      "Deep-dive binary analysis, behavioral sandboxing, and automated unpacking of sophisticated malware families.",
    tag: "REVENG",
    stats: "50K+ samples/month",
  },
  {
    icon: Shield,
    title: "Incident Response",
    description:
      "24/7 elite incident response team with forensic capabilities and threat containment across enterprise environments.",
    tag: "IR",
    stats: "15 min avg response",
  },
  {
    icon: Zap,
    title: "Threat Hunting",
    description:
      "Proactive hypothesis-driven hunting operations leveraging custom tooling and proprietary intelligence datasets.",
    tag: "HUNT",
    stats: "200+ active hunts",
  },
];