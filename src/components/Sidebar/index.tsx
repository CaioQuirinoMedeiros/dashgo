import {
  Box,
  useBreakpointValue,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody
} from '@chakra-ui/react'
import { useSidebarDrawer } from '../../contexts/SidebarDrawerContext'

import { NavSection } from './NavSection'
import { SidebarNav } from './SidebarNav'

export function Sidebar() {
  const isDrawerSidebar = useBreakpointValue({ base: true, lg: false })
  const { isOpen, onClose } = useSidebarDrawer()

  if (isDrawerSidebar) {
    return (
      <Drawer isOpen={isOpen} placement='left' onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent bgColor='gray.800' p='4'>
            <DrawerCloseButton mt='6' />
            <DrawerHeader>Navegação</DrawerHeader>

            <DrawerBody>
              <SidebarNav />
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    )
  }

  return (
    <Box as='aside' w='48' mr='8'>
      <SidebarNav />
    </Box>
  )
}
