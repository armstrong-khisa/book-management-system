import React from "react";

const About = () => {
  return (
    <section className="min-h-screen bg-[#0b0f14] text-white py-16">

      <div className="max-w-6xl mx-auto px-6">

        {/* Hero Section */}
        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* Text */}
          <div>

            <p className="text-orange-400 uppercase tracking-widest text-sm mb-4">
              About Book Management System
            </p>

            <h1 className="text-5xl md:text-6xl font-serif font-bold leading-tight mb-6">
              Manage your library
              <br />
              with simplicity
            </h1>


            <p className="text-gray-400 text-lg leading-8 mb-6">
              This application is a complete book management platform built
              with a Flask backend, React frontend, and SQL database layer.
              It helps organize books, manage inventory, and provide
              administrators with better control over library operations.
            </p>


            <p className="text-gray-400 text-lg leading-8">
              The system provides a clean dashboard experience where users
              can explore books, manage records, and maintain an organized
              digital library.
            </p>


          </div>


          {/* Image Card */}
          <div className="rounded-xl overflow-hidden shadow-2xl">

            <img
              src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f"
              alt="Library"
              className="w-full h-[420px] object-cover"
            />

          </div>


        </div>



        {/* Features Section */}

        <div className="grid md:grid-cols-3 gap-6 mt-16">


          <div className="bg-[#151b23] p-6 rounded-xl border border-gray-800">
            <h2 className="text-xl font-semibold mb-3">
              📚 Book Records
            </h2>

            <p className="text-gray-400">
              Store and manage book information including titles,
              authors, categories, and availability.
            </p>
          </div>



          <div className="bg-[#151b23] p-6 rounded-xl border border-gray-800">

            <h2 className="text-xl font-semibold mb-3">
              📦 Inventory Management
            </h2>

            <p className="text-gray-400">
              Keep track of stock levels and organize your library
              collection efficiently.
            </p>

          </div>




          <div className="bg-[#151b23] p-6 rounded-xl border border-gray-800">

            <h2 className="text-xl font-semibold mb-3">
              ⚙️ Admin Control
            </h2>

            <p className="text-gray-400">
              Manage approvals, updates, and system information
              through the administration panel.
            </p>

          </div>


        </div>



        {/* Bottom Section */}

        <div className="mt-16 bg-[#151b23] rounded-xl p-10 text-center border border-gray-800">

          <h2 className="text-3xl font-serif font-bold mb-4">
            Built for modern libraries
          </h2>

          <p className="text-gray-400 max-w-3xl mx-auto">
            Our goal is to create a simple, organized, and efficient
            platform that makes managing books easier while keeping
            the experience clean and user friendly.
          </p>

        </div>


      </div>

    </section>
  );
};

export default About;