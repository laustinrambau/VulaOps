import { Shield, Eye, Brain, Network, Lock, Radar, Terminal, Zap } from "lucide-react";

export const features = [
  {
    icon: Radar,
    title: "Threat Modelling",
    description:
      "Together with your team, we proactively identify and assess potential security threats within your infrastructure designs and define effective mitigation strategies. Our threat modeling exercises enable you to address risks early in the design phase, reducing the likelihood and impact of security incidents on your business.",
    tag: "THREATS",
    stats: "2.4B+ IOCs processed daily",
  },
  {
    icon: Brain,
    title: "Code Auditing",
    description:
      "Our skilled security specialists conduct in-depth manual code reviews to identify vulnerabilities in your web applications and smart contracts. This white-box approach enables us to uncover complex security flaws that may remain undetected for months using traditional black-box testing methods.",
    tag: "APP SECURITY",
    stats: "98.7% detection accuracy",
  },
  {
    icon: Eye,
    title: "Attack Surface Mapping",
    description:
      "Through continuous reconnaissance and asset discovery, we map your digital footprint, uncover hidden exposures, and provide actionable intelligence before attackers can exploit them. Security becomes proactive, not reactive.",
    tag: "ASM",
    stats: "< 60s scan time",
  },
  {
    icon: Network,
    title: "Advisory",
    description:
      "We are here for you year-round. We don’t just deliver a report and walk away—we provide ongoing support across DevSecOps integration, domain/IP and threat monitoring, incident response, detection engineering, vulnerability testing, and industry-specific threat intelligence. Our team is always ready to assist, ensuring your security posture stays strong and up to date.",
    tag: "RESEARCH",
    stats: "14M+ nodes mapped",
  },
  {
    icon: Lock,
    title: "Zero-Day Research",
    description:
      "We maintain a dedicated team focused on identifying high-impact zero-day vulnerabilities. By responsibly disclosing findings, we help organizations reduce risk, stay ahead of attackers, and strengthen their digital defenses.",
    tag: "0DAY",
    stats: "340+ CVEs disclosed",
  },
  {
    icon: Terminal,
    title: "Code Fuzzing",
    description:
      "We leverage fuzz testing to automate the discovery of bugs in your code. This efficient technique identifies vulnerabilities faster than manual testing, saving you both time and resources. A key advantage of fuzz testing is continuous coverage—new issues can be detected months after the initial setup, ensuring your code remains resilient over time.",
    tag: "TESTING",
    stats: "50K+ samples/month",
  },
  {
    icon: Shield,
    title: "Penetration Testing",
    description:
      "We conduct penetration testing exercises to simulate how a skilled attacker might target your company’s network and applications. Our specialists attempt to identify and exploit vulnerabilities, providing insight into potential security gaps and helping you protect access to sensitive systems and critical information.",
    tag: "SECURITY",
    stats: "15 min avg response",
  },
  {
    icon: Zap,
    title: "Red Teaming",
    description:
      "Concerned about specific threat actors targeting your organization? Our red team exercises simulate the tactics, techniques, and procedures of a chosen hacking group, testing your people, processes, and technology defenses. These exercises are guided by the TIBER-EU framework, providing a realistic and structured assessment of your organization’s resilience.",
    tag: "HUNT",
    stats: "200+ active hunts",
  },
];