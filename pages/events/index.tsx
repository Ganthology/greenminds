import { Navbar } from '../../components/mentorship/Navbar'
import { Container } from '@mantine/core'
import EventCard from '../../components/events/EventCard'

const Events = () => {
  return (
    <div>
      <Navbar
        user={{
          name: 'Ray Gan',
          image: 'https://avatars.githubusercontent.com/u/18641991?v=4',
        }}
        currentIndex={2}
        tabs={[
          { name: 'Home', path: '/home' },
          { name: 'Mentorships', path: '/mentorships' },
          { name: 'Events', path: '/events' },
          { name: 'Projects', path: '/projects' },
        ]}
      />
      <Container className='space-y-2 pb-16'>
        <div>
          <h1 className='text-2xl font-semibold'>Recent Events</h1>
        </div>
        <div className='flex space-x-4'>
          <EventCard
            start={5}
            end={6}
            name='Foundation of Future Food'
            date='22 May 2022'
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMhIeUuaS8t-sHfW8CoKir_pDEKr1cPXFGfg&usqp=CAU'
          />
          <EventCard
            start={5}
            end={6}
            name='Foundation of Future Food'
            date='22 May 2022'
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMhIeUuaS8t-sHfW8CoKir_pDEKr1cPXFGfg&usqp=CAU'
          />
          <EventCard
            start={5}
            end={6}
            name='Foundation of Future Food'
            date='22 May 2022'
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMhIeUuaS8t-sHfW8CoKir_pDEKr1cPXFGfg&usqp=CAU'
          />
        </div>
        <div className='flex space-x-4'>
          <EventCard
            start={5}
            end={6}
            name='Foundation of Future Food'
            date='22 May 2022'
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMhIeUuaS8t-sHfW8CoKir_pDEKr1cPXFGfg&usqp=CAU'
          />
          <EventCard
            start={5}
            end={6}
            name='Foundation of Future Food'
            date='22 May 2022'
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMhIeUuaS8t-sHfW8CoKir_pDEKr1cPXFGfg&usqp=CAU'
          />
          <EventCard
            start={5}
            end={6}
            name='Foundation of Future Food'
            date='22 May 2022'
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMhIeUuaS8t-sHfW8CoKir_pDEKr1cPXFGfg&usqp=CAU'
          />
        </div>
        <div className='flex space-x-4'>
          <EventCard
            start={5}
            end={6}
            name='Foundation of Future Food'
            date='22 May 2022'
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMhIeUuaS8t-sHfW8CoKir_pDEKr1cPXFGfg&usqp=CAU'
          />
          <EventCard
            start={5}
            end={6}
            name='Foundation of Future Food'
            date='22 May 2022'
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMhIeUuaS8t-sHfW8CoKir_pDEKr1cPXFGfg&usqp=CAU'
          />
          <EventCard
            start={5}
            end={6}
            name='Foundation of Future Food'
            date='22 May 2022'
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMhIeUuaS8t-sHfW8CoKir_pDEKr1cPXFGfg&usqp=CAU'
          />
        </div>
      </Container>
    </div>
  )
}

export default Events
