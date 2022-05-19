import { Card, Image } from '@mantine/core'
import { Clock, MapPin } from 'tabler-icons-react'

interface EventCardProps {
  src: string
  name: string
  date: string
  start: number
  end: number
}

const EventCard = ({ src, name, date, start, end }: EventCardProps) => {
  return (
    <Card className='sm:w-1/3 rounded-lg bg-stone-100 hover:-translate-y-1 shadow-lg transition hover:cursor-pointer'>
      <Card.Section>
        <Image
          src={src}
          fit='cover'
          height={250}
          alt={'futurefood'}
          className='rounded'
        />
      </Card.Section>
      <Card.Section className='px-4 pt-2 pb-2'>
        <p className='font-semibold text-lg'>{name}</p>
        <p className='font-semibold text-sm text-green-700'>{date}</p>
      </Card.Section>
      <Card.Section className='px-4 pb-2 font-medium'>
        <div className='flex items-center space-x-2'>
          <Clock size={14} />
          <p>{`${start}:00 PM - ${end}:00 PM`}</p>
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
