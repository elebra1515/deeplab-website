import Link from 'next/link'

export const metadata = {
  title: 'Services | Deep Integrated Lab Services Limited',
  description:
    'Chemical supply and laboratory equipment services from Deep Integrated Lab Services Limited, including hydrometers, centrifuges, and distillation equipment.',
}

const equipment = [
  {
    name: 'Centrifuge Machine',
    note: 'For separation and sediment analysis in routine lab workflows.',
  },
  {
    name: 'Dean & Stack Distillation Equipment',
    note: 'For water and sediment determination by distillation.',
  },
  {
    name: 'API Hydrometers',
    note: 'Multiple ranges available for petroleum density measurement.',
  },
  {
    name: 'SG Hydrometers',
    note: 'Multiple ranges available for specific-gravity testing.',
  },
  {
    name: 'Salt-in-Crude Analyzer Machine',
    note: 'For accurate salt-content determination in crude oil.',
  },
]

export default function ServicesPage() {
  return (
    <>
      <section className="bg-navy text-paper">
        <div className="max-w-6xl mx-auto px-6 pt-16 pb-14">
          <p className="font-mono text-amber text-sm tracking-widest uppercase mb-3">What We Offer</p>
          <h1 className="font-display text-4xl md:text-5xl font-semibold">Our Services</h1>
          <p className="mt-5 text-paper/80 max-w-2xl leading-relaxed">
            We operate across two core divisions: supplying laboratory chemicals and
            equipment, and providing precision instrumentation for petroleum and
            industrial testing.
          </p>
        </div>
      </section>

      {/* Chemical Supply */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex items-baseline gap-4 mb-8">
          <span className="font-mono text-amber-dark text-sm">01</span>
          <h2 className="font-display text-3xl font-semibold text-navy">Chemical Supply</h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="border border-navy/10 bg-white p-7">
            <h3 className="font-display font-semibold text-lg text-navy mb-2">
              Laboratory Chemicals Supplies
            </h3>
            <p className="text-sm text-ink/70 leading-relaxed">
              Sourcing and supply of laboratory-grade chemicals and reagents to keep
              analytical and quality-control work running without interruption.
            </p>
          </div>
          <div className="border border-navy/10 bg-white p-7">
            <h3 className="font-display font-semibold text-lg text-navy mb-2">
              Laboratory Equipment Supplies
            </h3>
            <p className="text-sm text-ink/70 leading-relaxed">
              Supply of general laboratory equipment and consumables to outfit and
              maintain fully functioning lab benches.
            </p>
          </div>
        </div>
      </section>

      {/* Equipment */}
      <section className="bg-white border-y border-navy/10">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="flex items-baseline gap-4 mb-4">
            <span className="font-mono text-amber-dark text-sm">02</span>
            <h2 className="font-display text-3xl font-semibold text-navy">Equipment</h2>
          </div>
          <div className="text-navy/40 mb-8">
            <div className="scale-rail" />
          </div>

          <div className="divide-y divide-navy/10 border-t border-b border-navy/10">
            {equipment.map((item, i) => (
              <div key={item.name} className="grid sm:grid-cols-[80px_1fr] gap-2 sm:gap-6 py-6">
                <span className="font-mono text-sm text-amber-dark">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="font-display font-semibold text-navy text-lg">{item.name}</h3>
                  <p className="text-sm text-ink/70 mt-1 leading-relaxed">{item.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h2 className="font-display text-2xl font-semibold text-navy mb-4">
          Looking for a specific range or specification?
        </h2>
        <p className="text-ink/70 max-w-xl mx-auto mb-8">
          Let us know the ranges or quantities you need and we&apos;ll confirm
          availability and pricing.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-navy text-paper font-display font-semibold px-8 py-3.5 hover:bg-steel transition-colors"
        >
          Request a Quote
        </Link>
      </section>
    </>
  )
}
