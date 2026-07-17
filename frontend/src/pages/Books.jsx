import React from 'react'

const Books = () => {
  return (
    <section className="page-section books-page min-h-[calc(100vh-69px)] bg-neutral-950 px-6 py-16 text-stone-200 antialiased">
      <div className="container mx-auto max-w-7xl">
        
        {/* Page Header Area */}
        <div className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between border-b border-neutral-900 pb-8">
          <div>
            <h1 className="font-serif text-4xl font-medium tracking-tight text-stone-100">
              Books Catalog
            </h1>
            <p className="mt-2 text-stone-400">
              Browse, filter, and review a structured list of books.
            </p>
          </div>
          <div className="w-full sm:max-w-xs">
            <input 
              type="text" 
              placeholder="Search books..." 
              className="w-full rounded border border-neutral-800 bg-neutral-900/60 px-4 py-2.5 text-stone-200 placeholder-stone-600 outline-none transition focus:border-amber-700 focus:ring-1 focus:ring-amber-700 text-sm"
            />
          </div>
        </div>

        {/* Three-Column Book Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          
          {/* Book Card 1 */}
          <article className="group book-card cursor-pointer">
            <div className="book-card__cover mb-4 flex aspect-[2/3] w-full items-center justify-center rounded-lg border border-neutral-800 bg-neutral-900/40 font-serif text-sm text-stone-500 shadow-lg shadow-black/40 transition duration-300 group-hover:border-amber-700/60 group-hover:shadow-amber-950/20">
              [ Elegant Cover Placeholder ]
            </div>
            <h2 className="font-serif text-lg font-medium text-stone-100 transition group-hover:text-amber-500">
              Book Title One
            </h2>
            <p className="text-sm text-stone-400 mt-1">Author Name &bull; Genre</p>
          </article>
          
          {/* Book Card 2 */}
          <article className="group book-card cursor-pointer">
            <div className="book-card__cover mb-4 flex aspect-[2/3] w-full items-center justify-center rounded-lg border border-neutral-800 bg-neutral-900/40 font-serif text-sm text-stone-500 shadow-lg shadow-black/40 transition duration-300 group-hover:border-amber-700/60 group-hover:shadow-amber-950/20">
              [ Elegant Cover Placeholder ]
            </div>
            <h2 className="font-serif text-lg font-medium text-stone-100 transition group-hover:text-amber-500">
              Book Title Two
            </h2>
            <p className="text-sm text-stone-400 mt-1">Author Name &bull; Genre</p>
          </article>
          
          {/* Book Card 3 */}
          <article className="group book-card cursor-pointer">
            <div className="book-card__cover mb-4 flex aspect-[2/3] w-full items-center justify-center rounded-lg border border-neutral-800 bg-neutral-900/40 font-serif text-sm text-stone-500 shadow-lg shadow-black/40 transition duration-300 group-hover:border-amber-700/60 group-hover:shadow-amber-950/20">
              [ Elegant Cover Placeholder ]
            </div>
            <h2 className="font-serif text-lg font-medium text-stone-100 transition group-hover:text-amber-500">
              Book Title Three
            </h2>
            <p className="text-sm text-stone-400 mt-1">Author Name &bull; Genre</p>
          </article>

        </div>
      </div>
    </section>
  )
}

export default Books