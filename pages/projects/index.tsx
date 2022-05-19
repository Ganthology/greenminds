import { Navbar } from '../../components/mentorship/Navbar'
import { Container } from '@mantine/core'

const Projects = () => {
  return (
    <div>
      <Navbar
        user={{
          name: 'Ray Gan',
          image: 'https://avatars.githubusercontent.com/u/18641991?v=4',
        }}
        currentIndex={3}
        tabs={[
          { name: 'Home', path: '/home' },
          { name: 'Mentorships', path: '/mentorships' },
          { name: 'Events', path: '/events' },
          { name: 'Projects', path: '/projects' },
        ]}
      />
      <Container className='space-y-2 pb-16'>
        <div>
          <h1 className='text-2xl font-semibold'>Ongoing Fundraiser</h1>
        </div>
      </Container>
    </div>
  )
}

export default Projects
