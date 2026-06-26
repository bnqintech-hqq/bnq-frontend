export type ServiceEntry = {
  title: string;
  subtitle: string;
  price: string;
  features: string[];
  process: string[];
};

export const servicesDB: Record<string, ServiceEntry> = {
  "shared-hosting": {
    title: "Premium Shared Hosting",
    subtitle: "Affordable & fast web hosting for small businesses.",
    price: "Rs. 2,999/yr",
    features: ["1 Website Deployment", "5 GB NVMe Storage", "Free SSL Certificate", "5 Business Emails"],
    process: ["Select Plan", "Register Domain", "Account Setup", "Website Live"],
  },
  "cloud-vps": {
    title: "Cloud VPS Infrastructure",
    subtitle: "High-performance virtual private servers for growing businesses.",
    price: "Rs. 3,500/mo",
    features: ["4 vCPU Dedicated Cores", "8 GB Dedicated RAM", "100 GB NVMe SSD", "Full Root Access"],
    process: ["Server Selection", "OS Installation", "Security Hardening", "Handover"],
  },
  "web-apps": {
    title: "Custom Web App Development",
    subtitle: "Scalable and secure web applications built on modern tech.",
    price: "Starts Rs. 45,000",
    features: ["Custom UI/UX", "Secure Backend API", "Admin Dashboard", "Cloud Deployment"],
    process: ["Requirement Gathering", "UI/UX Design", "Development", "QA Testing"],
  },
  "inbound": {
    title: "Inbound Customer Support",
    subtitle: "24/7 dedicated customer support team for your business.",
    price: "Rs. 16,000/seat",
    features: ["Dedicated Agents", "Cloud IVR Setup", "Ticket Management", "Daily Reporting"],
    process: ["Agent Training", "System Integration", "Mock Calls", "Go Live"],
  }
};
