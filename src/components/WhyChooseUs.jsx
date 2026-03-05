import React from 'react';
import {
  Microscope,
  TrendingUp,
  FlaskConical,
  ShieldCheck,
  ArrowRight,
  ArrowLeft,
} from 'lucide-react';

const WhyChooseUs = () => {
  const leftBenefits = [
    {
      tone: 'blue',
      title: '19+ Years Expertise',
      description: 'Led by industry veterans from giants like Lupin & Teva.',
      Icon: Microscope,
    },
    {
      tone: 'green',
      title: 'Cost-Effective Innovation',
      description: 'Process optimization that reduces reaction steps & costs.',
      Icon: TrendingUp,
    },
  ];

  const rightBenefits = [
    {
      tone: 'blue',
      title: 'Scalable Solutions',
      description: 'Seamless transfer from lab scale (mg) to pilot plant (5KG).',
      Icon: FlaskConical,
    },
    {
      tone: 'green',
      title: 'Strict Confidentiality',
      description: 'Rigorous IP protection and NDA protocols.',
      Icon: ShieldCheck,
    },
  ];

  const toneStyles = {
    blue: {
      iconWrap:
        'bg-primary/10 text-primary ring-1 ring-primary/20 shadow-sm',
      title: 'text-primary',
      connector: 'bg-primary/40',
    },
    green: {
      iconWrap:
        'bg-secondary/10 text-secondary ring-1 ring-secondary/20 shadow-sm',
      title: 'text-secondary',
      connector: 'bg-secondary/40',
    },
  };

  const BenefitCard = ({ item, align = 'left' }) => {
    const styles = toneStyles[item.tone];

    return (
      <div className="relative">
        <div
          className={
            align === 'left'
              ? 'hidden md:flex absolute right-[-58px] top-1/2 -translate-y-1/2 items-center gap-2'
              : 'hidden md:flex absolute left-[-58px] top-1/2 -translate-y-1/2 items-center gap-2'
          }
          aria-hidden="true"
        >
          {align === 'right' && (
            <ArrowLeft className={`w-4 h-4 ${styles.title}`} />
          )}
          <div className={`h-px w-10 ${styles.connector}`} />
          {align === 'left' && (
            <ArrowRight className={`w-4 h-4 ${styles.title}`} />
          )}
        </div>

        <div
          className={
            align === 'left'
              ? 'flex flex-col items-center gap-3 text-center md:flex-row-reverse md:items-start md:gap-4 md:text-right'
              : 'flex flex-col items-center gap-3 text-center md:flex-row md:items-start md:gap-4 md:text-left'
          }
        >
          <div
            className={`hidden md:flex shrink-0 w-14 h-14 rounded-full ${styles.iconWrap} items-center justify-center`}
          >
            <item.Icon className="w-7 h-7" strokeWidth={2} />
          </div>

          <div className="max-w-sm">
            <h3 className={`text-lg font-bold ${styles.title}`}>{item.title}</h3>
            <p className="mt-1 text-sm leading-relaxed text-slate-600">
              {item.description}
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary">Why Choose Us</h2>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
            A central-reactor approach to quality, scale, and trust.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
          <div className="space-y-10 order-1">
            {leftBenefits.map((item) => (
              <BenefitCard key={item.title} item={item} align="left" />
            ))}
          </div>

          <div className="order-2 flex justify-center">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80">
              <div className="absolute inset-0 rounded-full border-2 border-primary/40 border-dashed animate-spin" style={{ animationDuration: '18s' }} />
              <div className="absolute inset-6 rounded-full border-2 border-secondary/40 border-dotted animate-spin" style={{ animationDuration: '26s', animationDirection: 'reverse' }} />
              <div className="absolute inset-12 rounded-full bg-white" />

              <div className="absolute inset-12 rounded-full overflow-hidden shadow-xl ring-1 ring-slate-200">
                <img
                  src="/lab-infra.png"
                  alt="High-tech chemistry lab"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              <div className="absolute left-1/2 top-6 -translate-x-1/2">
                <div className="px-4 py-2 rounded-full bg-white/40 backdrop-blur-md border border-white/50 shadow-sm">
                  <span className="text-xs sm:text-sm font-semibold text-slate-800">
                    100% Quality Assured
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-10 order-3">
            {rightBenefits.map((item) => (
              <BenefitCard key={item.title} item={item} align="right" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
