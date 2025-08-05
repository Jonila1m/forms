import './App.css'
import { useState } from 'react';

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");



  return (
    <div className="app">
      <form>
        <div>
          <label> Enter your firstname
            <input type="text" placeholder="first name" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
          </label>
        </div>

        <div>
          <label> Enter your lastname
            <input type="text" placeholder="last name" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
          </label>
        </div>

        <div>
          <label> Enter your email address
            <input type="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>
        </div>

        <div>
          <label> Enter your date of birth
            <input type="date" placeholder="date of birth" value={date} onChange={(e) => setDate(e.target.value)} required />
          </label>
        </div>
        <button type="submit"> Submit</button>
      </form>
    </div>
  )
}

export default App
