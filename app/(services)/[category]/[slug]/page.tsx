import { notFound } from "next/navigation";
import { servicesDB } from "@/app/data/servicesData";

type Params = {
  params: Promise<{ category: string; slug: string }>;
};

export default async function CategoryServicePage({ params }: Params) {
  const { category, slug } = await params;

  // Try common key patterns: 'slug-category', 'category-slug', then 'slug'
  const candidates = [`${slug}-${category}`, `${category}-${slug}`, slug];
  const key = candidates.find(k => Object.prototype.hasOwnProperty.call(servicesDB, k));

  if (!key) notFound();

  const entry = servicesDB[key as keyof typeof servicesDB];

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-extrabold mb-2">{entry.title}</h1>
      <p className="text-slate-600 mb-4">{entry.subtitle}</p>
      <p className="font-bold mb-3">Price: {entry.price}</p>
      <div className="mb-4">
        <h3 className="font-bold mb-2">Features</h3>
        <ul className="list-disc pl-5 text-slate-700">{entry.features?.map((f: string) => <li key={f}>{f}</li>)}</ul>
      </div>
      <div>
        <h3 className="font-bold mb-2">Process</h3>
        <ol className="list-decimal pl-5 text-slate-700">{entry.process?.map((p: string) => <li key={p}>{p}</li>)}</ol>
      </div>
    </div>
  );
}
