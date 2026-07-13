export default function HomePage() {
  return (
    <main style={{padding: '40px 20px', background: '#0a1128', color: '#e2e8f0', minHeight: '100vh', fontFamily: 'Arial, sans-serif', lineHeight: '1.8'}}>
      
      {/* HEADER */}
      <header style={{textAlign: 'center', marginBottom: '50px', borderBottom: '2px solid #f59e0b', paddingBottom: '20px'}}>
        <h1 style={{fontSize: '38px', color: '#f59e0b', marginBottom: '10px'}}>DEEP INTEGRATED LAB SERVICES LIMITED</h1>
        <p style={{fontSize: '20px', color: '#94a3b8', fontStyle: 'italic'}}>"Precision, supplied."</p>
        <p><b>Industry:</b> Energy, Petrochemical, & Technical Engineering Services</p>
        <p><b>Core Mandate:</b> Transforming high-tier laboratory insights and specialized chemistry into operational efficiency and asset integrity.</p>
        <p>Port Harcourt, Rivers State, Nigeria</p>
      </header>

      {/* EXECUTIVE SUMMARY */}
      <section style={{marginBottom: '40px', background: '#111827', padding: '25px', borderRadius: '10px'}}>
        <h2 style={{color: '#f59e0b', borderBottom: '1px solid #334155', paddingBottom: '10px'}}>1. Executive Summary</h2>
        <p>
          Deep Integrated Lab Services Limited is a premier technical services provider dedicated to serving the 
          upstream, midstream, and downstream sectors of the oil and gas industry. Built on a foundation of 
          scientific excellence and rigorous quality control, we bridge the gap between complex chemistry and asset performance.
        </p>
        <p>
          Our comprehensive service portfolio spans high-precision analytical diagnostics, robust environmental compliance management, 
          high-performance chemical supply, and real-time process optimization. By providing highly reliable, validated data and 
          customized chemical engineering solutions, we empower operators to protect valuable infrastructure, maintain regulatory 
          compliance, reduce operational expenditure (OPEX), and maximize production yields.
        </p>
      </section>

      {/* VISION MISSION VALUES */}
      <section style={{marginBottom: '40px'}}>
        <h2 style={{color: '#f59e0b', borderBottom: '1px solid #334155', paddingBottom: '10px'}}>2. Vision, Mission & Core Values</h2>
        <p><b>Our Vision:</b> To be the energy sector's most trusted partner in technical and laboratory integration, recognized globally for driving process optimization, asset longevity, and environmental sustainability.</p>
        <p><b>Our Mission:</b> To deliver exceptionally accurate, timely, and compliant laboratory and chemical solutions. We achieve this by combining advanced automation with a world-class team of analysts, chemists, and production engineers to provide data-driven operational confidence.</p>
        <p><b>Core Values:</b></p>
        <ul>
          <li><b>Data Integrity:</b> Absolute precision in every test; our data forms the baseline for high-stakes operational engineering decisions.</li>
          <li><b>Safety & Compliance:</b> Operating with zero compromise on Health, Safety, and Environment (HSE) standards, ensuring complete adherence to international protocols (ASTM, API, ISO).</li>
          <li><b>Operational Synergy:</b> Blending laboratory analysis directly with field applications to optimize chemical efficiency and performance.</li>
        </ul>
      </section>

      {/* SERVICES */}
      <section style={{marginBottom: '40px'}}>
        <h2 style={{color: '#f59e0b', borderBottom: '1px solid #334155', paddingBottom: '10px'}}>3. Core Technical Services</h2>
        <p>Deep Integrated Lab Services Limited delivers its expertise through six distinct, yet highly integrated service pillars:</p>
        
        <div style={{marginBottom: '25px', background: '#111827', padding: '20px', borderRadius: '8px'}}>
          <h3 style={{color: '#f59e0b'}}>1. Laboratory Technical Services</h3>
          <p>We provide foundational technical support, management, and engineering to establish and maintain world-class testing environments.</p>
          <ul>
            <li><b>Turnkey Lab Setups:</b> Design, sourcing, commissioning, and validation of stationary and mobile containerized field laboratories for remote wellheads or offshore platforms.</li>
            <li><b>Equipment Calibration & Maintenance:</b> Preventative maintenance and calibration of high-end lab instrumentation to ensure alignment with international standards.</li>
            <li><b>LIMS Implementation:</b> Deploying advanced Laboratory Information Management Systems (LIMS) for seamless, secure data tracking and automated Certificate of Analysis (CoA) generation.</li>
          </ul>
        </div>

        <div style={{marginBottom: '25px', background: '#111827', padding: '20px', borderRadius: '8px'}}>
          <h3 style={{color: '#f59e0b'}}>2. Analytical Lab Services</h3>
          <p>Delivering the high-precision baseline data required for custody transfer, asset valuation, and day-to-day operations.</p>
          <ul>
            <li><b>Crude Oil & Gas Assays:</b> Comprehensive analysis of density, viscosity, sulfur content, pour point, heavy metals, and vapor pressure (RVP).</li>
            <li><b>Fuel & Refined Product Testing:</b> Quality control testing for finished petroleum products (gasoline, diesel, jet fuel, marine fuels, and lubricants) against international commercial specifications.</li>
            <li><b>Compositional Analysis:</b> High-resolution gas chromatography (GC) to characterize natural gas streams, natural gas liquids (NGLs), and fiscal custody transfers.</li>
          </ul>
        </div>

        <div style={{marginBottom: '25px', background: '#111827', padding: '20px', borderRadius: '8px'}}>
          <h3 style={{color: '#f59e0b'}}>3. Environmental Services</h3>
          <p>Helping operators manage their ecological footprint and maintain complete compliance with local and international regulatory frameworks.</p>
          <ul>
            <li><b>Effluent & Produced Water Monitoring:</b> Regular testing of discharge streams for oil-in-water (OIW) levels, Total Dissolved Solids (TDS), heavy metals, and toxicity.</li>
            <li><b>Waste Characterization:</b> Analysis of drilling muds, cuttings, and hazardous oilfield waste prior to treatment or disposal.</li>
            <li><b>Air Quality & Emissions Tracking:</b> Ambient air quality mapping, stack emissions testing, and fugitive methane detection around flow stations and refineries.</li>
          </ul>
        </div>

        <div style={{marginBottom: '25px', background: '#111827', padding: '20px', borderRadius: '8px'}}>
          <h3 style={{color: '#f59e0b'}}>4. Chemical Supply</h3>
          <p>A highly reliable, end-to-end supply chain delivering high-performance, industry-certified specialty chemicals.</p>
          <ul>
            <li><b>Upstream Production Chemicals:</b> Comprehensive stock of high-grade demulsifiers, corrosion inhibitors, scale inhibitors, biocides, and pour-point depressants.</li>
            <li><b>Drilling & Completion Fluids:</b> Supply of premium polymers, bentonite, weighting agents, and customized drilling fluid chemical additives.</li>
            <li><b>Downstream Process Chemicals:</b> Refined product additives, fuel stabilizers, and water treatment chemicals for refining operations.</li>
          </ul>
        </div>

        <div style={{marginBottom: '25px', background: '#111827', padding: '20px', borderRadius: '8px'}}>
          <h3 style={{color: '#f59e0b'}}>5. Production Chemistry</h3>
          <p>Deep analytical evaluation of reservoir fluids to diagnose, predict, and mitigate organic and inorganic deposition challenges.</p>
          <ul>
            <li><b>Flow Assurance Analysis:</b> Laboratory tracking and fingerprinting of wax, asphaltenes, gas hydrates, and scale deposition risks that cause pipeline blockages.</li>
            <li><b>Corrosion Fluid Dynamics:</b> Chemical profiling of fluids to detect and combat internal pipeline corrosion, microbially influenced corrosion (MIC), and hydrogen sulfide (H₂S) souring.</li>
            <li><b>Fluid Compatibility Testing:</b> Evaluation of commingled fluid streams to prevent adverse chemical reactions during field integration or production blending.</li>
          </ul>
        </div>

        <div style={{marginBottom: '25px', background: '#111827', padding: '20px', borderRadius: '8px'}}>
          <h3 style={{color: '#f59e0b'}}>6. Chemical Injection & Optimization</h3>
          <p>Transforming laboratory analysis into fieldwork by designing, auditing, and adjusting chemical delivery systems to maximize efficiency and minimize cost.</p>
          <ul>
            <li><b>Dosing Rate Optimization:</b> Laboratory bottle-testing and loop testing to determine the exact minimum effective concentration (MEC) required, eliminating chemical over-injection.</li>
            <li><b>Injection System Audits:</b> Inspecting and calibrating chemical injection pumps, nozzles, and skids to ensure uniform distribution across processing streams.</li>
            <li><b>Real-Time Data Integration:</b> Pairing analytical laboratory trends with automated dosing adjustments to proactively counter shifting reservoir chemistry.</li>
          </ul>
        </div>
      </section>

      {/* DATA SECTION */}
      <section style={{marginBottom: '40px', background: '#111827', padding: '25px', borderRadius: '10px'}}>
        <h2 style={{color: '#f59e0b', borderBottom: '1px solid #334155', paddingBottom: '10px'}}>4. Delivery of Quality Data for Process Optimization</h2>
        <p>
          At Deep Integrated Lab Services Limited, data is an active operational asset. We provide highly reliable, validated data 
          that drives decision-making, reduces downtime, and ensures your operations run at peak efficiency.
        </p>
      </section>

      {/* CTA */}
      <section style={{textAlign: 'center', marginTop: '50px', padding: '30px', background: '#111827', borderRadius: '10px'}}>
        <h2 style={{color: '#f59e0b'}}>Ready to Optimize Your Operations?</h2>
        <p>Contact us today for laboratory solutions, chemical supply, and process optimization.</p>
        <a 
          href="https://wa.me/2348031234567?text=Hello%20Deep%20Integrated%20Lab%20Services%20Limited%2C%20I%20want%20to%20make%20an%20enquiry" 
          target="_blank"
          style={{background: '#25D366', color: 'white', padding: '15px 30px', textDecoration: 'none', borderRadius: '8px', fontWeight: 'bold', fontSize: '18px', display: 'inline-block', marginTop: '10px'}}
        >
          Chat on WhatsApp
        </a>
      </section>

      {/* FLOATING WHATSAPP */}
      <a 
        href="https://wa.me/2348031234567?text=Hello%20Deep%20Integrated%20Lab%20Services%20Limited"
        target="_blank"
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          background: '#25D366',
          color: 'white',
          padding: '15px 20px',
          borderRadius: '50px',
          textDecoration: 'none',
          fontWeight: 'bold',
          boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
          zIndex: 999
        }}
      >
        WhatsApp Us
      </a>
    </main>
  )
}
