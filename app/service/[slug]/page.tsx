import Link from "next/link";
import { notFound } from "next/navigation";
import { servicesDB } from "@/app/data/servicesData";

type ServiceDetailProps = {
  params: Promise<{ slug: string }>;
};

export default async function ServiceDetail({ params }: ServiceDetailProps) {
  const { slug } = await params;
  const service = servicesDB[slug];

  if (!service) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-50 pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-600 font-bold uppercase tracking-widest text-xs mb-4 block">Service Overview</span>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">{service.title}</h1>
          <p className="text-lg text-slate-600 font-medium">{service.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">What You Get</h2>
            <ul className="space-y-4">
              {service.features.map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-slate-700 font-medium">
                  <span className="text-green-500 text-xl">✓</span> {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-slate-900 p-8 rounded-3xl text-white flex flex-col justify-center items-center text-center shadow-xl">
            <h2 className="text-xl font-bold text-slate-400 mb-4">Starting Price</h2>
            <div className="text-4xl font-black text-blue-400 mb-8">{service.price}</div>
            <Link
              href={`/quotation?service=${slug}`}
              className="bg-blue-600 hover:bg-blue-700 w-full px-8 py-4 rounded-xl font-bold tracking-widest uppercase transition-all shadow-lg shadow-blue-500/30"
            >
              Request a Custom Quote
            </Link>
          </div>
        </div>

        <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm mb-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">How We Work</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {service.process.map((step, index) => (
              <div key={step} className="text-center">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 font-black rounded-full flex items-center justify-center mx-auto mb-4">
                  {index + 1}
                </div>
                <p className="font-bold text-slate-800 text-sm">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
