import { Flex, Icon, IconButton, useBreakpointValue } from '@chakra-ui/react'
import { RiMenuLine } from 'react-icons/ri'

import { Logo } from './Logo'
import { Profile } from './Profile'
import { NotificationsNav } from './NotificationsNav'
import { SearchBox } from './SearchBox'
import { useSidebarDrawer } from '../../contexts/SidebarDrawerContext'

export function Header() {
  const isWideVersion = useBreakpointValue({ base: false, lg: true })
  const { onOpen } = useSidebarDrawer()

  return (
    <Flex
      as='header'
      w='100%'
      maxW={1480}
      h='20'
      mx='auto'
      mt='4'
      px='6'
      align='center'
    >
      {!isWideVersion && (
        <IconButton
          aria-label='Abrir menu'
          onClick={onOpen}
          icon={<Icon as={RiMenuLine} />}
          fontSize='24'
          variant='unstyled'
          mr='2'
        />
      )}
      <Logo />

      {!!isWideVersion && <SearchBox />}

      <Flex align='center' ml='auto'>
        <NotificationsNav />
        <Profile showProfileData={isWideVersion} />
      </Flex>
    </Flex>
  )
}
