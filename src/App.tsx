import { useForm } from 'react-hook-form';
import './App.css'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod';
import InputField from './components/InputField';


const userSchema = z.object({
  firstName: z.string().min(1, { error: 'First name missing' }),
  lastName: z.string().min(1, { error: 'Last name missing' }),
  email: z.email({ error: 'Invalid email' }),
  date: z.coerce.date({ error: 'Invalid date' })
})

function App() {
  const { handleSubmit, control, formState: { isValid, isSubmitting } } = useForm({
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
            <InputField control={control} name='firstName' />
          </label>
        </div>

        <div>
          <label> Enter your last name
            <InputField control={control} name='lastName' />
          </label>
        </div>

        <div>
          <label> Enter your email address
            <InputField control={control} name='email' type='email' />
          </label>
        </div>

        <div>
          <label> Enter your date of birth
            <InputField control={control} name='date' type='date' />
          </label>
        </div>
        <button type="submit" disabled={!isValid || isSubmitting}> Submit</button>
      </form>
    </div>
  )
}
export default App
