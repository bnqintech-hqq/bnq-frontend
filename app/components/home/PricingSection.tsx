"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import PaymentButton from "../PaymentButton";

export default function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(true);
  const router = useRouter();

  const pricingPlans = [
    {
      id: "starter",
      name: "Starter Plan",
      description: "Perfect for personal blogs and small portfolios.",
      monthlyPrice: 149,
      annualPrice: 99,
      isPopular: false,
      features: ["1 Website Deployment", "5 GB NVMe SSD Storage", "Free SSL Certificate", "5 Business Emails", "Standard Ticket Support"],
      buttonText: "Buy Starter Plan",
      // Notice: Removed buttonStyle because PaymentButton handles its own awesome UI
    },
    {
      id: "business",
      name: "Business Cloud",
      description: "Ideal for growing businesses and e-commerce platforms.",
      monthlyPrice: 399,
      annualPrice: 299,
      isPopular: true,
      features: ["Unlimited Websites", "50 GB NVMe SSD Storage", "Free SSL + Wildcard", "Free Domain Registration (1 yr)", "Priority 24/7 Live Support"],
      buttonText: "Buy Business Plan",
    },
    {
      id: "vps",
      name: "VPS Cloud Infrastructure",
      description: "For high-traffic sites needing dedicated raw resources.",
      monthlyPrice: 999,
      annualPrice: 799,
      isPopular: false,
      features: ["4 vCPU Dedicated Cores", "8 GB Dedicated RAM", "100 GB NVMe SSD Space", "Full Root Control Access", "Weekly Automated Offsite Backups"],
      buttonText: "Buy VPS Cloud",
    },
    {
      id: "enterprise",
      name: "Enterprise Architecture",
      description: "Custom tailored infrastructure for massive global scale.",
      monthlyPrice: "Custom",
      annualPrice: "Custom",
      isPopular: false,
      features: ["Dedicated Bare Metal Servers", "Custom Strict SLA & Uptime", "Data Center Colocation Options", "Fully Managed DevOps Services", "Dedicated Technical Account Manager"],
      buttonText: "Talk to Sales",
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-white border-t border-slate-200 font-sans relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header & Toggle Section (Remains Unchanged) */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight uppercase">
            Transparent, <span className="text-blue-600">Flexible Pricing</span>
          </h2>
          <p className="mt-4 text-base text-slate-500 font-light max-w-2xl mx-auto">
            All deployments include managed enterprise security setups, distributed data routing, and immediate infrastructure environment provisioning.
          </p>

          <div className="mt-10 flex justify-center items-center gap-4">
            <span className={`text-xs font-bold uppercase tracking-wider ${!isAnnual ? "text-slate-900" : "text-slate-400"}`}>Monthly</span>
            <button 
              type="button"
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative inline-flex h-7 w-14 items-center rounded-full bg-blue-600 transition-colors outline-none"
            >
              <span className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform ${isAnnual ? "translate-x-8" : "translate-x-1"}`} />
            </button>
            <span className={`text-xs font-bold uppercase tracking-wider flex items-center gap-2 ${isAnnual ? "text-slate-900" : "text-slate-400"}`}>
              Annually <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-bold">Save 25%</span>
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 items-stretch">
          {pricingPlans.map((plan) => {
            const isCustom = plan.monthlyPrice === "Custom";
            // Calculate exact payable amount
            const currentPrice = isCustom ? 0 : (isAnnual ? Number(plan.annualPrice) * 12 : Number(plan.monthlyPrice));
            const billingTotal = isAnnual && !isCustom ? Number(plan.annualPrice) * 12 : 0;

            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.35 }}
                className={`relative flex flex-col bg-white rounded-3xl p-6 transition-all duration-300 ${
                  plan.isPopular 
                    ? "border-2 border-blue-600 shadow-[0_20px_40px_rgba(37,99,235,0.06)] lg:-translate-y-2" 
                    : "border border-slate-200 hover:shadow-xl hover:border-blue-300"
                }`}
              >
                {plan.isPopular && (
                  <div className="absolute -top-3.5 left-0 right-0 flex justify-center">
                    <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-[9px] font-bold uppercase tracking-widest">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-xl font-extrabold text-slate-900">{plan.name}</h3>
                  <p className="text-xs text-slate-400 font-light mt-2 h-8 leading-relaxed">{plan.description}</p>
                </div>

                <div className="mb-8 h-16 flex flex-col justify-center">
                  {isCustom ? (
                    <span className="text-2xl font-black text-slate-900">Custom</span>
                  ) : (
                    <div>
                      <div className="flex items-baseline text-slate-900">
                        <span className="text-2xl font-bold">₹</span>
                        <span className="text-4xl font-black tracking-tight">{isAnnual ? plan.annualPrice : plan.monthlyPrice}</span>
                        <span className="text-slate-400 text-xs font-light ml-1">/mo</span>
                      </div>
                      {isAnnual && (
                        <p className="text-[10px] text-emerald-600 font-bold mt-1">Billed ₹{billingTotal} yearly</p>
                      )}
                    </div>
                  )}
                </div>

                <ul className="space-y-3.5 mb-8 flex-1 border-t border-slate-50 pt-6">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2.5 text-slate-600 text-xs font-medium">
                      <span className="text-blue-500 font-bold">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Integration Magic Here 👇 */}
                {isCustom ? (
                  <button 
                    onClick={() => router.push("/company/contact")}
                    className="w-full py-4 rounded-2xl text-sm font-bold transition-all uppercase tracking-wider bg-slate-900 text-white hover:bg-slate-800"
                  >
                    {plan.buttonText}
                  </button>
                ) : (
                  <PaymentButton
                    amount={currentPrice}
                    serviceName={plan.name}
                    description={`Deployment Setup for ${plan.name} Plan`}
                    buttonText={plan.buttonText}
                    onSuccess={(res) => alert(`Payment Success: ${res.razorpay_payment_id}`)}
                    onError={(err) => console.log("Checkout Failed:", err)}
                  />
                )}
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}