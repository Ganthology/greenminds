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
        <div className='sm:flex sm:space-x-4 space-y-4 sm:space-y-0'>
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
            src='https://prod5.assets-cdn.io/event/6753/assets/8348262094-ab3fc61f8b.png'
          />
          <EventCard
            start={5}
            end={6}
            name='Foundation of Future Food'
            date='22 May 2022'
            src='https://pbs.twimg.com/media/FJd4BpOXEAQKLMT.jpg'
          />
        </div>
        <div className='sm:flex sm:space-x-4 space-y-4 sm:space-y-0'>
          <EventCard
            start={5}
            end={6}
            name='Foundation of Future Food'
            date='22 May 2022'
            src='https://cdn-az.allevents.in/events5/banners/af5dcf441692ab8de1f0c9f77c6ae4d4909de9a2235ed8f6efbcf4f17da8f9a6-rimg-w1080-h540-gmir.jpg?v=1650703136'
          />
          <EventCard
            start={5}
            end={6}
            name='Foundation of Future Food'
            date='22 May 2022'
            src='https://www.foodformzansi.co.za/wp-content/uploads/2022/02/gtg-1024x576.jpg'
          />
          <EventCard
            start={5}
            end={6}
            name='Foundation of Future Food'
            date='22 May 2022'
            src='https://www.forigo.it/hubfs/macfrut%20eng%20.jpg'
          />
        </div>
        <div className='sm:flex sm:space-x-4 space-y-4 sm:space-y-0'>
          <EventCard
            start={5}
            end={6}
            name='Foundation of Future Food'
            date='22 May 2022'
            src='https://www.forigo.it/hubfs/macfrut%20eng%20.jpg'
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
