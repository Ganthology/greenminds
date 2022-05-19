import { Navbar } from '../../components/mentorship/Navbar'
import MentorCard from '../../components/mentorship/MentorCard'
import { Select, TextInput, Container } from '@mantine/core'
import { Flag, Search, Apple } from 'tabler-icons-react'

const Mentorships = () => {
  return (
    <div>
      <Navbar
        user={{
          name: 'Ray Gan',
          image: 'https://avatars.githubusercontent.com/u/18641991?v=4',
        }}
        currentIndex={1}
        tabs={[
          { name: 'Home', path: '/home' },
          { name: 'Mentorships', path: '/mentorships' },
          { name: 'Events', path: '/events' },
          { name: 'Projects', path: '/projects' },
        ]}
      />
      <Container className='space-y-2 pb-16'>
        <div className='space-y-4 pb-4'>
          <h1 className='font-semibold text-2xl'>Mentors</h1>
          <div className='flex space-x-2'>
            <Select
              required
              placeholder='Specialisation'
              data={[
                { value: 'malaysia', label: 'Malaysia' },
                { value: 'thailand', label: 'Thailand' },
                { value: 'philippines', label: 'Philippines' },
                { value: 'indonesia', label: 'Indonesia' },
              ]}
              searchable
              allowDeselect
              size='lg'
              icon={<Apple size={24} />}
              className='w-1/4'
            />
            <Select
              required
              placeholder='Economy'
              data={[
                { value: 'malaysia', label: 'Malaysia' },
                { value: 'thailand', label: 'Thailand' },
                { value: 'philippines', label: 'Philippines' },
                { value: 'indonesia', label: 'Indonesia' },
              ]}
              searchable
              allowDeselect
              size='lg'
              icon={<Flag size={24} />}
              className='w-1/4'
            />
            <TextInput
              rightSection={<Search size={24} />}
              placeholder='Find a mentor'
              size='lg'
              className='w-1/2'
            />
          </div>
        </div>
        <div className='space-y-4'>
          <div className='sm:flex rounded-md text-sm font-light sm:space-x-4 space-y-4 sm:space-y-0'>
            <MentorCard
              src='https://files.gqthailand.com/uploads/elolnnnn.jpg'
              name='Elon Musk'
              review={4.8}
              occupation='Founder'
              company='Tesla, SpaceX'
              economy='The United States'
              category={['Reusable energy', 'Electric Car']}
            />
            <MentorCard
              src='https://files.gqthailand.com/uploads/elolnnnn.jpg'
              name='Elon Musk'
              review={4.8}
              occupation='Founder'
              company='Tesla, SpaceX'
              economy='The United States'
              category={['Reusable energy', 'Electric Car']}
            />
            <MentorCard
              src='https://files.gqthailand.com/uploads/elolnnnn.jpg'
              name='Elon Musk'
              review={4.8}
              occupation='Founder'
              company='Tesla, SpaceX'
              economy='The United States'
              category={['Reusable energy', 'Electric Car']}
            />
          </div>
          <div className='sm:flex rounded-md text-sm font-light sm:space-x-4 space-y-4 sm:space-y-0'>
            <MentorCard
              src='https://files.gqthailand.com/uploads/elolnnnn.jpg'
              name='Elon Musk'
              review={4.8}
              occupation='Founder'
              company='Tesla, SpaceX'
              economy='The United States'
              category={['Reusable energy', 'Electric Car']}
            />
            <MentorCard
              src='https://files.gqthailand.com/uploads/elolnnnn.jpg'
              name='Elon Musk'
              review={4.8}
              occupation='Founder'
              company='Tesla, SpaceX'
              economy='The United States'
              category={['Reusable energy', 'Electric Car']}
            />
            <MentorCard
              src='https://files.gqthailand.com/uploads/elolnnnn.jpg'
              name='Elon Musk'
              review={4.8}
              occupation='Founder'
              company='Tesla, SpaceX'
              economy='The United States'
              category={['Reusable energy', 'Electric Car']}
            />
          </div>
          <div className='sm:flex rounded-md text-sm font-light sm:space-x-4 space-y-4 sm:space-y-0'>
            <MentorCard
              src='https://files.gqthailand.com/uploads/elolnnnn.jpg'
              name='Elon Musk'
              review={4.8}
              occupation='Founder'
              company='Tesla, SpaceX'
              economy='The United States'
              category={['Reusable energy', 'Electric Car']}
            />
            <MentorCard
              src='https://files.gqthailand.com/uploads/elolnnnn.jpg'
              name='Elon Musk'
              review={4.8}
              occupation='Founder'
              company='Tesla, SpaceX'
              economy='The United States'
              category={['Reusable energy', 'Electric Car']}
            />
            <MentorCard
              src='https://files.gqthailand.com/uploads/elolnnnn.jpg'
              name='Elon Musk'
              review={4.8}
              occupation='Founder'
              company='Tesla, SpaceX'
              economy='The United States'
              category={['Reusable energy', 'Electric Car']}
            />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Mentorships
