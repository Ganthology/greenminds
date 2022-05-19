import { HeroImageRight } from '../components/common/HeroImage'
import Navbar from '../components/common/Navbar'

const Home = () => {
  return (
    <div className='mx-auto bg-[#081c15]  scroll-smooth'>
      <Navbar />
      <HeroImageRight />
    </div>
  )
}

export default Home
