import React from 'react'
import { createStyles, Container, Title, Text, Button } from '@mantine/core'
import { useRouter } from 'next/router'

const useStyles = createStyles((theme) => ({
  root: {
    backgroundColor: '#11284b',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundImage:
      'linear-gradient(250deg, rgba(130, 201, 30, 0) 0%, #081c15 70%), url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80)',
    paddingTop: theme.spacing.xl * 3,
    paddingBottom: theme.spacing.xl * 3,
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',

    [theme.fn.smallerThan('md')]: {
      flexDirection: 'column',
    },
  },

  image: {
    [theme.fn.smallerThan('md')]: {
      display: 'none',
    },
  },

  content: {
    paddingTop: theme.spacing.xl * 2,
    paddingBottom: theme.spacing.xl * 2,
    marginRight: theme.spacing.xl * 3,

    [theme.fn.smallerThan('md')]: {
      marginRight: 0,
    },
  },

  title: {
    color: theme.white,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    lineHeight: 1.05,
    maxWidth: 500,
    fontSize: 48,

    [theme.fn.smallerThan('md')]: {
      maxWidth: '100%',
      fontSize: 34,
      lineHeight: 1.15,
    },
  },

  description: {
    color: theme.white,
    opacity: 0.75,
    maxWidth: 500,

    [theme.fn.smallerThan('md')]: {
      maxWidth: '100%',
    },
  },

  control: {
    paddingLeft: 50,
    paddingRight: 50,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: 22,

    [theme.fn.smallerThan('md')]: {
      width: '100%',
    },
  },
}))

export function HeroImageRight() {
  const { classes } = useStyles()
  const router = useRouter()

  return (
    <div className={classes.root}>
      <Container size='lg'>
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              Connecting with{' '}
              <Text
                component='span'
                inherit
                variant='gradient'
                gradient={{ from: 'green', to: 'yellow' }}
              >
                Green Experts
              </Text>{' '}
              Mentorship Platform
            </Title>

            <Text className={classes.description} mt={30}>
              Learn from the experts, Share your knowledge, Get funded and start
              your green economy business today.
            </Text>

            <Button
              size='xl'
              className={`${classes.control} bg-gradient-to-r from-green-700 to-yellow-500 rounded-md`}
              mt={40}
              onClick={() => router.push('/signin')}
            >
              Connect now
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}
