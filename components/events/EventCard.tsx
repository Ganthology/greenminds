import { Card, Image } from '@mantine/core'
import { Clock, MapPin } from 'tabler-icons-react'

const EventCard = () => {
  return (
    <Card className='sm:w-1/3 rounded-lg bg-stone-100 hover:-translate-y-1 shadow-lg transition hover:cursor-pointer'>
      <Card.Section>
        <Image
          src={
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMhIeUuaS8t-sHfW8CoKir_pDEKr1cPXFGfg&usqp=CAU'
          }
          fit='cover'
          height={250}
          alt={'futurefood'}
          className='rounded'
        />
      </Card.Section>
      <Card.Section className='px-4 pt-2 pb-2'>
        <p className='font-semibold text-lg'>{'Foundation of Future Food'}</p>
        <p className='font-semibold text-sm text-green-700'>{'22 May 2022'}</p>
      </Card.Section>
      <Card.Section className='px-4 pb-2 font-medium'>
        <div className='flex items-center space-x-2'>
          <Clock size={14} />
          <p>{'5:00 PM - 6:00 PM'}</p>
        </div>
        <div className='flex items-center space-x-2'>
          <MapPin size={14} />
          <p>{'Online'}</p>
        </div>
      </Card.Section>
      <Card.Section className='px-2 pb-4'></Card.Section>
    </Card>
  )
}

export default EventCard
