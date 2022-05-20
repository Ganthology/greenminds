import { Card, Image, Badge } from '@mantine/core'
import Link from 'next/link'
import { useModals } from '@mantine/modals'

interface LearningCardProps {
  src: string
}

const LearningCard = ({ src }: LearningCardProps) => {
  const modals = useModals()

  const openBookingModal = () =>
    modals.openConfirmModal({
      title: 'Future Food 101',
      children: (
        <div className='text-center items-center'>
          <iframe
            width='380'
            height='315'
            src='https://www.youtube.com/embed/W3M65Iy2DXQ'
            title='YouTube video player'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
          ></iframe>
        </div>
      ),
      labels: { confirm: 'Confirm', cancel: 'Close' },
      onCancel: () => console.log(),
      onConfirm: () => console.log(),
    })

  return (
    <a onClick={openBookingModal}>
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
          <Badge color='grape'>Food Waste</Badge>
          <Badge>Food and product</Badge>
        </Card.Section>
      </Card>
    </a>
  )
}

export default LearningCard
