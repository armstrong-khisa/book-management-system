import React from 'react'
import libraryImage from '../public/libraary.jpg'

const Home = () => {
  return (
    <section className="page-section home-page min-h-screen bg-neutral-950 px-6 py-20 text-stone-200 antialiased">
      <div className="mx-auto max-w-7xl">
        
        {/* Hero Section */}
        <div className="mb-20 grid items-center gap-12 md:grid-cols-2">
          <div className="space-y-6">
            <p className="text-sm font-semibold tracking-widest text-amber-600 uppercase">
              Book Management System
            </p>
            <h1 className="font-serif text-4xl font-medium tracking-tight text-stone-100 sm:text-5xl lg:text-6xl">
              Organize your library in one simple dashboard
            </h1>
            <p className="text-lg leading-relaxed text-stone-400">
              A moody, modern layout for managing books, authors, and inventory.
              Seamlessly monitor your collection with classic aesthetic styling.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <button 
                type="button" 
                className="rounded bg-amber-700 px-6 py-3 text-sm font-semibold text-stone-100 transition hover:bg-amber-800"
              >
                Explore Books
              </button>
              <button 
                type="button" 
                className="rounded border border-stone-700 px-6 py-3 text-sm font-semibold text-stone-300 transition hover:bg-neutral-900 hover:text-stone-100"
              >
                View Dashboard
              </button>
            </div>
          </div>
          
          {/* Image Wrapper */}
          <div className="overflow-hidden rounded-lg border border-neutral-800 shadow-2xl shadow-black/80">
            {/* Replace /library-image.jpg with your downloaded photo path */}
            <img 
              src={libraryImage} 
              alt="Person browsing dark academia library" 
              className="h-auto w-full object-cover"
            />
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <article className="rounded-lg border border-neutral-900 bg-neutral-900/50 p-8 shadow-sm">
            <h2 className="mb-4 font-serif text-xl font-medium text-stone-100">
              Library Overview
            </h2>
            <p className="leading-relaxed text-stone-400">
              Quick access to recent books, stock status, and manager notes without distractions.
            </p>
          </article>
          
          <article className="rounded-lg border border-neutral-900 bg-neutral-900/50 p-8 shadow-sm">
            <h2 className="mb-4 font-serif text-xl font-medium text-stone-100">
              Inventory Layout
            </h2>
            <p className="leading-relaxed text-stone-400">
              See categories, book counts, and publishing details in a simple grid format.
            </p>
          </article>
          
          <article className="rounded-lg border border-neutral-900 bg-neutral-900/50 p-8 shadow-sm">
            <h2 className="mb-4 font-serif text-xl font-medium text-stone-100">
              Admin Control
            </h2>
            <p className="leading-relaxed text-stone-400">
              Pending approvals and analytics summaries are arranged in plain, structured blocks.
            </p>
          </article>
        </div>

      </div>
    </section>
  )
}

export default Home