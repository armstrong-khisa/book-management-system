import React, {useState} from 'react'

const Auth = () => {
  // set login form 
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  // set sign up form
  const [signupUsername, setSignupUsername] = useState('')
  const [signupPassword, setSignupPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle login logic here
  }

  return (
    <form onSubmit={handleSubmit}>
     section for login
     <section>
       <div>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button type="submit">Login</button>
      </section> 
      section for signup
      <section>
        <div>
          <label htmlFor="signup-username">Username:</label>
          <input type="text" id="signup-username" name="signup-username" value={signupUsername} onChange={(e) => setSignupUsername(e.target.value)} />
        </div>
        <div>
          <label htmlFor="signup-password">Password:</label>
          <input type="password" id="signup-password" name="signup-password" value={signupPassword} onChange={(e) => setSignupPassword(e.target.value)}  />
        </div>
        <button type="submit">Sign Up</button>
      </section>

    </form>
  )
}

export default Auth