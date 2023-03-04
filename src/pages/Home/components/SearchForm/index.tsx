import { SearchFormContainer } from './styles'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { useContextSelector } from 'use-context-selector'
import { memo, useEffect } from 'react'
import { IssuesContext } from '../../../../contexts/IssuesContext'

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

function SearchFormComponent() {
  const { fetchIssues, issues } = useContextSelector(
    IssuesContext,
    (context) => {
      return { fetchIssues: context.fetchIssues, issues: context.issues }
    },
  )

  const { register, handleSubmit, watch } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSearchIssues(data: SearchFormInputs) {
    await fetchIssues(data.query)
  }

  const query = watch('query')

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchIssues)}>
      <div>
        <b>Publicações</b>
        <span>{issues.length} publicações</span>
      </div>
      <input type="text" placeholder="Buscar conteúdo" {...register('query')} />
    </SearchFormContainer>
  )
}

export const SearchForm = memo(SearchFormComponent)
