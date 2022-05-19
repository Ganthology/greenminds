import { Badge, Progress } from '@mantine/core'

const ProjectCard = () => {
  return (
    <div className='space-y-4'>
      <div className='bg-stone-100 py-4 px-4 rounded-md shadow-md'>
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
        <div className='space-y-2 py-2'>
          <div className='flex items-center space-x-2 text-xs'>
            <p>Trusted by:</p>
            <Badge>4 Experts</Badge>
          </div>
          <div className='flex items-center space-x-2 text-xs'>
            <p>Backed by:</p>
            <Badge color='green'>90 Members</Badge>
          </div>
          <h2 className='font-medium text-base'>Fund Raised:</h2>
          <span className='font-medium'>USD 75, 000/ USD 100, 000</span>
          <Progress value={75} label='75%' size='xl' radius='xl' />
          <div className='space-x-2 pt-2'>
            <a className='py-2 px-4 bg-green-400 text-green-800 rounded-md hover:-translate-y-1 transition hover:cursor-pointer'>
              Fund them
            </a>
            <a className='py-2 px-4 bg-stone-200 text-stone-800 rounded-md hover:-translate-y-1 transition hover:cursor-pointer'>
              Details
            </a>
          </div>
        </div>
      </div>

      <div className='bg-stone-100 py-4 px-4 rounded-md shadow-md'>
        <div className='flex justify-between'>
          <h1 className='text-xl font-semibold'>Future Food Project: Japan</h1>
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
        <div className='space-y-2 py-2'>
          <div className='flex items-center space-x-2 text-xs'>
            <p>Trusted by:</p>
            <Badge>4 Experts</Badge>
          </div>
          <div className='flex items-center space-x-2 text-xs'>
            <p>Backed by:</p>
            <Badge color='green'>90 Members</Badge>
          </div>
          <h2 className='font-medium text-base'>Fund Raised:</h2>
          <span className='font-medium'>USD 75, 000/ USD 100, 000</span>
          <Progress value={75} label='75%' size='xl' radius='xl' />
          <div className='space-x-2 pt-2'>
            <a className='py-2 px-4 bg-green-400 text-green-800 rounded-md hover:-translate-y-1 transition hover:cursor-pointer'>
              Fund them
            </a>
            <a className='py-2 px-4 bg-stone-200 text-stone-800 rounded-md hover:-translate-y-1 transition hover:cursor-pointer'>
              Details
            </a>
          </div>
        </div>
      </div>

      <div className='bg-stone-100 py-4 px-4 rounded-md shadow-md'>
        <div className='flex justify-between'>
          <h1 className='text-xl font-semibold'>
            Future Food Project: Malaysia
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
        <div className='space-y-2 py-2'>
          <div className='flex items-center space-x-2 text-xs'>
            <p>Trusted by:</p>
            <Badge>4 Experts</Badge>
          </div>
          <div className='flex items-center space-x-2 text-xs'>
            <p>Backed by:</p>
            <Badge color='green'>90 Members</Badge>
          </div>
          <h2 className='font-medium text-base'>Fund Raised:</h2>
          <span className='font-medium'>USD 75, 000/ USD 100, 000</span>
          <Progress value={75} label='75%' size='xl' radius='xl' />
          <div className='space-x-2 pt-2'>
            <a className='py-2 px-4 bg-green-400 text-green-800 rounded-md hover:-translate-y-1 transition hover:cursor-pointer'>
              Fund them
            </a>
            <a className='py-2 px-4 bg-stone-200 text-stone-800 rounded-md hover:-translate-y-1 transition hover:cursor-pointer'>
              Details
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
