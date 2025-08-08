import './App.css'
import { useState } from 'react';

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [errors, setErrors] = useState<string[]>([])

  const formValidation = () => {
    const newErrors: string[] = []

    if (firstName.trim().length == 0) {
      newErrors.push('First name should not be empty')
    }

    if (lastName.trim().length == 0) {
      newErrors.push('Last name should not be empty')
    }

    const emailValidation = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    if (!emailValidation.test(email.trim())) {
      newErrors.push('Invalid email format')
    }

    const dateValidation = new Date(date)
    if (isNaN(dateValidation.getTime())) {
      newErrors.push('Invalid date')
    }

    setErrors(newErrors)
    return newErrors.length === 0
  }

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formValidation()) {
      alert('Form submitted successfully!');
    }
  };

  return (
    <div className="app">
      <form onSubmit={submit}>
        <div>
          <label> Enter your first name
            <input type="text" placeholder="first name" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
          </label>
        </div>

        <div>
          <label> Enter your last name
            <input type="text" placeholder="last name" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
          </label>
        </div>

        <div>
          <label> Enter your email address
            <input type="text" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </label>
        </div>

        <div>
          <label> Enter your date of birth
            <input type="date" placeholder="date of birth" value={date} onChange={(e) => setDate(e.target.value)} required />
          </label>
        </div>
        <button type="submit"> Submit</button>

        {errors.length > 0 && (
          <div>
            <ul>
              {errors.map((error, index) => (
                <li key={index}>{error}</li>
              ))}
            </ul>
          </div>
        )}


      </form>
    </div>
  )
}

export default App