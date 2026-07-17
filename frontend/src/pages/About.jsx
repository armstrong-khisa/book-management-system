import React from 'react'

const About = () => {
  return (
    <section className="page-section about-page min-h-[calc(100vh-69px)] bg-neutral-950 px-6 py-20 text-stone-200 antialiased flex flex-col justify-center">
      <div className="container mx-auto max-w-7xl">
        
        {/* Two-Column Grid */}
        <div className="grid gap-12 lg:grid-cols-5 items-center">
          
          {/* Main Copy (Takes up 3 columns) */}
          <div className="space-y-6 lg:col-span-3">
            <h1 className="font-serif text-4xl font-medium tracking-tight text-stone-100 sm:text-5xl">
              About the System
            </h1>
            <p className="text-lg leading-relaxed text-stone-400">
              This application is a monolithic project with a Flask backend, React frontend, and an SQL data layer. 
              The layout is crafted using a dark minimalist aesthetic to reflect the deep tones and timeless nature of classical libraries.
            </p>
            <p className="text-base leading-relaxed text-stone-400">
              Use the navigation at the top to move between the Home, Books, and Admin pages. Each page provides a fluid, content-first layout scaffold optimized for your book management workflow.
            </p>
          </div>
          
          {/* Feature Highlight Panel (Takes up 2 columns) */}
          <div className="rounded-lg border border-neutral-900 bg-neutral-900/40 p-8 shadow-xl lg:col-span-2">
            <h2 className="mb-6 font-serif text-xl font-medium text-stone-100">
              Designed for:
            </h2>
            <ul className="space-y-3.5 text-stone-300">
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-600" />
                <span>Book records and metadata</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-600" />
                <span>Inventory management</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-600" />
                <span>Admin review and control</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-600" />
                <span>Simple content-first layout</span>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  )
}

export default About