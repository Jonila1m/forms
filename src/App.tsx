import { useForm } from 'react-hook-form';
import './App.css'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod';

const userSchema = z.object({
  firstName: z.string().min(1, { error: 'First name missing' }),
  lastName: z.string().min(1, { error: 'Last name missing' }),
  email: z.email({ error: 'Invalid email' }),
  date: z.coerce.date({ error: 'Invalid date' })
})

function App() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(userSchema),
    defaultValues: {
      firstName: undefined,
      lastName: undefined,
      email: undefined,
      date: undefined
    }
  })


  const onSubmit = handleSubmit((data) => {
    console.log(data)
  })

  return (
    <div className="app">
      <form onSubmit={onSubmit}>
        <div>
          <label> Enter your first name
            <input type="text" placeholder="first name" {...register('firstName')} />
            <p style={{ color: 'red' }} >{errors.firstName?.message}</p>
          </label>
        </div>

        <div>
          <label> Enter your last name
            <input type="text" placeholder="last name" {...register('lastName')} />
            <p style={{ color: 'red' }}>{errors.lastName?.message}</p>
          </label>
        </div>

        <div>
          <label> Enter your email address
            <input type="text" placeholder="email" {...register('email')} />
            <p style={{ color: 'red' }}>{errors.email?.message}</p>
          </label>
        </div>

        <div>
          <label> Enter your date of birth
            <input type="date" placeholder="date of birth" {...register('date')} />
            <p style={{ color: 'red' }}>{errors.date?.message}</p>
          </label>
        </div>
        <button type="submit"> Submit</button>
      </form>
    </div>
  )
}
export default App 
