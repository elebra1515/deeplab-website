import Link from 'next/link'

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy text-paper">
        <div className="max-w-6xl mx-auto px-6 pt-20 pb-16 grid md:grid-cols-[28px_1fr] gap-8 items-stretch">
          <div className="hidden md:block text-amber/60">
            <div className="scale-rail-vertical" />
          </div>
          <div>
            <p className="font-mono text-amber text-sm tracking-widest uppercase mb-4">
              Port Harcourt, Rivers State
            </p>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight max-w-3xl">
              Precision, supplied.
            </h1>
            <p className="mt-6 text-paper/80 text-lg max-w-2xl leading-relaxed">
              Deep Integrated Lab Services Limited supplies laboratory chemicals and
              laboratory equipment to industrial, oil &amp; gas, environmental, and
              research laboratories &mdash; from calibrated hydrometers to full
              distillation setups.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/services"
                className="bg-amber text-navy font-display font-semibold px-6 py-3 hover:bg-amber-dark transition-colors"
              >
                View Our Services
              </Link>
              <Link
                href="/contact"
                className="border border-paper/30 px-6 py-3 font-display hover:border-amber hover:text-amber transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="flex items-baseline justify-between flex-wrap gap-2 mb-10">
          <h2 className="font-display text-3xl font-semibold text-navy">What We Do</h2>
          <span className="font-mono text-sm text-steel">Two divisions, one standard of accuracy</span>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="border border-navy/10 bg-white p-8 hover:border-amber transition-colors">
            <span className="font-mono text-xs tracking-widest text-amber-dark uppercase">Division 01</span>
            <h3 className="font-display text-2xl font-semibold text-navy mt-2 mb-4">
              Chemical Supply
            </h3>
            <p className="text-ink/70 leading-relaxed mb-4">
              Reliable sourcing and supply of laboratory chemicals and laboratory
              equipment for analytical, quality-control, and research work &mdash;
              stocked and dispatched to keep your bench running.
            </p>
            <ul className="space-y-2 text-sm text-ink/80">
              <li className="flex gap-2"><span className="text-amber-dark">&mdash;</span> Laboratory chemicals supplies</li>
              <li className="flex gap-2"><span className="text-amber-dark">&mdash;</span> Laboratory equipment supplies</li>
            </ul>
          </div>

          <div className="border border-navy/10 bg-white p-8 hover:border-amber transition-colors">
            <span className="font-mono text-xs tracking-widest text-amber-dark uppercase">Division 02</span>
            <h3 className="font-display text-2xl font-semibold text-navy mt-2 mb-4">
              Equipment
            </h3>
            <p className="text-ink/70 leading-relaxed mb-4">
              Precision instrumentation for crude analysis, distillation, and
              specific-gravity testing, sourced to specification and range.
            </p>
            <ul className="space-y-2 text-sm text-ink/80">
              <li className="flex gap-2"><span className="text-amber-dark">&mdash;</span> Centrifuge machines</li>
              <li className="flex gap-2"><span className="text-amber-dark">&mdash;</span> Dean &amp; Stack distillation equipment</li>
              <li className="flex gap-2"><span className="text-amber-dark">&mdash;</span> API &amp; SG hydrometers, all ranges</li>
              <li className="flex gap-2"><span className="text-amber-dark">&mdash;</span> Salt-in-crude analyzer machines</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="bg-white border-y border-navy/10">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <h2 className="font-display text-3xl font-semibold text-navy mb-10">Why Labs Choose Us</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                num: '01',
                title: 'Accurate to Spec',
                body: 'Equipment supplied to the exact range and standard your protocol requires.',
              },
              {
                num: '02',
                title: 'Local & Responsive',
                body: 'Based in Port Harcourt, with fast turnaround across Rivers State.',
              },
              {
                num: '03',
                title: 'Steady Stock',
                body: 'Consistent supply of chemicals and consumables, so your bench never stalls.',
              },
              {
                num: '04',
                title: 'Direct Support',
                body: 'Speak directly with our team for sourcing, quotes, and technical questions.',
              },
            ].map((item) => (
              <div key={item.num}>
                <span className="font-mono text-amber-dark text-sm">{item.num}</span>
                <h3 className="font-display font-semibold text-navy mt-1 mb-2">{item.title}</h3>
                <p className="text-sm text-ink/70 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h2 className="font-display text-3xl font-semibold text-navy mb-4">
          Need chemicals or equipment on short notice?
        </h2>
        <p className="text-ink/70 max-w-xl mx-auto mb-8">
          Tell us what your lab needs and we&apos;ll get back to you with availability
          and pricing.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-navy text-paper font-display font-semibold px-8 py-3.5 hover:bg-steel transition-colors"
        >
          Contact Our Team
        </Link>
      </section>
    </>
  )
}
