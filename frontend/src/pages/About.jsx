import React from "react";
import "./About.css";

const About = () => {
  return (
<<<<<<< HEAD
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
=======
    <div className="about">
      {/* Hero Section */}
      <section className="about-hero">
        <h1>About Our Bookstore</h1>
        <p>
          Where every book opens the door to new adventures, fresh ideas, and
          endless inspiration.
        </p>
      </section>
>>>>>>> feat: enhance Navbar and About page with styling and content updates

      {/* About Content */}
      <section className="about-content">
        <h2>Who We Are</h2>

        <p>
          Welcome to our bookstore! We are passionate about connecting readers
          with books that inspire, educate, and entertain. Our collection is
          carefully selected to include bestselling novels, timeless classics,
          children's books, educational resources, and much more.
        </p>

        <p>
          We believe that reading has the power to change lives. Whether you're
          searching for your next favorite novel or looking to expand your
          knowledge, we're here to make your book-buying experience enjoyable
          and convenient.
        </p>

        <h2>Our Mission</h2>

        <p>
          Our mission is to make quality books accessible to everyone while
          providing excellent customer service and a seamless shopping
          experience. We want every customer to leave with a book they'll love.
        </p>

        <h2>Why Choose Us?</h2>

        <div className="features">
          <div className="feature-card">
            <span>📚</span>
            <h3>Wide Selection</h3>
            <p>Discover books from every genre and category.</p>
          </div>

          <div className="feature-card">
            <span>💰</span>
            <h3>Affordable Prices</h3>
            <p>Great books at prices that fit every budget.</p>
          </div>

          <div className="feature-card">
            <span>🚚</span>
            <h3>Fast Delivery</h3>
            <p>Quick and secure delivery to your doorstep.</p>
          </div>

          <div className="feature-card">
            <span>❤️</span>
            <h3>Passion for Reading</h3>
            <p>Helping readers discover books they'll never forget.</p>
          </div>
        </div>

        <div className="closing">
          <h2>Join Our Reading Community</h2>

          <p>
            Thank you for choosing our bookstore. Whether you're a lifelong
            reader or just beginning your reading journey, we're excited to help
            you discover your next favorite book.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;