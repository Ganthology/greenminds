import { Card, Image, Badge } from '@mantine/core'
import Link from 'next/link'

interface LearningCardProps {
  src: string
}

const LearningCard = ({ src }: LearningCardProps) => {
  return (
    <Link href='https://www.youtube.com/watch?v=W3M65Iy2DXQ'>
      <a target='_blank'>
        <Card className='rounded-lg bg-stone-100 hover:-translate-y-1 shadow-lg transition hover:cursor-pointer'>
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
            <p className='font-semibold text-lg'>Future Food 101</p>
          </Card.Section>
          <Card.Section className='px-4 pb-2 font-medium'>
            <Badge color={'green'}>Future Food</Badge>
            <Badge color='grape'>Green Tech</Badge>
          </Card.Section>
        </Card>
      </a>
    </Link>
  )
}

export default LearningCard
