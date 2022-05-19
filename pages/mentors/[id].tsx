import { Navbar } from '../../components/mentorship/Navbar'
import { Container, Avatar, NumberInput, Select } from '@mantine/core'
import { Flag, Building, Briefcase, Apple } from 'tabler-icons-react'
import MentorCard from '../../components/mentorship/MentorCard'
import { useModals } from '@mantine/modals'
import { DatePicker, TimeInput } from '@mantine/dates'
import { showNotification } from '@mantine/notifications'

const Mentor = () => {
  const modals = useModals()

  const openBookingModal = () =>
    modals.openConfirmModal({
      title: 'Mentorship Appointment',
      children: (
        <div>
          <DatePicker
            placeholder='Pick date'
            label='Mentorship date'
            required
            minDate={new Date()}
          />
          <TimeInput label='Mentorship time' placeholder='Pick Time' required />
          <Select
            required
            label='Topic Specialisation'
            placeholder='Choose a topic'
            data={[
              { value: 'malaysia', label: 'Malaysia' },
              { value: 'thailand', label: 'Thailand' },
              { value: 'philippines', label: 'Philippines' },
              { value: 'indonesia', label: 'Indonesia' },
            ]}
            searchable
            allowDeselect
            icon={<Apple size={24} />}
          />
          <NumberInput
            defaultValue={1}
            placeholder='Number of People'
            label='Number of People'
            required
          />
        </div>
      ),
      labels: { confirm: 'Confirm', cancel: 'Confirm' },
      onCancel: () =>
        showNotification({
          title: 'Invitation Sent',
          message: "You'll be notfied when your mentor accepts the invitation",
          color: 'green',
        }),
      onConfirm: () =>
        showNotification({
          title: 'Invitation Sent',
          message: "You'll be notfied when your mentor accepts the invitation",
          color: 'green',
        }),
    })

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
          <div className=' bg-stone-100 py-8 px-6 drop-shadow-lg rounded-md'>
            <div className='flex items-center'>
              <Avatar
                src={'https://files.gqthailand.com/uploads/elolnnnn.jpg'}
                className='w-32 h-32 rounded-full border border-stone-200/70'
              />
              <div className='px-6'>
                <h1 className='font-semibold text-2xl'>Elon Musk</h1>

                <div className='flex items-center space-x-2 font-medium'>
                  <Briefcase size={20} />
                  <p>Founder</p>
                </div>
                <div className='flex items-center space-x-2 font-medium'>
                  <Building size={20} />
                  <p>Tesla, SpaceX</p>
                </div>
                <div className='flex items-center space-x-2 font-medium'>
                  <Flag size={20} />
                  <p>United States</p>
                </div>
              </div>
            </div>
            <p className='text-base py-4'>
              Elon Reeve Musk FRS is a business magnate, investor, and
              philanthropist. He is the founder, CEO, and Chief Engineer at
              SpaceX; angel investor, CEO, and Product Architect of Tesla, Inc.;
              founder of The Boring Company; and co-founder of Neuralink and
              OpenAI.
            </p>

            <div className='flex space-x-4'>
              <a
                className='bg-green-400 py-2 px-4 rounded-md text-green-800 hover:cursor-pointer'
                onClick={openBookingModal}
              >
                Book a mentorship session
              </a>
              <a className='bg-stone-300 py-2 px-4 rounded-md text-stone-800 hover:cursor-pointer'>
                Mentorship History
              </a>
            </div>
          </div>
        </div>
        <h1 className='font-semibold text-2xl'>Suggested Mentors</h1>
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
      </Container>
    </div>
  )
}

export default Mentor
