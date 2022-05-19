import { Card, Image, Badge } from '@mantine/core'
import { Briefcase, Building, Flag } from 'tabler-icons-react'
import Link from 'next/link'

interface MentorCardProps {
  src: string
  name: string
  review: number
  occupation: string
  company: string
  economy: string
  category: string[]
}

const MentorCard = ({
  src,
  name,
  review,
  occupation,
  company,
  economy,
  category,
}: MentorCardProps) => {
  return (
    <Link href={`/mentors/${encodeURIComponent(name)}`}>
      <Card className='sm:w-1/3 rounded-lg bg-stone-100 hover:-translate-y-1 shadow-lg transition hover:cursor-pointer'>
        <Card.Section>
          <Image
            src={src}
            fit='cover'
            height={250}
            alt={name}
            className='rounded'
          />
        </Card.Section>
        <Card.Section className='px-4 pt-2 pb-2 flex items-center space-x-2'>
          <p className='font-semibold text-lg'>{name}</p>
          <p className='font-semibold text-sm'>{review}</p>
        </Card.Section>
        <Card.Section className='px-4 pb-2 font-medium'>
          <div className='flex items-center space-x-2'>
            <Briefcase size={14} />
            <p>{occupation}</p>
          </div>
          <div className='flex items-center space-x-2'>
            <Building size={14} />
            <p>{company}</p>
          </div>
          <div className='flex items-center space-x-2'>
            <Flag size={14} />
            <p>{economy}</p>
          </div>
        </Card.Section>
        <Card.Section className='px-2 pb-4'>
          {category.map((item) => {
            return (
              <Badge key={item} color='green'>
                {item}
              </Badge>
            )
          })}
        </Card.Section>
      </Card>
    </Link>
  )
}

export default MentorCard
