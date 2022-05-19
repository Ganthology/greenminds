import Navbar from '../components/common/Navbar'
import { useForm } from '@mantine/form'
import {
  TextInput,
  Checkbox,
  RadioGroup,
  Radio,
  Select,
  PasswordInput,
} from '@mantine/core'
import { At, User, Flag } from 'tabler-icons-react'

interface SignupFormProps {
  identity: string
  name: string
  email: string
  password: string
  economy: string
  termsOfService: boolean
}

const Signup = () => {
  const form = useForm<SignupFormProps>({
    initialValues: {
      identity: '',
      name: '',
      email: '',
      password: '',
      economy: '',
      termsOfService: false,
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
  })

  return (
    <div className='mx-auto h-screen bg-[#081c15] scroll-smooth'>
      <Navbar />
      <div className='container bg-zinc-50 mx-auto px-6 py-4 rounded-lg shadow-lg grid grid-cols-2'>
        <div className='space-y-2 border-r-2 pr-4'>
          <h1 className='text-2xl font-semibold'>Sign Up</h1>
          <h2 className='text-xl font-semibold text-green-600'>
            Join us on making the world a greener place!
          </h2>
          <form
            onSubmit={form.onSubmit((values) => console.log(values))}
            className='space-y-4'
          >
            <RadioGroup
              label='I am a'
              required
              size='sm'
              {...form.getInputProps('identity')}
            >
              <Radio value='mentor' label='Mentor' />
              <Radio value='mentee' label='Mentee' />
            </RadioGroup>
            <TextInput
              required
              label='Name'
              placeholder='Your Name'
              icon={<User size={14} />}
              {...form.getInputProps('name')}
            />
            <TextInput
              required
              label='Email'
              placeholder='your@email.com'
              icon={<At size={14} />}
              {...form.getInputProps('email')}
            />
            <PasswordInput
              placeholder='Password'
              label='Password'
              description='Password must include at least one letter, number and special character'
              required
            />
            <Select
              required
              label='Economies of Origin'
              placeholder='Where are you from?'
              data={[
                { value: 'malaysia', label: 'Malaysia' },
                { value: 'thailand', label: 'Thailand' },
                { value: 'philippines', label: 'Philippines' },
                { value: 'indonesia', label: 'Indonesia' },
              ]}
              searchable
              allowDeselect
              icon={<Flag size={14} />}
              {...form.getInputProps('economy')}
            />

            <Checkbox
              mt='md'
              label='I agree to the terms and services'
              {...form.getInputProps('termsOfService', { type: 'checkbox' })}
            />
            <input
              type='submit'
              value='Sign Up'
              className='bg-green-200 text-green-600 font-semibold text-sm hover:bg-green-100 py-2 px-4 rounded-md hover:cursor-pointer'
            />
          </form>
        </div>
      </div>
    </div>
  )
}

export default Signup
