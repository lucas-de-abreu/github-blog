import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

export function formatDate(date: string) {
  const publishedAt = new Date(date)

  return formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  })
}
