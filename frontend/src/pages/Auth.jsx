import React, { useState } from 'react'

const Auth = () => {
  // Tab control: 'signin' or 'register'
  const [activeTab, setActiveTab] = useState('signin')

  // set login form 
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  // set sign up form
  const [signupUsername, setSignupUsername] = useState('')
  const [signupPassword, setSignupPassword] = useState('')

  const handleLoginSubmit = (e) => {
    e.preventDefault()
    console.log('Login submitted:', { username, password })
    // Handle login logic here
  }

  const handleSignupSubmit = (e) => {
    e.preventDefault()
    console.log('Signup submitted:', { signupUsername, signupPassword })
    // Handle signup logic here
  }

  return (
    <section className="min-h-[calc(100vh-69px)] bg-neutral-950 px-4 py-20 text-stone-200 antialiased flex flex-col justify-center relative overflow-hidden">
      {/* Decorative background elements for a premium feel */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[300px] bg-gradient-to-b from-amber-500/5 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-neutral-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto w-full max-w-md relative z-10">
        
        {/* Page Header */}
        <div className="mb-8 text-center">
          <h1 className="font-serif text-3xl font-medium tracking-tight text-stone-100 sm:text-4xl">
            The Archive
          </h1>
          <p className="mt-2.5 text-sm text-stone-400 font-sans">
            Access your repository or register a new profile.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="p-1 mb-6 bg-neutral-900/60 border border-neutral-800/80 rounded-lg flex gap-1">
          <button
            onClick={() => setActiveTab('signin')}
            className={`flex-1 py-2 text-xs font-semibold uppercase tracking-wider rounded-md transition-all duration-300 ${
              activeTab === 'signin'
                ? 'bg-neutral-800 text-amber-500 shadow-sm'
                : 'text-stone-400 hover:text-stone-200'
            }`}
          >
            Sign In
          </button>
          <button
            onClick={() => setActiveTab('register')}
            className={`flex-1 py-2 text-xs font-semibold uppercase tracking-wider rounded-md transition-all duration-300 ${
              activeTab === 'register'
                ? 'bg-neutral-800 text-amber-500 shadow-sm'
                : 'text-stone-400 hover:text-stone-200'
            }`}
          >
            Register
          </button>
        </div>

        {/* Main Card */}
        <div className="bg-neutral-900/30 border border-neutral-900 backdrop-blur-md rounded-xl p-8 shadow-2xl relative">
          {/* subtle golden corner accents */}
          <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-amber-700/40 rounded-tl-xl" />
          <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-amber-700/40 rounded-tr-xl" />

          {activeTab === 'signin' ? (
            /* Login Form */
            <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
              <h2 className="mb-6 font-serif text-2xl font-medium text-stone-100">
                Welcome Back
              </h2>
              <form onSubmit={handleLoginSubmit} className="space-y-5">
                <div>
                  <label htmlFor="username" className="block text-[10px] font-bold uppercase tracking-widest text-stone-400 mb-2">
                    Username
                  </label>
                  <input 
                    type="text" 
                    id="username" 
                    name="username" 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} 
                    className="w-full rounded border border-neutral-800 bg-neutral-950/80 px-4 py-2.5 text-stone-200 placeholder-stone-700 outline-none transition duration-200 focus:border-amber-700/80 focus:ring-1 focus:ring-amber-700/80 focus:bg-neutral-950"
                    placeholder="Enter your username"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="password" className="block text-[10px] font-bold uppercase tracking-widest text-stone-400 mb-2">
                    Password
                  </label>
                  <input 
                    type="password" 
                    id="password" 
                    name="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    className="w-full rounded border border-neutral-800 bg-neutral-950/80 px-4 py-2.5 text-stone-200 placeholder-stone-700 outline-none transition duration-200 focus:border-amber-700/80 focus:ring-1 focus:ring-amber-700/80 focus:bg-neutral-950"
                    placeholder="••••••••"
                    required
                  />
                </div>
                <button 
                  type="submit" 
                  className="w-full rounded bg-amber-700 py-3 text-sm font-semibold text-stone-100 transition duration-300 hover:bg-amber-600 hover:shadow-lg hover:shadow-amber-900/20 active:scale-[0.98]"
                >
                  Sign In
                </button>
              </form>
            </div>
          ) : (
            /* Signup Form */
            <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
              <h2 className="mb-6 font-serif text-2xl font-medium text-stone-100">
                Create Curator Account
              </h2>
              <form onSubmit={handleSignupSubmit} className="space-y-5">
                <div>
                  <label htmlFor="signup-username" className="block text-[10px] font-bold uppercase tracking-widest text-stone-400 mb-2">
                    Username
                  </label>
                  <input 
                    type="text" 
                    id="signup-username" 
                    name="signup-username" 
                    value={signupUsername} 
                    onChange={(e) => setSignupUsername(e.target.value)} 
                    className="w-full rounded border border-neutral-800 bg-neutral-950/80 px-4 py-2.5 text-stone-200 placeholder-stone-700 outline-none transition duration-200 focus:border-amber-700/80 focus:ring-1 focus:ring-amber-700/80 focus:bg-neutral-950"
                    placeholder="Choose a unique username"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="signup-password" className="block text-[10px] font-bold uppercase tracking-widest text-stone-400 mb-2">
                    Password
                  </label>
                  <input 
                    type="password" 
                    id="signup-password" 
                    name="signup-password" 
                    value={signupPassword} 
                    onChange={(e) => setSignupPassword(e.target.value)}  
                    className="w-full rounded border border-neutral-800 bg-neutral-950/80 px-4 py-2.5 text-stone-200 placeholder-stone-700 outline-none transition duration-200 focus:border-amber-700/80 focus:ring-1 focus:ring-amber-700/80 focus:bg-neutral-950"
                    placeholder="Create a strong password"
                    required
                  />
                </div>
                <button 
                  type="submit" 
                  className="w-full rounded bg-amber-700 py-3 text-sm font-semibold text-stone-100 transition duration-300 hover:bg-amber-600 hover:shadow-lg hover:shadow-amber-900/20 active:scale-[0.98]"
                >
                  Register Account
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Auth