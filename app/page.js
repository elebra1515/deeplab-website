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
      title: 'Laboratory Technical Services',
      img: 'https://images.unsplash.com/photo-1530973428-5bf2db2e4d71?w=1200',
      desc: 'Comprehensive chemical analysis, quality control, and laboratory testing services for oil & gas products to ensure industry standards and regulatory compliance.'
    },
    {
      title: 'Environmental Laboratory Services', 
      img: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1200',
      desc: 'Professional water, air, and soil testing for environmental compliance, impact assessment, and meeting all regulatory requirements.'
    },
    {
      title: 'Oil & Gas Production Support',
      img: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1200', 
      desc: 'On-site technical support, production optimization, and field laboratory services for upstream and downstream oil & gas operations.'
    },
    {
      title: 'Engineering & Maintenance',
      img: 'https://images.unsplash.com/photo-1581093588401-fbb62a02f120?w=1200',
      desc: 'Expert equipment calibration, preventive maintenance, and engineering solutions for laboratories and industrial facilities.'
    },
    {
      title: 'Training & Consultancy',
      img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200',
      desc: 'Professional technical training for laboratory personnel and expert consultancy on best practices, safety, and quality management.'
    },
    {
      title: 'Supply of Lab Chemicals & Equipment',
      img: 'https://images.unsplash.com/photo-1615484477778-ff7ea6b3f9bf?w=1200',
      desc: 'Reliable supply and distribution of laboratory reagents, chemicals, glassware, and modern scientific equipment.'
    }
  ];

  return (
    <main style={{background: '#0a0a0a', color: '#e5e5e5', fontFamily: 'system-ui, -apple-system, sans-serif'}}>
      
      {/* STICKY HEADER */}
      <header style={{
        position: 'sticky', top: 0, zIndex: 50, 
        background: scrolled ? 'rgba(10,10,10,0.95)' : 'rgba(10,10,10,0.8)',
        backdropFilter: 'blur(10px)',
        padding: '20px 40px', transition: 'all 0.3s ease', 
        borderBottom: '1px solid #222'
      }}>
        <h1 style={{color: '#f59e0b', margin: 0, fontSize: '1.3rem', fontWeight: '700'}}>DEEP INTEGRATED LAB SERVICES LIMITED</h1>
      </header>

      {/* HERO BANNER - LAB SETTINGS */}
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
          <a href="https://wa.me/234868613046" target="_blank" rel="noopener noreferrer" style={{
            background: '#25D366', padding: '16px 32px', borderRadius: '10px', 
            color: '#fff', textDecoration: 'none', fontWeight: 'bold', fontSize: '1.1rem',
            display: 'inline-block'
          }}>Chat on WhatsApp</a>
        </div>
      </section>

      {/* 6 SERVICES WITH IMAGES */}
      <section style={{padding: '100px 20px', maxWidth: '1200px', margin: '0 auto'}}>
        <h2 style={{textAlign: 'center', fontSize: '2.8rem', marginBottom: '70px', color: '#f59e0b', fontWeight: '700'}}>Our Core Services</h2>
        
        {services.map((service, i) => (
          <div key={i} style={{
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

      {/* CLEAN FOOTER */}
      <footer style={{padding: '50px 40px', textAlign: 'center', borderTop: '1px solid #222', background: '#111827'}}>
        <p style={{color: '#9ca3af', fontSize: '1rem'}}>© 2026 DEEP INTEGRATED LAB SERVICES LIMITED. All Rights Reserved.</p>
        <p style={{color: '#666', fontSize: '0.9rem', marginTop: '10px'}}>Abuja, Nigeria</p>
      </footer>
    </main>
  );
}
