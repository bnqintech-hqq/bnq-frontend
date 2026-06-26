'use client';

import Link from 'next/link';
import Image from 'next/image';

// ---------------------------------------------------------
// DYNAMIC DATA CONFIGURATION
// ---------------------------------------------------------
const FOOTER_DATA = {
  companyInfo: {
    description: "India's Full-Spectrum IT Partner. Delivering enterprise-grade hosting, custom software, scalable data centers, and omnichannel BPO solutions.",
    address: "Pune, Maharashtra, India",
    addressSubtext: "(Serving Global Clients)",
    phone: "+91 92 7136 0782",
    email: "support@bnqintech.com"
  },
  columns: [
    {
      title: "Infrastructure",
      links: [
        { name: 'Shared Hosting', path: '/hosting/shared' },
        { name: 'Cloud VPS', path: '/cloud-vps' },
        { name: 'Dedicated Servers', path: '/dedicated-servers' },
        { name: 'Domain Registration', path: '/domains' },
        { name: 'Data Center Colocation', path: '/data-center/colocation' },
        { name: 'Business Email', path: '/business-email' },
      ]
    },
    {
      title: "Solutions",
      links: [
        { name: 'Web App Development', path: '/software/web-apps' },
        { name: 'ERP / CRM Systems', path: '/software/erp-crm' },
        { name: 'Mobile Apps', path: '/software/mobile-apps' },
        { name: 'E-Commerce Portals', path: '/portals/ecommerce' },
        { name: 'Inbound Call Center', path: '/call-center/inbound' },
        { name: 'Lead Generation BPO', path: '/call-center/lead-gen' },
      ]
    },
    {
      title: "Company",
      links: [
        { name: 'About BNQinTECH', path: '/company/about' },
        { name: 'Leadership Team', path: '/company/leadership' },
        { name: 'Partner Program', path: '/partners/reseller' },
        { name: 'Careers', path: '/company/careers' },
        { name: 'News & Blog', path: '/company/blog' },
        { name: 'Contact Us', path: '/company/contact' },
      ]
    }
  ],
  legal: [
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Terms of Service', path: '/terms' },
    { name: 'Refund Policy', path: '/refund' },
    { name: 'SLA Agreement', path: '/sla' },
  ]
};

export default function Footer() {
  return (
    // Light Theme wrapper with subtle top border
    <footer className="bg-white text-gray-600 pt-20 pb-8 border-t border-gray-200 relative overflow-hidden font-sans">
      
      {/* Subtle Top Gradient Accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
          
          {/* Column 1: Visible Brand Logo & Contact */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="inline-block transition-transform duration-300 hover:scale-105">
              {/* FIXED LOGO VISIBILITY: Standardized height, removed weird scales */}
              <Image 
                src="/1.png" 
                alt="BNQinTECH Logo" 
                width={200} 
                height={60}  
                className="w-auto h-12 sm:h-14 object-contain" 
                priority
              />
            </Link>
            
            <p className="text-gray-500 leading-relaxed max-w-sm font-medium text-sm">
              {FOOTER_DATA.companyInfo.description}
            </p>
            
            {/* Contact Details */}
            <ul className="space-y-4 text-sm mt-6">
              <li className="flex items-start group">
                <span className="mt-0.5 mr-3 text-blue-600">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </span>
                <span className="text-gray-600 font-medium">{FOOTER_DATA.companyInfo.address}<br />
                  <span className="text-xs text-blue-600/80 font-semibold">{FOOTER_DATA.companyInfo.addressSubtext}</span>
                </span>
              </li>
              <li className="flex items-center group">
                <span className="mr-3 text-blue-600">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </span>
                <a href={`tel:${FOOTER_DATA.companyInfo.phone.replace(/\s+/g, '')}`} className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
                  {FOOTER_DATA.companyInfo.phone}
                </a>
              </li>
              <li className="flex items-center group">
                <span className="mr-3 text-blue-600">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </span>
                <a href={`mailto:${FOOTER_DATA.companyInfo.email}`} className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
                  {FOOTER_DATA.companyInfo.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Dynamic Columns Rendering */}
          {FOOTER_DATA.columns.map((column, index) => (
            <div key={index}>
              <h4 className="text-gray-900 font-bold mb-6 uppercase tracking-wider text-sm">{column.title}</h4>
              <ul className="space-y-3.5 text-sm font-medium">
                {column.links.map((link, i) => (
                  <li key={i}>
                    <Link href={link.path} className="group flex items-center text-gray-500 hover:text-blue-600 transition-all duration-300">
                      <span className="w-0 h-0.5 bg-blue-500 mr-0 group-hover:w-2 group-hover:mr-2 transition-all duration-300"></span>
                      <span className="group-hover:translate-x-1 transition-transform duration-300">{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="text-sm text-gray-500 font-medium flex flex-col sm:flex-row items-center gap-3">
            <span>© {new Date().getFullYear()} BNQinTECH. All rights reserved.</span>
            <span className="hidden sm:inline text-gray-300">|</span>
            <span className="flex items-center gap-2 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-bold border border-blue-100">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span> 
              Systems Operational
            </span>
          </div>

          {/* Legal Links */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-gray-500 font-medium">
            {FOOTER_DATA.legal.map((link, i) => (
              <Link key={i} href={link.path} className="hover:text-blue-600 transition-colors">
                {link.name}
              </Link>
            ))}
          </div>

          {/* Social Icons - Redesigned for Light Theme */}
          <div className="flex space-x-3">
            <a href="#" className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-sm hover:shadow-md">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
            <a href="#" className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-sky-500 hover:text-white transition-all duration-300 shadow-sm hover:shadow-md">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
            </a>
            <a href="#" className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-blue-800 hover:text-white transition-all duration-300 shadow-sm hover:shadow-md">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
            </a>
          </div>
          
        </div>
      </div>
    </footer>
  );
}