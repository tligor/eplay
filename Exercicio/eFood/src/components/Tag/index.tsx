import { TagContainer } from './styles'
import { Props } from './types/types'

const Tag = ({ children, size = 'small' }: Props) => {
  // Validação de children
  if (!children) {
    console.warn('A Tag deve ter um conteúdo (children).')
    return null
  }

  return <TagContainer size={size}>{children}</TagContainer>
}

export default Tag
