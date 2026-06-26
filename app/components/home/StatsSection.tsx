export default function StatsSection() {
  return (
    <section className="py-16 bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-4xl md:text-5xl font-extrabold mb-2">1.2k+</p>
            <p className="text-blue-200 font-medium">Projects Delivered</p>
          </div>
          <div>
            <p className="text-4xl md:text-5xl font-extrabold mb-2">99%</p>
            <p className="text-blue-200 font-medium">Satisfied Clients</p>
          </div>
          <div>
            <p className="text-4xl md:text-5xl font-extrabold mb-2">94%</p>
            <p className="text-blue-200 font-medium">Client Retention</p>
          </div>
          <div>
            <p className="text-4xl md:text-5xl font-extrabold mb-2">Top 1%</p>
            <p className="text-blue-200 font-medium">Software Firms</p>
          </div>
        </div>
      </div>
    </section>
  );
}