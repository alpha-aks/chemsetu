import React from 'react';
import { Search, FlaskConical, Snowflake, Zap, ArrowRight } from 'lucide-react';

// Data extracted directly from the PPT
const products = [
  {
    id: 1,
    name: "Venlafaxine Intermediate",
    category: "API Intermediate",
    description: "Developed process for venlafaxine and executed it to plant (100 Kg). Reduced number of steps and cost.",
    scale: "Kg Scale (Plant Ready)",
    icon: <FlaskConical className="text-blue-600 w-8 h-8" />,
    image: "/venlafaxine.png"
  }
];

const Compounds = () => {
  return (
    <section id="compounds" className="bg-slate-50 py-20 px-4 min-h-screen">
      
      {/* Header Section */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-extrabold text-slate-900 mb-4">
          Molecular Library & Capabilities
        </h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          From complex API intermediates to difficult-to-synthesize impurities.
        </p>

        {/* Search Bar (Visual Only) */}
        <div className="mt-8 relative max-w-xl mx-auto">
          <input 
            type="text" 
            placeholder="Search by CAS No., Name, or Reaction Type..." 
            className="w-full pl-12 pr-4 py-4 rounded-full border border-slate-200 shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" />
        </div>
      </div>

      {/* The Product Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((item) => (
          <div key={item.id} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group cursor-pointer hover:-translate-y-1 flex flex-col">
            
            {/* Image or Icon & Category Tag */}
            {item.image ? (
              <div className="mb-6">
                <div className="w-full h-48 mb-4 overflow-hidden rounded-xl bg-slate-50 flex items-center justify-center">
                  <img src={item.image} alt={item.name} className="w-full h-full object-contain" />
                </div>
                <div className="flex justify-end">
                  <span className="text-xs font-bold px-3 py-1 bg-slate-100 text-slate-600 rounded-full uppercase tracking-wider">
                    {item.category}
                  </span>
                </div>
              </div>
            ) : (
              <div className="flex justify-between items-start mb-6">
                <div className="bg-slate-50 p-3 rounded-xl group-hover:bg-blue-50 transition-colors">
                  {item.icon}
                </div>
                <span className="text-xs font-bold px-3 py-1 bg-slate-100 text-slate-600 rounded-full uppercase tracking-wider">
                  {item.category}
                </span>
              </div>
            )}

            {/* Title & Description */}
            <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors">
              {item.name}
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              {item.description}
            </p>

            {/* Footer: Scale & Arrow */}
            <div className="flex items-center justify-between pt-6 border-t border-slate-50 mt-auto">
              <div className="text-xs font-semibold text-slate-400">
                Capacity: <span className="text-slate-700">{item.scale}</span>
              </div>
              <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-blue-600 transform group-hover:translate-x-1 transition-all" />
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};

export default Compounds;
