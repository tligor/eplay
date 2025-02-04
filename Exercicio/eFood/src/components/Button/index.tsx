import { ButtonContainer, ButtonLink } from './styles'

type Props = {
  type: 'button' | 'link'
  title: string
  to?: string
  onClick?: () => void
  children: string
  fullWidth?: boolean
  isHome?: boolean
}

const Button = ({
  type,
  title,
  to,
  onClick,
  children,
  fullWidth = false,
  isHome = true
}: Props) => {
  if (type === 'button') {
    return (
      <ButtonContainer
        type="button"
        title={title}
        onClick={onClick}
        fullWidth={fullWidth}
        isHome={isHome}
      >
        {children}
      </ButtonContainer>
    )
  }
  return (
    <ButtonLink
      to={to as string}
      title={title}
      fullWidth={fullWidth}
      isHome={isHome}
    >
      {children}
    </ButtonLink>
  )
}

export default Button
