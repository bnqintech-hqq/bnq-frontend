export const navLinks = [
  { name: "Home", href: "/", type: "link" },
  {
    name: "Hosting & VPS",
    href: "/hosting",
    type: "mega",
    columns: [
      {
        title: "WEB HOSTING",
        items: [
          { name: "Shared Hosting", href: "/hosting/shared" },
          { name: "WordPress Hosting", href: "/hosting/wordpress" },
          { name: "Reseller Hosting", href: "/hosting/reseller" },
          { name: "Business Hosting", href: "/hosting/business" },
          { name: "E-Commerce Hosting", href: "/hosting/ecommerce" },
        ],
      },
      {
        title: "VPS & SERVERS",
        items: [
          { name: "VPS Hosting", href: "/vps", badge: "Hot" },
          { name: "Cloud VPS", href: "/cloud-vps" },
          { name: "Dedicated Servers", href: "/dedicated-servers" },
          { name: "Managed Servers", href: "/managed-servers" },
          { name: "GPU Servers", href: "/gpu-servers" },
        ],
      },
      {
        title: "DOMAINS & SSL",
        items: [
          { name: "Domain Registration", href: "/domains" },
          { name: "Domain Transfer", href: "/domain-transfer" },
          { name: "SSL Certificates", href: "/ssl" },
          { name: "Business Email", href: "/business-email" },
          { name: "DNS Management", href: "/dns" },
        ],
      },
    ],
  },
  {
    name: "Software & Dev",
    href: "/software",
    type: "mega",
    columns: [
      {
        title: "DEVELOPMENT",
        items: [
          { name: "Web App Development", href: "/software/web-apps" },
          { name: "Mobile Apps", href: "/software/mobile-apps" },
          { name: "API Development", href: "/software/api" },
          { name: "ERP / CRM Systems", href: "/software/erp-crm" },
          { name: "SaaS Products", href: "/software/saas" },
        ],
      },
      {
        title: "PORTAL SOLUTIONS",
        items: [
          { name: "Govt / Civic Portals", href: "/portals/govt", badge: "New" },
          { name: "E-Commerce Platforms", href: "/portals/ecommerce" },
          { name: "Education Portals", href: "/portals/education" },
          { name: "Healthcare Portals", href: "/portals/healthcare" },
          { name: "Banking & Finance", href: "/portals/banking" },
        ],
      },
      {
        title: "DESIGN & QA",
        items: [
          { name: "UI / UX Design", href: "/software/ui-ux" },
          { name: "Brand Identity", href: "/software/brand" },
          { name: "Graphic Design", href: "/software/graphic" },
          { name: "QA & Testing", href: "/software/qa" },
        ],
      },
    ],
  },
  {
    name: "Data Center",
    href: "/data-center",
    type: "dropdown",
    items: [
      { name: "Colocation Services", href: "/data-center/colocation" },
      { name: "Cloud Backup", href: "/data-center/backup" },
      { name: "Disaster Recovery", href: "/data-center/dr" },
      { name: "Network Security", href: "/data-center/security" },
      { name: "Load Balancing", href: "/data-center/load-balancing" },
      { name: "Firewall Management", href: "/data-center/firewall" },
    ],
  },
  {
    name: "Call Center",
    href: "/call-center",
    type: "dropdown",
    items: [
      { name: "Inbound Support", href: "/call-center/inbound" },
      { name: "Outbound / Telemarketing", href: "/call-center/outbound" },
      { name: "Lead Generation", href: "/call-center/lead-gen", badge: "Hot" },
      { name: "Data Entry & BPO", href: "/call-center/data-entry" },
      { name: "Virtual Assistants", href: "/call-center/virtual-assistants" },
      { name: "Technical Help Desk", href: "/call-center/help-desk" },
    ],
  },
  {
    name: "Partners",
    href: "/partners",
    type: "dropdown",
    items: [
      { name: "Reseller Program", href: "/partners/reseller", badge: "Hot" },
      { name: "Dealer Network", href: "/partners/dealer", badge: "B2B" },
      { name: "Channel Partners", href: "/partners/channel" },
      { name: "White Label Solutions", href: "/partners/white-label" },
      { name: "Referral Program", href: "/partners/referral" },
    ],
  },
  {
    name: "Company",
    href: "/company",
    type: "dropdown",
    items: [
      { name: "About BNQinTECH", href: "/company/about" },
      { name: "Leadership Team", href: "/company/leadership" },
      { name: "Network & Coverage", href: "/company/network" },
      { name: "Hire", href: "/company/careers" },
      { name: "News & Blog", href: "/company/blog" },
      { name: "Contact Us", href: "/company/contact" },
    ],
  }
];