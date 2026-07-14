"use client";
import { useState, useEffect } from 'react';

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      id: 'lab-services',
      title: 'Laboratory Technical Services',
      img: 'https://images.unsplash.com/photo-1530973428-5bf2db2e4d71?w=1200',
      desc: 'Comprehensive chemical analysis, quality control, and laboratory testing services for oil & gas products to ensure industry standards and regulatory compliance.'
    },
    {
      id: 'environmental',
      title: 'Environmental Laboratory Services', 
      img: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1200',
      desc: 'Professional water, air, and soil testing for environmental compliance, impact assessment, and meeting all regulatory requirements.'
    },
    {
      id: 'production',
      title: 'Oil & Gas Production Support',
      img: 'https://images.pexels.com/photos/3825529/pexels-photo-3825529.jpeg',
              ^,
      desc: 'On-site technical support, production optimization, and field laboratory services for upstream and downstream oil & gas operations.'
    },
    {
      id: 'engineering',
      title: 'Engineering & Maintenance',
      img: 'https://images.unsplash.com/photo-1581093588401-fbb62a02f120?w=1200',
      desc: 'Expert equipment calibration, preventive maintenance, and engineering solutions for laboratories and industrial facilities.'
    },
    {
      id: 'training',
      title: 'Training & Consultancy',
      img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200',
      desc: 'Professional technical training for laboratory personnel and expert consultancy on best practices, safety, and quality management.'
    },
    {
      id: 'supply',
      title: 'Supply of Lab Chemicals & Equipment',
      img: 'https://images.unsplash.com/photo-1628348070887-1d0ccda0e4b6?w=1200',
      desc: 'Reliable supply and distribution of laboratory reagents, chemicals, glassware, and modern scientific equipment.'
    }
  ];

  return (
    <main style={{background: '#0a0a0a', color: '#e5e5e5', fontFamily: 'system-ui, -apple-system, sans-serif', scrollBehavior: 'smooth'}}>
      
      {/* STICKY HEADER WITH NAVIGATION */}
      <header style={{
        position: 'sticky', top: 0, zIndex: 50, 
        background: scrolled ? 'rgba(10,10,10,0.95)' : 'rgba(10,10,10,0.8)',
        backdropFilter: 'blur(10px)',
        padding: '20px 40px', transition: 'all 0.3s ease', 
        borderBottom: '1px solid #222',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center'
      }}>
        <h1 style={{color: '#f59e0b', margin: 0, fontSize: '1.3rem', fontWeight: '700'}}>DEEP INTEGRATED LAB</h1>
        
        <nav style={{display: 'flex', gap: '30px'}}>
          <a href="#" style={{color: '#fff', textDecoration: 'none', fontWeight: '500'}}>Home</a>
          <a href="#services" style={{color: '#fff', textDecoration: 'none', fontWeight: '500'}}>Services</a>
          <a href="#contact" style={{color: '#fff', textDecoration: 'none', fontWeight: '500'}}>Contact</a>
        </nav>
      </header>

      {/* HERO BANNER */}
      <section style={{position: 'relative', height: '600px', overflow: 'hidden'}}>
        <img 
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1600" 
          alt="Modern Laboratory"
          style={{width: '100%', height: '100%', objectFit: 'cover', opacity: 0.65}}
        />
        <div style={{
          position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)',
          textAlign: 'center', padding: '20px', width: '90%', maxWidth: '900px'
        }}>
          <h1 style={{fontSize: '3.2rem', color: '#f59e0b', marginBottom: '15px', lineHeight: '1.2', fontWeight: '800'}}>Laboratory, Production & Engineering Services</h1>
          <p style={{fontSize: '1.4rem', marginBottom: '35px', color: '#fff', fontWeight: '300'}}>Precision. Safety. Excellence in Oil & Gas Laboratory Solutions</p>
          <a href="https://wa.me/2348068613046" target="_blank" rel="noopener noreferrer" style={{
            background: '#25D366', padding: '16px 32px', borderRadius: '10px', 
            color: '#fff', textDecoration: 'none', fontWeight: 'bold', fontSize: '1.1rem'
          }}>Chat on WhatsApp</a>
        </div>
      </section>

      {/* 6 SERVICES WITH IMAGES */}
      <section id="services" style={{padding: '100px 20px', maxWidth: '1200px', margin: '0 auto'}}>
        <h2 style={{textAlign: 'center', fontSize: '2.8rem', marginBottom: '70px', color: '#f59e0b', fontWeight: '700'}}>Our Core Services</h2>
        
        {services.map((service, i) => (
          <div id={service.id} key={i} style={{
            background: '#111827', borderRadius: '14px', 
            marginBottom: '50px', overflow: 'hidden',
            boxShadow: '0 8px 30px rgba(245,158,11,0.08)'
          }}>
            <img src={service.img} alt={service.title} style={{width: '100%', height: '350px', objectFit: 'cover'}}/>
            <div style={{padding: '35px'}}>
              <h3 style={{color: '#f59e0b', fontSize: '1.8rem', marginBottom: '15px', fontWeight: '700'}}>{service.title}</h3>
              <p style={{fontSize: '1.15rem', lineHeight: '1.8', color: '#d1d5db'}}>{service.desc}</p>
            </div>
          </div>
        ))}
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" style={{padding: '80px 40px', background: '#111827', textAlign: 'center'}}>
        <h2 style={{color: '#f59e0b', fontSize: '2.2rem', marginBottom: '20px'}}>Get In Touch</h2>
        <p style={{fontSize: '1.2rem', marginBottom: '10px'}}>info@deepintegratedlab.com</p>
        <p style={{fontSize: '1.2rem', marginBottom: '10px'}}>+234 806 861 3046</p>
        <p style={{fontSize: '1.2rem', marginBottom: '30px'}}>46 New Jerusalem, Eliozu, Port Harcourt, Rivers State</p>
        <a href="https://wa.me/2348068613046" target="_blank" rel="noopener noreferrer" style={{
          background: '#25D366', padding: '16px 32px', borderRadius: '10px', 
          color: '#fff', textDecoration: 'none', fontWeight: 'bold', fontSize: '1.1rem'
        }}>Chat on WhatsApp</a>
      </section>

      {/* FOOTER WITH 6 SERVICES LISTED */}
      <footer style={{padding: '60px 40px', background: '#0a0a0a', borderTop: '1px solid #222'}}>
        <div style={{maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px'}}>
          
          {/* Company Info */}
          <div>
            <h3 style={{color: '#f59e0b', fontSize: '1.2rem', marginBottom: '15px'}}>DEEP INTEGRATED LAB SERVICES LIMITED</h3>
            <p style={{color: '#9ca3af', lineHeight: '1.6'}}>Supplying laboratory chemicals, equipment, and precision measurement instrumentation to industrial, oil & gas, and research laboratories in Rivers State and beyond.</p>
          </div>

          {/* Contact */}
          <div>
            <h3 style={{color: '#f59e0b', fontSize: '1.2rem', marginBottom: '15px'}}>Contact</h3>
            <p style={{color: '#9ca3af', marginBottom: '8px'}}>info@deepintegratedlab.com</p>
            <p style={{color: '#9ca3af', marginBottom: '8px'}}>+234 806 861 3046</p>
            <p style={{color: '#9ca3af', marginBottom: '8px'}}>46 New Jerusalem, Eliozu</p>
            <p style={{color: '#9ca3af'}}>Port Harcourt, Rivers State</p>
          </div>

          {/* Navigate - 6 SERVICES LISTED */}
          <div>
            <h3 style={{color: '#f59e0b', fontSize: '1.2rem', marginBottom: '15px'}}>Navigate</h3>
            <a href="#" style={{display: 'block', color: '#9ca3af', textDecoration: 'none', marginBottom: '8px'}}>Home</a>
            {services.map((service, i) => (
              <a key={i} href={`#${service.id}`} style={{display: 'block', color: '#9ca3af', textDecoration: 'none', marginBottom: '8px'}}>
                {service.title}
              </a>
            ))}
            <a href="#contact" style={{display: 'block', color: '#9ca3af', textDecoration: 'none', marginBottom: '8px'}}>Contact</a>
          </div>
        </div>

        <div style={{textAlign: 'center', marginTop: '50px', paddingTop: '30px', borderTop: '1px solid #222'}}>
          <p style={{color: '#666', fontSize: '0.9rem'}}>© 2026 Deep Integrated Lab Services Limited. All Rights Reserved.</p>
        </div>
      </footer>
    </main>
  );
}
