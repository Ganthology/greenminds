import Navbar from '../components/common/Navbar'
import { useForm } from '@mantine/form'
import { TextInput, PasswordInput } from '@mantine/core'
import { At } from 'tabler-icons-react'
import { useRouter } from 'next/router'

interface SigninFormProps {
  email: string
  password: string
}

const Signin = () => {
  const form = useForm<SigninFormProps>({
    initialValues: {
      email: '',
      password: '',
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
  })

  const router = useRouter()

  return (
    <div className='mx-auto h-screen bg-[#081c15] scroll-smooth'>
      <Navbar />
      <div className='container bg-zinc-50 mx-auto px-6 py-4 rounded-lg shadow-lg sm:grid sm:grid-cols-2'>
        <div className='space-y-4 sm:border-r-2 sm:pr-4'>
          <h1 className='text-2xl font-semibold'>Sign In</h1>
          <form
            onSubmit={form.onSubmit((values) => router.push('/home'))}
            className='space-y-4'
          >
            <TextInput
              required
              label='Email'
              placeholder='your@email.com'
              icon={<At size={14} />}
              {...form.getInputProps('email')}
              onFocus={() => {}}
            />
            <PasswordInput
              placeholder='Password'
              label='Password'
              description='Password must include at least one letter, number and special character'
              required
            />
            <input
              type='submit'
              value='Sign In'
              className='bg-green-200 text-green-600 font-semibold text-sm hover:bg-green-100 py-2 px-4 rounded-md hover:cursor-pointer'
            />
          </form>
        </div>
      </div>
    </div>
  )
}

export default Signin
