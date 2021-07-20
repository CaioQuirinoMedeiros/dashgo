import { Text, Icon, Link as ChakraLink, LinkProps } from '@chakra-ui/react'
import Link from 'next/link'
import { ActiveLink } from '../ActiveLink'

interface NavLinkProps extends LinkProps {
  icon: React.ElementType
  children?: React.ReactNode
}

export function NavLink(props: NavLinkProps) {
  const { icon, children, href, ...rest } = props

  return (
    <ActiveLink href={href} passHref>
      <ChakraLink display='flex' align='center' {...rest}>
        <Icon as={icon} fontSize='20' />
        <Text ml='4' fontWeight='medium'>
          {children}
        </Text>
      </ChakraLink>
    </ActiveLink>
  )
}
