import { Box, Stack, Text, Icon, Link, LinkProps } from '@chakra-ui/react'
import { RiContactsLine, RiDashboardLine } from 'react-icons/ri'

interface NavLinkProps extends LinkProps {
  icon: React.ElementType
  children?: React.ReactNode
}

export function NavLink(props: NavLinkProps) {
  const { icon, children, ...rest } = props

  return (
    <Link display='flex' align='center' {...rest}>
      <Icon as={icon} fontSize='20' />
      <Text ml='4' fontWeight='medium'>
        {children}
      </Text>
    </Link>
  )
}
