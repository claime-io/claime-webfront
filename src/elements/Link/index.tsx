import NextLink, { LinkProps as NextLinkProps } from 'next/link'
import { AnchorHTMLAttributes, ReactNode } from 'react'
import styled, { css } from 'styled-components'

type LinkBaseProps = {
  href?: string
  children: ReactNode
  className?: string
}

type InternalLink = { href?: `/${string}` | '/' }

type InternalLinkProps = {
  newTab?: boolean
} & NextLinkProps

type ExternalLinkProps = {
  newTab?: boolean
} & AnchorHTMLAttributes<HTMLAnchorElement>

type LinkProps<T extends LinkBaseProps> = T & T extends InternalLink
  ? InternalLinkProps
  : ExternalLinkProps

type LinkFC = <T extends LinkBaseProps = LinkBaseProps>(
  props: LinkProps<T>,
) => JSX.Element

export const LinkElement: LinkFC = ({
  href,
  newTab,
  children,
  className,
  ...props
}) => {
  if (href && href.startsWith('/') && !newTab)
    return (
      <NextLink href={href} {...props} passHref>
        <StyledAnchorLink className={className}>{children}</StyledAnchorLink>
      </NextLink>
    )
  return (
    <StyledAnchorLink
      {...props}
      href={href}
      className={className}
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </StyledAnchorLink>
  )
}
export const Link = styled(LinkElement)``

const disabledStyle = css`
  opacity: 0.5;
  cursor: not-allowed;
`

const StyledAnchorLink = styled.a`
  cursor: pointer;
  ${({ href }) => !href && disabledStyle};
`
