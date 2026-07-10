import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-navy text-paper">
      <div className="text-amber/70">
        <div className="scale-rail" />
      </div>

      <div className="max-w-6xl mx-auto px-6 py-14 grid gap-10 md:grid-cols-3">
        <div>
          <h3 className="font-display text-lg font-semibold mb-3">
            Deep Integrated Lab Services Limited
          </h3>
          <p className="text-paper/70 text-sm leading-relaxed">
            Supplying laboratory chemicals, laboratory equipment, and precision
            measurement instrumentation to industrial, oil &amp; gas, and
            research laboratories in Rivers State and beyond.
          </p>
        </div>

        <div>
          <h4 className="font-display font-semibold mb-3 text-amber">Contact</h4>
          <ul className="space-y-2 text-sm text-paper/80 font-mono">
            <li>
              <a href="mailto:info@deepintegratedlab.com" className="hover:text-amber transition-colors">
                info@deepintegratedlab.com
              </a>
            </li>
            <li>
              <a href="tel:+2348068613046" className="hover:text-amber transition-colors">
                +234 806 861 3046
              </a>
            </li>
            <li className="font-body">
              46 New Jerusalem, Eliozu, Port Harcourt, Rivers State
            </li>
            <li>
              <a
                href="https://www.deepintegratedlabservice.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-amber transition-colors"
              >
                www.deepintegratedlabservice.com
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold mb-3 text-amber">Navigate</h4>
          <ul className="space-y-2 text-sm text-paper/80">
            <li><Link href="/" className="hover:text-amber transition-colors">Home</Link></li>
            <li><Link href="/services" className="hover:text-amber transition-colors">Services</Link></li>
            <li><Link href="/contact" className="hover:text-amber transition-colors">Contact</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-paper/10 py-5 text-center text-xs text-paper/50 font-mono">
        © {new Date().getFullYear()} Deep Integrated Lab Services Limited. All rights reserved.
      </div>
    </footer>
  )
}
