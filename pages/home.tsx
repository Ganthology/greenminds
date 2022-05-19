import { Navbar } from '../components/mentorship/Navbar'
import { Container, Select, TextInput } from '@mantine/core'
import MentorCard from '../components/mentorship/MentorCard'
import { Search, Apple, Flag } from 'tabler-icons-react'
import { Calendar } from '@mantine/dates'
import LearningCard from '../components/learning/LearningCard'
import Link from 'next/link'

const Home = () => {
  return (
    <div>
      <Navbar
        user={{
          name: 'Ray Gan',
          image: 'https://avatars.githubusercontent.com/u/18641991?v=4',
        }}
        currentIndex={0}
        tabs={[
          { name: 'Home', path: '/home' },
          { name: 'Mentorships', path: '/mentorships' },
          { name: 'Events', path: '/events' },
          { name: 'Projects', path: '/projects' },
        ]}
      />
      <Container className='space-y-2 pb-16'>
        <div className='space-y-4'>
          <h1 className='text-2xl font-semibold'>Dashboard</h1>
          <Calendar
            amountOfMonths={1}
            className='mx-auto'
            fullWidth
            onChange={() => console.log('Calendar Clicked')}
          />
          <div className='bg-stone-100 px-4 py-4 text-sm font-light rounded-md'>
            <p className=''>You have no upcoming appointments</p>
            <Link href='/mentorships'>
              <a className='text-green-600 underline hover:font-medium transition'>
                Details
              </a>
            </Link>
          </div>
        </div>
        <div className='space-y-4 pb-4'>
          <div className='flex items-baseline justify-between'>
            <h1 className='font-semibold text-2xl'>Learning Resources</h1>
            <p className='text-xs underline hover:cursor-pointer'>See all</p>
          </div>
        </div>
        <div className='sm:flex sm:space-x-4 space-y-4 sm:space-y-0'>
          <LearningCard
            src={
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMhIeUuaS8t-sHfW8CoKir_pDEKr1cPXFGfg&usqp=CAU'
            }
          />
          <LearningCard
            src={
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMhIeUuaS8t-sHfW8CoKir_pDEKr1cPXFGfg&usqp=CAU'
            }
          />
          <LearningCard
            src={
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMhIeUuaS8t-sHfW8CoKir_pDEKr1cPXFGfg&usqp=CAU'
            }
          />
        </div>
      </Container>
    </div>
  )
}

export default Home
