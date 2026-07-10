export const metadata = {
  title: 'Contact | Deep Integrated Lab Services Limited',
  description:
    'Get in touch with Deep Integrated Lab Services Limited in Port Harcourt, Rivers State for laboratory chemical and equipment supply.',
}

export default function ContactPage() {
  return (
    <>
      <section className="bg-navy text-paper">
        <div className="max-w-6xl mx-auto px-6 pt-16 pb-14">
          <p className="font-mono text-amber text-sm tracking-widest uppercase mb-3">Get In Touch</p>
          <h1 className="font-display text-4xl md:text-5xl font-semibold">Contact Us</h1>
          <p className="mt-5 text-paper/80 max-w-2xl leading-relaxed">
            Send us a message about chemical stock, equipment ranges, or a quote
            request, and our team will respond promptly.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12">
        {/* Details */}
        <div>
          <h2 className="font-display text-2xl font-semibold text-navy mb-6">
            Reach Us Directly
          </h2>
          <ul className="space-y-6">
            <li>
              <span className="font-mono text-xs tracking-widest text-amber-dark uppercase">Email</span>
              <p className="mt-1">
                <a
                  href="mailto:info@deepintegratedlab.com"
                  className="font-mono text-navy hover:text-amber-dark transition-colors"
                >
                  info@deepintegratedlab.com
                </a>
              </p>
            </li>
            <li>
              <span className="font-mono text-xs tracking-widest text-amber-dark uppercase">Phone</span>
              <p className="mt-1">
                <a
                  href="tel:+2348068613046"
                  className="font-mono text-navy hover:text-amber-dark transition-colors"
                >
                  +234 806 861 3046
                </a>
              </p>
            </li>
            <li>
              <span className="font-mono text-xs tracking-widest text-amber-dark uppercase">Address</span>
              <p className="mt-1 text-navy leading-relaxed">
                46 New Jerusalem, Eliozu, Port Harcourt, Rivers State
              </p>
            </li>
            <li>
              <span className="font-mono text-xs tracking-widest text-amber-dark uppercase">Website</span>
              <p className="mt-1">
                <a
                  href="https://www.deepintegratedlabservice.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-navy hover:text-amber-dark transition-colors"
                >
                  www.deepintegratedlabservice.com
                </a>
              </p>
            </li>
          </ul>

          <div className="text-navy/30 mt-10">
            <div className="scale-rail" />
          </div>
        </div>

        {/* Form */}
        <div className="border border-navy/10 bg-white p-8">
          <h2 className="font-display text-2xl font-semibold text-navy mb-6">
            Send a Message
          </h2>
          <form action="mailto:info@deepintegratedlab.com" method="POST" encType="text/plain" className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-navy mb-1.5">
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full border border-navy/20 px-4 py-2.5 bg-paper focus:outline-none focus:border-amber"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-navy mb-1.5">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full border border-navy/20 px-4 py-2.5 bg-paper focus:outline-none focus:border-amber"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-navy mb-1.5">
                What do you need?
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                placeholder="Chemicals, equipment, and quantities or ranges required"
                className="w-full border border-navy/20 px-4 py-2.5 bg-paper focus:outline-none focus:border-amber resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-navy text-paper font-display font-semibold px-6 py-3 hover:bg-steel transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </>
  )
}
