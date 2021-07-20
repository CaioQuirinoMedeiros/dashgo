import * as React from 'react'
import Link, { LinkProps } from 'next/link'
import { useRouter } from 'next/dist/client/router'

interface ActiveLinkProps extends LinkProps {
  children: React.ReactElement
  shouldMatchExactHref?: boolean
}

export function ActiveLink(props: ActiveLinkProps) {
  const { children, href, as, shouldMatchExactHref = false, ...rest } = props

  const { asPath } = useRouter()

  const isActive = React.useMemo(() => {
    if (shouldMatchExactHref) {
      return asPath === href || asPath === as
    } else {
      return (
        asPath.startsWith(href?.toString()) || asPath.startsWith(as?.toString())
      )
    }
  }, [shouldMatchExactHref, asPath, href, as])

  return (
    <Link href={href} as={as} {...rest}>
      {React.cloneElement(children, {
        color: isActive ? 'pink.400' : 'gray.50'
      })}
    </Link>
  )
}
