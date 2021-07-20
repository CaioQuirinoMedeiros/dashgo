import { useDisclosure } from '@chakra-ui/hooks'
import { useRouter } from 'next/dist/client/router'
import * as React from 'react'

interface SidebarDrawerProviderProps {
  children: React.ReactNode
}

type SidebarDrawerContextData = {
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
  onToggle: () => void
  isControlled: boolean
  getButtonProps: (props?: any) => any
  getDisclosureProps: (props?: any) => any
}

const SidebarDrawerContext = React.createContext({} as SidebarDrawerContextData)

export function SidebarDrawerProvider(props: SidebarDrawerProviderProps) {
  const { children } = props

  const disclosure = useDisclosure()
  const router = useRouter()

  React.useEffect(() => {
    disclosure.onClose()
  }, [router.asPath])

  return (
    <SidebarDrawerContext.Provider value={disclosure}>
      {children}
    </SidebarDrawerContext.Provider>
  )
}

export function useSidebarDrawer() {
  return React.useContext(SidebarDrawerContext)
}
