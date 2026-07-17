import React, { useState } from 'react'

const Auth = () => {
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
    <section className="min-h-[calc(100vh-69px)] bg-neutral-950 px-6 py-16 text-stone-200 antialiased flex flex-col justify-center">
      <div className="mx-auto w-full max-w-5xl">
        
        {/* Page Header */}
        <div className="mb-12 text-center">
          <h1 className="font-serif text-3xl font-medium tracking-tight text-stone-100 sm:text-4xl">
            Access Your Repository
          </h1>
          <p className="mt-2 text-stone-400">
            Sign in to your account or create a new library profile.
          </p>
        </div>

        {/* Auth Containers Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          
          {/* Login Card */}
          <div className="rounded-lg border border-neutral-900 bg-neutral-900/40 p-8 shadow-xl">
            <h2 className="mb-6 font-serif text-2xl font-medium text-stone-100">
              Welcome Back
            </h2>
            <form onSubmit={handleLoginSubmit} className="space-y-5">
              <div>
                <label htmlFor="username" className="block text-xs font-semibold uppercase tracking-wider text-stone-400 mb-2">
                  Username
                </label>
                <input 
                  type="text" 
                  id="username" 
                  name="username" 
                  value={username} 
                  onChange={(e) => setUsername(e.target.value)} 
                  className="w-full rounded border border-neutral-800 bg-neutral-950 px-4 py-2.5 text-stone-200 placeholder-stone-600 outline-none transition focus:border-amber-700 focus:ring-1 focus:ring-amber-700"
                  placeholder="Enter your username"
                  required
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-xs font-semibold uppercase tracking-wider text-stone-400 mb-2">
                  Password
                </label>
                <input 
                  type="password" 
                  id="password" 
                  name="password" 
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)} 
                  className="w-full rounded border border-neutral-800 bg-neutral-950 px-4 py-2.5 text-stone-200 placeholder-stone-600 outline-none transition focus:border-amber-700 focus:ring-1 focus:ring-amber-700"
                  placeholder="••••••••"
                  required
                />
              </div>
              <button 
                type="submit" 
                className="w-full rounded bg-amber-700 py-3 text-sm font-semibold text-stone-100 transition hover:bg-amber-800"
              >
                Sign In
              </button>
            </form>
          </div>

          {/* Signup Card */}
          <div className="rounded-lg border border-neutral-900 bg-neutral-900/40 p-8 shadow-xl">
            <h2 className="mb-6 font-serif text-2xl font-medium text-stone-100">
              Create Curator Account
            </h2>
            <form onSubmit={handleSignupSubmit} className="space-y-5">
              <div>
                <label htmlFor="signup-username" className="block text-xs font-semibold uppercase tracking-wider text-stone-400 mb-2">
                  Username
                </label>
                <input 
                  type="text" 
                  id="signup-username" 
                  name="signup-username" 
                  value={signupUsername} 
                  onChange={(e) => setSignupUsername(e.target.value)} 
                  className="w-full rounded border border-neutral-800 bg-neutral-950 px-4 py-2.5 text-stone-200 placeholder-stone-600 outline-none transition focus:border-amber-700 focus:ring-1 focus:ring-amber-700"
                  placeholder="Choose a unique username"
                  required
                />
              </div>
              <div>
                <label htmlFor="signup-password" className="block text-xs font-semibold uppercase tracking-wider text-stone-400 mb-2">
                  Password
                </label>
                <input 
                  type="password" 
                  id="signup-password" 
                  name="signup-password" 
                  value={signupPassword} 
                  onChange={(e) => setSignupPassword(e.target.value)}  
                  className="w-full rounded border border-neutral-800 bg-neutral-950 px-4 py-2.5 text-stone-200 placeholder-stone-600 outline-none transition focus:border-amber-700 focus:ring-1 focus:ring-amber-700"
                  placeholder="Create a strong password"
                  required
                />
              </div>
              <button 
                type="submit" 
                className="w-full rounded border border-stone-700 py-3 text-sm font-semibold text-stone-300 transition hover:bg-neutral-900 hover:text-stone-100"
              >
                Register Account
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Auth