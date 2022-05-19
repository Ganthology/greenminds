import { Badge } from '@mantine/core'

const ProjectCard = () => {
  return (
    <div>
      <div className='bg-stone-100 py-4 px-4 rounded-md'>
        <div className='flex justify-between'>
          <h1 className='text-xl font-semibold'>
            Future Food Project: Thailand
          </h1>
          <h2 className='text-sm'>22 May 2022 - 30 May 2022</h2>
        </div>
        <p className='text-sm'>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book. It has survived not
          only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <div className='flex space-x-2 py-2'>
          <Badge color='orange'>Ongoing</Badge>
          <div className='flex items-center space-x-2 text-xs'>
            <p>Backed by:</p>
            <Badge>4 Experts</Badge>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
