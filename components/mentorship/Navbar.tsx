import React, { useState } from 'react'
import {
  createStyles,
  Container,
  Avatar,
  UnstyledButton,
  Group,
  Text,
  Menu,
  Divider,
  Tabs,
  Burger,
} from '@mantine/core'
import { useBooleanToggle } from '@mantine/hooks'
import { useDisclosure } from '@mantine/hooks'
import {
  Logout,
  Heart,
  Star,
  Message,
  Settings,
  PlayerPause,
  Trash,
  SwitchHorizontal,
  ChevronDown,
} from 'tabler-icons-react'
import GreenMindsLogo from '../../public/GreenMinds.png'
import Image from 'next/image'
import { useRouter } from 'next/router'

const useStyles = createStyles((theme) => ({
  header: {
    paddingTop: theme.spacing.sm,
    backgroundColor: '#2d6a4f',
    borderBottom: `1px solid ${theme.colors[theme.primaryColor][6]}`,
    marginBottom: '20px',
  },

  mainSection: {
    paddingBottom: theme.spacing.sm,
  },

  userMenu: {
    [theme.fn.smallerThan('xs')]: {
      display: 'none',
    },
  },

  user: {
    color: theme.white,
    padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
    borderRadius: theme.radius.sm,
    transition: 'background-color 100ms ease',

    '&:hover': {
      backgroundColor: '#1b4332',
    },
  },

  burger: {
    [theme.fn.largerThan('xs')]: {
      display: 'none',
    },
  },

  userActive: {
    backgroundColor: '#1b4332',
  },

  tabs: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  tabsList: {
    borderBottom: '0 !important',
  },

  tabControl: {
    fontWeight: 500,
    height: 38,
    color: `${theme.white} !important`,

    '&:hover': {
      backgroundColor: '#1b4332',
    },
  },

  tabControlActive: {
    color: `${
      theme.colorScheme === 'dark' ? theme.white : theme.black
    } !important`,
    borderColor: `${theme.colors[theme.primaryColor][6]} !important`,
  },
}))

interface HeaderTabsProps {
  user: { name: string; image: string }
  tabs: { name: string; path: string }[]
  currentIndex: number
}

export function Navbar({ user, tabs, currentIndex }: HeaderTabsProps) {
  const { classes, theme, cx } = useStyles()
  // const [opened, toggleOpened] = useBooleanToggle(false)
  const [userMenuOpened, setUserMenuOpened] = useState(false)
  const [index, setIndex] = useState(currentIndex)

  const router = useRouter()
  const [opened, handlers] = useDisclosure(false)

  const items = tabs.map((tab) => <Tabs.Tab label={tab.name} key={tab.name} />)

  return (
    <div className={classes.header}>
      <Container className={classes.mainSection}>
        <Group position='apart'>
          <Image src={GreenMindsLogo} alt='GreenMinds' height={50} width={50} />

          {/* <Burger
            opened={opened}
            onClick={() => toggleOpened()}
            className={classes.burger}
            size='sm'
            color={theme.white}
          /> */}
          <div className='flex sm:hidden'>
            <Menu
              opened={opened}
              onOpen={handlers.open}
              onClose={handlers.close}
              className='bg-green-500/80 rounded-md'
            >
              <Menu.Label>Tabs</Menu.Label>
              {tabs.map((tab) => {
                return (
                  <Menu.Item
                    key={tab.name}
                    onClick={() => router.push(tab.path)}
                  >
                    {tab.name}
                  </Menu.Item>
                )
              })}
            </Menu>
          </div>

          <Menu
            size={260}
            placement='end'
            transition='pop-top-right'
            className={classes.userMenu}
            onClose={() => setUserMenuOpened(false)}
            onOpen={() => setUserMenuOpened(true)}
            control={
              <UnstyledButton
                className={cx(classes.user, {
                  [classes.userActive]: userMenuOpened,
                })}
              >
                <Group spacing={7}>
                  <Avatar
                    src={user.image}
                    alt={user.name}
                    radius='xl'
                    size={20}
                  />
                  <Text
                    weight={500}
                    size='sm'
                    sx={{ lineHeight: 1, color: theme.white }}
                    mr={3}
                  >
                    {user.name}
                  </Text>
                  <ChevronDown size={12} />
                </Group>
              </UnstyledButton>
            }
          >
            <Menu.Item icon={<Heart size={14} color={theme.colors.red[6]} />}>
              Liked posts
            </Menu.Item>
            <Menu.Item icon={<Star size={14} color={theme.colors.yellow[6]} />}>
              Saved posts
            </Menu.Item>
            <Menu.Item
              icon={<Message size={14} color={theme.colors.blue[6]} />}
            >
              Your comments
            </Menu.Item>

            <Menu.Label>Settings</Menu.Label>
            <Menu.Item icon={<Settings size={14} />}>
              Account settings
            </Menu.Item>
            <Menu.Item icon={<SwitchHorizontal size={14} />}>
              Change account
            </Menu.Item>
            <Menu.Item icon={<Logout size={14} />}>Logout</Menu.Item>

            <Divider />

            <Menu.Label>Danger zone</Menu.Label>
            <Menu.Item icon={<PlayerPause size={14} />}>
              Pause subscription
            </Menu.Item>
            <Menu.Item color='red' icon={<Trash size={14} />}>
              Delete account
            </Menu.Item>
          </Menu>
        </Group>
      </Container>
      <Container>
        <Tabs
          variant='outline'
          classNames={{
            root: classes.tabs,
            tabsListWrapper: classes.tabsList,
            tabControl: classes.tabControl,
            tabActive: classes.tabControlActive,
          }}
          initialTab={index}
          onTabChange={(tabIndex) => router.push(tabs[tabIndex].path)}
        >
          {items}
        </Tabs>
      </Container>
    </div>
  )
}
