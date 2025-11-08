import React from 'react';

export const About = () => (
  <section id="about" className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">About Us</h2>
          <p className="mt-4 text-neutral-700">We are a strategic, forward-thinking performance agency focused on clarity, speed, and innovation. Our mission is to help brands scale through creative strategy, media excellence, and relentless optimization.</p>
        </div>
        <div className="rounded-2xl bg-gradient-to-tr from-blue-100 via-sky-100 to-cyan-100 p-1">
          <div className="h-56 w-full rounded-xl bg-white shadow-xl shadow-blue-500/10" aria-hidden="true" />
        </div>
      </div>
    </div>
  </section>
);

export const Services = () => (
  <section id="services" className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center">Services</h2>
      <p className="mt-3 text-neutral-700 text-center max-w-2xl mx-auto">Full-stack capabilities to drive ROI: paid media, SEO, email, branding, web and analytics.</p>
      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          ['Paid Media Advertising', 'Google Ads, Meta, TikTok'],
          ['SEO & Content Strategy', 'Technical SEO, content systems'],
          ['Email Marketing & Automation', 'Lifecycle, flows, CRM'],
          ['Branding & Visual Identity', 'Positioning, design systems'],
          ['Web Design & CRO', 'High-converting UX/UI'],
          ['Analytics & BI', 'Attribution, dashboards'],
        ].map(([title, desc]) => (
          <div key={title} className="rounded-2xl p-6 bg-white/70 backdrop-blur border border-neutral-200 shadow-sm hover:shadow-md transition">
            <h3 className="font-semibold">{title}</h3>
            <p className="mt-2 text-sm text-neutral-700">{desc}</p>
            <a href="#contact" className="mt-4 inline-flex text-sm text-blue-600 hover:underline">Learn More</a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const CaseStudies = () => (
  <section id="cases" className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-end justify-between gap-4">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Case Studies</h2>
        <a href="#contact" className="text-sm text-blue-600 hover:underline">Let’s Discuss Your Project</a>
      </div>
      <div className="mt-10 grid md:grid-cols-3 gap-6">
        {[
          ['6.5x ROAS', '+180% Engagement', 'Paid Social'],
          ['+120% Organic Traffic', 'Top 3 Keywords', 'SEO'],
          ['+35% CVR', '-28% CAC', 'CRO + Email'],
        ].map(([m1, m2, type], i) => (
          <article key={i} className="rounded-2xl overflow-hidden border border-neutral-200 bg-white shadow-sm">
            <div className="h-40 bg-gradient-to-br from-neutral-100 to-neutral-50" aria-hidden="true" />
            <div className="p-6">
              <div className="flex items-center gap-3 text-sm">
                <span className="px-2 py-1 rounded-full bg-blue-50 text-blue-700">{type}</span>
              </div>
              <div className="mt-4 flex items-center gap-4">
                <p className="text-xl font-semibold">{m1}</p>
                <p className="text-neutral-700">{m2}</p>
              </div>
              <p className="mt-4 text-sm text-neutral-600">Strategic full-funnel approach with rapid creative testing and data-backed optimization.</p>
              <button className="mt-4 inline-flex text-sm text-blue-600 hover:underline">View Full Case</button>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export const Contact = () => (
  <section id="contact" className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center">Let’s Build Something Great.</h2>
        <p className="mt-3 text-neutral-700 text-center">Tell us about your goals and we’ll get in touch shortly.</p>
        <form className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4" onSubmit={(e)=>{e.preventDefault(); alert('Thanks! We received your message.');}}>
          <div>
            <label className="block text-sm font-medium">Name</label>
            <input required type="text" className="mt-1 w-full rounded-lg border border-neutral-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Jane Doe" aria-label="Name" />
          </div>
          <div>
            <label className="block text-sm font-medium">Business Email</label>
            <input required type="email" className="mt-1 w-full rounded-lg border border-neutral-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="jane@company.com" aria-label="Business Email" />
          </div>
          <div>
            <label className="block text-sm font-medium">Company Name</label>
            <input type="text" className="mt-1 w-full rounded-lg border border-neutral-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Acme Inc." aria-label="Company Name" />
          </div>
          <div>
            <label className="block text-sm font-medium">Budget</label>
            <select className="mt-1 w-full rounded-lg border border-neutral-300 px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500" aria-label="Budget">
              <option value="Undisclosed">Undisclosed</option>
              <option value="<10k">Under $10k</option>
              <option value="10-50k">$10k – $50k</option>
              <option value=">50k">$50k+</option>
            </select>
          </div>
          <div className="sm:col-span-2">
            <label className="block text-sm font-medium">Message</label>
            <textarea required rows="5" className="mt-1 w-full rounded-lg border border-neutral-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Tell us about your project…" aria-label="Message" />
          </div>
          <div className="sm:col-span-2 flex items-center justify-between">
            <p className="text-xs text-neutral-500">We’ll forward your inquiry to contact@zhyrx.com</p>
            <button type="submit" className="inline-flex items-center rounded-full bg-neutral-900 text-white text-sm px-5 py-2.5 shadow-lg shadow-black/10 hover:shadow-black/20 transition focus:outline-none focus:ring-2 focus:ring-blue-500">Let’s Talk</button>
          </div>
        </form>
      </div>
    </div>
  </section>
);

const Sections = { About, Services, CaseStudies, Contact };
export default Sections;
