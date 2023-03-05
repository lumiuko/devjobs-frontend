import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import api from '../utils/api'
import getSearchParams from '../utils/searchParams'

import Card from '../components/Card'
import Filters from '../components/Filters'
import CardSkeleton from '../components/CardSkeleton'
import Button from '../components/Button'

export default function Home() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [data, setData] = useState({
    items: [],
    length: 0
  })

  const [isLoading, setIsLoading] = useState(true)
  const [isRefetching, setIsRefetching] = useState(false)
  const [error, setError] = useState(null)

  const [filters, setFilters] = useState({
    title: searchParams.get('title') ?? '',
    location: searchParams.get('location') ?? '',
    forceFullTime: !!searchParams.get('forceFullTime') ?? false
  })

  async function fetchJobs() {
    const filtersQuery = getSearchParams(filters)
    setSearchParams(filtersQuery)

    try {
      setIsLoading(true)
      const { data } = await api.get(`/jobs?${filtersQuery}`)
      setData(data)
      setError(null)
    } catch (err) {
      setError(err.message)
    } finally {
      setIsLoading(false)
    }
  }

  async function refetchJobs() {
    const filtersQuery = getSearchParams(filters)
    setIsRefetching(true)

    const res = await api.get(`/jobs?offset=${data.items.length}&${filtersQuery}`)
    setData(prevData => ({
      ...prevData,
      items: [...prevData.items, ...res.data.items]
    }))

    setIsRefetching(false)
  }

  useEffect(() => {
    fetchJobs()
  }, [])

  const skeletons = []
  for (let i = 0; i < 12; i++) {
    skeletons.push(<CardSkeleton key={i} />)
  }

  const cards = data.items.map(item => <Card key={item.id} item={item} />)

  let message = ''
  if (error) {
    message = (
      <div className="mt-40 text-center text-h2 font-bold">
        <div>Oops, something went wrong</div>
        <div>{error}</div>
      </div>
    )
  } else if (!data.length && !isLoading && !error) {
    message = <h1 className="mt-40 text-center text-h1 font-bold">No results found</h1>
  }

  return (
    <main className="xl:container px-6 md:px-10">
      <Filters fetchJobs={fetchJobs} filters={filters} setFilters={setFilters} />
      {!message ? (
        <>
          <div className="mt-14 mb-14 grid gap-y-[3.0625rem] md:mt-[4.375rem] md:gap-y-16 md:grid-cols-2 md:gap-x-3 xl:grid-cols-3 xl:gap-x-[1.875rem] xl:mt-[6.5rem]">
            {isLoading ? skeletons : cards}
          </div>
          {data.length !== data.items.length && (
            <div className="flex justify-center mb-[3.875rem] xl:mb-[6.5rem]">
              <Button type="button" onClick={refetchJobs} disabled={isRefetching}>
                Load More
              </Button>
            </div>
          )}
        </>
      ) : (
        message
      )}
    </main>
  )
}
